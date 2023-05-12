import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "pages/contact/ContactPage";
import EducationPage from "pages/education/EducationPage";
import HomePage from "pages/home/HomePage";
import ProjectsPage from "pages/projects/ProjectsPage";
import SkillsPage from "pages/skills/SkillsPage";
import Layout from "layouts";
import { endpoints } from "global/constants";
import "./App.scss";

export const App = function() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={endpoints.homePage} element={<Layout />}>
					<Route path={endpoints.homePage} element={<HomePage />} />
					<Route path={endpoints.contactPage} element={<ContactPage />} />
					<Route path={endpoints.educationPage} element={<EducationPage />} />
					<Route path={endpoints.projectsPage} element={<ProjectsPage />} />
					<Route path={endpoints.skillsPage} element={<SkillsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
	
export default App;
