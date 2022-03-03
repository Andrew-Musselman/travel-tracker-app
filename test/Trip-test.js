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
  });

  it('Should be a function', () => {
    expect(Trip).to.be.a('function')
  })
  it('Should have a unique trip id', () => {
    expect(trip1.id).to.equal(1)
    expect(trip2.id).to.equal(2)
    expect(trip3.id).to.equal(3)
  })
  it('Should have a user id', () => {
    expect(trip1.userID).to.equal(44)
    expect(trip2.userID).to.equal(35)
    expect(trip3.userID).to.equal(3)
  })
  it('Should have a destination id', () => {
    expect(trip1.destinationID).to.equal(49)
    expect(trip2.destinationID).to.equal(25)
    expect(trip3.destinationID).to.equal(22)
  })
  it('Should have a property that says how many travelers there are'. () => {
    expect(trip1.travelers).to.equal(1)
    expect(trip2.travelers).to.equal(5)
    expect(trip3.travelers).to.equal(4)
  })
  it('Should have a start date', () => {
    expect(trip1.date).to.equal("2022/09/16")
    expect(trip2.date).to.equal("2022/10/04")
    expect(trip3.date).to.equal("2022/05/22")
  })
  it('Should have a duration', () => {
    expect(trip1.duration).to.equal(8)
    expect(trip2.duration).to.equal(18)
    expect(trip3.duration).to.equal(17)
  })
  it('Should have a status', () => {
    expect(trip1.status).to.equal('approved')
    expect(trip2.status).to.equal('approved')
    expect(trip3.status).to.equal('approved')
  })
  it('Should have a suggested activities property that is an empty array at deafualt', () => {
    expect(trip1.suggestedActivities).to.be.an('array')
    expect(trip2.suggestedActivities).to.be.an('array')
    expect(trip3.suggestedActivities).to.be.an('array')
  })
})
