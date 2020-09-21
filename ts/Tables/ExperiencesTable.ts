
namespace ExperiencesTable {

    export function Select(index: number): any {
        return entries[index];
    }
    
    export function Count(): number {
        return entries.length;
    }
    
    const entries: {
        position: string,
        startingDate: Date,
        endingDate: Date,
        organization_id: number,
        description: string }[] = [
        {
            position: "Electric Harness Designer",
            startingDate: new Date(2019, 9), // September
            endingDate: new Date(2020, 6), // June 
            organization_id: 6,
            description: "As an electric harness designer, I was assigned to several teams to provide support in technical drawings and 3D CAD models development. Also, I provided a digital solution to aid in the design of these drawings to avoid recurrent steps of the process and help reach compliance of standards. The solution included a C# implementation through which the engineers could load a data report from their CAD design software to be analysed and then get feedback on their design in realtion to the compliance policies. Also, when determining the cost of components from different providers, another tool (a web scrapper) was developed to help gather the correct information throughout the web and reduce time in proyect cost estimations."
        },
        {
            position: "VB developer",
            startingDate: new Date(2019, 8), // August
            endingDate: new Date(2020, 3), // March
            organization_id: 7,
            description: "As a visual basic developer, I started in the company to develop a digital solution to automate the manufacture design of plastic inyection molds. The solution was a desktop application which automated the input informat from the current design, and after selecting the desired platic inyection machine, the parameters for the calculations were loaded from a local database and performed the corresponding markups on the inputs to signal the faults or possible improvements for the process. Allowing the user (design engineer) to have instant feedback on their design, select the manufacture machine more properly, and increase the quality on the resulting products."
        },
        {
            position: "BMES volunteer and main collaborator",
            startingDate: new Date(2019, 1), // January
            endingDate: new Date(2019, 6), // June
            organization_id: 8,
            description: "During the volunteer, I was the main collaborator and my role included networking and providing human resources for the society in order to develop stand up events. These was achieved through my contacts network and by investigating and getting in touch with different volunteers from other societies."
        },
        {
            position: "Process engineer intern",
            startingDate: new Date(2019, 1), // January
            endingDate: new Date(2019, 6), // June
            organization_id: 9,
            description: "As a process engineer intern, I was assigned to a team to help determine and optimize the working parameters of a 3D printer. The printer was working with a new type of polymer previously designed by another team for innovative solution in the protesis manufacture area. The printing optimization of the polymer was achieved through extensive testing for data gathering to develop a mathematic model for each parameter. After the models were obtained, the point of optimization was easily obtained."
        },
        {
            position: "Dron design international competition",
            startingDate: new Date(2019, 1), // January
            endingDate: new Date(2019, 6), // June
            organization_id: 10,
            description: "The competition consisted on a conceptual design of a drone to solve a given problematic (Search & Rescue). The design was done through the 'Design Thinking' process, and the separation of concers was achieved through separation of tasks among members of the team and mocking up the best ideas each teammate had. These decisions were made through argumentation and during online meetings of the team."
        },
        {
            position: "PrepaNet Math teacher volunteer",
            startingDate: new Date(2018, 7), // July
            endingDate: new Date(2018, 12), // December
            organization_id: 11,
            description: "As a match teacher, I was providing on math classes to low-resources people. These was people from all ages, from teenagers to adults and the class was online thorugh resources provided by the organization PrepaNet. I had a group of around 10 persons who desired to learn mostly about trigonometry and equation solving topics."
        },
        {
            position: "Data Analysis Developer",
            startingDate: new Date(2018, 5), // May
            endingDate: new Date(2018, 8), // August
            organization_id: 12,
            description: "As a data analysis developer, I was assigned the task of reestructuring a current data on a model the company already had for estimating the amount of sales to be done the next month. This was based on a set of data of previous records from the company. The implementation of the solution included the design of an interface to input the data and choose between different types of estimations (Linear, polynomial, exponential, etc), to determine a more accurate approach. This was done through VB6."
        },
        {
            position: "Community manager volunteer",
            startingDate: new Date(2018, 2), // February
            endingDate: new Date(2018, 8), // August
            organization_id: 13,
            description: "As a volunteer I was in charge of managing the social networks of the organization, as well as uploading content related to wellness and good eating habits. All of the content uploaded had to be uploaded with their corresponding information sources for veracity of the organization and to avoid plagiarism."
        },
        {
            position: "IKNEXTIA volunteer and main collaborator" ,
            startingDate: new Date(2018, 1), // January
            endingDate: new Date(2018, 6), // June
            organization_id: 14,
            description: "During the volunteer, I was the main collaborator reporting to the directives of the society of the different events and tasks done in name of the society. These included managing the personel and other volunteers as well as assigning them tasks and follow ups on their work and schedule. I also had to make sure proyects where achieved on schedule and that the quality of them is of what it was expected."
        },
        {
            position: "Electric motor coiling proyect",
            startingDate: new Date(2018, 1), // January
            endingDate: new Date(2018, 5), // May
            organization_id: 2,
            description: "During the proyect, I was given the hands-on tasks of coiling and repairing electric motors. These was usually done thorugh a special machinery for coiling, although manually coiling was often required."
        },
        {
            position: "General mechanic",
            startingDate: new Date(2017, 5), // May
            endingDate: new Date(2017, 7), // July
            organization_id: 15,
            description: "As a general mechanic, I had hands-on tasks such as air filter and oil replacement in several machinery such as: Air compressors, generators, tractors, etc. I also had to deal with problem solving without knowing the cause of the problem, which included a lot of critical thinking."
        },
        {
            position: "CVA Computer teacher volunteer",
            startingDate: new Date(2016, 7), // July
            endingDate: new Date(2016, 12), // December
            organization_id: 16,
            description: "As a computer teacher volunteer, I provided support in teaching about computer and technology usage to adults of age above 40s that struggled to learn about these resources. The knowledge aquired help them organize their virtual documents, understand the technological terms as well as learning how to use these technologies. Mostly to get in touch with their family and friends."
        }
    
    ]

}

export default ExperiencesTable;