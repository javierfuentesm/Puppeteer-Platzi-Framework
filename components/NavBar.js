import BasePage from '../pages/BasePage'

export default class NavBar extends BasePage {
	constructor() {
		super()
		this.navBar = '.menu-wrapper'
		this.menu = {
			home: "//a[normalize-space()='Home']",
			hotels: "//a[normalize-space()='Hotels']",
			flights: "//a[normalize-space()='flights']",
		}
	}

	async validateNavBarIsPresent() {
		await page.waitForSelector(this.navBar)
		await page.waitForXPath(this.menu.home)
		await page.waitForXPath(this.menu.hotels)
		await page.waitForXPath(this.menu.flights)
	}

	async selectMenuItem(menuItem) {
	await	this.click(this.menu[menuItem])
	}
}
