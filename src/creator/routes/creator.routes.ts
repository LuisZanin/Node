import { Router } from 'express'
import creatorController from '../controllers/creator.controller'

const CreatorRoutes = Router()
CreatorRoutes.post('/Creators', creatorController.create)
CreatorRoutes.get('/Creators', creatorController.findAll)
CreatorRoutes.get('/Creators/:id', creatorController.findById)
CreatorRoutes.put('/Creators/:id', creatorController.update)
CreatorRoutes.delete('/Creators/:id', creatorController.delete)

export {
    CreatorRoutes
}