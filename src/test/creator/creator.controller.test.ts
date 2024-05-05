import { Request, Response } from 'express';
import creatorController from '../../creator/controllers/creator.controller';
import creatorService from '../../creator/services/creator.service';

jest.mock('../../creator/services/creator.service');

describe('creator Controller', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;

    beforeEach(() => {
        jest.clearAllMocks();
        mockRequest = {};
        mockResponse = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
    });

    test('popularcreators deve popular os creators', async () => {
        await creatorController.populateCreators(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('findAll deve retornar todos os creators', async () => {
        (creatorService.findAll as jest.Mock).mockResolvedValue([]);
        await creatorController.findAll(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('findById deve retornar um creator pelo id', async () => {
        mockRequest.params = { id: '1' };
        (creatorService.findById as jest.Mock).mockResolvedValue({});
        await creatorController.findById(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('update deve atualizar um creator', async () => {
        mockRequest.params = { id: '1' };
        mockRequest.body = { name: 'Updated creator' };
        (creatorService.update as jest.Mock).mockResolvedValue({});
        await creatorController.update(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('delete deve deletar um creator', async () => {
        mockRequest.params = { id: '1' };
        (creatorService.delete as jest.Mock).mockResolvedValue("creator removido com sucesso");
        await creatorController.delete(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });
});