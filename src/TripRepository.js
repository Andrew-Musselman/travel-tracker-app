import Trip from '../src/Trip';

class TripRepository {
  constructor(trips) {
    this.data = trips.map(trip => {
      return new Trip(trip)
    })
  }
}

export default TripRepository;
