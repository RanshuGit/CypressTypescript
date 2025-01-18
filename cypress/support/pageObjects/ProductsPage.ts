class ProductsPage {

  pageTitle = '.product_label';
  productList = '.inventory_list';
  addToCartButton = '//button[text()="ADD TO CART"]';
  cartIcon = '#shopping_cart_container';
  cartItemCount = '#shopping_cart_container > a > span';

  verifyproductsPage() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.pageTitle).should('have.text', 'Products');
    cy.get(this.productList).should('be.visible');
  }

  addProductToCart(productNumber: number) {
    cy.get('.inventory_item').eq(productNumber).find('.btn_inventory').click();
  }
}

export const productsPage = new ProductsPage();