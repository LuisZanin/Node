import { Request, Response } from 'express';
import characterController from '../../character/controllers/character.controller';
import { characterType } from '../../character/types/character.entities';
import characterService from '../../character/services/character.service';

jest.mock('../../character/services/character.service');

describe('Character Controller', () => {
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

    test('popularCharacters deve popular os personagens', async () => {
        await characterController.popularCharacters(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('findAll deve retornar todos os personagens', async () => {
        await characterController.findAll(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('findById deve retornar um personagem pelo id', async () => {
        mockRequest.params = { id: '1' };
        await characterController.findById(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('update deve atualizar um personagem', async () => {
        mockRequest.params = { id: '1' };
        mockRequest.body = { name: 'Updated Character' };
        await characterController.update(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('delete deve deletar um personagem', async () => {
        mockRequest.params = { id: '1' };
        await characterController.delete(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.json).toHaveBeenCalled();
    });
});