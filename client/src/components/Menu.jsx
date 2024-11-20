import D1 from "../assets/design-works/design-1.png";
import D3_1 from "../assets/javascript-works/d3-1.png";
import D3_2 from "../assets/javascript-works/d3-2.png";
import D3_3 from "../assets/javascript-works/d3-3.png";
import D3_4 from "../assets/javascript-works/d3-4.png";
import PY1 from "../assets/python-works/python-1.png";
import PY2 from "../assets/python-works/python-2.png";
import PY3 from "../assets/python-works/python-3.png";
import PY4 from "../assets/python-works/python-4.png";
import PY5 from "../assets/python-works/python-5.png";
import R1 from "../assets/react-works/react-1.png";

const Menu = [
    {
        category: "JavaScript",
        projects: [
            {
                id: 1,
                image: D3_1,
                title: "Bar Graph Sample Illustration",
                description: "A simple bar graph illustration using D3.js and CSS. The challenging part here is to setup the scales and drawing axes for the graph. Also plotting the data points and styling them.",
                category: "JavaScript",
                techStack: "fa-brands fa-js",
                link: "https://github.com/GioMjds/fCC-Data-Visualization-Projects/tree/main/bar-chart"
            },
            {
                id: 2,
                image: D3_2,
                title: "Treemap Diagram Sample Illustration",
                description: "Treemap Diagram that illustrates the hierarchical data using D3.js library. Understanding how treemaps work and how to create them using some of the D3.js functions is very important in displaying the accurate data. Also, styling the treemap using CSS.",
                category: "JavaScript",
                techStack: "fa-brands fa-js",
                link: "https://github.com/GioMjds/fCC-Data-Visualization-Projects/tree/main/treemap-diagram"
            },
            {
                id: 3,
                image: D3_3,
                title: "Scatterplot Graph Sample Illustration",
                description: "A simple scatterplot graph illustration using D3.js and CSS. The challenging part here is to setup the scales and drawing axes for the graph. Also plotting the data points and styling them.",
                category: "JavaScript",
                techStack: "fa-brands fa-js",
                link: "https://github.com/GioMjds/fCC-Data-Visualization-Projects/tree/main/scatterplot-graph"
            },
            {
                id: 4,
                image: D3_4,
                title: "Choropleth Map Sample Illustration",
                description: "Using D3.js to create a simple choropleth map illustration, styled using CSS that contructs a map of the United States with each state colored based on the data. Also using GeoJSON and d assets using D3's data loading functionality.",
                category: "JavaScript",
                techStack: "fa-brands fa-js",
                link: "https://github.com/GioMjds/fCC-Data-Visualization-Projects/tree/main/choropleth-map"
            },
        ],
    },
    {
        category: "React",
        projects: [
            {
                id: 5,
                image: R1,
                title: "Real-Time Chat Application",
                description: "Made using React and Firebase. It has a simple login and registration system and a real-time chat feature.",
                category: "React",
                techStack: "fa-brands fa-react",
                link: "https://github.com/GioMjds/Chatify"
            },
        ],
    },
    {
        category: "Design",
        projects: [
            {
                id: 6,
                image: D1,
                title: "Light Mode Portfolio Design",
                description: "This was made using HTML, CSS and JavaScript. Light mode theme and implements a simple contact form interaction using MySQL to store the visitor credentials and PHP for MySQL connection.",
                category: "Design",
                techStack: "fa-brands fa-php",
                link: "https://github.com/GioMjds/personal-portfolio-using-php"
            }
        ]
    },
    {
        category: "Python",
        projects: [
            {
                id: 7,
                image: PY1,
                title: "Activity #1 (Prelim)",
                description: "Simple student introduction using the concept of Object-Oriented Programming in Python.",
                category: "Python",
                techStack: "fa-brands fa-python",
                link: "https://github.com/GioMjds/Python-OOP-Activities/blob/main/act_1.py"
            },
            {
                id: 8,
                image: PY2,
                title: "Activity #2 (Prelim)",
                description: "A activity that each students will select a number and will finishing the activity in Python Basics.",
                category: "Python",
                techStack: "fa-brands fa-python",
                link: "https://github.com/GioMjds/Python-OOP-Activities/blob/main/act2.py"
            },
            {
                id: 9,
                image: PY3,
                title: "Activity #3 (Midterm)",
                description: "Grade calculator that computes the prelim, midterm and final grades and throws a final overall average and a result if pass or not using error handling with OOP approach.",
                category: "Python",
                techStack: "fa-brands fa-python",
                link: "https://github.com/GioMjds/Python-OOP-Activities/blob/main/act3.py"
            },
            {
                id: 10,
                image: PY4,
                title: "Activity #4 (Midterm)",
                description: "Output calculator that computes the raw quiz, attendance, activity and exam grades first and prompting the maximum / total score of each category. Then, it will compute the student's final grade and will output the result if pass or not using Python Modules and Importing using OOP approach.",
                category: "Python",
                techStack: "fa-brands fa-python",
                link: "https://github.com/GioMjds/Python-OOP-Activities/blob/main/act_4.py"
            },
            {
                id: 11,
                image: PY5,
                title: "Activity #5 (Final)",
                description: "Simple student management tool that organizes and displays a weekly class schedule while also calculating the student's age and providing word count analysis of the output.",
                category: "Python",
                techStack: "fa-brands fa-python",
                link: "https://github.com/GioMjds/Python-OOP-Activities/blob/main/act5.py"
            },
        ]
    },
];

export default Menu;