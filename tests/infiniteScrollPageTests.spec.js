// page-object-model-demo/pageObjects/infiniteScrollPage.js

import { test, expect } from '@playwright/test'
import { HomePage } from '../pageObjects/homePage'
import { InfiniteScrollPage } from '../pageObjects/infiniteScrollPage'

test.use({
  launchOptions: {
    slowMo: 500
  }
})

test.describe('Infinite Scroll Tests', () => {

  test.beforeEach('Home Page Navigation', async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.navigateToHomePage()
    await homePage.clickOnTestPageLink('Infinite Scroll')
  })

  test('text still populating after pressing page down 10 times', async ({ page }) => {
    const infiniteScrollPage = new InfiniteScrollPage(page)

    await infiniteScrollPage.textBody.waitFor('visible')
    
    // method inherited from ScrollablePage
    await infiniteScrollPage.pressPageDown(10)

    await expect(infiniteScrollPage.textBody).toBeVisible()

  })
})