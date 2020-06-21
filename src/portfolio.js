
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Rushikesh",
  title: "Hi everyone, I'm Rushi",
  subTitle: emoji("A passionate Full Stack Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / PHP and some other cool libraries and frameworks."),
  resumeLink: "https://docs.google.com/document/d/1miL3PHrF1h4WH5WnXezjVD_3IUQ4sNsfvLKndq9SueU/edit?usp=sharing"
};


// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Rushi-Kesh",
  linkedin: "https://www.linkedin.com/in/rushikesh-gaikwad-205807112/",
  gmail: "gaikwadrushikesh181@gmail.com",
  
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/rushikesh.gaikwad.3386"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",  
      company: "247 Software",
      companylogo: require("./assets/images/Logo.svg"),
      date: "June 2019 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Incubator Intern",   
      company: "Organic Bots",
      companylogo: require("./assets/images/obots_logo.jpg"),
      date: "Jan 2018 – Jan 2019",
      location: "North Carolina USA",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Web Developer Intern",  
      company: "Wisdom Sprouts",
      companylogo: require("./assets/images/wisdom_sprouts_logo.png"),
      date: "Oct 2017 – Jan 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Rushi-Kesh", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
//       link: "http://saayahealth.com/"
//     },
//     {
//       image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
//       link: "http://nextu.se/"
//     }
//   ]
// };

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "MTA: HTML5 Application Development Fundamentals - Certified 2018",
      subtitle: "Earners of the MTA: HTML5 Application Development Fundamentals certification have demonstrated core HTML5 client application development skills that will run on today's touch-enabled devices (PCs, tablets, and phones). The MTA program provides an appropriate entry point to a future career in technology.",
      image:
        require("./assets/images/badges/microsoft.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/85841849-73f8-4f70-9f2d-bc380b0e7ccb/" },
      ]
    },
    {
      title: "Docker Essentials: A Developer Introduction",
      subtitle: "Earners of this badge know what Docker containers are and their benefits. The individual knows how to run containers from Docker Hub, create Docker containers, and how to solve basic problems of orchestration (reconciliation, scaling, high availability, service discovery). The badge earner also understands best practices for using DockerFiles and the basics of how to use tools such as the IBM Cloud Kubernetes Service.",
      image:
        require("./assets/images/badges/docker.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/2c246bdf-3710-4520-aa7e-3c6d1973caee/" },
      ]
    },
    {
      title: "Data Science Methodologies",
      subtitle: "This badge earner understands the essential steps used in data science business and research problem solving. This includes problem definition, collecting and analyzing data, building relevant models and understanding model deployment results.",
      image:
        require("./assets/images/badges/DSM.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/5ac5239a-bb23-4298-9318-7288b0f77c04/" },
      ]
    },
    {
      title: "Python for Data Science",
      subtitle: "The badge earner is able to write their own Python scripts and perform basic hands-on data analysis using IBM's Jupyter-based lab environment.",
      image:
        require("./assets/images/badges/PDS.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/bf5a7b2d-4bda-4229-b40a-eb61dab4fd56/public_url" },
      ]
    },
    {
      title: "Data Visualization Using Python",
      subtitle: "This badge earner understands how Python libraries such as Matplotib, Seaborn and Folium are used for the creation and customization of graphical representation outputs for both small and large-scale data sets.",
      image:
        require("./assets/images/badges/DVUP.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/08889319-8f1c-4296-a0db-e56530bdb9ae/public_url" },
      ]
    },
    {
      title: "Data Analysis Using Python",
      subtitle: "This badge earner understands the essential steps necessary to analyze data in Python using multi-dimensional arrays, manipulating DataFrames in pandas, using SciPy library of mathematical routines and performing machine learning using scikit-learn. This includes hands-on demonstration using Jupyter notebook in JupyterLab Python tools.",
      image:
        require("./assets/images/badges/DAUP.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/cffb167b-5f63-4f6d-989c-8b462428b7b9/public_url" },
      ]
    },
    {
      title: "Machine Learning with Python",
      subtitle: "The badge earner demonstrates an understanding of Supervised vs. Unsupervised Learning, applications of different types of machine learning models, and how to build and evaluate machine learning models.",
      image:
        require("./assets/images/badges/MLP.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/6f43eaf0-c393-47a1-9f79-e95b68e4c56e/public_url" },
      ]
    },
    {
      title: "Applied Data Science with Python",
      subtitle: "This badge earner is able to code in Python for data science. They can analyze and visualize data with Python with packages like scikit-learn, matplotlib and bokeh.",
      image:
        require("./assets/images/badges/ADSP.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/5d410004-6842-4e69-8949-8395b99ed07d/public_url" },
      ]
    },
    {
      title: "Big Data Foundations",
      subtitle: "This badge earner has a basic understanding of Big Data concepts and their applications to gain insight for providing better service to customers. The earner understands that Big Data should be processed in a platform that can handle the variety, velocity, and the volume of data by using components that require integration and data governance.",
      image:
        require("./assets/images/badges/BDF.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/7080c20a-4e25-4dd3-aae8-4a0797a99759/public_url" },
      ]
    },
    {
      title: "Data Science Foundations - Level 1",
      subtitle: "This badge earner has an understanding of the possibilities and opportunities that data science, analytics and big data bring to new applications in any industry.",
      image:
        require("./assets/images/badges/DSF1.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/667a62e9-423c-4a33-9e94-9fc8d7949983/public_url" },
      ]
    },
    {
      title: "Data Science Foundations - Level 2",
      subtitle: "This badge earner has a solid understanding of data science methodologies, and tools. The individual also has a hands-on appreciation of programming languages to use in data science tasks.",
      image:
        require("./assets/images/badges/DSF2.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/add593f4-c80b-41ac-813a-0fb69ee3dd70/public_url" },
      ]
    },
    {
      title: "Deep Learning Essentials",
      subtitle: "This badge earner has acquired core knowledge of how the Deep Learning class of machine learning algorithms can be harnessed for more powerful and insightful data processing and pattern creation used in decision-making processes. This includes how convolutional neural networks are used to enhance the effectiveness of image recognition and classification.",
      image:
        require("./assets/images/badges/DLE.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/717e1d56-6da6-484d-b7ab-7e658900037f/public_url" },
      ]
    },
    {
      title: "Deep Learning using TensorFlow",
      subtitle: "This badge earner has an understanding of essential concepts, functional attributes, operational considerations and the execution pipeline when using TensorFlow. This includes how TensorFlow can be used in curve fitting, regression, classification and minimization of error functions. The earner has also demonstrated knowledge of how to apply TensorFlow for backpropagation to tune the weights and biases while the Neural Networks are being trained.",
      image:
        require("./assets/images/badges/DLT.png"),
      footerLink: [
        { name: "Badge Link", url: "https://www.youracclaim.com/badges/3d7fbcfd-96b5-412b-8542-a54e2ef5446e/public_url" },
      ]
    },
    {
      title: "Problem Solving (Basic) Certificate",
      subtitle: "HakerRank problem solving skill assesment",
      image: require("./assets/images/hakerrank.png"),
      footerLink: [{ name: "Certification", url: "https://www.hackerrank.com/certificates/3286837254b9" }]
    },

    {
      title: "Python (Basic) Certificate",
      subtitle: "HakerRank python skill assesment",
      image: require("./assets/images/hakerrank.png"),
      footerLink: [
        { name: "Certification", url: "https://www.hackerrank.com/certificates/38849f8135e9" },
      ]
    }
  ]
};

// Blogs Section

// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ]
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/",
//       image:
//         "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
//     }
//   ]
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  //subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8149930525",
  email_address: "gaikwadrushikesh181@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "Rushikesh_2105"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, achievementSection, contactInfo , twitterDetails};
