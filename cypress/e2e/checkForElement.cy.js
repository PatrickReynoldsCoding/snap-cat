describe("check for html elements", () => {
  xit(".home-container", () => {
    cy.visit("/");
    cy.get(".home-container").should("exist");
  });
  xit(".cat-card-interface", () => {
    cy.visit("/");
    cy.get(".cat-card-interface").should("exist");
  });
});
