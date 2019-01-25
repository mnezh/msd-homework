module.exports = class CartScreen {
  constructor () {
    this.elements = {
      cartScreenCheck: '.cart__breadcrumb',
      cartTable: '.cart__table'
    }
  }

  waitForLoaded() {
    return $(this.elements.cartScreenCheck).waitForExist()
  }

  getShoppingCartItemNames() {
    const cartTable = $(this.elements.cartTable)
    cartTable.waitForExist()
    return cartTable.$$('.table__body .info-row .table__name').map((element)=>element.getText()).filter((name)=>name)
  }
}