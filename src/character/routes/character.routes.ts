import { Router } from 'express'
import characterController from '../controllers/character.controller'

const CharacterRoutes = Router()
CharacterRoutes.get('/populateCharacters', characterController.popularCharacters)
CharacterRoutes.get('/characters', characterController.findAll)
//func auxiliar 1
CharacterRoutes.get('/charactersAlf', characterController.findAllAlphabetically)
//func auxiliar 2
CharacterRoutes.get('/characters/name/:name', characterController.findByName);
//func auxiliar 3
CharacterRoutes.get('/characters/description/:description', characterController.findByDescription);
//func auxiliar 4
CharacterRoutes.get('/characters/count', characterController.countCharacters);
//func auxiliar 5
CharacterRoutes.get('/characters/recent/:limit', characterController.findRecent);
CharacterRoutes.get('/characters/:id', characterController.findById)
CharacterRoutes.post('/characters', characterController.create)
CharacterRoutes.put('/characters/:id', characterController.update)
CharacterRoutes.delete('/characters/:id', characterController.delete)


export {
    CharacterRoutes
}