import { BrowserRouter, Route, Routes } from "react-router-dom";
import { endpoints } from "global/constants";
import Layout from "layouts";
import * as pages from "pages";
import "./App.scss";

export const App = function() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={endpoints.homePage} element={<Layout />}>
					<Route 
						path={endpoints.homePage} 
						element={<pages.HomePage />} />
					<Route 
						path={endpoints.contactPage} 
						element={<pages.ContactPage />} />
					<Route 
						path={endpoints.educationPage} 
						element={<pages.EducationPage />} />
					<Route 
						path={endpoints.projectsPage}
						element={<pages.ProjectsPage />} />
					<Route 
						path={endpoints.skillsPage} 
						element={<pages.SkillsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
