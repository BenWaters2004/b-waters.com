import {
    Ropemakers,
    Morrisons,
    Bluescreen,
    OutOut,
    BITSecurity,
    BITTraining,
    Arterne,
    Classified
} from "../assets";

const projectsData = [
  {
    id: 1,
    title: "BIT Security",
    description: "Created for BluescreenIT, using PHP with the Laravel framework. It includes features such as a News Blog, dynamic page creation and updating to quickly changing content.",
    image: BITSecurity,
    tag: ["Highlighted", "All", "Web"],
    gitUrl: "https://github.com/BenWaters2004/BIT-Group",
    previewUrl: "https://thinkbitsecurity.co.uk/",
  },
  {
    id: 2,
    title: "BIT Training ",
    description: "Created for BluescreenIT with WordPress to allow the use of Arlo's plugin. It includes features such as Arlo Training Courses, apprenticeship offers and a News Blog.",
    image: BITTraining,
    tag: ["Highlighted", "All", "Web"],
    gitUrl: "/",
    previewUrl: "https://thinkbittraining.co.uk/",
  },
  {
    id: 3,
    title: "Get Classified",
    description: "An application to simplfy and automate the DBS and BPSS clearance process for organisations. Using the DBS API and an admin team, Classified clears over 200 candidates per month.",
    image: Classified,
    tag: ["Highlighted", "All", "Web"],
    gitUrl: "#PrivateRepository",
    previewUrl: "https://classified.getclassified.co.uk/",
  },
  {
    id: 4,
    title: "Arterne CIC",
    description: "This Android mobile application was created for Arterne CIC a mental health charity based in Plymouth, with the goal of providing mental health infomation and suppport to thoes who need it.",
    image: Arterne,
    tag: ["Highlighted", "All", "Mobile"],
    gitUrl: "#PrivateRepository",
    previewUrl: "#",
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




export { experiences, SocialLinks, projectsData };