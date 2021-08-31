describe("UMNSearch Component", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-umnsearch--primary&args=&viewMode=story"
    );
    cy.getBySel("umn-search__input").as("input");
    cy.getBySel("umn-search__toggle-button").as("toggle");
    cy.getBySel("umn-search__form").as("form");
  });

  it("toggles search field", () => {
    cy.get("@input").should("not.be.visible");

    cy.get("@toggle").click();
    cy.get("@input").should("be.visible");

    cy.get("@toggle").click();
    cy.get("@input").should("not.be.visible");
  });

  // intercepting a form with an action to a
  // different domain, like google, is beyond
  // my cypress ken currently.
  it("takes a query input", () => {
    const search = "My Search Query";

    cy.get("@toggle").click();

    cy.get("@input")
      .type(search)
      .should("have.value", search)
      .and("have.attr", "name", "query");
  });

  it("send search to usearch.umn.edu", () => {
    cy.get("@form").should("have.attr", "action", "https://usearch.umn.edu");
  });
});
