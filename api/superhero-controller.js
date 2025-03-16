// import { UsuariosModel } from '../models/mongoose/usuarios-model.js'
// import { validate, validatePartial } from './schemas/usuarios-validaciones.js'
// import bcrypt from 'bcrypt'

// export class UsuariosController {
//   static async getAll (req, res) {
//     const usuarios = await UsuariosModel.getAll()
//     res.json(usuarios)
//   }

//   static async getById (req, res) {
//     const { id } = req.params
//     const usuario = await UsuariosModel.getById({ id })
//     if (usuario) return res.json(usuario)
//     res.status(404).json({ message: 'object not found' })
//   }

//   static async create (req, res) {
//     try {
//       const result = validate(req.body)
//       if (!result.success) {
//         // 400 Bad Request
//         return res.status(400).json({ error: JSON.parse(result.error.message) })
//       }

//       // Encriptar contraseña
//       const contraEncriptada = await bcrypt.hash(req.body.contrasena, 2)
//       const dataResult = { ...req.body, contrasena: contraEncriptada }

//       // Intentar crear el usuario
//       const newObject = await UsuariosModel.create({ input: dataResult })

//       // 201 Created
//       res.status(201).json(newObject)
//     } catch (error) {
//       // Manejo de errores de duplicados (MongoDB: código 11000)
//       if (error.code === 11000) {
//         return res.status(409).json({ error: 'El correo ya está en uso' })
//       }

//       // Manejo de otros errores
//       console.error('Error al crear el usuario:', error)
//       res.status(500).json({ error: 'Error interno del servidor' })
//     }
//   }

//   static async delete (req, res) {
//     const { id } = req.params
//     const result = await UsuariosModel.delete({ id })
//     if (result === false) {
//       return res.status(404).json({ message: 'Object not found' })
//     }
//     return res.json({ message: 'Object deleted' })
//   }

//   static async update (req, res) {
//     const result = validatePartial(req.body)
//     if (!result.success) {
//       return res.status(400).json({ error: JSON.parse(result.error.message) })
//     }

//     let dataResult = req.body

//     if (req.body.contrasena) {
//       const contraEncriptada = await bcrypt.hash(req.body.contrasena, 2)
//       dataResult = { ...req.body, contrasena: contraEncriptada }
//     }
//     const { id } = req.params
//     const updatedUsuario = await UsuariosModel.update({ id, input: dataResult })
//     return res.json(updatedUsuario)
//   }

//   static async matchCorreo (req, res) {
//     const usuario = await UsuariosModel.getOne(req.body.email)
//     if (!usuario) {
//       return res.status(403).json({ message: 'User not found' })
//     }

//     const passwordMatch = await bcrypt.compare(req.body.password, usuario.contrasena)
//     if (!passwordMatch) {
//       return res.status(401).json({ success: false, message: 'Contraseña incorrecta' })
//     }
//     return res.json({ _id: usuario._id, nombre: usuario.nombre, imagen: usuario.imagen, success: true })
//   }
// }
import { SuperHeroModel } from '../models/mongoose/superhero-model.js'

export class SuperHeroController {
  static async getAll (req, res) {
    const superhero = await SuperHeroModel.getAll()
    res.json(superhero)
  }

  static async getById (req, res) {
    const { id } = req.params
    const usuario = await SuperHeroModel.getById({ id })
    if (usuario) return res.json(usuario)
    res.status(404).json({ message: 'object not found' })
  }

  static async create (req, res) {
    try {
      const newObject = await SuperHeroModel.create({ input: req.body })

      res.status(201).json(newObject)
    } catch (error) {
      if (error.code === 11000) {
        return res.status(409).json({ error: 'El correo ya está en uso' })
      }
      console.error('Error al crear el usuario:', error)
      res.status(500).json({ error: 'Error interno del servidor' })
    }
  }

  static async delete (req, res) {
    const { id } = req.params
    const result = await SuperHeroModel.delete({ id })
    if (result === false) {
      return res.status(404).json({ message: 'Object not found' })
    }
    return res.json({ message: 'Object deleted' })
  }

  static async update (req, res) {
    const { id } = req.params
    const updatedUsuario = await SuperHeroModel.update({ id, input: req.body })
    return res.json(updatedUsuario)
  }
}
