import { CONST_SUPPORTED_DATABASE } from './constants'
import { database } from './environment'
import UserSerializer from '../../interface/serializers/UserSerializer'
import UserRepositoryMongo from '../repositories/mongoose/UserRepositoryMongo'

function buildBeans() {
  const beans = {
    userSerializer: UserSerializer,
  }

  if (database.dialect === CONST_SUPPORTED_DATABASE.MONGO) {
    beans.userRepository = new UserRepositoryMongo()
  }

  return beans
}

export default buildBeans
