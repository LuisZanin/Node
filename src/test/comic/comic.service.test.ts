import comicService from '../../comic/services/comic.service';
import comicSchema from '../../comic/schemas/comic.schema';
import { comicType } from '../../comic/types/comic.entities';

jest.mock('../../comic/schemas/comic.schema');

describe('Comic Service', () => {
    let comicMock: comicType;

    beforeEach(() => {
        jest.clearAllMocks();
        comicMock = {
            title: 'Titulo',
            description: 'Descrição 1',
            startYear: new Date('2024-01-01'),
            thumbnail: 'teste'
        };
    });

    test('create deve criar um novo comic', async () => {
        (comicSchema.create as jest.Mock).mockResolvedValue(comicMock);
        const result = await comicService.create(comicMock);
        expect(result).toEqual(comicMock);
    });

    test('findAll deve retornar todos os comics', async () => {
        (comicSchema.find as jest.Mock).mockResolvedValue([comicMock]);
        const result = await comicService.findAll();
        expect(result).toEqual([comicMock]);
    });

    test('findById deve retornar um comic pelo id', async () => {
        (comicSchema.findById as jest.Mock).mockResolvedValue(comicMock);
        const result = await comicService.findById('1');
        expect(result).toEqual(comicMock);
    });

    test('update deve atualizar um comic', async () => {
        (comicSchema.findByIdAndUpdate as jest.Mock).mockResolvedValue(comicMock);
        const result = await comicService.update('1', comicMock);
        expect(result).toEqual(comicMock);
    });

    test('delete deve deletar um comic', async () => {
        (comicSchema.findByIdAndDelete as jest.Mock).mockResolvedValue(comicMock);
        const result = await comicService.delete('1');
        expect(result).toEqual("Comic removida com sucesso");
    });
});