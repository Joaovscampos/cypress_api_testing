describe('Testar para o endpoint de usuários', () => {
    
    it('Deve listar todos os usuários', () => {
        cy.api('GET', '/usuarios').should((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('usuarios');
        });
    });

    it('Deve criar um novo usuário', () => {
        cy.criarUsuarioFake().then((usuario) => {
            cy.api('POST', '/usuarios', usuario).should((response) => {
                expect(response.status).to.eql(201);
                expect(response.body).to.have.property('_id');
                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
            });
    });  });
    
    it('Buscar usuário pelo ID', () => {
        cy.api('GET', '/usuarios').then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.usuarios).to.be.an('array').that.is.not.empty;

            const id = response.body.usuarios[0]._id;
            cy.api('GET', `/usuarios/${id}`).should((response) => {
                expect(response.status).to.eql(200);
                expect(response.body).to.have.property('_id', id);
            });
        });
    });

    it('Excluir um usuário', () => {
        cy.api('GET', '/usuarios').then((response) => {
            expect(response.body.usuarios).to.be.an('array').that.is.not.empty;
            
            const id = response.body.usuarios[response.body.usuarios.length - 1]._id;
            
            cy.api('DELETE', `/usuarios/${id}`).should((response) => {
                expect(response.status).to.eql(200);
                expect(response.body).to.have.property('message', 'Registro excluído com sucesso');
            });
        });
    });

    it('Editar Usuário', () => {
        cy.api('GET', '/usuarios').then((response) =>{
            expect(response.body.usuarios).to.be.an('array').that.is.not.empty;

            const id = response.body.usuarios[0]._id;

            cy.criarUsuarioFake().then((usuario) => {
                cy.api('PUT', `/usuarios/${id}`, usuario).should((response) => {
                    expect(response.status).to.eql(200);
                    expect(response.body).to.have.property('message', 'Registro alterado com sucesso');
                });
            });
        }); 
    });
});