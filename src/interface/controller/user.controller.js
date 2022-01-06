import ServiceLocator from '../../infrastructure/config/service-locator'
import * as UserCases from '../../application/useCases/user/userCase'

const createUser = async (req, res) => {
  const serviceLocator = ServiceLocator()

  const { firstName, lastName, email, password } = req.body

  const user = await UserCases.createUser(
    firstName,
    lastName,
    email,
    password,
    serviceLocator
  )

  res.json(serviceLocator.userSerializer(user))
}

export { createUser }
