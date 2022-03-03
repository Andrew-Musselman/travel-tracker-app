import Destination from '../src/Destination';

class DestinationRepository {
  constructor(destinations) {
    this.data = destinations.map(place => new Destination(place))
  }
}

export default DestinationRepository;
