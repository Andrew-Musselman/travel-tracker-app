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
    this.currentTrip = null;
    this.pendingTrips = [];
  }
  getUsersTrips(tripRepo) {
    tripRepo.data.forEach(trip => {
      if (trip.userID === this.id && this.trips.indexOf(trip) === -1) {
        this.trips.push(trip)
      }
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
        } else if (dayjs(today).isBefore(trip.date) && this.futureTrips.indexOf(trip) === -1) {
          this.futureTrips.push(trip)
        }
        else if (dayjs(today) >= tripStart || dayjs(today) <= tripEnd) {
          this.currentTrip = trip
        }
      } else if (trip.status === 'pending') {
        this.pendingTrips.push(trip)
      }
    })
  }
}

export default User;
