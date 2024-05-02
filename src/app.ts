import express from 'express'
import mongoose from 'mongoose'
import { CharacterRoutes } from '../src/character/routes/character.routes'
import { ComicRoutes } from '../src/comic/routes/comic.routes'
import { CreatorRoutes } from './creator/routes/creator.routes'

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    public middleware() {
        this.express.use(express.json())
    }

    public async database() {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/Marvel-Api');
            console.log('Conectado com a base de dados')
        } catch (error) {
            console.error("Erro ao conectar com a base de dados:", error)
        }
    }

    public routes() {
        this.express.use(CharacterRoutes)
        this.express.use(ComicRoutes)
        this.express.use(CreatorRoutes)
    }
}
export default new App().express