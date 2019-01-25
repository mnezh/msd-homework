const config = require('../../config/tests.json')
const HomeScreen = require('./home-screen')
const CartScreen = require('./cart-screen')

module.exports = class WebApp {
  constructor () {
    this.homeScreen = new HomeScreen()
    this.cartScreen = new CartScreen()
  }
  init () {
    browser.url(config.appURL)
    this.homeScreen.waitForLoaded()
  }
  selectCategory (categoryName) {
    this.homeScreen.selectCategory(categoryName)
  }
  selectSubCategory (categoryName) {
    this.homeScreen.selectSubCategory(categoryName)
  }
  showOffers (orderingTabName) {
    this.homeScreen.showOffers(orderingTabName)
  }
  addItemToCartByPosition (position) {
    this.homeScreen.addItemToCartByPosition(position)
  }
  goToShoppingCart () {
    this.homeScreen.goToShoppingCart()
    this.cartScreen.waitForLoaded()
  }
  getShoppingCartItemNames () {
    return this.cartScreen.getShoppingCartItemNames()
  }
}