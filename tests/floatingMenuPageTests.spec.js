// page-object-model-demo/pageObjects/floatingMenuPage.js

import { test, expect } from '@playwright/test'
import { HomePage } from '../pageObjects/homePage'
import { FloatingMenuPage } from '../pageObjects/floatingMenuPage'

test.describe('Floating Menu Tests', () => {

  test.beforeEach('Home Page Navigation', async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.navigateToHomePage()
    await homePage.clickOnTestPageLink('Floating Menu')
  })

  test('menu visible after scrolling', async ({ page }) => {
    const floatingMenuPage = new FloatingMenuPage(page)

    // method inherited from ScrollablePage
    await floatingMenuPage.scrollDownPage(500)

    await expect(floatingMenuPage.floatingMenu).toBeVisible()
    await expect(floatingMenuPage.homeButton).toBeVisible()
    await expect(floatingMenuPage.newsButton).toBeVisible()
    await expect(floatingMenuPage.contactButton).toBeVisible()
    await expect(floatingMenuPage.aboutButton).toBeVisible()
  })
})