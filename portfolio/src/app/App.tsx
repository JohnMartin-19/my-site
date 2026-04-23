import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-6sovak61ez";
import imgAdobeExpressFile31 from "./img/mburu.jpeg";

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contacts', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f1f1f]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Poppins:Regular',_sans-serif] text-[18px] transition-colors duration-200 ${
                  activeSection === item.id ? 'text-[#f8f7f9]' : 'text-[#f8f7f9]/70 hover:text-[#f8f7f9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <div className="h-11 w-px bg-[#f8f7f9]" />
            <div className="flex gap-6">
              <SocialIcon type="github" href="https://github.com/JohnMartin-19/" />
              <SocialIcon type="linkedin" href="https://www.linkedin.com/in/john-m-015922206/" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcon({ type, href }: { type: 'github' | 'linkedin'; href: string }) {
  const getPath = () => {
    if (type === 'github') {
      return (
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          fill="none"
        />
      );
    } else {
      return (
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
          fill="currentColor"
        />
      );
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#f8f7f9] hover:text-[#f8f7f9]/80 transition-colors duration-200"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
        {getPath()}
        {type === 'linkedin' && <circle cx="4" cy="4" r="2" fill="currentColor" />}
      </svg>
    </a>
  );
}

function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[905px] h-[897px]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1417 1409">
              <defs>
                <filter id="blur" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="128" />
                </filter>
              </defs>
              <ellipse
                cx="708.5"
                cy="704.5"
                rx="452.5"
                ry="448.5"
                fill="#f8f7f9"
                filter="url(#blur)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9]">
              HI, I'M JOHN MBURU
            </h2>
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[64px] lg:text-[96px] leading-[0.9] text-[#f8f7f9]">
              FULLSTACK<br />ENGINEER
            </h1>
          </div>
          
          <button 
            onClick={scrollToProjects}
            className="group border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9] hover:text-[#1f1f1f]"
          >
            <span className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
              VIEW MY PROJECTS
            </span>
          </button>
        </div>

        {/* Right content - Profile image */}
        <div className="relative">
          <div
            className="w-full h-[400px] lg:h-[600px] bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url('${imgAdobeExpressFile31}')` }}
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          About me
        </h2>
        
        <div className="max-w-4xl">
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5] mb-8">
            I am a Fullstack Engineer and Tech Lead with expertise in building highly available, scalable Fintech SaaS platforms. Experienced in leading cross-functional teams and architecting cloud-native solutions using Python, Django, React, and AWS infrastructure.
          </p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
            Proven track record in developing multi-tenant systems serving multiple counties across Kenya, implementing fault-tolerant infrastructure achieving 99.9% availability, and optimizing database performance. Skilled in developing and implementing innovative strategies using modern DevOps practices, CI/CD pipelines, and Infrastructure as Code. I specialize in Software Engineering with a strong interest in Cloud Architecture, Artificial Intelligence, and building efficient, scalable solutions.
          </p>
        </div>

        {/* Skills */}
        <div id="skills" className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            SKILLS
          </h3>
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[20px] text-[rgba(248,247,249,0.7)] mb-3">
                Frontend Development
              </h4>
              <ul className="font-['Poppins:Medium',_sans-serif] text-[18px] text-[rgba(248,247,249,0.5)] space-y-2">
                <li>• HTML5, CSS3, JavaScript</li>
                <li>• TypeScript</li>
                <li>• React.js</li>
                <li>• Vanilla JS</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[20px] text-[rgba(248,247,249,0.7)] mb-3">
                Backend Development
              </h4>
              <ul className="font-['Poppins:Medium',_sans-serif] text-[18px] text-[rgba(248,247,249,0.5)] space-y-2">
                <li>• Python</li>
                <li>• Django</li>
                <li>• Django REST Framework</li>
                <li>• FastAPI</li>
                <li>• PostgreSQL, Redis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[20px] text-[rgba(248,247,249,0.7)] mb-3">
                AWS & DevOps
              </h4>
              <ul className="font-['Poppins:Medium',_sans-serif] text-[18px] text-[rgba(248,247,249,0.5)] space-y-2">
                <li>• AWS (ECS, RDS, S3, CloudFront)</li>
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD (GitHub Actions)</li>
                <li>• Terraform (IaC)</li>
                <li>• Monitoring (Prometheus, CloudWatch)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[20px] text-[rgba(248,247,249,0.7)] mb-3">
                Other Skills
              </h4>
              <ul className="font-['Poppins:Medium',_sans-serif] text-[18px] text-[rgba(248,247,249,0.5)] space-y-2">
                <li>• Networking (CISCO CCNA)</li>
                <li>• Team Leadership</li>
                <li>• Critical Thinking</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            EDUCATION
          </h3>
          <div className="max-w-4xl space-y-8">
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                Mount Kenya University, Thika
              </h4>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                Bachelor of Science in Information Technology - December 2023<br />
                Second Class Upper Division
              </p>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                Lenana School
              </h4>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                High School Diploma (KCSE) - 2016-2019<br />
                Aggregate of 60 points (B- Plain)
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            Experience
          </h3>
          <div className="space-y-12">
            <ExperienceItem
              title="FULLSTACK ENGINEER / TECH LEAD"
              period="August 2025 — Present"
              description="Led a cross-functional team of 4 (frontend, cloud, and cybersecurity engineers) at Dubu Huru Ltd in the architectural design, development, and deployment of a highly available Fintech SaaS (crowdfunding/fundraising) platform serving users across Africa and globally. Architected backend using Python (Django, Django REST Framework) with RESTful API design, achieving sub-millisecond to low-millisecond API response times and ~90% uptime. Implemented redundant and fault-tolerant infrastructure using AWS ECS Fargate with Auto Scaling and Application Load Balancer achieving 99.9% availability across multiple AZs. Optimized database performance using AWS RDS PostgreSQL with Read Replicas and ElastiCache (Redis). Decoupled slow operations using Celery workers for background jobs and with Redis as the broker, processing 200+ transactions in early production. Integrated multi-currency payment solutions (M-Pesa, Stripe, PayPal, Paystack). Built CI/CD pipelines using GitHub Actions with multi-stage Docker builds and AWS ECR. Deployed React frontend on AWS Amplify with Route 53 failover policy. Monitored systems using Prometheus, CloudWatch, and Sentry. Managed infrastructure as code using Terraform."
            />
            <ExperienceItem
              title="SOFTWARE ENGINEER"
              period="May 2024 — August 2025"
              description="Developed and maintained a multi-tenant County E-Revenue Management System at JamboPay serving 10 counties across Kenya (Embu, Tharaka Nithi, Busia, Kisii, Uasin Gishu, Bomet, Kajiado, Samburu, Meru, and Samburu National Park), handling parking fees, land rates, business permits, and e-wallet payments. Led migration of legacy Django MVT modules to decoupled Django REST Framework architecture with Vanilla JS frontends, reducing frontend-to-backend latency by 30%. Designed and implemented new feature modules end-to-end from PostgreSQL schema design to Vanilla JS dashboard integration. Improved revenue reporting accuracy by 15% by implementing geospatial mapping using PostGIS and AnyChart JS. Improved database query efficiency by 22% through schema normalization, composite indexing, and query profiling. Decreased production bug reports by 20% by introducing standardized unit testing and E2E testing suite. Diagnosed and resolved defects in reporting modules ensuring data integrity and compliance with county financial reporting requirements."
            />
            <ExperienceItem
              title="SOFTWARE DEVELOPER INTERN"
              period="May — July 2023"
              description="Selected for an internship position at JamboPay, one of Kenya's top fin-tech companies. Worked with the Research and Development Department, developing solutions based on technology and technology stacks. Built hands-on skills in Software Development, primarily Backend Development using Python, JavaScript, Django & REST Framework. Worked on several projects under the guidance of CTO Ahmed. Demonstrated ability to work flexible hours across night, weekend and holiday shifts. Proven ability to develop and implement creative solutions to complex problems. Learned and adapted quickly to new technology and software applications. Strengthened communication skills through regular interactions with team members."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ title, period, description }: { title: string; period: string; description: string }) {
  return (
    <div className="max-w-4xl">
      <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
        {title}
      </h4>
      <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
        {period}
      </p>
      <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
        {description}
      </p>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Linka Africa - Crowdfunding Platform",
      period: "August 2025 — Present",
      description: "A highly available Fintech SaaS crowdfunding/fundraising platform serving users across Africa and globally. Built with Django REST Framework backend, React frontend, deployed on AWS ECS Fargate with 99.9% availability. Features multi-currency payments (M-Pesa, Stripe, PayPal, Paystack), Redis caching, Celery workers, and Infrastructure as Code with Terraform. Full CI/CD pipeline with GitHub Actions.",
      link: "https://linka-africa.com"
    },
    {
      title: "DEWCIS - File Archiving System",
      period: "2026",
      description: "A complete implementation of a file archiving system with REST API, web dashboard, and LDAP integration.. Built with Python(Fast API), Docker PostgreSQL and modern web technologies, demonstrating proficiency in backend architecture, database design, and user interface development.",
      link: "https://github.com/JohnMartin-19/DEWCIS"
    },
    {
      title: "Supermart ERP System",
      period: "2025",
      description: "An Enterprise Resource Planning (ERP) system designed for supermarket operations. Features inventory management, sales tracking, and business analytics. Built with Django framework, demonstrating complex business logic implementation and data management capabilities.",
      link: "https://github.com/JohnMartin-19/supermart-erp"
    },
    {
      title: "JamboLife 2.0 - Insurance Management Platform",
      period: "May — July 2023",
      description: "A comprehensive insurance management system built using Python, JavaScript, Django & REST Framework during my internship at JamboPay. The platform streamlines insurance operations and customer management for the fin-tech industry.",
      link: "https://github.com/JohnMartin-19/jambolife2.0"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ title, period, description, link }: { title: string; period: string; description: string; link?: string }) {
  return (
    <div className="max-w-4xl relative">
      <div className="pl-8 relative">
        <div className="absolute left-[-9px] top-[12px] w-[15px] h-[15px] bg-white/80 rounded-full backdrop-blur-sm"
             style={{ filter: 'blur(0.5px)' }} />
        <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[rgba(248,247,249,0.8)] transition-colors duration-200"
            >
              {title} →
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
          {period}
        </p>
        <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
          {description}
        </p>
      </div>
    </div>
  );
}

