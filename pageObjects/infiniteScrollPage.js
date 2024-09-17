// page-object-model-demo/pageObjects/infiniteScrollPage.js

import { ScrollablePage } from "./scrollablePage"

export class InfiniteScrollPage extends ScrollablePage {
  constructor(page) {
    super(page)
    
    this.textBody = page.locator('//div[@id="content"]')
  }
}