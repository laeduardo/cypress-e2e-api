describe('Funcionalidade de Login', () => {
    it('Deve permitir o login com credenciais válidas', () => {
      cy.login(Cypress.env('username'), Cypress.env('password'))

      cy.url().should('include', '/dashboard')
      cy.contains('Dashboard').should('be.visible')
    })
  
    it('Deve exibir mensagem de erro para credenciais inválidas', () => {
      cy.login(Cypress.env('invalid_username'), Cypress.env('invalid_password'))

      cy.url().should('include', '/login')
      cy.contains('Invalid credentials').should('be.visible')
    })
})