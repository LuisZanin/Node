import { Request, Response } from 'express'
import creatorsService from '../services/creator.service' 
import crypto from 'crypto';
import axios from 'axios';
import dotenv from 'dotenv';
import { creatorType } from '../types/creator.entities';
import creatorService from '../services/creator.service';


class creatorController {

    async populateCreators(req: Request, res: Response) {
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
                const url = `https://gateway.marvel.com:443/v1/public/series/17735/creators?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&offset=${offset}`;
                const response = await axios.get(url);
                const data = response.data.data;
                total = data.total;
    
                for (const creator of data.results) {
                    const newCreator: creatorType = {
                        name: creator.fullName,
                        duty: 'Um dos Criadores',
                        comicsWorked: creator.comics.available.toString()
                    };
                    await creatorService.create(newCreator);
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

