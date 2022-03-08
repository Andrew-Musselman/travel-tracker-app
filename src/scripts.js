
import './css/base.scss';
import {fetchData, postData} from './fetchAPI';
import User from './User';
import TripRepository from './TripRepository';
import Trip from './Trip';
import DestinationRepository from './DestinationRepository';
import Destination from './Destination';
import domUpdates from './domUpdates';


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
let newTripPost = document.querySelector('.new-trip-post');
let loginBtn = document.querySelector('#login-button');
let loginForm = document.querySelector('.login-form');
let loginUsername = document.querySelector('#username');
let loginPassword = document.querySelector('#password');
let userInfo = document.querySelector('.user-info');
let tripsSection = document.querySelector('.trips');
let errMessage = document.querySelector('#error-message')

let ourUser;
let trips;
let destinations;

const validateLogin = (e) => {
  e.preventDefault()
  let userID = validateUsername()
  if (userID && validatePassword()) {
    getData(userID)
    domUpdates.toggleHidden(userInfo)
    domUpdates.toggleHidden(tripsSection)
  } else {
    errMessage.innerText = 'Invalid Username or Password, please try again'
  }
}

const validateUsername = () => {
  let username = loginUsername.value
  let name = username.split('').slice(0,8).join('');
  let userID = parseInt(username.split('').slice(8).join(''))
  if (name === 'traveler' && userID > 0 && userID <= 50) {
    domUpdates.toggleHidden(loginForm)
    domUpdates.addHidden(errMessage)
    return userID
  } else {
    return false
  }
}

const validatePassword = () => {
  if (loginPassword.value === 'traveler') {
    return true
  } else {
    return false
  }
}

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

newTripBtn.addEventListener('click', () => {
  domUpdates.toggleHidden(newTripForm)
  domUpdates.toggleAriaAttribute(newTripBtn)
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
loginBtn.addEventListener('click', () => {
  domUpdates.toggleHidden(loginBtn)
  domUpdates.toggleHidden(loginForm)
})
loginForm.addEventListener('submit', (e) => {
  validateLogin(e)
})
