import axios, { AxiosResponse } from 'axios';

describe('Testes de Overload de requisições com rota escolhida', () => {
    it('Irá sobrecarregar requisições para a rota escolhida' ,async () => {
        const requestPromises: Promise<AxiosResponse>[] = [];
        const requestCount = 200;
        const route = process.env.TEST_ROUTE || '/Creators'; 
        for (let i = 0; i < requestCount; i++) {
            requestPromises.push(axios.get(`http://localhost:3000${route}`));
        }

        const responses: AxiosResponse[] = await Promise.all(requestPromises);

        responses.forEach(response => {
            expect(response.status).toBe(200);
        });
    }, 20000); 
});