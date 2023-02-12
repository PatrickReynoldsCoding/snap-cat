describe("check for html elements", () => {
  it(".home-container", () => {
    cy.visit("/");
    cy.get(".cat-image").should("exist");
  });
});
