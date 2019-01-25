const WebApp = require('./webapp')
// const MobileApp = require('./hypothetical-mobile-app-using-appium')

module.exports = class AppFactory {
  // Theoretically your eshop could have a non-web application, for example Android Mobile app.
  // The same user acceptance test suite could be executed against web and mobile app
  // as long as testing App class implements the same interface
  static getApp() {
    /* if (config.says.mobile) {
        // https://webdriver.io/docs/api/appium.html
        return new MobileApp()
    } */
    return new WebApp()
  }
}