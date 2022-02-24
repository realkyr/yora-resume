import dayjs from 'dayjs'

const firebaseConfig = {
  apiKey: "AIzaSyCIgVVldEnqhlzwkqVDtOeWw_a5oZdQDF8",
  authDomain: "yora-resume.firebaseapp.com",
  projectId: "yora-resume",
  storageBucket: "yora-resume.appspot.com",
  messagingSenderId: "463287187696",
  appId: "1:463287187696:web:94bfb048387418ae9faa35",
  measurementId: "G-W9F98P0V98",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const d = new Date();
const app = new Vue({
  el: "#app",
  data: {
    age: d.getFullYear() - 1998,
    email: "yora46@gmail.com",
    name: '',
    senderMail: '',
    message: '',
    address: "Bangkok, Thailand",
    skills: [
      {
        name: "HTML",
        icon: "images/skills/html.png",
      },
      {
        name: "CSS",
        icon: "images/skills/css.png",
      },
      {
        name: "JavaScript",
        icon: "images/skills/javascript.png",
      },
      {
        name: "TypeScript",
        icon: "images/skills/ts.png",
      },
      {
        name: "React",
        icon: "images/skills/react.png",
      },
      {
        name: "Vue",
        icon: "images/skills/vue.png",
      },
      {
        name: "Lottie",
        icon: "images/skills/lottie.svg",
      },
      {
        name: "Bootstrap",
        icon: "images/skills/bs.png",
      },
      {
        name: "Material UI",
        icon: "images/skills/mat.png",
      },
      {
        name: "Ant Design",
        icon: "images/skills/antd.svg",
      },
    ],
    backend: [
      {
        name: "Next",
        icon: "images/skills/next.png",
      },
      {
        name: "Nuxt",
        icon: "images/skills/nuxt.png",
      },
      {
        name: "Node.js",
        icon: "images/skills/node.png",
      },
      {
        name: "Django",
        icon: "images/skills/django.png",
      },
      {
        name: "Flask",
        icon: "images/skills/flask.png",
      },
      {
        name: "Python",
        icon: "images/skills/python.png",
      },
    ],
    other: [
      {
        name: "Photoshop",
        icon: "images/skills/adobe/Photoshop-96.png",
      },
      {
        name: "Illustrator",
        icon: "images/skills/adobe/Illustrator-96.png",
      },
      {
        name: "XD",
        icon: "images/skills/adobe/XD-96.png",
      },
      {
        name: "Lightroom",
        icon: "images/skills/adobe/Lightroom-96.png",
      },
      {
        name: "Audition",
        icon: "images/skills/adobe/Audition-96.png",
      },
      {
        name: "InDesign",
        icon: "images/skills/adobe/InDesign-96.png",
      },
      {
        name: "Premiere",
        icon: "images/skills/adobe/Premiere-96.png",
      },
      {
        name: "After Effect",
        icon: "images/skills/adobe/After Effects-96.png",
      },
    ],
    cloud: [
      {
        name: "Docker",
        icon: "images/skills/docker.png",
      },
      {
        name: "Heroku",
        icon: "images/skills/heroku.jpg",
      },
      {
        name: "Firebase Auth",
        icon: "images/skills/auth.png",
      },
      {
        name: "Firebase Real-time Database",
        icon: "images/skills/realtime.png",
      },
      {
        name: "Firestore",
        icon: "images/skills/firestore.png",
      },
      {
        name: "Cloud Storage",
        icon: "images/skills/cloudstorage.png",
      },
      {
        name: "Firebase Functions",
        icon: "images/skills/function.png",
      },
      {
        name: "Firebase Hosting",
        icon: "images/skills/hosting.png",
      },
      {
        name: "Google Analytics",
        icon: "images/skills/analytics.png",
      },
      {
        name: "GC Compute Engine",
        icon: "images/skills/comen.png",
      },
      {
        name: "GC App Engine",
        icon: "images/skills/appengine.png",
      },
      {
        name: "GC Cloud Sql",
        icon: "images/skills/cloudsql.png",
      },
      {
        name: "GC IAM",
        icon: "images/skills/iam.png",
      },
      {
        name: "AWS EC2",
        icon: "images/skills/ec2.png",
      },
      {
        name: "AWS Elastic Beanstalk",
        icon: "images/skills/beanstalk.png",
      },
      {
        name: "AWS S3",
        icon: "images/skills/sss.png",
      },
      {
        name: "AWS Route 53",
        icon: "images/skills/route.png",
      },
      {
        name: "OpenCV",
        icon: "images/skills/opencv.png",
      },
    ],
    ports: [
      {
        name: "Fruity Bloom",
        id: "fruity-bloom",
        desc: `This project is about 'Body Shaming' communicated through
                      12 different fruity characters. I took part in developing
                      web pages using Vue.js, using Lottie to convert After
                      Effect's animation into Javascirpt and CSS animation and
                      deploying on Firebase Hosting.`,
        thumbnail: "images/portfolio/fruitybloom.jpg",
        front: [5, 6, 7],
        back: [],
        tool: [7],
        other: [0, 1, 7],
        source: [
          {
            name: "Github",
            url: "https://github.com/realkyr/projectp",
          },
          {
            name: "Website",
            url: "https://fruitybloom.club/",
          },
        ],
      },
      {
        name: "Super Jiew Bible Contest",
        id: "super-jiew",
        desc: `I am responsible for whole project except UI design. This project is currently
                      on production and is used by the students participating Bible multiple
                      choices online test held by Thailand Bible Society. Key feature is
                      almost real-time result report using Google Sheet API. You can use 00000 code to test.`,
        thumbnail: "images/portfolio/sj.jpg",
        front: [4, 8],
        back: [2],
        tool: [2, 4, 5, 6, 7],
        other: [0, 1],
        source: [
          {
            name: "Github",
            url: "https://github.com/realkyr/super-tiny-contest",
          },
          {
            name: "Website",
            url: "https://super-tiny.web.app/",
          },
          {
            name: "Video Admin Tutorial",
            url: "https://youtu.be/snoTNGmm1gM",
          },
        ],
      },
      {
        name: "Mover School Bus",
        id: "mover-schoolbus",
        desc: `Mover's core feature is to sent the location from mobile app
                      to firebase real-time to notify parent when school bus is coming near
                      or not. This project has been in the startup acceleration. Developer
                      team is the finalist of Business Brotherhood 2018 by presenting this project.`,
        thumbnail: "images/portfolio/mover.jpg",
        front: [5],
        back: [2],
        tool: [2, 4, 5, 6, 7],
        other: [],
        source: [
          {
            name: "Github",
            url: "https://github.com/realkyr/Mover-Manager",
          },
          {
            name: "Website",
            url: "https://mover-schoolbus.web.app/",
          },
        ],
      },
      {
        name: "Deep Listen Story App",
        id: "deep-listening",
        desc: `This project has been developed to make people aware of
                      being a good listener in family because nowadays many people
                      neglect to listen to others people. The application arouse user
                      by music and interactive story telling. I participated in Front End
                      development using integration of React, Ant Design and Lottie.`,
        thumbnail: "images/portfolio/deeplisten.jpg",
        front: [4, 6, 9],
        back: [],
        tool: [4, 7],
        other: [0, 1, 7],
        source: [
          {
            name: "Github",
            url: "https://github.com/realkyr/deep-listening",
          },
          {
            name: "Website",
            url: "https://deeplistening-85c42.web.app/",
          },
        ],
      },
      {
        name: "Cafeteller",
        id: "cafeteller",
        desc: `Key features of Cafeteller are a cafe review platform by experts and
                      finding cafes located near by using user's location. The platform is
                      developed by using Next.js, Firestore and Editor.js which is block content
                      editor library for writing review, deployed on Google App Engine.`,
        thumbnail: "images/portfolio/cafeteller.jpg",
        front: [4, 9],
        back: [0, 2],
        tool: [2, 4, 5, 6, 10, 8],
        other: [],
        source: [
          {
            name: "Github (Private)",
            url: "https://github.com/realkyr/cafeteller",
          },
          {
            name: "Website",
            url: "https://cafeteller.club/",
          },
        ],
      },
      {
        name: "Fast Scoring",
        id: "fast-scoring",
        desc: `This is my senior project. Using lots of tools and Google's Cloud
                      products is challenged. Fast Scoring is a paper-based multiple
                      choices test marking system by using only phone camera. We use OpenCV
                      deployed on Cloud Function and homography knowledge to align the answer
                      sheet paper then generate result in variety of format.`,
        thumbnail: "images/portfolio/fastscoring.jpg",
        front: [4, 9],
        back: [5],
        tool: [17, 2, 4, 5, 6, 7, 8],
        other: [],
        source: [
          {
            name: "Github Web",
            url: "https://github.com/realkyr/FastScoring-Web/",
          },
          {
            name: "Website",
            url: "https://fastscoring.web.app/",
          },
          {
            name: "Brief Presentation",
            url: "https://youtu.be/hZ9V_tc3QPs",
          },
          {
            name: "Full Presentation",
            url: "https://youtu.be/wrABtZxzoag",
          },
        ],
      },
      {
        name: "Transcript",
        id: "transcript",
        desc: `This is my transcript showing learning result from King
                      Mongkut's Institute of Technology Ladkrabang.`,
        thumbnail: "images/portfolio/transcript.jpg",
        front: [],
        back: [],
        tool: [],
        other: [],
        source: [
          {
            name: "Download",
            url: "https://drive.google.com/file/d/1mpsVANyPBi2VBRvw8RpnoocioBAcqgAf/view?usp=sharing",
          },
        ],
      },
      {
        name: "Love Peach Page",
        id: "love-peach",
        desc: `I have my own song on Youtube. Nobody shares my song's chord
                      so I developed web page to share mine`,
        thumbnail: "images/portfolio/yoralovepeach.jpg",
        front: [4, 9],
        back: [],
        tool: [],
        other: [],
        source: [
          {
            name: "Website",
            url: "https://lovepeach-studio.appspot.com/just",
          },
          {
            name: "My Song",
            url: "https://youtu.be/90l8STP76-4",
          },
          {
            name: "Github",
            url: "https://github.com/realkyr/Love-Peach",
          },
        ],
      },
      {
        name: "Suanluang Church QR Generator",
        id: "sl-church",
        desc: `I am working this project with my home church.
                      The feature is when upload "Welcome Card", the web app
                      will generate QR code which people who come to church
                      can scan and download the card.`,
        thumbnail: "images/portfolio/slchurch.jpg",
        front: [5, 8],
        back: [2],
        tool: [2, 4, 5, 6, 7],
        other: [],
        source: [
          {
            name: "Website",
            url: "https://suanluang-church.web.app/",
          },
          {
            name: "Github",
            url: "https://github.com/realkyr/SuanluangChurch-Web",
          },
        ],
      },
      {
        name: "Caladium Classification",
        id: "caladium-class",
        desc: `This project is about Caladium Classification using OpenCV and Tensorflow
                        in handcraft based and learning based and a part of
                        Image Transformation and recognition class.
                        I am responsible for handcraft based recognition.`,
        thumbnail: "images/portfolio/caladium.jpg",
        front: [],
        back: [5],
        tool: [17],
        other: [],
        source: [
          {
            name: "Github",
            url: "https://github.com/realkyr/Caladium-Classification",
          },
          {
            name: "Presentation & Result",
            url: "https://docs.google.com/presentation/d/1r22CbbU-AW51zVVz1zQkuL0SBtBBjP3FtA_ii-tXoek/edit?usp=sharing",
          },
        ],
      },
      {
        name: "Hospital Location Service",
        id: "location-service",
        desc: `This project was developed in my junior year university
                      to learning Microservices architecture and docker.`,
        thumbnail: "images/portfolio/soplocation.jpg",
        front: [],
        back: [5],
        tool: [0, 10],
        other: [],
        source: [
          {
            name: "Github",
            url: "https://github.com/realkyr/SOP_Location_Service",
          },
        ],
      },
      {
        name: "Grandcine",
        id: "grandcine",
        desc: `This project was developed in my sophomore year university
                      to learning Vue.js and Firebase. This is Front End Development
                      of booking cinema seats system`,
        thumbnail: "images/portfolio/grandcine.jpg",
        front: [5],
        back: [],
        tool: [2, 4, 7],
        other: [],
        source: [
          {
            name: "Github",
            url: "https://github.com/realkyr/Grandcine",
          },
          {
            name: "Website",
            url: "https://grandcine.web.app/",
          },
        ],
      },
      {
        name: "React Classroom",
        id: "react-classroom",
        desc: `I worked as a part-time tutor for juniors at the university
                      teaching React and Firebase. This is an example of the homeworks
                      and recorded video from class.`,
        thumbnail: "images/portfolio/classroom.jpg",
        front: [5],
        back: [],
        tool: [],
        other: [],
        source: [
          {
            name: "Homework",
            url: "https://react-classroom.web.app/",
          },
          {
            name: "Sample Video 1",
            url: "https://youtu.be/OAb9a4tbcfo",
          },
          {
            name: "Sample Video 2",
            url: "https://youtu.be/9qlF3a3e83U",
          },
        ],
      },
      {
        name: "Business Brotherhood 2018",
        id: "business-bro",
        desc: `Business Brotherhood is Startup incubation program. The aim is to develop
                      students to be ready to make good use of the resources available at the
                      university for effective startups. Our team has became finalist
                      of the program by developing Mover Security Platform.`,
        thumbnail: "images/portfolio/businessbro.jpg",
        front: [],
        back: [],
        tool: [],
        other: [],
        source: [],
      },
      {
        name: "Business Brotherhood 2018 Certificate",
        id: "business-cert",
        desc: `The certificate certified that I am a finalist of
                      Business Brotherhood 2018, Startup incubation program
                      that is ready to grow by leaps and bounds.`,
        thumbnail: "images/portfolio/businessbbcert.jpg",
        front: [],
        back: [],
        tool: [],
        other: [],
        source: [],
      },
      {
        name: "An Outstanding Student Certificate",
        id: "stud-cert",
        desc: `The certificate certified that I have built up
                      university name by taking part in a competition.`,
        thumbnail: "images/portfolio/studcert.jpg",
        front: [],
        back: [],
        tool: [],
        other: [],
        source: [],
      },
      {
        name: "My Github",
        id: "my-git",
        desc: `I use Github as a web-based version-control and collaboration
                        platform for software developers. You all can check out my
                        others which I didn't mention in this page.`,
        thumbnail: "images/portfolio/github.jpg",
        front: [],
        back: [],
        tool: [],
        other: [],
        source: [
          {
            name: "Github",
            url: "https://github.com/realkyr/",
          },
        ],
      },
      {
        name: "My Resume",
        id: "my-resume",
        desc: `This resume also shows my skill on web developing.
                      I have used Vue.js to generate most of the posts and icons
                      and modified template from other developer.`,
        thumbnail: "images/portfolio/resume.jpg",
        front: [5],
        back: [],
        tool: [],
        other: [],
        source: [
          {
            name: "Github",
            url: "https://github.com/realkyr/yora-resume",
          },
        ],
      },
    ],
  },
  methods: {
    async sendEmail (e) {
      e.preventDefault()
      const isMailValid = document.getElementById('email-form').checkValidity()
      if (isMailValid) {
        console.log(this.name, this.senderMail, this.message)
        await db.collection('emails').doc().set({
          name: this.name,
          email: this.senderMail,
          message: this.message
        })
        window.alert('Message send complete')
      } else {
        window.alert('Please check your email validity.')
      }
    }
  },
  computed: {
    touchWorkPeroid() {
      return dayjs().diff(dayjs('01-10-2021').format('DD-MM-YYYY'), 'month')
    },
    isMobile() {
      return window.innerWidth < 992;
    },
  },
})