function CertificationsSection() {
  const certifications = [
    {
      title: "Claude Code in Action",
      year: "2026",
      organization: "Anthropic"
    },
    {
      title: "Kubernetes and Cloud Native Associate (KCNA)",
      year: "2025",
      organization: "Linux Foundation"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      year: "2025",
      organization: "Amazon Web Services"
    },
    {
      title: "DevOps on AWS",
      year: "2025",
      organization: "Amazon Web Services"
    },
    {
      title: "CISCO CCNA",
      year: "2023",
      organization: "Cisco Networking Academy"
    },
    {
      title: "BIG DATA & AI - Certificate of Completion",
      year: "2023",
      organization: "Mount Kenya University"
    },
    {
      title: "Introduction to Cyber Security",
      year: "2023",
      organization: "Cisco / Mount Kenya University"
    },
    {
      title: "Software Development Prep - Certificate of Completion",
      year: "2022",
      organization: "Moringa School"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Certifications
        </h2>
        
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="max-w-4xl relative">
              <div className="pl-8 relative">
                <div className="absolute left-[-9px] top-[12px] w-[15px] h-[15px] bg-white/80 rounded-full backdrop-blur-sm"
                     style={{ filter: 'blur(0.5px)' }} />
                <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
                  {cert.title}
                </h3>
                <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                  {cert.year}
                </p>
                <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                  {cert.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Contacts
        </h2>
        
        <div className="space-y-4 max-w-4xl">
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              Email -
            </span>
            <a
              href="mailto:johnnkonge2020@gmail.com"
              className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] hover:text-[rgba(248,247,249,0.8)] transition-colors duration-200"
            >
              johnnkonge2020@gmail.com
            </a>
          </div>
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              Phone -
            </span>
            <a
              href="tel:+254768171426"
              className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] hover:text-[rgba(248,247,249,0.8)] transition-colors duration-200"
            >
              +254 768 171 426
            </a>
          </div>
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              GitHub -
            </span>
            <a
              href="https://github.com/JohnMartin-19/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] hover:text-[rgba(248,247,249,0.8)] transition-colors duration-200"
            >
              github.com/JohnMartin-19
            </a>
          </div>
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              LinkedIn -
            </span>
            <a
              href="https://www.linkedin.com/in/john-m-015922206/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] hover:text-[rgba(248,247,249,0.8)] transition-colors duration-200"
            >
              linkedin.com/in/john-m-015922206
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-[#1f1f1f] min-h-screen text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactsSection />
      </main>
    </div>
  );
}