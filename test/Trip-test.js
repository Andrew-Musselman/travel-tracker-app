import Trip from '../src/Trip';
import chai from 'chai';
const expect = chai.expect;

describe('Trip', () => {
  let trip1;
  let trip2;
  let trip3;
  let trips;
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
    trip1 = new Trip(trips[0]);
    trip2 = new Trip(trips[1]);
    trip3 = new Trip(trips[2])
  })
})
