// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#fbb03b, #f27a46, #d54a57, #a62762, #691a64, #1e1657",
  firstName: "Gustavo",
  middleName: "",
  lastName: "Mendel",
  message: "Young technology lover, always looking to improve myself and impact people through technology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mende1",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mennde1/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/gustavo-mendel/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.png"),
  imageSize: 375,
  message:
    "My name is Gustavo Mendel. I’m a graduating in Computer Science at Federal University of Bahia (UFBA). ",
  resumeEn: "https://drive.google.com/file/d/11C-JLVKGIcEIhzgZuRd1nzEDl1NdkQTb/view?usp=sharing",
  resumePt: "https://drive.google.com/file/d/13gshtHmWSbPNXYPH0eD0wfojPYdvDtJ4/view?usp=sharing"
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Main Projects",
  gitHubUsername: "mende1", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["projetos-da-faculdade", "Jude-PDF-Downloader", "guia-definitivo-de-markdown", "contest"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/me.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/me.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Internship and Juniors Jobs opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "gustavo.mendel.br@gmail.com",
};

const experiences = {
  show: true,
  heading: "Education & Experiences",
  data: [
    {
      role: 'Computer Science Student',
      companylogo: require('../assets/img/ufba.jpg'),
      name: 'UFBA',
      url: 'https://computacao.ufba.br/pt-br/bacharelado-em-ciencia-da-computacao',
      date: 'August 2019 - Current'
    },
    {
      role: 'Infrastructure & Sec Manager',// Here Add Company Name
      companylogo: require('../assets/img/infojr.png'),
      name: 'Volunteer at InfoJr',
      url: 'https://infojr.com.br',
      date: 'August 2020 – Current',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/infojr.png'),
      name: 'Volunteer at InfoJr',
      url: 'https://infojr.com.br',
      date: 'August 2020 – Current',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
