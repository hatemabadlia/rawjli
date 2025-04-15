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
      "Rawejli completely transformed our online presence. The website they built is fast, modern, and represents our brand perfectly.",
    name: "Houssem meki",
    designation: "Founder",
    company: "Miska ",
    image: "data:image/png;base64,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",
  },
  {
    testimonial:
      "Our Facebook ad campaign with Rawejli generated over 3x ROI in just two weeks. We were blown away by the results and targeting strategy!",
    name: "chames fathon",
    designation: "CO Founder",
    company: "Presto ",
    image: "https://scontent.fczl1-2.fna.fbcdn.net/v/t39.30808-6/461934869_1714213256093758_7669057906760091266_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFN985tPVhLVIqQs8I2FCS_byej_dRRCHpvJ6P91FEIegvMazOe1tNoR9xT0KW7Br6z0elTgJqzRvrGfdJFO_f-&_nc_ohc=o7fhMNXwKYAQ7kNvwFBQjWP&_nc_oc=AdlVX-MWzAUfFRUIkz1swggweoxJ70tr4AuL58xg4xfpwyqEv9h5aSpBpYy4XLiQv9U&_nc_zt=23&_nc_ht=scontent.fczl1-2.fna&_nc_gid=CHZrbXHDp8FeuisC9DKSTg&oh=00_AfGhIAeQSS66-50cWglsn-xC6qs6k3pCM0S5JucPhIuZnQ&oe=68042F86",
  },
  {
    testimonial:
      "The 3D video created by Rawejli for our product launch was absolutely stunning. It boosted engagement and made our brand stand out.",
    name: "Lina Touati",
    designation: "Creative Lead",
    company: "Vision Studio",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
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
