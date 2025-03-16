import { Router } from 'express'

import { SuperHeroController } from '../api/superhero-controller.js'

export const SuperHeroRouter = Router()

SuperHeroRouter.get('/', SuperHeroController.getAll)
SuperHeroRouter.post('/', SuperHeroController.create)

SuperHeroRouter.get('/:id', SuperHeroController.getById)
SuperHeroRouter.delete('/:id', SuperHeroController.delete)
SuperHeroRouter.patch('/:id', SuperHeroController.update)
