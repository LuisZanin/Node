import characterService from '../../character/services/character.service';
import characterSchema from '../../character/schemas/character.schema';
import { characterType } from '../../character/types/character.entities';

jest.mock('../../character/schemas/character.schema');

describe('Character Service', () => {
    let characterMock: characterType;

    beforeEach(() => {
        jest.clearAllMocks();
        characterMock = {
            name: 'Personagem 1',
            description: 'Descrição 1',
            thumbnail: 'url1',
        };
    });

    test('create deve criar um novo personagem', async () => {
        (characterSchema.create as jest.Mock).mockResolvedValue(characterMock);
        const result = await characterService.create(characterMock);
        expect(result).toEqual(characterMock);
    });

    test('findAll deve retornar todos os personagens', async () => {
        (characterSchema.find as jest.Mock).mockResolvedValue([characterMock]);
        const result = await characterService.findAll();
        expect(result).toEqual([characterMock]);
    });

    test('findById deve retornar um personagem pelo id', async () => {
        (characterSchema.findById as jest.Mock).mockResolvedValue(characterMock);
        const result = await characterService.findById('1');
        expect(result).toEqual(characterMock);
    });

    test('update deve atualizar um personagem', async () => {
        (characterSchema.findByIdAndUpdate as jest.Mock).mockResolvedValue(characterMock);
        const result = await characterService.update('1', characterMock);
        expect(result).toEqual(characterMock);
    });

    test('delete deve deletar um personagem', async () => {
        (characterSchema.findByIdAndDelete as jest.Mock).mockResolvedValue(characterMock);
        const result = await characterService.delete('1');
        expect(result).toEqual("Character removido com sucesso");
    });
});