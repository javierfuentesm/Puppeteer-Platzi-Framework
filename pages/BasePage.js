export default class BasePage {
	async getTitle() {
		return await page.title()
	}

	async getUrl() {
		return page.url()
	}

	async getText(selector) {
		try {
			await page.waitForSelector(selector)
			return await page.$eval(selector, (el) => el.textContent)
		} catch (e) {
			throw new Error(`Error al obtener el texto del selector ${selector}`)
		}
	}

	async getAttribute(selector, attribute) {
		return await page.$eval(selector, (el) => el.getAttribute(attribute))
	}

	async getValue(selector) {
		return await page.$eval(selector, (el) => el.value)
	}

	async getCount(selector) {
		try {
			await page.waitForSelector(selector)
			return await page.$$eval(selector, (el) => el.length)
		} catch (e) {
			throw new Error(`Error al obtener el numero de elementos del selector ${selector}`)
		}
	}

	async click(selector) {
		try {
			await page.waitForSelector(selector)
			await page.click(selector, opts)
		} catch (e) {
			try {
				const element = await page.waitForXPath(selector)
				await element.click(selector)
			} catch (e) {
				throw new Error(`Error al dar click en el selector ${selector}`)
			}
		}
	}

	async type(selector, text, opts = {}) {
		try {
			await page.waitForSelector(selector)
			await page.type(selector, text, opts)
		} catch (e) {
			throw new Error(`Error al escribir en el selector ${selector}`)
		}
	}
	async doubleClick(selector) {
		try {
			await page.waitForSelector(selector)
			await page.click(selector, { clickCount: 2 })
		} catch (e) {
			throw new Error(`Error al dar doble click en el selector ${selector}`)
		}
	}
	async wait(time) {
		await page.waitForTimeout(time)
	}
}
