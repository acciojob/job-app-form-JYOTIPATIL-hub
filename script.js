//your code here
cy.visit(baseUrl + "/main.html");
cy.wait(1000); // wait for 1 second to ensure all elements load
cy.get('form').within(() => {
    // Other input checks
    cy.get("select#laptop");
    cy.get("label[for='laptop']");
});
