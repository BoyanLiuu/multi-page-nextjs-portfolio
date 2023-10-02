import { v4 as uuidv4 } from 'uuid';

export type PersonalInformationType = {
  firstName: string;
  lastName: string;
  email: string;
  skillsExperience: {
    name: string;
    yearsOfExperience: string;
  }[];
  educationExperience: {
    id: string;
    degreeTitle: string;
    years: string;
    content: string[];
  }[];
  workExperience: {
    id: string;
    title: string;
    company: string;
    years: string;
    content: string[];
  }[];
  projects: {
    smallThumbnail: string;
    largeThumbnail: string;
    name: string;
    tags: string[];
    codeUrl: string;
    liveUrl: string;
  }[];

  about: string;
  socialMedias: {
    name: string;
    imgSrc: string;
    link: string;
  }[];
};

export const PERSONAL_INFORMATION: PersonalInformationType = {
  firstName: 'Adam',
  lastName: 'Keyes',
  email: 'xx@gmail.com',
  skillsExperience: [
    { name: 'HTML', yearsOfExperience: '4 Years Experience' },
    { name: 'CSS', yearsOfExperience: '4 Years Experience' },
    { name: 'Javascript', yearsOfExperience: '4 Years Experience' },
    { name: 'Accessibility', yearsOfExperience: '4 Years Experience' },
    { name: 'React', yearsOfExperience: '4 Years Experience' },
    { name: 'Sass', yearsOfExperience: '4 Years Experience' }
  ],
  educationExperience: [
    {
      id: uuidv4(),
      degreeTitle: 'Associate’s Degree in Computer Science',
      years: '2015 - 2019',
      content: ['University of Maryland - College Park, College Park, MD']
    },
    {
      id: uuidv4(),
      degreeTitle: "Bachelor's Degree in Computer Science",
      years: '2019 - 2021',
      content: ['University of Maryland - College Park, College Park, MD']
    }
  ],
  workExperience: [
    {
      id: uuidv4(),
      title: 'Web developer(Contractor)',
      years: 'Mar. 2020 – Present',
      company: 'Maryland Transportation Institute',
      content: [
        `Developed a prototype used to visualize transportation information using React.js, Mapbox, Context API.`,
        `Refactored React components with the help of hooks make the code cleaner and reduce the amount of code by 15%.`,
        `Increased code quality by Introducing name convention, Eslint, prettier to the team member.`
      ]
    },
    {
      id: uuidv4(),
      title: 'Software Engineer(Intern)',
      years: 'Sept. 2020 – Mar, 2021',
      company: 'Fraunhofer USA CESE',
      content: [
        'Developed a visual inspection system to help analyze defective parts in the washing machine for Samsung. The system developed improved the manufacturing process by 30%.',
        'Built modular and reusable components.',
        'Cooperated with team members using Git & Gitlab(Agile Development Cycle).',
        'Implemented Python Flask web framework to create RESTful API backend service.'
      ]
    },
    {
      id: uuidv4(),
      title: 'Web  Developer(Intern)',
      years: 'May. 2020 – Aug. 2020',
      company: 'SpringGem Weather Information',
      content: [
        "Built out features of weather and road conditions forecasting web app for a professor under the University of Maryland's Department of Atmospheric and Oceanic Sciences, using Django and PostgreSQL",
        'Developed an interactive visualization map for COVID-19 pandemic, using Javascript, Bootstrap in the frontend, and Python Django, PostgreSQL for the backend.'
      ]
    }
  ],
  about:
    'Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.',
  socialMedias: [
    {
      name: 'Github',
      imgSrc: './images/icon-github.svg',
      link: 'https://github.com/'
    },
    {
      name: 'Frontend mentor',
      imgSrc: './images/icon-frontend-mentor.svg',
      link: 'https://www.frontendmentor.io/challenges'
    },
    {
      name: 'Linkedin',
      imgSrc: './images/icon-linkedin.svg',
      link: 'https://www.linkedin.com/'
    },
    {
      name: 'Twitter',
      imgSrc: './images/icon-twitter.svg',
      link: 'https://twitter.com/'
    }
  ],
  projects: [
    {
      smallThumbnail: './images/thumbnail-project-1-small.webp',
      largeThumbnail: './images/thumbnail-project-1-large.webp',
      name: 'DESIGN PORTFOLIO',
      tags: ['HTML', 'CSS'],
      codeUrl: 'https://www.frontendmentor.io/challenges',
      liveUrl: 'https://www.frontendmentor.io/challenges'
    },
    {
      smallThumbnail: './images/thumbnail-project-2-small.webp',
      largeThumbnail: './images/thumbnail-project-2-large.webp',
      name: 'E-LEARNING LANDING PAGE',
      tags: ['HTML', 'CSS'],
      codeUrl: 'https://www.frontendmentor.io/challenges',
      liveUrl: 'https://www.frontendmentor.io/challenges'
    },
    {
      smallThumbnail: './images/thumbnail-project-3-small.webp',
      largeThumbnail: './images/thumbnail-project-3-large.webp',
      name: 'TODO WEB APP',
      tags: ['HTML', 'CSS', 'Javascript'],
      codeUrl: 'https://www.frontendmentor.io/challenges',
      liveUrl: 'https://www.frontendmentor.io/challenges'
    },
    {
      smallThumbnail: './images/thumbnail-project-4-small.webp',
      largeThumbnail: './images/thumbnail-project-4-large.webp',
      name: 'ENTERTAINMENT WEB APP',
      tags: ['HTML', 'CSS', 'Javascript'],
      codeUrl: 'https://www.frontendmentor.io/challenges',
      liveUrl: 'https://www.frontendmentor.io/challenges'
    },
    {
      smallThumbnail: './images/thumbnail-project-5-small.webp',
      largeThumbnail: './images/thumbnail-project-5-large.webp',
      name: 'MEMORY GAME',
      tags: ['HTML', 'CSS', 'Javascript'],
      codeUrl: 'https://www.frontendmentor.io/challenges',
      liveUrl: 'https://www.frontendmentor.io/challenges'
    },
    {
      smallThumbnail: './images/thumbnail-project-6-small.webp',
      largeThumbnail: './images/thumbnail-project-6-large.webp',
      name: 'ART GALLERY SHOWCASE',
      tags: ['HTML', 'CSS', 'Javascript'],
      codeUrl: 'https://www.frontendmentor.io/challenges',
      liveUrl: 'https://www.frontendmentor.io/challenges'
    }
  ]
};
