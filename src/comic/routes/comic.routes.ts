import { Router } from 'express'
import comicController from '../controllers/comic.controller'

const ComicRoutes = Router()
ComicRoutes.post('/Comics', comicController.create)
ComicRoutes.get('/Comics', comicController.findAll)
ComicRoutes.get('/Comics/:id', comicController.findById)
ComicRoutes.put('/Comics/:id', comicController.update)
ComicRoutes.delete('/Comics/:id', comicController.delete)

export {
    ComicRoutes
}