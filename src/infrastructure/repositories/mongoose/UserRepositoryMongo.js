import User from '../../../domain/user/User'
import UserRepository from '../../../domain/user/UserRepository'
import UserSchema from '../../orm/mongoose/schemas/User'

class UserRepositoryMongo extends UserRepository {
  constructor() {
    super()
  }

  async persist(userEntity) {
    const { firstName, lastName, email, password } = userEntity
    const userSchema = new UserSchema({ firstName, lastName, email, password })
    await userSchema.save()
    return new User(
      userSchema.id,
      userSchema.firstName,
      userSchema.lastName,
      userSchema.email,
      userSchema.password
    )
  }

  async merge(userEntity) {
    const { id, firstName, lastName, email, password } = userEntity
    const userSchema = UserSchema.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      password,
    })
    return new User(
      userSchema.id,
      userSchema.firstName,
      userSchema.lastName,
      userSchema.email,
      userSchema.password
    )
  }

  async remove(userID) {
    return UserSchema.findOneAndDelete(userID)
  }

  async get(userID) {
    const userSchema = UserSchema.findById(userID)
    return new User(
      userSchema.id,
      userSchema.firstName,
      userSchema.lastName,
      userSchema.email,
      userSchema.password
    )
  }

  async getByEmail(userEmail) {
    const userSchema = UserSchema.find({ email: userEmail })
    return new User(
      userSchema.id,
      userSchema.firstName,
      userSchema.lastName,
      userSchema.email,
      userSchema.password
    )
  }

  async getAll() {
    const userSchemas = await UserSchame.find()
    return userSchemas.map((userSchema) => {
      return new User(
        userSchema.id,
        userSchema.firstName,
        userSchema.lastName,
        userSchema.email,
        userSchema.password
      )
    })
  }
}

export default UserRepositoryMongo
