import {
    BITSecurity,
    BITTraining,
    Classified,
    LSS,
    Mosterton,
} from "../assets";

const projectsData = [
  {
    id: 1,
    title: "BIT Security",
    description: "Created for BluescreenIT, using PHP with the Laravel framework. It includes features such as a News Blog, dynamic page creation and updating to quickly changing content.",
    image: BITSecurity,
    tag: ["Highlighted", "All", "Web", "website", "PHP", "Laravel"],
    gitUrl: "https://github.com/BenWaters2004/BIT-Group",
    previewUrl: "https://thinkbitsecurity.co.uk/",
  },
  {
    id: 2,
    title: "BIT Training",
    description: "Created for BluescreenIT with WordPress to allow the use of Arlo's plugin. It includes features such as Arlo Training Courses, apprenticeship offers and a News Blog.",
    image: BITTraining,
    tag: ["Highlighted", "All", "Web", "website", "WordPress"],
    gitUrl: "#PrivateRepository",
    previewUrl: "https://thinkbittraining.co.uk/",
  },
  {
    id: 3,
    title: "Get Classified",
    description: "An application to simplfy and automate the DBS and BPSS clearance process for organisations. Using the DBS API and an admin team, Classified clears over 200 candidates per month.",
    image: Classified,
    tag: ["Highlighted", "All", "Web", "website", "PHP", "Laravel"],
    gitUrl: "#PrivateRepository",
    previewUrl: "https://classified.getclassified.co.uk/",
  },
  {
    id: 4,
    title: "LSS - Lewis Scaffold Solutions",
    description: "A proffesional business page to highlight the services they offer, built with JavaScript and React. The client was so happy with the result, they hired me to take on a larger project for them.",
    image: LSS,
    tag: ["Highlighted", "All", "Web", "website", "JavaScript", "React", "Vite"],
    gitUrl: "https://github.com/BenWaters2004/LSS",
    previewUrl: "https://lewisscaffoldsolutions.com/",
  },
  {
    id: 5,
    title: "Mosterton Preschool",
    description: "Built with JavaScript and React, this website and admin console is for Mosterton Preschool. The design reflects both their proffesional nature whilst keeping a childish element.",
    image: Mosterton,
    tag: ["Highlighted", "All", "Web", "website", "JavaScript", "React", "Vite"],
    gitUrl: "https://github.com/BenWaters2004/Mosterton-Preschool",
    previewUrl: "https://demo.b-waters.com/",
  },
];

export const navLinks = [
    {
        id: "contact",
        title: "Contact Me",
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
    num: "75000",
  },
  {
    title: "Happy Clients",
    num: "4"
  },
  {
    title: "Years Experience",
    num: "4"
  },
];

export { SocialLinks, projectsData };