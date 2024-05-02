import { Router } from 'express'
import characterController from '../controllers/character.controller'

const CharacterRoutes = Router()
CharacterRoutes.post('/characters', characterController.create)
CharacterRoutes.get('/characters', characterController.findAll)
CharacterRoutes.get('/characters/:id', characterController.findById)
CharacterRoutes.put('/characters/:id', characterController.update)
CharacterRoutes.delete('/characters/:id', characterController.delete)


export {
    CharacterRoutes
}