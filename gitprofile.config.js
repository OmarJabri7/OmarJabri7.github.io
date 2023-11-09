// gitprofile.config.js

const config = {
  github: {
    username: 'OmarJabri7', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/omarjabri23/',
    email: 'omarjabri967@gmail.com',// example: '1/jeff-atwood'
    website: 'https://omarjabri7.github.io/',
    phone: '+44 7926754605',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C++',
    'React.js',
    'SQL',
    'MongoDB',
    'AWS',
    'PostgreSQL',
    'Git',
    'Docker',
    'MySQL',
    'Redis',
    'OpenCV',
    'Pandas',
    'Tensorflow',
    'Hypothesis',
    'Pytorch',
    'Flask',
    'Fast API',
    'Jenkins',
    'Bottle',
    'RabbitMQ'
  ],
  experiences: [
    {
      company: 'Ivy',
      position: 'Machine Learning Engineer (Redundancies due to Company Financial Issues)',
      from: 'August 2023',
      to: 'September 2023',
      companyLink: 'https://unify.ai',
    },
    {
      company: 'JP Morgan and Chase',
      position: 'Software Engineer',
      from: 'November 2021',
      to: 'July 2023',
      companyLink: 'https://www.jpmorganchase.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Glasgow',
      degree: "Master's Degree in Robotics and Artificial Intelligence",
      from: '2020',
      to: '2021',
    },
    {
      institution: 'Lebanese American University',
      degree: "Bachelor's Degtee in Computer Science",
      from: '2016',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Cycle Buddy',
      description:
        "Our project, Cycle Buddy, is a system that detects cars that endanger everyday cyclists.\nOnce the car overpasses the biker's path with a relative high speed and within a close distance, the system can detect this unjust act and stimulates a camera to capture the car's plate number and recognizes it using a Computer Vision API.\nTools: C++, Python, OpenCV, RaspberryPi",
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/Cycle_Buddy/main/Images/logo/Logo.png',
      link: 'https://github.com/OmarJabri7/Cycle_Buddy',
    },
    {
      title: 'Robotics RoboCup Challenge',
      description:
        "This project is about designing and simulating the RoboCup challenge - the football match with robots as players. The simulation involves two teams of five robots competing against each other. The robots are designed as two-wheel differential drive machines with an internal logic processor and a capability to communicate with different robots. Our design is presented in a simulated environment that takes into account all constraints of the challenge.\nTools: Python, ROS, PyGame",
      imageUrl: 'https://raw.githubusercontent.com/szgula/UofG_Robotics_TDP/main/Images/Log/Robotic.png',
      link: 'https://github.com/OmarJabri7/Robotics-Football',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
