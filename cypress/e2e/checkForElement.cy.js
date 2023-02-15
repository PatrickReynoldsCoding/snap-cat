describe("check for html elements", () => {
  it(".home-container", () => {
    cy.visit("/");
    cy.get("[class*=home-container_]").should("exist");
  });
  it(".cat-card-interface", () => {
    cy.visit("/");
    cy.get("[class*=new-cat-button_]").click();

    cy.get("[class*=cat-card-interface_]").should("exist");
  });
});
