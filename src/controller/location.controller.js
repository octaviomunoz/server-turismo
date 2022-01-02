import Location from '../models/Location'

export const createLocation = (req, res) => {
  console.log(req.body)
  res.json('Creacion de location')
}

export const getLocations = (req, res) => {
  res.json('get locations')
}

export const getLocationById = (req, res) => {}

export const updateLocationById = (req, res) => {}

export const deleteLocationById = (req, res) => {}
