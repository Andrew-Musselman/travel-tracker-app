import Destination from '../src/Destination';
import chai from 'chai';
const expect = chai.expect;

describe('Destination', () => {
  let destination1;
  let destination2;
  let destination3;
  let destinations;
  beforeEach(() => {
      [{
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
    destination1 = new Destination(destinations[0]);
    destination2 = new Destination(destinations[1]);
    destination3 = new Destination(destinations[2]);
  });
  it('Should be a function', () => {
    expect(Trip).to.be.a('function')
  })
  it('Should have a unique destination id', () => {
    expect(destination1.id).to.equal(1)
    expect(destination2.id).to.equal(2)
    expect(destination3.id).to.equal(3)
  })
  it('Should have a destination name', () => {
    expect(destination1.destination).to.equal("Lima, Peru")
    expect(destination2.destination).to.equal("Stockholm, Sweden")
    expect(destination3.destination).to.equal("Sydney, Austrailia")
  })
  it('Should have a lodging cost per day', () => {
    expect(destination1.estimatedLodgingCostPerDay).to.equal(70)
    expect(destination2.estimatedLodgingCostPerDay).to.equal(100)
    expect(destination3.estimatedLodgingCostPerDay).to.equal(130)
  })
  it('Should have a flight cost', () => {
    expect(destination1.estimatedFlightCostPerPerson).to.equal(400)
    expect(destination2.estimatedFlightCostPerPerson).to.equal(780)
    expect(destination3.estimatedFlightCostPerPerson).to.equal(950)
  })
  it('Should have an image', () => {
    expect(destination1.image).to.be(true)
    expect(destination2.image).to.be(true)
    expect(destination3.image).to.be(true)
  })
  it('Should have alt text for the image', () => {
    expect(destination1.alt).to.be(true)
    expect(destination2.alt).to.be(true)
    expect(destination3.alt).to.be(true)
  })
})
