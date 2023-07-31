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
  threejs,
  Braces,
  react,
  database,
  git_t,
  linksaver,
  shuffle,
  socialpedia,
  tsks,
  tsksIcon,
  linkSaverIcon,
  github,
  breeze,
  breezeIcon,
  notenexus,
  notenexusIcon
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
    source_code_link: "https://github.com/Fahad-codecraft/Link-Saver",
    projIcon: linkSaverIcon,
    project_link: "https://ytlinksaver.vercel.app"
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
    source_code_link: "https://github.com/Fahad-codecraft/SocialPedia",
    projIcon: github,
    project_link: "https://github.com/Fahad-codecraft/SocialPedia"
  },
  {
    name: "Tsks - Todo App",
    description:
      "The ultimate todo app with a sleek interface, interactive animations, sorting options, powerful search, and cross-platform compatibility. Stay organized, complete tasks effortlessly, and boost your productivity with tsks.",
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
      {
        name: "Express.js",
        color: "white-text-gradient",
      },
    ],
    image: tsks,
    source_code_link: "https://github.com/Fahad-codecraft/Todo-App",
    projIcon: tsksIcon,
    project_link: "https://tskease.vercel.app"
  },
  {
    name: "Breeze - Weather App",
    description:
      "Your reliable weather app for the modern explorer. Get a detailed 5-day forecast, precise 3-hour updates, weather types, current temperature, and more to stay ahead of changing conditions and plan your day with confidence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: breeze,
    source_code_link: "https://github.com/Fahad-codecraft/weather-app",
    projIcon: breezeIcon,
    project_link: "https://breezeweather.vercel.app/"
  },
  {
    name: "NoteNexus - Notes App",
    description:
      "Introducing NoteMaster, your ultimate note-taking companion. Organize your thoughts effortlessly with features to add, favorite, and archive notes. Delete and recover with ease using our convenient trash function. Streamline your note-taking experience and stay productive with NoteMaster!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "white-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
    ],
    image: notenexus,
    source_code_link: "https://github.com/Fahad-codecraft/Notes-App",
    projIcon: notenexusIcon,
    project_link: "https://notenexus.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };