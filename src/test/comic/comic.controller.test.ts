import { Request, Response } from 'express';
import comicController from '../../comic/controllers/comic.controller';
import comicService from '../../comic/services/comic.service';

jest.mock('../../comic/services/comic.service');

describe('comic Controller', () => {
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

    test('popularcomics deve popular os comics', async () => {
        await comicController.popularComics(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('findAll deve retornar todos os comics', async () => {
        (comicService.findAll as jest.Mock).mockResolvedValue([]);
        await comicController.findAll(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('findById deve retornar um comic pelo id', async () => {
        mockRequest.params = { id: '1' };
        (comicService.findById as jest.Mock).mockResolvedValue({});
        await comicController.findById(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('update deve atualizar um comic', async () => {
        mockRequest.params = { id: '1' };
        mockRequest.body = { name: 'Updated comic' };
        (comicService.update as jest.Mock).mockResolvedValue({});
        await comicController.update(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('delete deve deletar um comic', async () => {
        mockRequest.params = { id: '1' };
        (comicService.delete as jest.Mock).mockResolvedValue("comic removido com sucesso");
        await comicController.delete(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });
});