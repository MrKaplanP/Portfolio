let info = {
  name: "Konstantinos Tsaousidis",
  logo_name: "Kostas",
  //flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "My name is Konstantinos, I'm an experienced web developer proficient in HTML/CSS, PHP, WordPress, Prestashop, Java, Android Apps, MySQL, and Python. My Bachelor's in Biomedical Sciences adds a unique perspective to my tech background. I thrive on bridging technology and healthcare, bringing innovation and precision to every project. With a passion for creating impactful solutions, I'm poised to drive positive change at the intersection of these fields.",
    links: {
    linkedin: "https://www.linkedin.com/in/konstantinos-tsaousidis-a705021b1/",
    github: "https://github.com/MrKaplanP",
    facebook: "https://www.facebook.com/krauserTs",
    instagram: "https://www.instagram.com/tsaousidis_kwstas/",
    // resume:
    //   "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Alexander Technological Education Institution of Thessaloniki",
      place: "Greece",
      date: "Sep, 2013 - June, 2020",
      degree: "Bachelor in Biomedical Sciences (ex. Medical Laboratory Technologist)",
      gpa: "7.0/10",
      description:
        " With a Bachelor's degree in Biomedical Sciences, I possess a solid foundation in various aspects of the field, including anatomy, physiology, microbiology, clinical chemistry and analyzers.",
      skills: [
        "Artificial Intelligence on Health",
        "Web Developing",
        "Medical Software",
        "Healthcare Analyst",
        "Health Data Mining",
      ]
    },
  ],
  experience: [
    {
      name: "Rubiconet",
      place: "Thessaloniki, Greece",
      date: "Oct, 2011 - 2016",
      position: "Web Developer",
      description:
        "Worked as a Web Developer, creating and deploying web sites.",
      skills: ["Wordpress", "HTML/CSS", "PHP", "MySQL", "Prestashop"]
    },
    {
      name: "Stampers",
      place: "Thessaloniki, Greece",
      date: "Sep, 2016 - 2020",
      position: "Web Developer",
      description:
        "Worked as a Web Developer and e-shop manager, implementing and maintaining the company's website",
      skills: ["PHP", "MySQL", "Prestashop"]
    },
    {
      name: "JDI Production",
      place: "Thessaloniki, Greece",
      date: "Nov, 2022 - April, 2023",
      position: "Senior Web & App Developer",
      description:
        "Worked as a web developer developing websites for the company's customers. Developed Android and Web apps for the company.",
      skills: ["PHP", "MySQL", "Wordpress", "Java", "Python"]
    },
    {
      name: "Freelancer",
      place: "Thessaloniki, Greece",
      date: "April, 2023 - Present",
      position: "Freelancer Web & App Developer",
      description:
        "Curently working as a freelancer developing e-shops and websites",
      skills: ["PHP", "MySQL", "Wordpress", "Prestashop", "HTML/CSS"]
    }
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Python",
        "Javascript",
        "Java",
        "C#",
        "MySQL",
        "PHP",
        "HTML"
      ],
      icon: "fa fa-code"
    },
    {
      title: "Data Frameworks",
      info: [
        "Django",
        "Numpy",
        "Pandas",
        "OpenCV",
        "Scrapy",
        "PyTorch"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Web Technologies",
      info: ["Vue", "Laravel", "React", "PHP", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: ["PostGreSQL", "MySQL"],
      icon: "fa fa-database"
    },
    {
      title: "Operating Systems & Tools",
      info: [
        "Ubuntu",
        "Windows",
        "Android",
        "Heroku",
        "Firebase",
      ],
      icon: "fas fa-tools"
    },
    {
      title: "Design",
      info: ["Illustrator", "Photoshop"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Tremkatzis",
      pictures: [
        {
          img: require("./src/assets/portfolio/tremkatzis/logo.png")
        },
        {
          img: require("./src/assets/portfolio/tremkatzis/one.png")
        },
        {
          img: require("./src/assets/portfolio/tremkatzis/two.png")
        },
      ],
      technologies: ["Wordpress", "WooCommerce"],
      category: "Website",
      visit: "https://tremkatzis.gr",
      description:
        "Tremkatzis is a basic Wordpress -eshop based on woocommerce."
    },
    {
      name: "Arachne Apparel",
      pictures: [
        {
          img: require("./src/assets/portfolio/arachne/logo.png")
        },
        {
          img: require("./src/assets/portfolio/arachne/one.png")
        },
        {
          img: require("./src/assets/portfolio/arachne/two.png")
        },
      ],
      technologies: ["Wordpress", "WooCommerce"],
      category: "Web Design",
      visit: "https://arachneapparel.gr",
      description:
        "Arachne Apparel is an eshop based on WooCommerce Wordpress"
    },
    {
      name: "IACMI",
      pictures: [
        {
          img: require("./src/assets/portfolio/iacmi/logo.png")
        },
        {
          img: require("./src/assets/portfolio/iacmi/one.png")
        },
        {
          img: require("./src/assets/portfolio/iacmi/two.png")
        },
      ],
      technologies: ["Wordpress", "PHP", "JS"],
      category: "Web Design",
      date: "April, 2024 - Present(On going)",
      visit: "http://iacmi.bmsc.ihu.gr",
      description:
        "A Postgraduate website for the International Hellenic University. (Under Construction)"
    },
    {
      name: "Bioanalisi",
      pictures: [
        {
          img: require("./src/assets/portfolio/bioanalisi/logo.png")
        },
        {
          img: require("./src/assets/portfolio/bioanalisi/one.png")
        },
        {
          img: require("./src/assets/portfolio/bioanalisi/two.png")
        }
      ],
      technologies: ["HTML", "CSS"],
      category: "Website | Web Design",
      visit: "https://bioanalisi.gr",
      description:
        "Bioanalisi is a simple HTML/CSS presentation website for a Medical Laboratory"
    },
    {
      name: "CMYKERS",
      pictures: [
        {
          img: require("./src/assets/portfolio/cmykers/one.jpg")
        },
        {
          img: require("./src/assets/portfolio/cmykers/two.jpg")
        }
      ],
      technologies: ["Wordpress", "WooCommerce"],
      category: "Web Design",
      visit: "#",
      description:
        "A simple e-commerce website based on wordpress"
    },
    {
      name: "Hellenes",
      pictures: [
        {
          img: require("./src/assets/portfolio/hellenes/one.jpg")
        },
        {
          img: require("./src/assets/portfolio/hellenes/two.jpg")
        }
      ],
      technologies: ["Wordpress", "WooCommerce"],
      category: "Website",
      visit: "#",
      description:
        "A simple e-commerce website based on wordpress"
    },
    {
      name: "JDI Radio",
      pictures: [
        {
          img: require("./src/assets/portfolio/jdiradio/logo.png")
        },
        {
          img: require("./src/assets/portfolio/jdiradio/one.png")
        },
        {
          img: require("./src/assets/portfolio/jdiradio/two.png")
        }
      ],
      technologies: ["Wordpress", "PHP", "Java", "Android App"],
      category: "Web App",
      visit: "https://jdiradio.com",
      description:
        'JDIRadio is a website for music news and web app for online radio. There is also available an Android App'
    },
    {
      name: "Medical Laboratory Sciences",
      pictures: [
        {
          img: require("./src/assets/portfolio/mls/logo.png")
        },
        {
          img: require("./src/assets/portfolio/mls/one.png")
        },
        {
          img: require("./src/assets/portfolio/mls/two.png")
        },
      ],
      technologies: ["Wordpress", "Youtube API"],
      category: "Website",
      visit: "https://mls.teithe.gr",
      description:
        "MLS is a website for the Biomedical Sciences Department of International Hellenic University"
    },
    {
      name: "Pare Oti Thes",
      pictures: [
        {
          img: require("./src/assets/portfolio/pareotithes/logo.png")
        },
        {
          img: require("./src/assets/portfolio/pareotithes/one.png")
        },
        {
          img: require("./src/assets/portfolio/pareotithes/two.png")
        },
      ],
      technologies: ["Wordpress", "WooCommerce", "Invoices", "XML Feeds"],
      category: "Website",
      visit: "https://pareotithes.gr",
      description:
        "Pareotithes is an e-shop based on woocommerce and wordpress, with auto generated invoices and product importing based on cron jobs. Products are auto imported form manufacturers using XML Feeds"
    },
    {
      name: "Quince-Handicrafts",
      pictures: [
        {
          img: require("./src/assets/portfolio/quince/logo.png")
        },
        {
          img: require("./src/assets/portfolio/quince/one.png")
        },
        {
          img: require("./src/assets/portfolio/quince/two.png")
        },
      ],
      technologies: ["Wordpress", "WooCommerce"],
      category: "Website",
      visit: "https://quince-handicrafts.com",
      description:
        "Quince-Handicrafts is a basic Wordpress -eshop based on woocommerce."
    }
  ],
  // portfolio_design: [
  //   {
  //     name: "Guituna",
  //     title: "Guituna - Mockup Design",
  //     pictures: [
  //       {
  //         img: require("./src/assets/designs/coursera1/MoodBoard.png"),
  //         title: "MoodBoard"
  //       },
  //       {
  //         img: require("./src/assets/designs/coursera1/Mockups 1.png"),
  //         title: "Mockups 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/coursera1/Mockups 2.png"),
  //         title: "Mockups 2"
  //       },
  //       {
  //         img: require("./src/assets/designs/coursera1/App Elements.png"),
  //         title: "App Elements"
  //       }
  //     ],
  //     technologies: ["XD", "Illustrator"],
  //     category: "Visual Design",
  //     github: "",
  //     date: "May, 2020 - Jun, 2020",
  //     visit: "",
  //     description:
  //       "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
  //   },
  //   {
  //     name: "Pantree",
  //     title: "Pantree - Mockup Design",
  //     pictures: [
  //       {
  //         img: require("./src/assets/designs/pantree/MoodBoard.png"),
  //         title: "Moodboard"
  //       },
  //       {
  //         img: require("./src/assets/designs/pantree/1.png"),
  //         title: "Mockups 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/pantree/2.png"),
  //         title: "Mockups 2"
  //       }
  //     ],
  //     technologies: ["XD", "Illustrator"],
  //     category: "Visual Design",
  //     github: "",
  //     date: "May, 2020 - July, 2020",
  //     visit: "",
  //     description:
  //       "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
  //   },
  //   {
  //     name: "Bunder",
  //     title: "Bunder - MVP Proposal",
  //     pictures: [
  //       {
  //         img: require("./src/assets/designs/bunder/Moodboard.png"),
  //         title: "Moodboard"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Mockup 1.png"),
  //         title: "Mockup 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Mockup 2.png"),
  //         title: "Mockup 2"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Mockup 3.png"),
  //         title: "Mockup 3"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Market Research 1.png"),
  //         title: "Market Research 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Market Research 2.png"),
  //         title: "Market Research 2"
  //       }
  //     ],
  //     technologies: ["XD", "Illustrator"],
  //     category: "Visual Design",
  //     github: "",
  //     date: "May, 2020 - July, 2020",
  //     visit: "",
  //     description:
  //       "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
  //   }
  // ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
