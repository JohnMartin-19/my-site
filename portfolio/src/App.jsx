import { motion } from 'framer-motion';
import './App.css';
import jp from './img/jp.png';
import print_guy from './img/printguy_logo_with_new_bg.jpeg';
import kticket from './img/k-tickets.png'
import affinidi from './img/affinidi.png';
import epayments from './img/epayments.png'
import mfarm from './img/m-farm.png'
import { useState } from 'react';
import cert1 from './img/kube.png'; 
import cert2 from './img/cloud_prac.png';
import cert3 from './img/tech_essentials.png';
import cert4 from './img/devops.png'


function App() {
  

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: "M-FARM Agrimarket",
      description: "A web application that will provide access to e-markets from farmers across the country. Using AWS to deploy the microservice application,I have leveraged several technologies as well. Using Terraform to procure Cloud Infra for the app, and running Kubernetes clusters using manifests.Github actions for CI/CD pipeline to automate deployment to AWS",
      image: mfarm,
      link: "http://m-farm.s3-website-us-east-1.amazonaws.com/"
    },
    {
      title: "County Revenue System",
      description: "A County Revenue System which used multi-tenancy architecture built with  Django and DRF. The multi-tenant application is used by various counties such as Tharaka Nithi,Embu, Meru, Kajiado.",
      image: epayments,
      link: "https://epayments.tharakanithi.go.ke/"
    },
    {
      title: "K-Tickets",
      description: "A monolithic Django E-Ticketing platform that allows organizations to register and create events, clients can purchase the event tickets and has some payment gateways such as mpesa and paypal.Built using Django, DRF,PostgreSQL, HTML&CSS then hosted it on an AWS ec2 instance",
      image: kticket,
      link: "http://13.61.100.128/"
    },
    {
      title: "",
      description: "A backend application built with  Django for an event platform that I did during my internship.",
      image: jp,
      link: "https://github.com/JohnMartin-19/jambolife2.0"
    },
    {
      title: "Print Guy",
      description: "A website for a printing and graphic organization in Nairobi. Built using ReactJS",
      image: print_guy,
      link: "http://print-guy.s3-website-us-east-1.amazonaws.com"
    },
    {
      title: "Affinidi",
      description: "A React E-Commerce app that is powered by Affinidi in auth and supports its checkout",
      image: affinidi,
      link: "https://affinidi-q4.netlify.app/"
    }
  ];

  const certifications = [
    { id: 1, name: "K8s", image: cert1 },
    { id: 2, name: "AWS CLOUD PRAC", image: cert2 },
    { id: 3, name: "AWS ESSENTIALS", image: cert3 },
    { id: 4, name: "AWS DEVOPS", image: cert4 },
    // Add more certifications as needed
    // // It's good to duplicate them if you have less than 4-5 to ensure continuous loop
    // { id: 5, name: "K8s", image: cert1 },
    // { id: 6, name: "AWS CLOUD PRAC", image: cert2 },
    // { id: 7, name: "AWS ESSENTIALS", image: cert3 },
    // { id: 8, name: "AWS DEVOPS", image: cert4 },
  ];

  const [selectedExperience, setSelectedExperience] = useState(null);

 
  const experiences = [
    {
      title: "Software Developer - M-FARM (April 2025 - Present)",
      project: "M-FARM Agricultural MarketPlace",
      techStack: "ReactJS, Django, Django REST Framework, PostgreSQL, Docker,Kubernetes, Github, Redis",
      details: [
        "Service Discovery: In a microservice architecture, the 3 backend apps need to communicate with one another for various services to run smoothly. I am planning to use Service Mesh in Kubernetes.",
        "Inter-service Communication: Using token-based, internal-only API auth to secure interservice communication betweeen the backend servies.",
        "Security: I am leveraging JWT Tokens for the authentication of users. I use Redis for caching the logged in user-data/payload to refenece it and shared across the 3 applications without duplicating the data in the db. Helps to maintain ACID properties.",
        "Database Modelling and Normalization: Thos being a microservice applucation, I design, modelled and normalized 3 databases designs for the application servicaes(product-service, user-service and payment-service).",
        "API Architecture using Django REST: Architected, created and tested API endpoints for the 3 applications.I then mapped these API endpoints on my React frontend fro asych data consumption.",
        "End-to-End Testing: From both a farmer's and customer's perspective, I have been doing e2e tests to ensure that there is seamless flow of events while interacting with the platform.",
        "Frontend: Enhanced UI features with use of Figma and AI to improve user experience and adapt to agile changes.Written using ReactJS",
        "Optimization: Improved search and filter algorithms, implemented caching and lazy loading to enhance system performance.",
        "Testing: Created feature of the app and tested them both on the frontend and backend.",
        "Debugging: Fixed bugs in the marketplace to ensure the flow of the application is smooth for the users.",
      ]
    },
    {
      title: "Software Developer - Jambopay (May 2024 - April 2025)",
      project: "County e-Revenue Management System",
      techStack: "HTML5, CSS3, Django, Django REST Framework, JavaScript, PostgreSQL, Docker, GitLab, Kafka",
      details: [
        "Unit Testing: Wrote tests for application modules to verify legacy code functionality and mock data behavior without database persistence.",
        "Debugging: Fixed bugs in the County System to ensure proper functionality and meet user expectations.",
        "Database Modelling and Normalization: Collaborated with a senior developer to design and normalize a new module's database structure, presenting the final architecture to the CTO.",
        "API Architecture using Django REST: Migrated modules from MVT pattern to API-based data consumption, creating and testing endpoints with QA and senior developers.",
        "End-to-End Testing: Participated in testing E-Wallet and USSD services with senior and Android developers from a user perspective.",
        "UI Development (Frontend): Enhanced UI features with a UI/UX designer to improve user experience and adapt to agile changes.",
        "Optimization: Improved search and filter algorithms, implemented caching and lazy loading to enhance system performance."
      ]
    },
    {
      title: "Software Developer Intern - Jambopay (May - August 2023)",
      project: "JamboLife 2.0",
      techStack: "Python, Django, Django REST Framework",
      details: [
        "Learned Python and completed intern assignments.",
        "Attended weekly departmental meetings.",
        "Studied Django and Django REST Framework.",
        "Developed a backend project assigned by the CTO.",
        "Collaborated with developers to meet project requirements.",
        "Utilized tools like DB Design for database modeling.",
        "Learned API architecturing with Django REST Framework."
      ]
    },
    {
      title: "Freelance/Student (2020 - 2024)",
      techStack: "JavaScript, Python, Java, HTML5, CSS3",
      details: [
        "Balanced software development freelancing with university studies.",
        "Built websites for clients with fellow IT students.",
        "Participated in technical talks, hackathons, and research.",
        "As a Google Developer Students Club member, learned JavaScript, Python, and Java.",
        "Mentored junior students in data structures, algorithms, and database systems.",
        "Developed applications from scratch, including hosting and deployment."
      ]
    }
  ];

  const ExperienceModal = ({ isOpen, onClose, experience }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h3>{experience.title}</h3>
          <button className="close-button" onClick={onClose}>×</button>
          <ul>
            {experience.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <nav id="navbar">
        <ul>
          <li><a href="#home">MBURU</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#tech-stacks">Tech</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>

      <motion.section 
        id="home" 
        className="section"
        initial={{ opacity: 0, y: 50 }} // Start below and invisible
        animate={{ opacity: 1, y: 0 }}  // Move up to original position and fade in
        transition={{ duration: 1, ease: "easeOut" }} 
      >
        <div id='landing' className="content-container">
          <div className="text-content">
            <p>HELLO THERE, I AM</p>
            <h1>JOHN MBURU</h1>
            <p className="subheading">
              A Full-stack developer creating innovative web solutions with modern technologies.
            </p>
            <a href="https://github.com/JohnMartin-19/" style={{fontSize:'40px'}}>
            <motion.i 
              className="fa-brands fa-github"
              whileHover={{ scale: 2.95 }}
              whileTap={{ scale: 2.95 }}
            >
            </motion.i>
            </a>
          </div>
          <br />
          <br />
          
          <h3>Services</h3>
          <div className="services">
            {[
              'Frontend Development',
              'Backend Development',
              'Database Design & Management',
              'API Design and Architecture',
              'Containerization', // Corrected from 'Container Orchestaration'
              'Cloud'
            ].map((service) => (
              
              <motion.div 
                key={service}
                className="service-card"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className={`${
                  service === 'Containerization' ? 'fa-brands fa-docker' : 'fa-solid fa-'
                }${
                  service === 'Frontend Development' ? 'laptop-code' :
                  service === 'Backend Development' ? 'code' :
                  service === 'Database Design & Management' ? 'database' :
                  service === 'API Design and Architecture' ? 'network-wired' :
                  service === 'Containerization' ? '' :
                  'cloud'
                }`}></i>
                <p>
                  {service === 'Cloud' ? 'Cloud (AWS)' : service}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="about" 
        className="section"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="card content-container">
          <h2>About Me</h2>
          <p>
          As a dedicated Full-stack Software Developer, I bring a year and a half of intensive professional experience from a FinTech environment,
           bolstered by over 3 years of diverse freelance projects. I specialize in building highly functional and scalable web applications,
            adept at both intricate backend logic and dynamic frontend interfaces.
          <br/>
          My recent flagship project involves leading the development and deployment of a microservice-based agricultural marketplace (M-FARM) on AWS.
           This has sharpened my skills in designing loosely coupled services with Django and Django REST Framework, implementing container orchestration with Kubernetes,
          and automating infrastructure provisioning using Terraform. I've established robust CI/CD pipelines with GitHub Actions, ensuring seamless, automated deployments
          , allowing me to demonstrate my commitment to efficient, modern DevOps practices.
          <br/>
          Prior to this, my contributions to a multi-tenant County e-Revenue Management System involved end-to-end API development, database modeling and normalization with PostgreSQL,
          unit testing, and performance optimization. My foundational experience in Python, Django, ReactJS, HTML5, CSS3, and JavaScript, coupled with practical use of Docker and GitLab,
          enables me to deliver comprehensive solutions from concept to deployment. I am a collaborative problem-solver, committed to best practices in agile development and continuous learning within the cloud ecosystem.
          My diverse background, from early Python/Django internship to mentoring peers, has cultivated a blend of technical depth and collaborative agility,
          positioning me to excel in cloud-native environments.

          </p>
        </div>

        <div className="card content-container">
          <h2>Experience</h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-card"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedExperience(exp)}
              >
                <h3>{exp.title}</h3>
                {exp.project && <p><strong>Project:</strong> {exp.project}</p>}
                {exp.link && (
                  <p><strong>Link:</strong> <a href={exp.link}>{exp.link}</a></p>
                )}
                <p><strong>Tech Stack:</strong> {exp.techStack}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <ExperienceModal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          experience={selectedExperience}
        />
      </motion.section>
      
      <motion.section 
        id="tech-stacks" 
        className="section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="content-container">
          <h2>Tech Stack</h2>
          <div className="tech-grid">
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-brands fa-html5"></i>
              <span>HTML5</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-brands fa-css3"></i>
              <span>CSS3</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-brands fa-js"></i>
              <span>JavaScript</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-brands fa-react"></i>
              <span>React</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-brands fa-python"></i>
              <span>Python</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa fa-code"></i>
              <span>Django</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-brands fa-docker"></i>
              <span>Docker</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa fa-cloud"></i>
              <span>AWS</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-brands fa-gitlab"></i>
              <span>Gitlab</span>
            </motion.div>
            {/* New Tech Stacks Added Below */}
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-solid fa-laptop-code"></i> 
              <span>Terraform</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-solid fa-dharmachakra"></i> {/* Common Kubernetes icon */}
              <span>Kubernetes</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-solid fa-database"></i> {/* Database icon, suitable for PostgreSQL */}
              <span>PostgreSQL</span>
            </motion.div>
            <motion.div variants={cardVariants} className="tech-card">
              <i className="fa-solid fa-fire"></i> {/* Represents speed/caching, suitable for Redis */}
              <span>Redis</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="content-container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} className="project-link">View Project</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="certifications" // Changed ID from 'contact'
        className="section certifications-section" // Add a new class for styling
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="content-container">
          <h2>My Certifications</h2>
          {/* Main carousel container */}
          <div className="carousel-container">
            {/* Inner carousel track that will move */}
            <motion.div
              className="carousel-track"
              animate={{
                x: ['100%', '-100%'], // Animate from 0% to -100% of its width
                transition: {
                  x: {
                    repeat: Infinity, // Loop indefinitely
                    repeatType: 'loop',
                    duration: 35, // Adjust duration for desired speed
                    ease: 'linear', // Consistent speed
                  },
                },
              }}
            >
              {certifications.map((cert) => (
                <div key={cert.id} className="certification-item">
                  <img src={cert.image} alt={cert.name} />
                  {/* You can add a title overlay if needed */}
                  {/* <p>{cert.name}</p> */}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>


      <footer class="footer" id='footer'>
        <div class="footer-container">
            <div class="footer-column">
                <h3>Follow Me</h3>
                <ul class="social-media">
                    {/* <li>
                        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className='fa-brands fa-facebook' aria-label="Visit my Facebook profile"></a>
                    </li> */}
                    <li>
                        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className='fa-brands fa-twitter' aria-label="Visit my Twitter profile"></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className='fa-brands fa-instagram' aria-label="Visit my Instagram profile"></a>
                    </li>
                    {/* <li>
                        <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className='fa-brands fa-youtube' aria-label="Visit my YouTube channel"></a>
                    </li> */}
                </ul>
            </div>
            <div class="footer-column">
                <h3>Contact </h3>
                <ul>
                    <li> johnnkonge2020@gmail.com</li>
                    <li> +254768171426</li>
                    <li> Nairobi, Kenya</li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Quick Links</h3>
                <ul>
    <li><a href="#projects">Projects</a></li>
    {/* <li><button>Blog</button></li>
    <li><button>FAQs</button></li>
    <li><button>Privacy Policy</button></li> */}
</ul>
            </div>
            <div class="footer-column">
                <h3>About Me</h3>
                <p>I am a passionate Software Developer who has so much enthusiasism and zeal about cloud technologies and cloud-computing. In the near future, I would aspire to be a Cloud Solutions Architect.</p>
            </div>
        </div>
        <div class="bottom">
            <p>© 2025 Mburu. All rights reserved.</p>
        </div>
    </footer>

  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    </div>
  );
}

export default App;