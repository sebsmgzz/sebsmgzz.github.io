import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "pages/contact/ContactPage";
import EducationPage from "pages/education/EducationPage";
import HomePage from "pages/home/HomePage";
import ProjectsPage from "pages/projects/ProjectsPage";
import SkillsPage from "pages/skills/SkillsPage";
import Layout from "layouts";
import "./App.scss";

export const App = function() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/education" element={<EducationPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/skills" element={<SkillsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
	
export default App;
