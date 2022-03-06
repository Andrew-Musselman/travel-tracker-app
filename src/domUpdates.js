let destinationGlideCards = document.querySelector('.glide__slide');
let tripContainer = document.querySelector('.card-container');
import Glide from '@glidejs/glide'

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
      `<div class="card">
        <h3>${trip.destinationDetails.destination}</h3>
        <img src="${trip.destinationDetails.image}" alt="${trip.destinationDetails.alt}"/>
        <p>Travelers: ${trip.travelers} travelers</p>
        <p>Leaving on: ${trip.date}</p>
        <p>Length: ${trip.duration}</p>
        <p>Lodging: $${trip.destinationDetails.estimatedLodgingCostPerDay} / night</p>
        <p>Flight: $${trip.destinationDetails.estimatedFlightCostPerPerson} / person</p>
        <p>Status: ${trip.status}</p>
      </div>
      `
    })
  }
}
// generateDestinations(destinations) {
  //   let glide = new Glide('.glide')
  //   glide.on('mount.before', () => {
    //     destinations.data.forEach(destination => {
      //       destinationGlideCards.innerHTML += `
      //       <li class="glide__slide">
      //       <p class="destination">${destination.destination}</p>
      //       <img src=${destination.image} alt=${destination.alt}/>
      //       </li>`
      //     })
      //   }).mount()
      //   // glide.mount()
      // }

export default domUpdates;
