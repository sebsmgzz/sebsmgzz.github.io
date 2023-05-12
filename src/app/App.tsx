import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import { Layout } from '../layouts';

export const App = function() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
	
export default App;
