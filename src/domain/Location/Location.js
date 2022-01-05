class Location {
  constructor(
    id = null,
    nameplace,
    namePerson,
    phone,
    horary,
    service,
    whatsapp,
    facebook,
    instagram,
    address,
    lat,
    lng,
    img
  ) {
    this.id = id
    this.nameplace = nameplace
    this.namePerson = namePerson
    this.phone = phone
    this.horary = horary
    this.service = service
    this.whatsapp = whatsapp
    this.facebook = facebook
    this.instagram = instagram
    this.address = address
    this.lat = lat
    this.lng = lng
    this.img = img
  }
}

export default Location
