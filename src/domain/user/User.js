class User {
  constructor(id = null, firstName, lastName, email, password, roles) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.roles = roles
  }
}

export default User
