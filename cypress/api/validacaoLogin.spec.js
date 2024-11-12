context('Testar API', () => {
    it('Verificar se esta na pagina de login', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('loginUrl'),
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Verificar validacao do login', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('validateUrl'),
            body: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            }
        }).then((response) => {
            expect(response.status).to.eq(200)

            const bodyHTML = response.body; // Captura o corpo HTML
            const tokenMatch = /:token="(.*?)"/.exec(bodyHTML); // Regex para capturar o valor do token
            const token = tokenMatch[1]; // Recupera o valor do token
            Cypress.env('token', token) // Salvar o token no ambiente

            return cy.request({
                method: 'POST',
                url: Cypress.env('validateUrl'),
                body: {
                    _token: Cypress.env('token'),
                    username: Cypress.env('username'),
                    password: Cypress.env('password')
                },
            })
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Verificar se esta na pagina inicial logada', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('indexUrl'),
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})