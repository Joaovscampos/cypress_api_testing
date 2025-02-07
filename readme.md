
# Cypress API Testing

## Descrição

Este repositório contém um conjunto de testes automatizados para testar a API da serveRest utilizando o **Cypress**. 

Este repositório inclui:
- Testes para listar, criar, editar, buscar e excluir usuários.
- Integração com o plugin `cypress-plugin-api` para facilitar as chamadas API.
- Geradores de dados dinâmicos com `faker.js` para criar dados de teste realistas.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- [cypress-plugin-api](https://github.com/abramenal/cypress-plugin-api) - Plugin para facilitar requisições API no Cypress
- [faker.js](https://github.com/faker-js/faker) - Gerador de dados aleatórios para os testes
- [mochawesome](https://github.com/adamgruber/mochawesome) - Relatórios de teste em formato visual

## Como Iniciar

## 💻 Pré-requisitos
- Possuir o `Node.js` instalado
- Possuir o `Git`  instalado

## 🔗Clonar o projeto 
Execute o seguinte comando em seu terminal:	

    git clone https://github.com/Joaovscampos/cypress_api_testing.git

## 🚀 Executando o projeto
**OBS: Para executar o projeto é necessário que você tenha clonado.**

Siga os seguintes passos para fazer a execução:

    cd cypress-api-testing
### Executar pela primeira vez 
Instalar as dependências 

    npm install 
Abrir o cypress

    npm run cy:open

O projeto inclui testes para as seguintes operações:

-   **Listar usuários**: Verifica se a API retorna todos os usuários.
-   **Criar usuário**: Testa a criação de um novo usuário com dados gerados dinamicamente.
-   **Buscar usuário pelo ID**: Verifica se é possível buscar um usuário por seu ID.
-   **Excluir usuário**: Testa a exclusão de um usuário existente.
-   **Editar usuário**: Verifica se é possível editar as informações de um usuário existente.