import { Request, Response } from 'express'
import creatorsService from '../services/creator.service' 

class creatorController {
    async create(req: Request, res: Response) {
        const createdCreator = await creatorsService.create(req.body)
        res.status(201)
        return res.json(createdCreator)
    }

    async findAll(req: Request, res: Response) {
        const foundCreators = await creatorsService.findAll()
        res.status(200)
        return res.json(foundCreators)
    }

    async findById(req: Request, res: Response) {
        const foundCreator = await creatorsService.findById(req.params.id)
        res.status(200)
        return res.json(foundCreator)
    }

    async update(req: Request, res: Response) {
        const updatedCreator = await creatorsService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedCreator)
    }

    async delete(req: Request, res: Response) {
        const deleted = await creatorsService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }
}

export default new creatorController();

