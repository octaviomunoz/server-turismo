import { Schema, model } from 'mongoose'

const locationSchema = new Schema(
  {
    namePlace: String,
    namePerson: String,
    phone: String,
    horary: String,
    service: String,
    whatsapp: Boolean,
    facebook: String,
    instagram: String,
    address: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
    img: [{ url: String }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('Locations', locationSchema)
