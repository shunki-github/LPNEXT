describe('TransactionTest', () => {
  it('Visits the Top', () => {
    cy.visit('http://localhost:3000/')
  }),
  it('Visits the blog', () => {
    cy.visit('http://localhost:3000/blog')
  }),
  it('Visits the contact', () => {
    cy.visit('http://localhost:3000/contact')
  })
})
