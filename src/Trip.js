class Trip {
  constructor(tripObj) {
    this.id = tripObj.id;
    this.userID = tripObj.userID;
    this.destinationID = tripObj.destinationID;
    this.travelers = tripObj.travelers;
    this.date = tripObj.date;
    this.duration = tripObj.duration;
    this.status = tripObj.status;
    this.suggestedActivities = []
  }
  addDestinationDetails(destinations) {
    this.destinationDetails = destinations.data.find(destination => this.destinationID === destination.id)
  }
  calculateTripCost() {
    return (this.destinationDetails.estimatedLodgingCostPerDay * this.duration +
    (this.destinationDetails.estimatedFlightCostPerPerson * 2) * this.travelers) * 1.1
  }
}

export default Trip;
