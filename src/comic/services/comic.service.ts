import comicSchema from '../schemas/comic.schema' 
import { comicType } from '../types/comic.entities'

class comicsService {

    async create(task: comicType) {
        const createdComic = await comicSchema.create(task)
        return createdComic
    }

    async findAll() {
        const foundComics = await comicSchema.find()
        return foundComics
    }

    async findById(id: string) {
        const foundComic = await comicSchema.findById(id)
        return foundComic
    }

    async update(id: string, comic: comicType) {
        const updatedComic = await comicSchema.findByIdAndUpdate(id, {
            title: comic.title,
            description: comic.description,
            release_date: comic.release_date,
            cover: comic.cover
            
        }, { new: true })

        return updatedComic
    }

    async delete(id: string) {
        try {
            await comicSchema.findByIdAndDelete(id)
            return "Comic removida com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a Comic: ${error}`)
        }
    }

}


export default new comicsService()