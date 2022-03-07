let destinationGlideCards = document.querySelector('.glide__slide');
let tripContainer = document.querySelector('.card-container');
let userWelcome = document.querySelector('#user-welcome');
let userSpend = document.querySelector('#user-spend');

import User from './User';
import TripRepository from './TripRepository';
import Trip from './Trip';
import DestinationRepository from './DestinationRepository';
import Destination from './Destination';

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
    userWelcome.innerText += ` ${user.name}`;
    userSpend.innerText = `You've spent $${user.getTotalSpentThisYear()} on trips this year`
  },
  toggleHidden(element) {
    element.classList.toggle('hidden')
  }
}

export default domUpdates;
