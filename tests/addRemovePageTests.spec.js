// page-object-model-demo/tests/addRemovePageTests.spec.js

import { test, expect } from '@playwright/test'
import { HomePage } from '../pageObjects/homePage'
import { AddRemovePage } from '../pageObjects/addRemovePage'

test.describe('Add/Remove Elements Tests', () => {

  test.beforeEach('Home Page Navigation', async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.navigateToHomePage()
    await homePage.clickOnTestPageLink('Add/Remove Elements')
  })

  test('adding and removing same number of elements', async ({ page }) => {
    const addRemovePage = new AddRemovePage(page)
    // ********************************************
    // original test case
    // ********************************************
    const elementsAdded = 5
    const elementsRemoved = 5
    const remainingElements = elementsRemoved <= elementsAdded ? elementsAdded - elementsRemoved : 0

    await addRemovePage.addElement(elementsAdded)
    expect(await addRemovePage.elements.count()).toEqual(elementsAdded)

    await addRemovePage.removeElement(elementsRemoved)
    expect(await addRemovePage.elements.count()).toEqual(remainingElements)

  })

  test('adding more elements than removing', async ({ page }) => {
    const addRemovePage = new AddRemovePage(page)
    const elementsAdded = 5
    // ********************************************
    // only change from original test case
    const elementsRemoved = 3
    // ********************************************
    const remainingElements = elementsRemoved <= elementsAdded ? elementsAdded - elementsRemoved : 0

    await addRemovePage.addElement(elementsAdded)
    expect(await addRemovePage.elements.count()).toEqual(elementsAdded)

    await addRemovePage.removeElement(elementsRemoved)
    expect(await addRemovePage.elements.count()).toEqual(remainingElements)

  })

  test('removing more elements than adding', async ({ page }) => {
    const addRemovePage = new AddRemovePage(page)
    const elementsAdded = 5
    // ********************************************
    // only change from original test case
    const elementsRemoved = 7
    // ********************************************
    const remainingElements = elementsRemoved <= elementsAdded ? elementsAdded - elementsRemoved : 0

    await addRemovePage.addElement(elementsAdded)
    expect(await addRemovePage.elements.count()).toEqual(elementsAdded)

    await addRemovePage.removeElement(elementsRemoved)
    expect(await addRemovePage.elements.count()).toEqual(remainingElements)

  })

  test('removing elements with none added', async ({ page }) => {
    const addRemovePage = new AddRemovePage(page)
    const elementsAdded = 0
    const elementsRemoved = 3
    const remainingElements = elementsRemoved <= elementsAdded ? elementsAdded - elementsRemoved : 0

    await addRemovePage.removeElement(elementsRemoved)
    expect(await addRemovePage.elements.count()).toEqual(remainingElements)

  })
})