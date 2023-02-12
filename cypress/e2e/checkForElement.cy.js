describe("check for html elements", () => {
  it(".home-container", () => {
    cy.visit("/");
    cy.get(".home-container").should("exist");
  });
});
