import User from '../../../domain/user/User'

export const createUser = (
  firstName,
  lastName,
  email,
  password,
  { userRepository }
) => {
  const user = new User(null, firstName, lastName, email, password)
  return userRepository.persist(user)
}

export const deleteUser = (userID, { userRepository }) => {
  return userRepository.remove(userID)
}

export const getUser = (userID, { userRepository }) => {
  return userRepository.get(userID)
}

export const listUser = ({ userRepository }) => {
  return userRepository.getAll()
}
