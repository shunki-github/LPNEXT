/* eslint-disable */
describe('TransactionTest', () => {
    it('Visits the Top', () => {
      cy.visit('http://dev.oovo.app/')
    }),
    it('Visits the blog', () => {
      cy.visit('http://dev.oovo.app/blog')
    }),
    it('Visits the contact', () => {
      cy.visit('http://dev.oovo.app/contact')
    }),
    it('Visits the none', () => {
      cy.visit('http://dev.oovo.app/blolog/')
    })
  })
