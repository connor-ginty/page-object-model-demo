// page-object-model-demo/pageObjects/floatingMenuPage.js

import { ScrollablePage } from "./scrollablePage"

export class FloatingMenuPage extends ScrollablePage {
  constructor(page) {
    super(page)

    this.floatingMenu = page.locator('//div[@id="menu"]')
    this.homeButton = page.getByRole('link', { name: 'Home' })
    this.newsButton = page.getByRole('link', { name: 'News' })
    this.contactButton = page.getByRole('link', { name: 'Contact' })
    this.aboutButton = page.getByRole('link', { name: 'About' })
  }
}