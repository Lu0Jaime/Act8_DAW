import { SuperHero } from './Schemas/schemas-mongo.js'
import connectDB from './config/db.js'

await connectDB()

export class SuperHeroModel {
  static async getAll () {
    return await SuperHero.find()
  }

  static async getById ({ id }) {
    return await SuperHero.findById(id)
  }

  static async create ({ input }) {
    const usuario = new SuperHero(input)
    await usuario.save()
    return usuario
  }

  static async delete ({ id }) {
    const result = await SuperHero.findByIdAndUpdate(id, { $set: { estado: 0 } })
    return result || false
  }

  static async update ({ id, input }) {
    const result = await SuperHero.findByIdAndUpdate(id, { $set: input }, { new: true })
    return result || false
  }
}
