/* eslint-disable */
describe("TransactionTest", () => {
  it.only("only github action", () => {
    console.log("visit skip.")
  }),
  it("Visits the Top", () => {
    cy.visit("http://localhost:3000/");
  }),
  it("Visits the blog", () => {
    cy.visit("http://localhost:3000/blog");
  }),
  it("Visits the contact", () => {
    cy.visit("http://localhost:3000/contact");
  }),
  it("Visits the none", () => {
    cy.visit("http://localhost:3000/blolog/");
  });
});
