
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    javaimg,
    express,
    tailwind,
    nodejs,
    git,
    dyndox,
    acm,
    gogetstyle,
    gym,
    bootstrap,
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
      title: "HTML",
      icon: web,
    },
    {
      title: "CSS",
      icon: mobile,
    },
    {
      title: "JAVASCRIPT",
      icon: backend,
    },
    {
      title: "REACT JS",
      icon: creator,
    },
    {
      title: "NODE JS",
      icon: nodejs,
    },
    {
      title: "JAVA",
      icon: javaimg,
    },
    {
      title: "EXPRESS JS",
      icon : express,
    }
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "java",
      icon: javaimg,
    },
  
  ];
  
  const experiences = [
    {
      title: "Marketing manager at Dyndox",
      company_name: "Dyndox",
      icon: dyndox,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Develop and implement comprehensive marketing strategies",
        "Manage marketing campaigns and initiatives",
        "Analyze market trends and competitor activities",
        "Oversee the marketing budget and ensure cost-effective strategies",
        "Provide leadership and guidance to the marketing team",
      ],
    },
    {
      title: "MEMBER AT ACM STUDENT CHAPTER",
      company_name: "ACM",
      icon: acm,
      iconBg: "#E6DEDD",
      date: "Currently working",
      points: [
        "Improved programming, problem-solving, and algorithmic thinking through coding challenges and competitions.",
        "Worked in teams for projects and events, enhancing teamwork and communication skills.",
        "Gained leadership experience by organizing events, mentoring peers, and managing chapter activities.",
        "Learned how to plan, promote, and execute technical and non-technical events.",
        "Connected with industry professionals, alumni, and like-minded peers to explore career and learning opportunities."
       ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Fitness-Gym",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/Kashish0047/landing-page",
    },
    {
      name: "GoGetStyle",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: gogetstyle,
      source_code_link: "https://github.com/Kashish0047/GoGetStyle-E-commerce-website-",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };