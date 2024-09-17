// page-object-model-demo/pageObjects/homePage.js

export class HomePage {
  constructor(page) {
    this.page = page
    
    this.homePageHeader = page.locator('//h1[@class="heading" and contains(text(), "Welcome to the-internet")]')
    this.githubBanner = page.locator('//img[@alt="Fork me on GitHub"]')
    this.pageFooter = page.locator('//div[@id="page-footer"]')
  }

  async navigateToHomePage() {
    await this.page.goto('https://the-internet.herokuapp.com/')
    await this.homePageHeader.waitFor('visible')
    await this.githubBanner.waitFor('visible')
    await this.pageFooter.waitFor('attached')
  }

  async clickOnTestPageLink(title) {
    const listItemLink = this.page.locator(`//li/a[contains(text(), "${title}")]`)
    await listItemLink.click()
  }
}