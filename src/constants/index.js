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
    central,
    Ropemakers,
    Morrisons,
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
        title: "Barman",
        company_name: "The Ropemakers",
        icon: Ropemakers,
        iconBg: "#E6DEDD",
        date: "2019 - 2022",
        points: [
            "Serving behind the bar, including barrel changes and cleaning.",
            "Managerial tasks: such as cashing up, training staff, locking up and running shifts.",
            "Barman, Coffee barista and waiting tables.",
            "Dealing with difficult situations like bar fights, structural damage and first aid.",
        ],
    },
    {   
        title: "Customer Assistant",
        company_name: "Morrisons",
        icon: Morrisons,
        iconBg: "#383E56",
        date: "2022 - Present",
        points: [
            "Trained in several departments: produce, fresh, tills, home delivery.",
            "Tasks such as gap scans, code checking, restocking and helping customers when ever possible.",
            "Across two stores.",
        ],
    },
    {
        title: "Student Ambassador",
        company_name: "University of Plymouth",
        icon: Plymouth,
        iconBg: "#E6DEDD",
        date: "2023 - Present",
        points: [
            "This job is ver diverse in responsbilities from campus tours to clearing helplines.",
            "Highly social situations providing help to potential students, current students and the public.",
        ],
    },
    {
        title: "Club Bartender",
        company_name: "Out Out Ibiza",
        icon: Plymouth,
        iconBg: "#E6DEDD",
        date: "2023 - Present",
        points: [
            "This job is ver diverse in responsbilities from campus tours to clearing helplines.",
            "Highly social situations providing help to potential students, current students and the public.",
        ],
    },
    {
        title: "Cyber Security",
        company_name: "BluescreenIT (BIT group)",
        icon: Plymouth,
        iconBg: "#E6DEDD",
        date: "2023 - Present",
        points: [
            "This job is ver diverse in responsbilities from campus tours to clearing helplines.",
            "Highly social situations providing help to potential students, current students and the public.",
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
        name: "Unknown",
        designation: "N/A",
        company: "Not Applicable",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
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
            "This webiste, build in order to demostrate my ability and provide an easy way to contact me. Using a range of frameworks that I had never user before.",
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