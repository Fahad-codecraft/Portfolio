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
  notenexusIcon,
  promptmania,
  promptmaniaIcon,
  threads,
  threadsIcon
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
  {
    name: "PromptMania App",
    description:
      "Welcome to PromptMania, the ultimate web app for sharing AI prompts! Discover a vast collection of creative ideas without any sign-in hassle. However, to unlock the full potential, simply sign in with Google and start crafting your personalized prompts. With easy editing and tag-based searching, PromptMania is your go-to platform for unleashing your imagination!",
    tags: [
      {
        name: "Next.js",
        color: "black-text-gradient",
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
        name: "Google Auth",
        color: "color-text-gradient",
      },

    ],
    image: promptmania,
    source_code_link: "https://github.com/Fahad-codecraft/PromptMania",
    projIcon: promptmaniaIcon,
    project_link: "https://promptmania-next.vercel.app/"
  },
  {
    name: "Threads Clone",
    description:
      "Welcome to Threads clone, here you can login and interact with your friends, you can post a thread, reply to a thread, edit your profile, and much more.",
    tags: [
      {
        name: "Next.js",
        color: "black-text-gradient",
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
        name: "Google Authentication",
        color: "color-text-gradient",
      },

    ],
    image: threads,
    source_code_link: "https://github.com/Fahad-codecraft/Threads-App",
    projIcon: threadsIcon,
    project_link: "https://threads-app-seven.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };