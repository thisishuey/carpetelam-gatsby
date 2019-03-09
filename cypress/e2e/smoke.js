describe("app", () => {
  it("home nav works", () => {
    cy.visit("/about")
      .getByText(/home/i)
      .click()
      .getByText(/carpe telam/i);
  });

  it("about nav works", () => {
    cy.visit("/")
      .getByText(/about/i)
      .click()
      .getByText(/about me/i);
  });

  it("services nav works", () => {
    cy.visit("/")
      .getByText(/services/i)
      .click()
      .getByText(/my services/i);
  });

  it("projects nav works", () => {
    cy.visit("/")
      .getByText(/projects/i)
      .click()
      .getByText(/my projects/i);
  });

  it("contact nav works", () => {
    cy.visit("/")
      .getByText(/contact/i)
      .click()
      .getByText(/contact me/i);
  });
});
