/* eslint-disable react/jsx-key */
import { FaFreeCodeCamp, FaMicrosoft, FaHtml5, FaCss3, FaBootstrap, FaSass } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoJquery, BiLogoReact, BiLogoRedux } from "react-icons/bi";
import { SiD3Dotjs, SiCsharp } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

import C1 from '../assets/certifications/cert-1.png';
import C2 from '../assets/certifications/cert-2.png';
import C3 from '../assets/certifications/cert-3.png';
import C4 from '../assets/certifications/cert-4.png';
import C5 from '../assets/certifications/cert-5.png';
import C6 from '../assets/certifications/cert-6.png';

export const Data = [
    {
        id: 1,
        category: "education",
        icon: "icon-graduation",
        year: "2010 - 2015",
        title: "Elementary",
        desc: "Elementary school was a thrilling adventure filled with curiosity, adventure, and shared activities. Students focused on mastering basic abilities and creating a sense of wonder for their surroundings, while finding my inner self what am I when I grow up continuing to excel in my studies.",
    },
    {
        id: 2,
        category: "education",
        icon: "icon-graduation",
        year: "2015 - 2021",
        title: "Junior - Senior High School",
        desc: "Junior and Senior high school marked a significant period of independence and self-discovery, allowing for extensive study of various topics, social changes, and the development of personal interests and strengths. It also provided opportunities for professional growth and technical skill enhancement.",
    },
    {
        id: 3,
        category: "education",
        icon: "icon-graduation",
        year: "2023 - Current",
        title: "College",
        desc: "Undergraduate years in information technology focused on programming, database administration, network security, and cloud computing, enhancing technical skills, communication, and technological awareness through internships, projects, and coding competitions.",
    },
    {
        id: 4,
        category: "experience",
        icon: "icon-briefcase",
        year: "2020 - 2021",
        title: "Canteen Cashier",
        desc: "Serving quality dishes to the employees and customers, checking financial reports about daily sales and compiled financial information and maintaining the cleanliness of the workplace. This experience taught me the importance of teamwork, time management, and customer service.",
    },
    {
        id: 5,
        category: "experience",
        icon: "icon-briefcase",
        year: "2024",
        title: "Front-End Website Designing",
        desc: "Participated in online web design competitions, creating responsive websites using ReactJS. I have also gained experience in creating a website from scratch, including the design, layout, prototyping, testing and functionality of the website",
    },
    {
        id: 6,
        category: "experience",
        icon: "icon-briefcase",
        year: "2024",
        title: "Teaching Personnel: Programming Basics",
        desc: "Assisted in teaching programming basics to students, including Python, JavaScript, and C++. I have also helped some students to understand the basic concepts of programming and how to apply them in real-world scenarios and projects.",
    },
];

export const Certs = [
    { 
        title: "Responsive Web Design",
        icon: <FaFreeCodeCamp />,
        issuer: "freeCodeCamp",
        skills: [ <FaHtml5 />, <FaCss3 /> ],
        image: C1,
        link: "https://www.freecodecamp.org/certification/fcc1e99ef4c-0e74-4c4a-bc77-856979da15ec/responsive-web-design" 
    },
    { 
        title: "JavaScript Algorthms and Data Structures",
        icon: <FaFreeCodeCamp />,
        issuer: "freeCodeCamp",
        skills: [ <IoLogoJavascript /> ],
        image: C2,
        link: "https://www.freecodecamp.org/certification/fcc1e99ef4c-0e74-4c4a-bc77-856979da15ec/javascript-algorithms-and-data-structures-v8"
    },
    { 
        title: "Front End Development Libraries",
        icon: <FaFreeCodeCamp />,
        issuer: "freeCodeCamp",
        skills: [ <FaBootstrap />, <BiLogoJquery />, <FaSass />, <BiLogoReact />, <BiLogoRedux /> ],
        image: C3,
        link: "https://www.freecodecamp.org/certification/fcc1e99ef4c-0e74-4c4a-bc77-856979da15ec/front-end-development-libraries"
    },
    { 
        title: "Data Visualization",
        icon: <FaFreeCodeCamp />,
        issuer: "freeCodeCamp",
        skills: [ <SiD3Dotjs />, <VscJson /> ],
        image: C4,
        link: "https://www.freecodecamp.org/certification/fcc1e99ef4c-0e74-4c4a-bc77-856979da15ec/data-visualization"
    },
    { 
        title: "Foundational C# with Microsoft",
        icon: <FaMicrosoft />,
        issuer: "Microsoft",
        skills: [ <SiCsharp /> ],
        image: C5,
        link: "https://www.freecodecamp.org/certification/fcc1e99ef4c-0e74-4c4a-bc77-856979da15ec/foundational-c-sharp-with-microsoft"
    },
    { 
        title: "Meta Front End Developer",
        icon: <FaMeta />,
        issuer: "Meta",
        skills: [ <IoLogoJavascript />, <FaHtml5 />, <FaCss3 />, <FaBootstrap />, <BiLogoReact /> ],
        image: C6,
        link: "https://coursera.org/share/b0069cb6b80bdd9906e1887ddae708df"
    },
];