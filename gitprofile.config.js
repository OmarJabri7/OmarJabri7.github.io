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
    {
      company: 'Next Care',
      position: 'Software + Computer Vision Engineer',
      from: 'Jan 2020',
      to: 'July 2020',
      companyLink: 'https://www.nextcarehealth.com/',
    },
  ],
  certifications: [
    {
      name: 'Python Gold Certificate',
      body: 'Official Testdome Certificate',
      year: 'May 2021',
      link: 'https://www.testdome.com/certificates/530ef59dd82e4e6fbb2cb491a53d068e'
    },
    {
      name: 'Python Data Science Silver Certificate',
      body: 'Official Testdome Certificate',
      year: 'March 2021',
      link: 'https://www.testdome.com/certificates/9cca03c382e64d61a4c7d4f22855ce07'
    },
  ], 
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
      title: 'Clinical Speech to Medical Documents',
      description:
      "This system is an interactive application designed for medical professionals to capture and integrate notes into documents via voice commands. Utilizing Google Cloud's Speech-to-Text for transcription, it enhances documentation workflows by transcribing spoken language in real time, ensuring accurate entries into medical records.\nTools: Python, OpenCV, Google Cloud Speech-to-Text, Tesseract OCR",
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/DNGR/main/lib/assets/ramosa_logo_2.png',
      link: 'https://github.com/OmarJabri7/Speech-to-Medical-Documents/tree/main',
    },
    {
      title: 'Bio Signal Real Time AI Denoiser',
      description:
        "The 'Synthetic EEG Artifact Removal System' is a sophisticated toolkit for EEG signal enhancement. This system specializes in generating synthetic EEG waves, establishing noise sources, and evaluating signal-to-noise ratios. It incorporates advanced statistical methods to confirm the efficacy of noise filtering techniques. The toolkit is developed with a combination of Makefile, C++, Python, C, CMake, and Shell scripts, showcasing a versatile and robust approach to bio-signal processing.\nTools: C++, Python, C, CMake, Makefile, Shell.",
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/Bio-Signal-Artifact-Removal/main/eeg.png',
      link: 'https://github.com/OmarJabri7/Bio-Signal-Artifact-Removal',
    },
    {
      title: 'Robotics RoboCup Challenge',
      description:
        "This project is about designing and simulating the RoboCup challenge - the football match with robots as players. The simulation involves two teams of five robots competing against each other. The robots are designed as two-wheel differential drive machines with an internal logic processor and a capability to communicate with different robots. Our design is presented in a simulated environment that takes into account all constraints of the challenge.\nTools: Python, ROS, PyGame",
      imageUrl: 'https://raw.githubusercontent.com/szgula/UofG_Robotics_TDP/main/Images/Log/Robotic.png',
      link: 'https://github.com/OmarJabri7/Robotics-Football',
    },
    {
      title: 'Robotics Chess',
      description:
        "Developed a simulation using ROS of the Baxter robot setting up a chess game following a set of rules and using its propeller arm to move chess pieces accordingly\nTools: Python, ROS, Rviz, Gazebo, Linux",
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/Baxter-Chess-Robot/main/Screenshot%202023-11-09%20at%2011.17.07%20PM.png',
      link: 'https://github.com/OmarJabri7/Baxter-Chess-Robot',
    },
    {
      title: 'Exploverse NFT System',
      description:
        "Developed an NFT generation system that randomly generates n configurable sets of NFTs using rarities and weights aligned with different traits within the configurations\nTools: Python, Go, Solidity",
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/Exploverse-System/main/imgs_4_gif/WhatsApp%20Image%202022-01-21%20at%2012.09.23.jpeg',
      link: 'https://github.com/OmarJabri7/Exploverse-System/tree/main',
    },
    {
      title: 'Python Web Crawler/Scraper',
      description:
        "The system is a web scraping tool that automates the collection and processing of articles from Google searches based on user queries, using `selenium` for navigation and `BeautifulSoup` for parsing, and saves the data in JSON and CSV formats.\nTools: Python, Selenium",
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/news_scrapers/main/web-crawler.png?token=GHSAT0AAAAAACJ3YKR4MCPZXBMSX6VPVCREZKNN6EA',
      link: 'https://github.com/OmarJabri7/news_scrapers/tree/main',
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
