class User {
  constructor(jsonObj) {
    this.id = jsonObj.id
    this.name = jsonObj.name
    this.travelerType = jsonObj.travelerType
    this.trips = []
  }
}

export default User;
