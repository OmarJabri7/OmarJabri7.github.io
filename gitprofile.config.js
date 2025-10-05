// gitprofile.config.js

const config = {
  github: {
    username: 'OmarJabri7',
    sortBy: 'stars',
    limit: 6,
    exclude: { forks: false, projects: [] },
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/omarjabri23/',
    email: 'omarjabri967@gmail.com',
    website: 'https://omarjabri7.github.io/',
    phone: '+44 7926754605',
  },

  resume: {
    fileUrl: '', // Add your resume PDF link if you want a download button
  },

  skills: [
    'Python',
    'C++',
    'React.js',
    'SQL',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'AWS Lambda',
    'AWS EKS/ECR',
    'AWS Amplify',
    'AWS API Gateway',
    'Azure AKS',
    'GCP GKE',
    'Pandas',
    'NumPy',
    'TensorFlow',
    'PyTorch',
    'OpenCV',
    'FastAPI',
    'Flask',
    'LangChain',
    'RAG',
    'CI/CD',
    'GitHub Actions',
    'Jenkins',
    'RabbitMQ',
    'Linux',
    'TDD',
  ],

  experiences: [
    {
      company: 'JP Morgan & Chase',
      position: 'Software Engineer',
      from: 'Mar 2025',
      to: 'Present',
      companyLink: 'https://www.jpmorganchase.com/',
    },
    {
      company: 'Hanzo',
      position: 'Software Engineer (Contract)',
      from: 'May 2024',
      to: 'Mar 2025',
      companyLink: 'https://www.hanzo.co/',
    },
    {
      company: 'Dxcover',
      position: 'Software Engineer',
      from: 'Dec 2023',
      to: 'May 2024',
      companyLink: 'https://www.dxcover.com/',
    },
    {
      company: 'JP Morgan & Chase',
      position: 'Software Engineer',
      from: 'Nov 2021',
      to: 'Jul 2023',
      companyLink: 'https://www.jpmorganchase.com/',
    },
    {
      company: 'Next Care',
      position: 'Software & Computer Vision Engineer',
      from: 'Jan 2020',
      to: 'Jul 2020',
      companyLink: 'https://www.nextcarehealth.com/',
    },
  ],

  certifications: [
    {
      name: 'Python Gold Certificate',
      body: 'Official Testdome Certificate',
      year: 'May 2021',
      link: 'https://www.testdome.com/certificates/530ef59dd82e4e6fbb2cb491a53d068e',
    },
    {
      name: 'Python Data Science Silver Certificate',
      body: 'Official Testdome Certificate',
      year: 'Mar 2021',
      link: 'https://www.testdome.com/certificates/9cca03c382e64d61a4c7d4f22855ce07',
    },
  ],

  education: [
    {
      institution: 'University of Glasgow',
      degree: "MSc in Robotics and Artificial Intelligence",
      from: '2020',
      to: '2021',
    },
    {
      institution: 'Lebanese American University',
      degree: "BSc in Computer Science",
      from: '2016',
      to: '2019',
    },
  ],

  externalProjects: [
    {
      title: 'AfterWords',
      description:
        'LLM-driven voice-cloning pipeline on AWS Lambda using Docker + ECR. Orchestrated with LangChain and Terraform for fully automated, serverless infrastructure.\nTools: Python, AWS Lambda, Docker, ECR, Terraform, LangChain',
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/AfterWords/main/docs/afterwords.png',
      link: 'https://github.com/OmarJabri7/AfterWords',
    },
    {
      title: 'LexMed',
      description:
        'Built a Retrieval-Augmented Generation (RAG) system for doctors, leveraging LangChain and ChromaDB to process and query DICOM medical data. Enables natural language Q&A and summarization on large patient datasets.\nTools: Python, LangChain, RAG, ChromaDB, DICOM',
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/LexMed/main/docs/lexmed.png',
      link: 'https://github.com/OmarJabri7/LexMed',
    },
    {
      title: 'AliExpress Store Analyzer',
      description:
        'Streamlit + FastAPI application to scrape and analyze AliExpress store data using Selenium, proxy rotation, and LangChain for structured extraction. Delivered interactive dashboards for insights.\nTools: Python, FastAPI, Streamlit, Selenium, LangChain',
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/scraper/main/docs/scraper.png',
      link: 'https://github.com/OmarJabri7/scraper',
    },
    {
      title: 'GoHalalPy',
      description:
        'LLM-powered FastAPI service for halal restaurant classification using LangChain + OpenAI. Integrated Firebase Firestore with geohashing for scalable storage and retrieval.\nTools: Python, FastAPI, LangChain, Firebase Firestore',
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/GoHalalPy/main/docs/gohalal.png',
      link: 'https://github.com/OmarJabri7/GoHalalPy',
    },
    {
      title: 'Speech-to-Medical-Documents',
      description:
        'Voice-driven clinical documentation tool that converts doctors’ speech into structured medical forms. Built with Google Speech-to-Text, Tesseract OCR, and automated PDF generation for healthcare workflows.\nTools: Python, GCP Speech-to-Text, Tesseract OCR',
      imageUrl: 'https://raw.githubusercontent.com/OmarJabri7/Speech-to-Medical-Documents/main/docs/speech.png',
      link: 'https://github.com/OmarJabri7/Speech-to-Medical-Documents',
    },
  ],

  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {
    defaultTheme: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    hideAvatarRing: false,
    themes: ['light', 'dark', 'business', 'dracula', 'luxury', 'night'],
    customTheme: {
      primary: '#2563eb',
      secondary: '#10b981',
      accent: '#f59e0b',
      neutral: '#1f2937',
      'base-100': '#f3f4f6',
      '--rounded-box': '1.5rem',
      '--rounded-btn': '1.5rem',
    },
  },
};

export default config;