import creatorSchema from '../schemas/creator.schema' 
import { creatorType } from '../types/creator.entities'

class creatorsService {

    async create(task: creatorType) {
        const createdCreator = await creatorSchema.create(task)
        return createdCreator
    }

    async findAll() {
        const foundCreators = await creatorSchema.find()
        return foundCreators
    }

    async findById(id: string) {
        const foundCreator = await creatorSchema.findById(id)
        return foundCreator
    }

    async update(id: string, creator: creatorType) {
        const updatedCreator = await creatorSchema.findByIdAndUpdate(id, {
            name: creator.name,
            duty: creator.duty,
            comicsWorked: creator.comicsWorked,
        }, { new: true })

        return updatedCreator
    }

    async delete(id: string) {
        try {
            await creatorSchema.findByIdAndDelete(id)
            return "Criador removido com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o Criador: ${error}`)
        }
    }

}


export default new creatorsService()