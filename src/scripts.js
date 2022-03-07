// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import {fetchData} from './fetchAPI';
import User from './User';
import TripRepository from './TripRepository';
import Trip from './Trip';
import DestinationRepository from './DestinationRepository';
import Destination from './Destination';
import domUpdates from './domUpdates';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

const allTripsBtn = document.querySelector('#all-trips');
const pastTripsBtn = document.querySelector('#past-trips');
const futureTripsBtn = document.querySelector('#future-trips');
const pendingTripsBtn = document.querySelector('#pending-trips');
const newTripBtn = document.querySelector('#new-trip-button');
const newTripForm = document.querySelector('.new-trip-form')

let ourUser;
let tripData;
let destinationData;

const getData = () => {
  return Promise.all([fetchData('http://localhost:3001/api/v1/travelers/3'), fetchData('http://localhost:3001/api/v1/trips'), fetchData('http://localhost:3001/api/v1/destinations')])
  .then(data => {
    console.log(data)
    ourUser = new User(data[0])
    tripData = new TripRepository(data[1].trips)
    destinationData = new DestinationRepository(data[2].destinations)
  }).then(() => {
    ourUser.getUsersTrips(tripData)
    ourUser.sortTrips()
    ourUser.getDestinations(destinationData)
  }).then(() => {
    console.log(ourUser)
    domUpdates.generateTrips(ourUser.trips)
    domUpdates.generateHeader(ourUser)
  })

}

window.addEventListener('load', getData)
newTripBtn.addEventListener('click', () => {
  domUpdates.toggleHidden(newTripForm)
})

allTripsBtn.addEventListener('click', () => {
  domUpdates.generateTrips(ourUser.trips)
})
pastTripsBtn.addEventListener('click', () => {
  domUpdates.generateTrips(ourUser.pastTrips)
})
futureTripsBtn.addEventListener('click', () => {
  domUpdates.generateTrips(ourUser.futureTrips)
})
pendingTripsBtn.addEventListener('click', () => {
  domUpdates.generateTrips(ourUser.pendingTrips)
})
