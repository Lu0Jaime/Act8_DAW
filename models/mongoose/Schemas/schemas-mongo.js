import mongoose from 'mongoose'

const heroSchema = new mongoose.Schema({
  nombre_original: { type: String, required: true },
  alias: { type: String, required: true },
  imagen: { type: String },
  notas: { type: String }
})

export const SuperHero = mongoose.model('SuperHeroes', heroSchema)
