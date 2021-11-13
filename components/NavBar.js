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

	validateNavBarIsPresent() {
		page.waitForSelector(this.navBar)
		page.waitForXPath(this.menu.home)
		page.waitForXPath(this.menu.hotels)
		page.waitForXPath(this.menu.flights)
	}

	selectMenuItem(menuItem) {
		this.click(this.menu[menuItem])
	}
}
