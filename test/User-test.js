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

  
})
