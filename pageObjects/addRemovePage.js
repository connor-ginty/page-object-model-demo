// page-object-model-demo/pageObjects/addRemovePage.js

export class AddRemovePage {
  constructor(page) {
    this.page = page

    this.elements = page.locator('//div[@id="elements"]/button')
    this.addElementButton = page.locator('//div[@class="example"]/button[contains(text(), "Add Element")]')
    this.removeElementButton = page.getByRole('button', { name: 'Delete' })
  }

  async addElement(elementsAdded) {
    await this.addElementButton.waitFor('visible')
    if (elementsAdded > 0) {
      for (let i = 0; i < elementsAdded; i++) {
        await this.addElementButton.click()
      }
    }
  }

  async removeElement(elementsRemoved) {
    const elementsAtStart = await this.elements.count()
    let elementCounter = await this.elements.count()
    let remainingElements = elementsAtStart >= elementsRemoved ? elementsAtStart - elementsRemoved : 0

    while (elementCounter > remainingElements) {
      await this.removeElementButton.first().click()
      elementCounter = await this.elements.count()
    }
  }
}