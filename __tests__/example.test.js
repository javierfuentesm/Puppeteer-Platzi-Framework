describe('Google', () => {
	it('should open google and close the browser', async () => {
		await page.goto('https://www.google.com/')
		await page.waitForTimeout(5000)
	}, 15000)

	it('should open google and close the browser 2', async () => {
		await page.goto('https://www.platzi.com/')
		await page.waitForTimeout(5000)
	}, 15000)
})
