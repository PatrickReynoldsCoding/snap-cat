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

// Rough plan
// cy.get('button').click();
// cy.get('button').should('be.disabled');
// cy.wait(2000);
// cy.get('button').should('not.be.disabled');
