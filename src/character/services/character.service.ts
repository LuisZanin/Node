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
    
    //ROTA AUXILIAR
    async findAllAlphabetically() {
        const foundCharactersAlf = await characterSchema.find()
        return foundCharactersAlf;
    }

    // ROTA AUXILIAR 1
    async findByName(name: string) {
        const foundCharacter = await characterSchema.findOne({ name });
        return foundCharacter;
    }

    // ROTA AUXILIAR 2
    async findByDescription(description: string) {
        const foundCharacters = await characterSchema.find({ description: { $regex: description, $options: 'i' } });
        return foundCharacters;
    }

    // ROTA AUXILIAR 3
    async countCharacters() {
        const count = await characterSchema.countDocuments();
        return count;
    }

    // ROTA AUXILIAR 4
    async findRecent(limit: number) {
        const foundCharacters = await characterSchema.find().sort({ _id: -1 }).limit(limit);
        return foundCharacters;
    }


    async findById(id: string) {
        const foundCharacter = await characterSchema.findById(id)
        return foundCharacter
    }

    async update(id: string, user: characterType) {
        const updatedCharacter = await characterSchema.findByIdAndUpdate(id, {
            name: user.name,
            description: user.description,
            thumbnail: user.thumbnail
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