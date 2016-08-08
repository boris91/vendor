import AppLayout from 'app/views/index';
import HomePage from 'app/views/home';
import UserPage from 'app/views/user';
import AboutPage from 'app/views/about';

export const rootRoute = AppLayout;
export const indexRoute = HomePage;
export const routes = {
	'home': HomePage,
	'user': UserPage,
	'about': AboutPage
};