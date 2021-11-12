import LoginPage from '../pages/LoginPage'

let loginPage

describe('Iniciar sesion en el pagina', () => {
	beforeAll(async () => {
		loginPage = new LoginPage()
	})

	it('should  visit the page ', async () => {
		await loginPage.visit()
	})

	it('llenar los campos', async () => {
		await loginPage.login('user@phptravels.com', 'demouser')
	}, 20000)

	it('Validar que este en el dashboard', async () => {
		await loginPage.validateLogin()
	})
})
