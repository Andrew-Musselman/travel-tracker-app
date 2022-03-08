let destinationGlideCards = document.querySelector('.glide__slide');
let tripContainer = document.querySelector('.card-container');
let userWelcome = document.querySelector('#user-welcome');
let userSpend = document.querySelector('#user-spend');
let tripDestination = document.querySelector('#destination');
let newTripCard = document.querySelector('#new-trip-card');
let newTripMessage = document.querySelector('#new-trip-message')


import User from './User';
import TripRepository from './TripRepository';
import Trip from './Trip';
import DestinationRepository from './DestinationRepository';
import Destination from './Destination';
import dayjs from 'dayjs'
import {fetchData, postData} from './fetchAPI'

const domUpdates = {
  generateTrips(trips) {
    tripContainer.innerHTML = ''
    trips.forEach(trip => {
      tripContainer.innerHTML +=
      `<div class="card" tabIndex="0">
        <h4>${trip.destinationDetails.destination}</h4>
        <img src="${trip.destinationDetails.image}" alt="${trip.destinationDetails.alt}"/>
        <p>Travelers: ${trip.travelers} travelers</p>
        <p>Leaving on: ${trip.date}</p>
        <p>Length: ${trip.duration}</p>
        <p>Lodging: $${trip.destinationDetails.estimatedLodgingCostPerDay} per night</p>
        <p>Flight: $${trip.destinationDetails.estimatedFlightCostPerPerson} per person</p>
        <p>Status: ${trip.status}</p>
      </div>
      `
    })
  },
  generateHeader(user) {
    userWelcome.innerText = `Welcome ${user.name}`;
    userSpend.innerText = `You've spent $${user.getTotalSpentThisYear()} on trips this year`
  },
  generateDestinations(destinations) {
    tripDestination.innerHTML = ''
    destinations.data.forEach(place => {
      tripDestination.innerHTML += `
        <option value="${place.destination}">${place.destination}</option>
      `
    });
  },
  toggleHidden(element) {
    element.classList.toggle('hidden')
  },
  showTripRequest(trip, destinations) {
    let newTrip = new Trip(trip)
    newTrip.addDestinationDetails(destinations)
    newTripMessage.innerText = 'Your trip has been requested'
    newTripCard.innerHTML =
    `<div class="card" tabIndex="0">
      <h4>${newTrip.destinationDetails.destination}</h4>
      <img src="${newTrip.destinationDetails.image}" alt="${newTrip.destinationDetails.alt}"/>
      <p>Travelers: ${newTrip.travelers} travelers</p>
      <p>Leaving on: ${newTrip.date}</p>
      <p>Length: ${newTrip.duration}</p>
      <p>Estimated cost: $${newTrip.calculateTripCost()}</p>
      <p>Status: ${newTrip.status}</p>
    </div>`
  }
}

export default domUpdates;
