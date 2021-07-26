describe('Login', () => {
    beforeEach(()=> {
        cy.visit('/signin')
    })
    it('should show the sign-in form', () => {
        cy.visit('/signin');
    })
    it('should authenticate with correct credentials', () => {
        cy.root().should('contain', 'Machi Ramen Login');
        cy.get('#email').type('admin@admin.com')
        cy.get('#password').type('password')
        cy.get('[data-cy="submit-button"]').click()
        // cy.root().should('have.value', 'Japanese Street Food Specalists')
        cy.url().should('include', '/home')
    })
})