import { Request, Response } from 'express'
import characterService from "../services/character.service";
import crypto from 'crypto';
import dotenv from 'dotenv';
import { characterType } from '../types/character.entities';
import axios from 'axios';

class characterController {

    async popularCharacters(req: Request, res: Response) {
        try {
            dotenv.config();

            const timestamp = Date.now();
            const privateKey = process.env.PRIVATE_KEY || 'default_value';
            const publicKey = process.env.PUBLIC_KEY;
            const preHash = timestamp + privateKey + publicKey;
            const hash = crypto.createHash('md5').update(preHash).digest('hex');
    
            let offset = 0;
            let total = 0;
    
            do {
                const url = `https://gateway.marvel.com:443/v1/public/series/17735/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&offset=${offset}`;
                const response = await axios.get(url);
                const data = response.data.data;
                total = data.total;
    
                for (const character of data.results) {
                    const newComic: characterType = {
                        name: character.name,
                        description: character.description,
                        thumbnail: character.thumbnail.path
                    };
                    await characterService.create(newComic);
                }
    
                offset += data.count;
            } while (offset < total);
    
            return res.status(200).json({message: "Characters populados!"});
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: "Ocorreu um erro interno do servidor."});
        }
    }


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

    async findAllAlphabetically(req: Request, res: Response) {
        const foundCharactersAlf = await characterService.findAllAlphabetically();
        res.status(200);
        return res.json(foundCharactersAlf);
    }

    async findByName(req: Request, res: Response) {
        const { name } = req.params;
        const foundCharacter = await characterService.findByName(name);
        res.status(200);
        return res.json(foundCharacter);
    }

    async findByDescription(req: Request, res: Response) {
        const { description } = req.params;
        const foundCharacters = await characterService.findByDescription(description);
        res.status(200);
        return res.json(foundCharacters);
    }

    async countCharacters(req: Request, res: Response) {
        const count = await characterService.countCharacters();
        res.status(200);
        return res.json({ total: count });
    }

    async findRecent(req: Request, res: Response) {
        const { limit } = req.params;
        const foundCharacters = await characterService.findRecent(Number(limit));
        res.status(200);
        return res.json(foundCharacters);
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

