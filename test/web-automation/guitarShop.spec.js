const AppFactory = require('../../src/web-automation/app-factory')
const assert = require('assert')

describe('Buy two most expensive basses', () => {
  let app
  before(function () {
    app = AppFactory.getApp()
    app.init()
  })
  it('I click Bass Guitars', function () {
    app.selectCategory('Bass Guitars')
  })
  it('I expand Electric Bass Guitars', function () {
    app.selectSubCategory('Electric Bass Guitars')
  })
  it('I list offers from most expensive', function () {
    app.showOffers('Most expensive')
  })
  it('I order most expensive bass', function () {
    app.addItemToCartByPosition(1)
  })
  it('I order second most expensive bass', function () {
    app.addItemToCartByPosition(2)
  })
  it('I go to shopping cart', function () {
    app.goToShoppingCart()
  })
  it('I see two items in cart', function () {
    const items = app.getShoppingCartItemNames()
    assert.strictEqual(items.length, 2, 'I expect to see 2 items in cart')
  })
})