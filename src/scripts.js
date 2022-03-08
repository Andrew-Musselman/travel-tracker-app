// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import {fetchData, postData} from './fetchAPI';
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
let tripDestination = document.querySelector('#destination');
let tripTravelers = document.querySelector('#number-of-travelers');
let tripStartDate = document.querySelector('#date');
let tripDuration = document.querySelector('#duration');
let newTripPost = document.querySelector('.new-trip-post')

let ourUser;
let trips;
let destinations;

const renderDashboard = (user, destination) => {
  domUpdates.generateTrips(user.trips)
  domUpdates.generateHeader(user)
  domUpdates.generateDestinations(destination)
}

const initializeData = (userData, tripData, destinationData) => {
  trips = new TripRepository(tripData.trips)
  ourUser = new User(userData)
  destinations = new DestinationRepository(destinationData.destinations)
  ourUser.getUsersTrips(trips)
  ourUser.sortTrips()
  ourUser.getDestinations(destinations)
}

const getData = (id) => {
  return Promise.all([fetchData(`travelers/${id}`), fetchData('trips'), fetchData('destinations')])
  .then(data => {
    initializeData(data[0], data[1], data[2])
  }).then(() => {
    renderDashboard(ourUser, destinations)
  })
}

const postNewTrip = (e) => {
  e.preventDefault();
  let newTrip;
  const newTripData = {
    id: trips.data.length + 1,
    userID: ourUser.id,
    destinationID: destinations.data.find(place => {
      return place.destination === tripDestination.value
    }).id,
    travelers: tripTravelers.value,
    date: tripStartDate.value.replaceAll('-', '/'),
    duration: tripDuration.value,
    status: 'pending',
    suggestedActivities: []
  }
  domUpdates.showTripRequest(newTripData, destinations)
  Promise.all([postData('trips', newTripData)])
  .then(() => getData(ourUser.id));
  e.target.reset()
  domUpdates.toggleHidden(newTripForm)
  setTimeout(() => domUpdates.toggleHidden(newTripPost), 5000)
}


window.addEventListener('load', () => {
  getData(5)
})
newTripBtn.addEventListener('click', () => {
  domUpdates.toggleHidden(newTripForm)
})
newTripForm.addEventListener('submit', (e) => {
  postNewTrip(e)
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
