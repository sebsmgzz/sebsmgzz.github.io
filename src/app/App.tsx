import { HashRouter, Route, Routes } from "react-router-dom";

import * as routes from "constants/routes";
import * as pages from "pages";
import { Layout } from "layouts";

import "./App.scss";

export const App = function() {
	return (
		<HashRouter>
			<Routes>
				<Route path={routes.homePage} element={<Layout />}>
					<Route 
						path={routes.homePage} 
						element={<pages.HomePage />} />
					<Route 
						path={routes.contactPage} 
						element={<pages.ContactPage />} />
					<Route 
						path={routes.educationPage} 
						element={<pages.EducationPage />} />
					<Route 
						path={routes.projectsPage}
						element={<pages.ProjectsPage />} />
					<Route 
						path={routes.skillsPage} 
						element={<pages.SkillsPage />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}
