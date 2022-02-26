describe("Phone images Loading?", () => {
  it("Gets a phone image", () => {
    cy.get("img").should("have.class", "card-img-top");
  });
});

describe("Phone description loading?", () => {
  it("Gets a phone description", () => {
    cy.get("p").should("have.class", "card-text");
  });
});

describe("Price loading", () => {
  it("Gets a phone price", () => {
    cy.get("h4").should("have.class", "");
  });
});

describe("Link to induvidual phone", () => {
  it("Gets link to induvidual phone", () => {
    cy.get("Link").should("exist");
  });
});
