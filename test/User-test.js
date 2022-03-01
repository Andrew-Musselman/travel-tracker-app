import User from '../src/User';
import chai from 'chai';
const expect = chai.expect;

describe('User', () => {
  let user1;
  let user2;
  let user3;
  let travelers;
  beforeEach(() => {
    let user1 = new User(1)
    let user2 = new User(2)
    let user3 = new User(3)
    let travelers = [
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
    },
    ]
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
})
