describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/html/index.html')
    cy.get('button').click
    cy.get('a').click


  })
})
