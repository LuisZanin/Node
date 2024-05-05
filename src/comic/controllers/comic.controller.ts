import { Request, Response } from 'express'
import comicService from '../services/comic.service' 
import axios from 'axios'
import dotenv from 'dotenv'
import crypto from 'crypto';
import { comicType } from '../types/comic.entities';

class comicController {

    async popularComics(req: Request, res: Response) {
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
                const url = `https://gateway.marvel.com:443/v1/public/series/17735/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&offset=${offset}`;
                const response = await axios.get(url);
                const data = response.data.data;
                total = data.total;
    
                for (const comic of data.results) {
                    const newComic: comicType = {
                        title: comic.title,
                        thumbnail: comic.thumbnail.path,
                        description: comic.description,
                        startYear: comic.startYear
                    };
                    await comicService.create(newComic);
                }
    
                offset += data.count;
            } while (offset < total);
    
            return res.status(200).json({message: "Comics populadas!"});
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: "Ocorreu um erro interno do servidor."});
        }
    }




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

