const _serializerSingleUser = (user) => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  }
}

const serialize = (data) => {
  if (!data) {
    throw new Error('Expect data to be not undefined nor null')
  }
  if (Array.isArray(data)) {
    return data.map(_serializerSingleUser)
  }
  return _serializerSingleUser(data)
}

export default serialize
