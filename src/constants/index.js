import {
    Ropemakers,
    Morrisons,
    Bluescreen,
    OutOut,
    carrent,
    jobit,
    tripguide,
    BITSecurity,
    BITTraining,
    Arterne
} from "../assets";

const projectsData = [
  {
    id: 1,
    title: "BIT Security",
    description: "Created for BluescreenIT, using PHP with the Laravel framework. It includes features such as dynamic page creation and a News Blog",
    image: BITSecurity,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BenWaters2004/BIT-Group",
    previewUrl: "https://thinkbitsecurity.co.uk/",
  },
  {
    id: 2,
    title: "BIT Training ",
    description: "Created for BluescreenIT, using WordPress. It includes features such as Arlo Training Courses and a News Blog",
    image: BITTraining,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://thinkbittraining.co.uk/",
  },
  {
    id: 3,
    title: "Get Classified",
    description: "An application to simplfy and automate the DBS and BPSS clearance process.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "#PrivateRepository",
    previewUrl: "https://classified.getclassified.co.uk/",
  },
  {
    id: 4,
    title: "Arterne CIC",
    description: "This Android mobile application was created for Arterne CIC a mental health charity based in Plymouth, with the goal of providing mental health infomation and suppport to thoes who need it.",
    image: Arterne,
    tag: ["All", "Mobile"],
    gitUrl: "#PrivateRepository",
    previewUrl: "#",
  },
];

const projects = [
  {
    name: "Arterne CIC",
    description:
      "This Android application was created for Arterne CIC a mental health charity based in Plymouth, with the goal of providing mental health infomation and suppport to thoes who need it. This app is currently in production but will be released in May.",
    tags: [
      {
      name: "Java",
      color: "blue-text-gradient",
      },
      {
      name: "ROOM",
      color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "b-waters.com",
  },
  {
    name: "BIT Group Websites",
    description:
      "All three websites were originally created using WordPress. In order to give us more control and improve SEO, I coded all three websites in PHP with the Laravel framework. As well as the standard websites, features such as dynamic page creation, automatically updating long-tail pages and training course pages were implemented.",
    tags: [
      {
      name: "Laravel",
      color: "blue-text-gradient",
      },
      {
      name: "PHP",
      color: "green-text-gradient",
      },
      {
      name: "Arlo",
      color: "pink-text-gradient",
      },
      {
      name: "Zoho SalesIQ",
      color: "yellow-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/BenWaters2004/BIT-Group",
  },
  {
    name: "Fresh Starts",
    description:
      "Single page application, for a social media network. Designed to meet university students studying at other universities or in other courses. This repository is private however my contribution can be viewed in the repository linked.",
    tags: [
        {
        name: "JavaScript",
        color: "blue-text-gradient",
        },
        {
        name: "C#",
        color: "green-text-gradient",
        },
        {
        name: "HTML",
        color: "pink-text-gradient",
        },
        {
        name: "CSS",
        color: "yellow-text-gradient",
        },
    ],
    image: jobit,
    source_code_link: "b-waters.com",
  },
];

export const navLinks = [
    {
        id: "about",
        title: "About Me",
    },
    {
        id: "work",
        title: "All Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
      id: "GitHub",
      title: "GitHub",
    },
    {
      id: "Linkedin",
      title: "Linkedin",
    },
];

const SocialLinks = [
  {
    title: "Projects Completed",
    num: projectsData.length.toString(),
  },
  {
    title: "Website Visits",
    num: "3000",
  },
  {
    title: "5 star reviews",
    num: "0"
  },
  {
    title: "Years Experience",
    num: "4"
  },
];

const experiences = [
  {
    title: "Junior DevSec Ops Analyst",
    company_name: "BIT Security (BIT group)",
    icon: Bluescreen,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
        "In this role my responsibilities encompass website development as well as the implementation and maintenance of PESA - a comprehensive system dedicated to facilitating DBS (Disclosure and Barring Service) and BPSS (Baseline Personnel Security Standard) screening processes.",
        "Due to this being my first role in the industry, there was also a strong focus on learning. I dedicated an hour a day to learning and improving in my role, this included watching what/how other teams in the security operations center do/function.",
    ],
  },
  {
    title: "Club Bartender",
    company_name: "Out Out Ibiza",
    icon: OutOut,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
        "Originally hired as a bartender for their club, I branched out into other roles; PR and bartending the main bar downstairs. This is a fast paced environment requiring me to adapt and problem solve quickly.",
    ],
  },
  {   
    title: "Customer Assistant",
    company_name: "Morrisons",
    icon: Morrisons,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
        "During this time I primarily worked in produce, however would always be helping other departments where possible and so I also worked in: home delivery, checkouts, the cafe, fresh and the garden center. This helped me to develop a range of skills and allowed me to have a better understanding of how the store was run. As a result I was able to provide better customer service and leave the customer feeling as if I went above and beyond.",
    ],
  },
  {
      title: "Bartender",
      company_name: "The Ropemakers",
      icon: Ropemakers,
      iconBg: "#E6DEDD",
      date: "2019 - 2022",
      points: [
          "For my first year working here, I worked as a waiter. Waiting on tables and providing great customer service. From my second year onwards I worked on the bar, whilst continuing to wait on tables, operating the coffee machine and general cleaning. By the end of my time here, I was running shifts, training new staff, cashing up the tills, closing down the pub and changing barrels/operating the cellar.",
      ],
  },
];

const testimonials = [
    {
        testimonial:
            "I wish that I could have cloned him.",
        name: "Geraldine Baker",
        designation: "Landlady/Owner",
        company: "The Ropemakers",
        image: "https://www.marshwoodvale.com/cms/wp-content/uploads/2020/01/Geraldine-Baker.jpg",
    },
    {
        testimonial:
            "Coming Soon",
        name: "Clay Bryan",
        designation: "Security Team Lead",
        company: "BIT Security",
        image: "https://media.licdn.com/dms/image/C4D03AQG4GqdWMQ_e6A/profile-displayphoto-shrink_100_100/0/1574359130794?e=1720051200&v=beta&t=QT780DyuJlxR4HIVIYjnlBle9nBYllJ9iDtr0spYaYM",
    },
    {
        testimonial:
            "Future refrence",
        name: "Hayden Moore",
        designation: "General Manager",
        company: "OutOut Ibiza",
        image: "https://media.licdn.com/dms/image/D5603AQGWZfGKEagpBA/profile-displayphoto-shrink_100_100/0/1678737877832?e=1720051200&v=beta&t=Tk26TqqvGXtH9Thhpt0EwIup2K0_gBB8YIWWF69L4OM",
    },
];



export { experiences, testimonials, projects, SocialLinks, projectsData };