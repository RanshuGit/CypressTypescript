import { productsPage } from "../support/pageObjects/ProductsPage";

describe('Inventory Page Tests', () => {
  beforeEach(() => {
    cy.visit("/inventory.html");
    productsPage.verifyproductsPage();
  });

  it('Validate all the products are displayed on the inventory page', () => {
    cy.get(productsPage.pageTitle).should('have.text', 'Products');
    cy.get(".inventory_list > div").then(($ele) => {
        expect($ele.length).to.eql(6);
    })
  });

  it('Add the first product to the cart and verify the count', () => {
    productsPage.addProductToCart(0);
    cy.get(productsPage.cartItemCount).should('have.text', '1');
  });

  it('Navigate to the shopping cart and verify the product added to cart', () => {
    productsPage.addProductToCart(0);
    cy.get(productsPage.cartIcon).click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_list').should('be.visible');
    cy.get('#item_4_title_link > div').invoke('text').then(($text) => {
      expect($text).to.eql('Sauce Labs Backpack');
    })
  });

  it('Add multiple products to the cart', () => {
    for(let i:number=0; i<6; i++) {
      productsPage.addProductToCart(i);
    }
    cy.wait(2000);
    cy.get(productsPage.cartItemCount).should('have.text', '6');
  });
});
