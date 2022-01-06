const _serializerSingleUser = (user) => {
  return {
    id: user.id,
    'first-name': user.firstName,
    'last-name': user.lastName,
    email: user.email,
  }
}

export const serialize = (data) => {
  if (!data) {
    throw new Error('Expect data to be not undefined nor null')
  }
  if (Array.isArray(data)) {
    return data.map(_serializerSingleUser)
  }
  return _serializerSingleUser(data)
}
