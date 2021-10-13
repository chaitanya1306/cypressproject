it('Login ´with invalid credentials', () => {
    cy.visit('https://me24.meest-group.com/')
    cy.get('.v-expand > :nth-child(7) > .v-button').click({ force: true })
    cy.wait(5000)
    cy.get('#gwt-uid-4').type('abc@meest-group.com')
    cy.get('#gwt-uid-6').type('Abc2021')
    cy.get('.v-verticallayout > .v-slot-custom > .v-button > .v-button-wrap > .v-button-caption').click({ force: true })
    cy.get('.v-slot-footer > .v-horizontallayout > .v-expand > .v-slot > .v-button').click({ force: true })
})