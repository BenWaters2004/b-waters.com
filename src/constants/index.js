import {
    linkedin,
    github,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    Plymouth,
    Ropemakers,
    Morrisons,
    Bluescreen,
    OutOut,
    carrent,
    jobit,
    tripguide,
    threejs,
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

const SocialLinks = [
    {
        title: "Linkedin",
        icon: linkedin,
        link: 'https://www.linkedin.com/in/benwaters2004/',
    },
    {
        title: "GitHub",
        icon: github,
        link: 'https://github.com/BenWaters2004',
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
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
        title: "Club Bartender",
        company_name: "Out Out Ibiza",
        icon: OutOut,
        iconBg: "#E6DEDD",
        date: "2023 - 2024",
        points: [
            "Originally hired as a bartender for their club, I branched out into other roles; PR and bartending the main bar downstairs. This is a fast pasted environment requiring me to adapt and problem solve quickly.",
        ],
    },
    {
        title: "Cyber Security",
        company_name: "BluescreenIT (BIT group)",
        icon: Bluescreen,
        iconBg: "#E6DEDD",
        date: "2024 - Present",
        points: [
            "Will be updated shortly",
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
        name: "Sean Harris",
        designation: "Senior Manager",
        company: "Morrisons",
        image: "https://media.licdn.com/dms/image/D4E03AQE172jJKQ3QdQ/profile-displayphoto-shrink_800_800/0/1681927601973?e=2147483647&v=beta&t=hjufZIRkC-Gtyu04d61Ge3NYS3BiA1WLZ5U-r7_s4Lg",
    },
    {
        testimonial:
            "Future refrence",
        name: "Hayden Moore",
        designation: "General Manager",
        company: "OutOut Ibiza",
        image: "https://media.licdn.com/dms/image/D5603AQGWZfGKEagpBA/profile-displayphoto-shrink_100_100/0/1678737877832?e=1709164800&v=beta&t=uW6rCP2n3e1gRWjtNJuZ5FWwdVLiy-_u5AEAdpiKawU",
    },
];

const projects = [
    {
        name: "Friend Bubble",
        description:
            "An encrypted social media network, to chat and meet new people. Created in 2022 for my A-level computer science project. All messages are encrypted",
        tags: [
            {
            name: "PHP",
            color: "blue-text-gradient",
            },
            {
            name: "HTML",
            color: "green-text-gradient",
            },
            {
            name: "CSS",
            color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/BenWaters2004/friend-bubble.org",
        },
        {
        name: "Fresh Starts",
        description:
            "Single page application, for a social media network. Designed to meet university students studying at other universities or in other courses.",
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
        source_code_link: "https://github.com/",
        },
        {
        name: "Portfolio",
        description:
            "This webiste was built in order to demostrate my ability and provide an easy way to contact me. Using a range of frameworks that I had never user before.",
        tags: [
            {
            name: "React",
            color: "blue-text-gradient",
            },
            {
            name: "Vite",
            color: "green-text-gradient",
            },
            {
            name: "Three.Js",
            color: "pink-text-gradient",
            },
            {
            name: "tailwindCSS",
            color: "yellow-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { technologies, experiences, testimonials, projects, SocialLinks };