import DestinationRepository from '../src/DestinationRepository';
import Destination from '../src/Destination';
import chai from 'chai';
const expect = chai.expect;

describe('Destination Repository', () => {
  let destinations;
  let destinationRepo;
  beforeEach(() => {
    destinations = [{
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
      }, {
      "id": 2,
      "destination": "Stockholm, Sweden",
      "estimatedLodgingCostPerDay": 100,
      "estimatedFlightCostPerPerson": 780,
      "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "city with boats on the water during the day time"
      }, {
      "id": 3,
      "destination": "Sydney, Austrailia",
      "estimatedLodgingCostPerDay": 130,
      "estimatedFlightCostPerPerson": 950,
      "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "opera house and city buildings on the water with boats"
      }];
      destinationRepo = new DestinationRepository(destinations);
    })
    it('Should be a function', () => {
      expect(DestinationRepository).to.be.a('funtion')
    })
    it('Should take in an array of objects and instantiate Destinations for each' , () => {
      expect(destinationRepo.data[0]).to.be.an.instanceof(Destination)
      expect(destinationRepo.data[1]).to.be.an.instanceof(Destination)
      expect(destinationRepo.data[2]).to.be.an.instanceof(Destination)
    })
})
