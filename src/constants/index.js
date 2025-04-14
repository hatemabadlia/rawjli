import {
  mobile,
  backend,
  creator,
  web,
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
  aftereffects,
  premiere,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  animation,
  creative,
  illustration,
  threed,
  social,
  mobiledev,
  webdev,
  ecom,
  freelance,
  Blender,
  flutter,
  hatem,
  fbads,
  ps,
  ai,
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
    title: "Web Development",
    icon: webdev,
  },
  {
    title: "Mobile App Development",
    icon: mobiledev,
  },
  {
    title: "Facebook Ads & Social Media Marketing",
    icon: social,
  },
  {
    title: "3D Video Production (Blender)",
    icon: threed,
  },
  {
    title: "Branding & Graphic Design",
    icon: illustration,
  },
  {
    title: "Content Creation & Copywriting",
    icon: creative,
  },
  {
    title: "Motion Graphics & Animation",
    icon: animation,
  },
  {
    title: "E-commerce Store Development",
    icon: ecom,
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
    name: "flutter",
    icon: flutter,
  },
  {
    name: "ai",
    icon: ai,
  },
  {
    name: "photoshop",
    icon: ps,
  },
  {
    name: "Facebook Ads",
    icon: fbads,
  },
 
  {
    name: "adobe premiere pro",
    icon: premiere,

  },
  {
    name: "adobe after effects",
    icon: aftereffects,
    
  },
  {
    name: "blender",
    icon: Blender,
  },
  
];

const experiences = [
  {
    title: "Founder & Lead Developer",
    company_name: "rawjli  ",
    icon: starbucks,
    iconBg: "#915EFF",
    date: "2023 - Present",
    points: [
      "Founded Hdtra to provide high-end web & mobile development, digital marketing, and 3D video production services.",
      "Built custom web solutions for multiple businesses, increasing engagement by 200%.",
      "Managed ad campaigns generating over $100,000 in revenue for clients through Facebook & Google Ads.",
      "Led a team of designers, developers, and marketers to create innovative solutions for clients worldwide.",
    ],
  },
  {
    ttitle: "Web & Mobile Developer",
    company_name: "rawjli Freelance Projects",
    icon: freelance,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Developed and maintained web applications using React.js, Next.js, and Node.js.",
      "Created high-performance mobile apps using React Native & Flutter for e-commerce & service-based businesses.",
      "Implemented API integrations, real-time chat systems, and secure payment gateways.",
    ],
  },
  {
    title: "Facebook Ads Specialist",
    company_name: "rawjli Marketing",
    icon: social,
    iconBg: "#E6DEDD",
    date: "2020 - Present",
    points: [
      "Ran over 100 successful Facebook ad campaigns, achieving an average ROI of 5X.",
      "Optimized audience targeting & creative strategies for e-commerce and service businesses.",
      "Managed advertising budgets of up to $1,000/month with high conversion rates.",
    ],
  },
  {
    title: "3D Video & Motion Graphics Creator",
    company_name: "rawjli Creative Studio",
    icon: threed,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Created professional 3D videos & animations using Blender for advertising and branding.",
      "Produced motion graphics & animated ads for high-converting digital campaigns.",
      "Worked with businesses to develop engaging 3D product presentations and explainer videos.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  
];
const members = [
  { name: "hatem abadlia ", role: "Web Developer", photo: hatem },
  { name: "Jane Smith", role: "3D Artist", photo: css},
  { name: "Mark Johnson", role: "Marketing Specialist", photo: Blender },
];

export { services, technologies, experiences, testimonials, projects ,members};
