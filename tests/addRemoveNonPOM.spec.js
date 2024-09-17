// page-object-model-demo/tests/addRemoveNonPOM.spec.js

import { test, expect } from '@playwright/test'

test.describe('Add/Remove Elements Tests', () => {

  test.beforeEach('Home Page Navigation', async ({ page }) => {
    const homePageHeader = page.locator('//h1[@class="heading" and contains(text(), "Welcome to the-internet")]')
    const githubBanner = page.locator('//img[@alt="Fork me on GitHub"]')
    const pageFooter = page.locator('//div[@id="page-footer"]')
    const addRemoveElementsLink = page.locator(`//li/a[contains(text(), "Add/Remove Elements")]`)

    await page.goto('https://the-internet.herokuapp.com/')
    await homePageHeader.waitFor('visible')
    await githubBanner.waitFor('visible')
    await pageFooter.waitFor('attached')

    await addRemoveElementsLink.click()

  })

  test('adding and removing same number of elements', async ({ page }) => {
    const elements = page.locator('//div[@id="elements"]/button')
    const addElementButton = page.locator('//div[@class="example"]/button[contains(text(), "Add Element")]')
    const removeElementButton = page.getByRole('button', { name: 'Delete' })
    const elementsAdded = 5
    const elementsRemoved = 5
    const remainingElements = elementsRemoved <= elementsAdded ? elementsAdded - elementsRemoved : 0

    await addElementButton.waitFor('visible')
    if (elementsAdded > 0) {
      for (let i = 0; i < elementsAdded; i++) {
        await addElementButton.click()
      }
    }
    expect(await elements.count()).toEqual(elementsAdded)

    let elementCounter = await elements.count()

    while (elementCounter > remainingElements) {
      await removeElementButton.first().click()
      elementCounter = await elements.count()
    }

    expect(await elements.count()).toEqual(remainingElements)

  })

  test('adding more elements than removing', async ({ page }) => {
    const elements = page.locator('//div[@id="elements"]/button')
    const addElementButton = page.locator('//div[@class="example"]/button[contains(text(), "Add Element")]')
    const removeElementButton = page.getByRole('button', { name: 'Delete' })
    const elementsAdded = 5
    const elementsRemoved = 3
    const remainingElements = elementsRemoved <= elementsAdded ? elementsAdded - elementsRemoved : 0

    await addElementButton.waitFor('visible')
    if (elementsAdded > 0) {
      for (let i = 0; i < elementsAdded; i++) {
        await addElementButton.click()
      }
    }

    expect(await elements.count()).toEqual(elementsAdded)

    let elementCounter = await elements.count()

    while (elementCounter > remainingElements) {
      await removeElementButton.first().click()
      elementCounter = await elements.count()
    }

    expect(await elements.count()).toEqual(remainingElements)

  })

  test('removing more elements than adding', async ({ page }) => {
    const elements = page.locator('//div[@id="elements"]/button')
    const addElementButton = page.locator('//div[@class="example"]/button[contains(text(), "Add Element")]')
    const removeElementButton = page.getByRole('button', { name: 'Delete' })
    const elementsAdded = 5
    const elementsRemoved = 7
    const remainingElements = elementsRemoved <= elementsAdded ? elementsAdded - elementsRemoved : 0

    await addElementButton.waitFor('visible')
    if (elementsAdded > 0) {
      for (let i = 0; i < elementsAdded; i++) {
        await addElementButton.click()
      }
    }
    expect(await elements.count()).toEqual(elementsAdded)

    let elementCounter = await elements.count()

    while (elementCounter > remainingElements) {
      await removeElementButton.first().click()
      elementCounter = await elements.count()
    }
    expect(await elements.count()).toEqual(remainingElements)

  })

  test('removing elements with none added', async ({ page }) => {
    const elements = page.locator('//div[@id="elements"]/button')
    const removeElementButton = page.getByRole('button', { name: 'Delete' })
    const elementsAdded = 0
    const elementsRemoved = 5
    const remainingElements = elementsRemoved <= elementsAdded ? elementsAdded - elementsRemoved : 0

    let elementCounter = await elements.count()

    while (elementCounter > remainingElements) {
      await removeElementButton.first().click()
      elementCounter = await elements.count()
    }
    
    expect(await elements.count()).toEqual(remainingElements)

  })
})