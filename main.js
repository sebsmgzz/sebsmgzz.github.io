
let profileElement = document.querySelector("main > div:nth-of-type(1)");
let profileView = new ProfileView();
profileElement.innerHTML = profileView.getView();

let educationElement = document.querySelector("main > div:nth-of-type(2)");
let educationView = new EducationView();
educationElement.innerHTML = educationView.getView();

let careerElement = document.querySelector("main > div:nth-of-type(3)");
let careerView = new CareerView();
careerElement.innerHTML = careerView.getView();

let skillsElement = document.querySelector("main > div:nth-of-type(4)");
let skillsView = new SkillsView();
skillsElement.innerHTML = skillsView.getView();

let contactElement = document.querySelector("main > div:nth-of-type(5)");
let contactView = new ContactView();
contactElement.innerHTML = contactView.getView();