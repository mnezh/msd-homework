const waitAndClick = (selector) => {
  const element = $(selector)
  element.waitForDisplayed()
  element.scrollIntoView()
  return element.click()
}

module.exports = {
  waitAndClick
}