const projectList = [
  {   
   title: 'freeCodeCamp',
   description: 
     `Five modules have been completed - approximately 
      300 hours to finish each one of them:`,
   list: [
     'Responsive Web Design', 
     'JavaScript Algorithms And Data Structures', 
     'Front End Libraries', 
     'APIs and Microservices', 
     'Information Security and Quality Assurance',
   ],
   link: 'https://learn.freecodecamp.org/',
   alt: 'freeCodeCamp logo',
   imgSrc: './static/freeCodeCamp.png',
   color: 'hsl(120, 33%, 42%)'
  },
  {
   title: 'Codecademy',
   description: 'Web development course - takes about 30 weeks to finish it:',
   list: [
     'HTML & Website styling', 
     'Interactive JavaScript websites', 
     'CLI & Git',
     'React',
     'Express',
     'SQL',
     'Test Driven Development with Mocha and Chai',
   ],
   link: 'https://www.codecademy.com/learn/paths/web-development',
   alt: 'Codecademy logo',
   imgSrc: './static/codecademy.jpeg',
   color: 'hsl(202, 21%, 32%)'
  },
  {
   title: 'Udacity',
   description: 'Full Stack Web Developer nanodegree program - 4 months long:',
   list: [
     'Unix shell / GitHub',
     'HTTP protocol, request/response cycle',
     'Python',
     'Flask',  
     'PostgreSQL',
     'Authorization / authentication',
     'Deploying Linux servers on Amazon Lightsail',
   ],
   link: 'https://eu.udacity.com/course/full-stack-web-developer-nanodegree--nd004',
   alt: 'Udacity logo',
   imgSrc: './static/udacity.png',
   color: 'hsl(194, 88%, 47%'
  },
  {
   title: 'Personal',
   description: 
     `One full-stack Issue tracker project
     (based on Subramanian: ProMERN book, but significantly modified):`,
   list: [
     'React',
     'Express',
     'Node',
     'MongoDB',
     'Webpack',
     'Babel',
     'Passport',
   ],
   link: '',
   alt: 'Personal projects picture',
   imgSrc: './static/personal.png',
   color: 'hsl(324, 7%, 14%)'
  },

];


export default projectList;
