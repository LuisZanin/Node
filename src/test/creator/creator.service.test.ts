import creatorService from '../../creator/services/creator.service';
import creatorSchema from '../../creator/schemas/creator.schema';
import { creatorType } from '../../creator/types/creator.entities';

jest.mock('../../creator/schemas/creator.schema');

describe('creator Service', () => {
    let creatorMock: creatorType;

    beforeEach(() => {
        jest.clearAllMocks();
        creatorMock = {
            name: 'nome 1',
            duty: 'Um dos Criadores',
            comicsWorked: 'comic 1'
        };
    });

    test('create deve criar um novo creator', async () => {
        (creatorSchema.create as jest.Mock).mockResolvedValue(creatorMock);
        const result = await creatorService.create(creatorMock);
        expect(result).toEqual(creatorMock);
    });

    test('findAll deve retornar todos os creators', async () => {
        (creatorSchema.find as jest.Mock).mockResolvedValue([creatorMock]);
        const result = await creatorService.findAll();
        expect(result).toEqual([creatorMock]);
    });

    test('findById deve retornar um creator pelo id', async () => {
        (creatorSchema.findById as jest.Mock).mockResolvedValue(creatorMock);
        const result = await creatorService.findById('1');
        expect(result).toEqual(creatorMock);
    });

    test('update deve atualizar um creator', async () => {
        (creatorSchema.findByIdAndUpdate as jest.Mock).mockResolvedValue(creatorMock);
        const result = await creatorService.update('1', creatorMock);
        expect(result).toEqual(creatorMock);
    });

    test('delete deve deletar um creator', async () => {
        (creatorSchema.findByIdAndDelete as jest.Mock).mockResolvedValue(creatorMock);
        const result = await creatorService.delete('1');
        expect(result).toEqual("Criador removido com sucesso");
    });
});