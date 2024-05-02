import { Request, Response } from 'express'
import comicService from '../services/comic.service' 

class comicController {
    async create(req: Request, res: Response) {
        const createdComic = await comicService.create(req.body)
        res.status(201)
        return res.json(createdComic)
    }

    async findAll(req: Request, res: Response) {
        const foundComics = await comicService.findAll()
        res.status(200)
        return res.json(foundComics)
    }

    async findById(req: Request, res: Response) {
        const foundComic = await comicService.findById(req.params.id)
        res.status(200)
        return res.json(foundComic)
    }

    async update(req: Request, res: Response) {
        const updatedComic = await comicService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedComic)
    }

    async delete(req: Request, res: Response) {
        const deleted = await comicService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }
}

export default new comicController();

