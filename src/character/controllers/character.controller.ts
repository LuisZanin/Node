import { Request, Response } from 'express'
import characterService from "../services/character.service";

class characterController {
    async create(req: Request, res: Response) {
        const createdCharacter = await characterService.create(req.body)
        res.status(201)
        return res.json(createdCharacter)
    }

    async findAll(req: Request, res: Response) {
        const foundCharacters = await characterService.findAll()
        res.status(200)
        return res.json(foundCharacters)
    }

    async findById(req: Request, res: Response) {
        const foundCharacter = await characterService.findById(req.params.id)
        res.status(200)
        return res.json(foundCharacter)
    }

    async update(req: Request, res: Response) {
        const updatedCharacter= await characterService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedCharacter)
    }

    async delete(req: Request, res: Response) {
        const deleted = await characterService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }
}

export default new characterController();

