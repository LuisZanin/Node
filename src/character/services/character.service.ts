import characterSchema from '../schemas/character.schema'
import { characterType } from '../types/character.entities'

class characterService {

    async create(user: characterType) {
        const createdCharacter = await characterSchema.create(user)
        return createdCharacter
    }

    async findAll() {
        const foundCharacters = await characterSchema.find()
        return foundCharacters
    }

    async findById(id: string) {
        const foundCharacter = await characterSchema.findById(id)
        return foundCharacter
    }

    async update(id: string, user: characterType) {
        const updatedCharacter = await characterSchema.findByIdAndUpdate(id, {
            name: user.name,
            description: user.description,
            img_URL: user.img_URL
        }, { new: true })

        return updatedCharacter
    }

    async delete(id: string) {
        try {
            await characterSchema.findByIdAndDelete(id)
            return "Character removido com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o Character: ${error}`)
        }
    }

}


export default new characterService()