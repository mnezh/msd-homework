const { waitAndClick } = require('./util')

module.exports = class HomeScreen {
  constructor () {
    // I use text labels in selectors, which is not good
    // Ideally I should talk to developers to provide unique IDs/classes
    // So I can make test independent of text labels
    this.elements = {
      homeScreenCheck: '.panel-left',
      categoryLink: '.dropdown-toggle={categoryName}',
      subCategoryLink: '.dropdown={categoryName}',
      orderingTabLink: 'li[role=\'presentation\']={orderingTabName}',
      orderingTabActive: 'li.active={orderingTabName}',
      pleaseWaitPopup: 'div=Please wait',
      productItem: '#k-item-container li:nth-of-type({position})',
      addToCart: '.product-list__price .pull-right a',
      goToCartButton: 'a=Go to cart',
      shoppingCartIcon: '.header__btn-cart'
    }
  }
  waitForLoaded() {
    return $(this.elements.homeScreenCheck).waitForExist()
  }
  selectCategory (categoryName) {
    return waitAndClick(this.elements.categoryLink.replace('{categoryName}', categoryName))
  }
  selectSubCategory (categoryName) {
    return waitAndClick(this.elements.subCategoryLink.replace('{categoryName}', categoryName))
  }
  showOffers (orderingTabName) {
    waitAndClick(this.elements.orderingTabLink.replace('{orderingTabName}', orderingTabName))
    $(this.elements.orderingTabActive.replace('{orderingTabName}', orderingTabName)).waitForDisplayed()
    browser.waitUntil(() => {
      return ! $(this.elements.pleaseWaitPopup).isDisplayed()
    })
  }
  addItemToCartByPosition (position) {
    const product = $(this.elements.productItem.replace('{position}', position))
    product.waitForExist()
    const addToCart = product.$(this.elements.addToCart)
    addToCart.waitForDisplayed()
    addToCart.scrollIntoView()
    addToCart.click()
    $(this.elements.goToCartButton).waitForDisplayed()
  }
  goToShoppingCart () {
    waitAndClick(this.elements.shoppingCartIcon)
  }
}