Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').as('field_username')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').as('field_password')
    cy.get('.oxd-button').as('button_login')
    
    cy.get('@field_username').type(username)
    cy.get('@field_password').type(password)
    cy.get('@button_login').click()
})