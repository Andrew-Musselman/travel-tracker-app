import dayjs from 'dayjs'
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

class User {
  constructor(jsonObj) {
    this.id = jsonObj.id;
    this.name = jsonObj.name;
    this.travelerType = jsonObj.travelerType;
    this.trips = [];
    this.pastTrips = [];
    this.futureTrips = [];
    this.pendingTrips = [];
  }
  getUsersTrips(tripRepo) {
    tripRepo.data.forEach(trip => {
      if (trip.userID === this.id && this.trips.indexOf(trip) === -1) {
        this.trips.push(trip)
      }
    })
  }
  getDestinations(destinationRepo) {
    this.trips.forEach(trip => {
      trip.addDestinationDetails(destinationRepo)
    })
  }
  sortTrips() {
    let today = dayjs().format('YYYY/MM/DD')
    this.trips.forEach(trip => {
      if (trip.status === 'approved') {
        let tripStart = dayjs(trip.date);
        let tripEnd = dayjs(trip.date).add(trip.duration, 'day');
        if (dayjs(today).isAfter(trip.date) && this.pastTrips.indexOf(trip) === -1) {
          this.pastTrips.push(trip)
        } if (dayjs(today).isBefore(trip.date) && this.futureTrips.indexOf(trip) === -1) {
          this.futureTrips.push(trip)
        }
    } else if (trip.status === 'pending') {
        this.pendingTrips.push(trip)
      }
    })
  }
  getTotalSpentThisYear() {
    let total = this.trips.filter(trip => {
      if (trip.status === 'approved' && dayjs("2022-01-01").isBefore(trip.date)) {
        return trip
      }
    }).reduce((acc, trip) => {
      acc += (trip.calculateTripCost())
      return acc
    }, 0)
    return Math.round(total)
  }
}

export default User;
