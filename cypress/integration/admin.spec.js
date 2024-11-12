describe('Funcionalidade de Admin', () => {
    beforeEach(() => {
        cy.login(Cypress.env('username'), Cypress.env('password'))
    })
    it('Deve permitir criar um novo usuário', () => {
      cy.get(':nth-child(1) > .oxd-main-menu-item').as('button_admin')
      cy.get('@button_admin').click()

      cy.get('.orangehrm-header-container > .oxd-button').as('button_+add')      
      cy.get('@button_+add').click()

      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').as('button_user_role')      
      cy.get('@button_user_role').click()

      cy.get('.oxd-select-dropdown > :nth-child(2)').as('select_user_role_admin')      
      cy.get('@select_user_role_admin').click()

      cy.get('.oxd-autocomplete-text-input > input').as('field_employee_name')      
      cy.get('@field_employee_name').type('manda')
      
      cy.get('.oxd-autocomplete-option > span').as('select_employee_name')      
      cy.get('@select_employee_name').click()

      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').as('button_status')      
      cy.get('@button_status').click()

      cy.get('.oxd-select-dropdown > :nth-child(2) > span').as('select_status_enable')      
      cy.get('@select_status_enable').click()

      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').as('field_username')      
      cy.get('@field_username').type('UserTest2')

      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').as('field_password')      
      cy.get('@field_password').type('User123')

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').as('field_confirm_password')      
      cy.get('@field_confirm_password').type('User123')

      cy.contains('Save').click()      

      cy.url().should('include', '/saveSystemUser')
      cy.contains('System Users').should('be.visible')
    })
})