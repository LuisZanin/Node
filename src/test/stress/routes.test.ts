import axios from 'axios';

describe('Testes de rotas', () => {
    describe('Rotas de Criadores', () => {
        it('GET /populateCreators deve retornar status 200', async () => {
            const res = await axios.get('http://localhost:3000/populateCreators');
            expect(res.status).toBe(200);
        });

        it('GET /Creators deve retornar status 200', async () => {
            const res = await axios.get('http://localhost:3000/Creators');
            expect(res.status).toBe(200);
        });

    });

    describe('Rotas de Personagens', () => {
        it('GET /populateCharacters deve retornar status 200', async () => {
            const res = await axios.get('http://localhost:3000/populateCharacters');
            expect(res.status).toBe(200);
        });

        it('GET /characters deve retornar status 200', async () => {
            const res = await axios.get('http://localhost:3000/characters');
            expect(res.status).toBe(200);
        });

    });

    describe('Rotas de Quadrinhos', () => {
        it('GET /populateComics deve retornar status 200', async () => {
            const res = await axios.get('http://localhost:3000/populateComics');
            expect(res.status).toBe(200);
        });

        it('GET /Comics deve retornar status 200', async () => {
            const res = await axios.get('http://localhost:3000/Comics');
            expect(res.status).toBe(200);
        });

    });
});