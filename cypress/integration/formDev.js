/* eslint-disable */
describe('form test', () => {
    it('Visits the contact page', () => {
      cy.visit('http://localhost:3000/contact')
    }),
    it('Input name', () => {
      cy.get("#name").type("this is test")
    }),
    it('Input email', () => {
      cy.get("#email").type("test@cypress.com")
    }),
    it('Input tel', () => {
      cy.get("#tel").type("00000000")
    }),
    it('send', () => {
        cy.get("form").send()
      })
  })
