import LoginPage from '../pages/LoginPage'
import FlightsPage from '../pages/FlightsPage'
import NavBar from '../components/NavBar'

let loginPage
let flightsPage
let navBar

describe('Iniciar sesion en el pagina y llenar los datos de vuelo e indicar la busqueda', () => {
	beforeAll(async () => {
		loginPage = new LoginPage()
		flightsPage = new FlightsPage()
		navBar = new NavBar()
	})

	test('Debe iniciar  visitar la pagina de login e iniciar sesion', async () => {
		await loginPage.visit()
		await loginPage.login('user@phptravels.com', 'demouser')
	}, 20000)

	test('Que lleguemos al dashboard', async () => {
		await loginPage.validateLogin()
	})

	test('Navegar a vuelos', async () => {
		await navBar.validateNavBarIsPresent()
		await navBar.selectMenuItem('flights')
	}, 20000)

	test('Validar que estemos en vuelos y seleccionar el vuelo', async () => {
		await flightsPage.validatePage()
		await flightsPage.selectFlight('Mexico', 'Paris', '20-11-2022', 5)
		await flightsPage.wait(5000)
	}, 30000)
})
