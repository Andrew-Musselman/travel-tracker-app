import TripRepository from '../src/TripRepository';
import Trip from '../src/Trip';
import chai from 'chai';
const expect = chai.expect;

describe('Trip Repository'. () => {
  let trips;
  let tripRepo;
  beforeEach(() => {
    trips = [
      {
    "id": 1,
    "userID": 44,
    "destinationID": 49,
    "travelers": 1,
    "date": "2022/09/16",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
    }, {
    "id": 2,
    "userID": 35,
    "destinationID": 25,
    "travelers": 5,
    "date": "2022/10/04",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
    }, {
    "id": 3,
    "userID": 3,
    "destinationID": 22,
    "travelers": 4,
    "date": "2022/05/22",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
    } ];
    tripRepo = new TripRepository(trips)
  })
  it('Should be a function', () => {
    expect(TripRepository).to.be.a('function')
  })
  it('Should take in an array of objeects and instantiate new Trips and store them', () => {
    expect(tripRepo.data[0]).to.be.an.instanceof(Trip)
    expect(tripRepo.data[1]).to.be.an.instanceof(Trip)
    expect(tripRepo.data[2]).to.be.an.instanceof(Trip)
  })
})
