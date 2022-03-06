import User from '../src/User';
import Destination from '../src/Destination';
import Trip from '../src/Trip';
import DestinationRepository from '../src/DestinationRepository';
import TripRepository from '../src/TripRepository';
import chai from 'chai';
const expect = chai.expect;

describe('User', () => {
  let user1;
  let user2;
  let user3;
  let travelerObjs;
  let trips;
  let tripRepo;
  let user2Trips;
  let user3Trips;
  let user1PastTrips;
  let destinations;
  let destinationRepo;
  beforeEach(() => {
    travelerObjs = [
      {
   "id": 1,
   "name": "Ham Leadbeater",
   "travelerType": "relaxer",
    }, {
   "id": 2,
   "name": "Rachael Vaughten",
   "travelerType": "thrill-seeker",
    }, {
   "id": 3,
   "name": "Sibby Dawidowitsch",
   "travelerType": "shopper",
 }];
  trips = [{
     "id": 1,
     "userID": 2,
     "destinationID": 1,
     "travelers": 1,
     "date": "2022/09/16",
     "duration": 8,
     "status": "approved",
     "suggestedActivities": []
     }, {
     "id": 2,
     "userID": 2,
     "destinationID": 2,
     "travelers": 5,
     "date": "2022/10/04",
     "duration": 18,
     "status": "approved",
     "suggestedActivities": []
     }, {
     "id": 3,
     "userID": 3,
     "destinationID": 3,
     "travelers": 4,
     "date": "2022/03/04",
     "duration": 17,
     "status": "approved",
     "suggestedActivities": []
    } , {
      "id": 4,
      "userID": 1,
      "destinationID": 14,
      "travelers": 2,
      "date": "2022/02/25",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
    }, {
      "id": 31,
      "userID": 1,
      "destinationID": 33,
      "travelers": 3,
      "date": "2020/12/19",
      "duration": 15,
      "status": "approved",
      "suggestedActivities": []
    }, {
      "id": 5,
      "userID": 1,
      "destinationID": 29,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
      },{
      "id": 23,
      "userID": 1,
      "destinationID": 24,
      "travelers": 6,
      "date": "2023/01/02",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
      }, {
      "id": 24,
      "userID": 1,
      "destinationID": 26,
      "travelers": 5,
      "date": "2022/11/15",
      "duration": 7,
      "status": "pending",
      "suggestedActivities": []
    }];
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
      }]
    user1 = new User(travelerObjs[0]);
    user2 = new User(travelerObjs[1]);
    user3 = new User(travelerObjs[2]);
    tripRepo = new TripRepository(trips);
    destinationRepo = new DestinationRepository(destinations);
    user2Trips = [trips[0], trips[1]]
    user3Trips = [trips[2]]
    user1PastTrips = [trips[4]]
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function')
  })
  it('Should be able to be instantiated', () => {
    expect(user1).to.be.an.instanceof(User)
    expect(user2).to.be.an.instanceof(User)
    expect(user3).to.be.an.instanceof(User)
  })
  it('Should have a unique user id', () => {
    expect(user1.id).to.equal(1)
    expect(user2.id).to.equal(2)
    expect(user3.id).to.equal(3)
  });
  it('Should have a name', () => {
    expect(user1.name).to.equal("Ham Leadbeater")
    expect(user2.name).to.equal("Rachael Vaughten")
    expect(user3.name).to.equal("Sibby Dawidowitsch")
  })
  it('Should have a traveler type property', () => {
    expect(user1.travelerType).to.equal("relaxer")
    expect(user2.travelerType).to.equal("thrill-seeker")
    expect(user3.travelerType).to.equal("shopper")
  })
  it('Should have a property named trips that starts as an empty array', () => {
    expect(user1.trips).to.be.an('array')
    expect(user2.trips).to.be.an('array')
    expect(user3.trips).to.be.an('array')
  })
  describe('User Trips', () => {
    it('Should be able create a list of a users trips', () => {
      user2.getUsersTrips(tripRepo)
      user3.getUsersTrips(tripRepo)
      expect(user2.trips).to.be.eql(user2Trips)
      expect(user3.trips).to.eql(user3Trips)
    })
    it('Should be able to separate past trips', () => {
      user1.getUsersTrips(tripRepo)
      user1.sortTrips()
      expect(user1.pastTrips).to.eql(user1PastTrips)
    })
    it('Should separate future trips' , () => {
      user1.getUsersTrips(tripRepo)
      user1.sortTrips()
      user2.getUsersTrips(tripRepo)
      user2.sortTrips()
      expect(user1.futureTrips).to.eql([trips[5]])
      expect(user2.futureTrips).to.eql([trips[0], trips[1]])
    })
    it('Should be able to tell if the user is currently on a trip', () => {
      user3.getUsersTrips(tripRepo)
      user3.sortTrips()
      user1.getUsersTrips(tripRepo)
      user1.sortTrips()
      expect(user1.currentTrip).to.eql(trips[3])
      expect(user3.currentTrip).to.eql(trips[2])
    })
    it('Should be able to sort pending trips', () => {
      user1.getUsersTrips(tripRepo)
      user1.sortTrips()
      expect(user1.pendingTrips).to.eql([trips[6], trips[7]])
    })
    it('Should be able to add destination details for a trip', () => {
      user2.getUsersTrips(tripRepo)
      user2.getDestinations(destinationRepo)
      user3.getUsersTrips(tripRepo)
      user3.getDestinations(destinationRepo)
      expect(user2.trips[0].destinationDetails).to.eql(destinations[0])
      expect(user2.trips[1].destinationDetails).to.eql(destinations[1])
      expect(user3.trips[0].destinationDetails).to.eql(destinations[2])
    })
  })
  describe('Total Money Spent', () => {
    it('Should calculate how much a user has spent this year', () => {
      user2.getUsersTrips(tripRepo)
      user2.getDestinations(destinationRepo)
      expect(user2.getTotalSpentThisYear()).to.equal(12056)

    })
  })
})
