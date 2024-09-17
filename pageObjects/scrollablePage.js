// page-object-model-demo/pageObjects/scrollablePage.js

export class ScrollablePage {
  constructor(page) {
    this.page = page
  }
  async scrollDownPage(pixels) {
    await this.page.mouse.wheel(0, pixels)
  }

  async pressPageDown(numOfPresses) {
    for (let i = 0; i < numOfPresses; i++) {
      await this.page.keyboard.press('PageDown')
    }
  }
}