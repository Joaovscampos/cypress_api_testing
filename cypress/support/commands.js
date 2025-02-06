import { faker } from '@faker-js/faker';

Cypress.Commands.add('criarUsuarioFake', () => {
    return {
        nome: faker.person.fullName(), 
        email: faker.internet.email(), 
        password: faker.internet.password(), 
        administrador: 'false'
    };
});
