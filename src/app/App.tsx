import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/home/HomePage";
import AboutPage from "pages/about/AboutPage";
import Layout from "layouts";
import "./App.css";

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
