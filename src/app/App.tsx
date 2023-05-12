import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from '../layouts/Header/Header';
import { Main } from '../layouts/Main/Main';
import { Footer } from '../layouts/Footer/Footer';

export const App = function() {
	return (
		<Fragment>
			<Header />
			<Main />
			<Footer />
		</Fragment>
	);
}
	
export default App;
