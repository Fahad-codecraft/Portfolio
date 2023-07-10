import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  Braces,
  react,
  database,
  git_t,
  linksaver,
  shuffle,
  socialpedia
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Programming Languages",
    company_name: "",
    icon: Braces,
    iconBg: "#383E56",
    date: "",
    points: [
      "HTML", "CSS", "JavaScript", "Python", 
    ],
  },
  {
    title: "Frameworks/Libraries",
    company_name: "",
    icon: react,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "React", "Tailwind CSS", "Node.js", "Express.js",
    ],
  },
  {
    title: "Databases",
    company_name: "",
    icon: database,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "MongoDb", "FireBase",
    ],
  },
  {
    title: "Version Control",
    company_name: "",
    icon: git_t,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Git",
    ],
  },
  {
    title: "Versatile Tech Professional",
    company_name: "",
    icon: shuffle,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Strong problem-solving and analytical skills",
      "Excellent attention to detail",
      "Effective communication and collaboration abilities",
      "Quick learner and adaptable to new technologies"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Links Saver",
    description:
      "Web-based platform that allows users to add Youtube Links and the app fetches the name, duration, channel Name and shows to the user.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: linksaver,
    source_code_link: "https://github.com/",
  },
  {
    name: "SocialPedia",
    description:
        "Web-based Social Media platform that allows users to add post, add/remove Friends, read comments. It has a DarkMode/lighMode Switch to switch between light mide and dark mode.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "white-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: socialpedia,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };