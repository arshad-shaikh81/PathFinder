// ==========================================================================
// ROADMAP REGISTRY SCHEMAS
// Each career now has a `phases` array. Each phase has a name, an emoji
// badge, and its own `steps` array. Step numbering stays continuous across
// all phases (1, 2, 3 ... N) when rendered.
// ==========================================================================
const careerData = {
    "software-dev": {
        title: "Software Development",
        category: "Development",
        icon: "fa-solid fa-code",
        desc: "Build real-world applications by mastering programming fundamentals, data structures, databases, and full-stack development.",
        phases: [
            {
                name: "Fundamentals",
                emoji: "🚀",
                steps: [
                    { id: "sd1", name: "Programming Language (Java / Python / C++)", hours: "40h", desc: "Pick a core language and master its syntax, object-oriented principles, and standard library before moving on.", why: "Establishes the foundational logic and syntax skills needed before tackling complex software systems.", resources: ["Codecademy Programming Track", "freeCodeCamp Programming Courses"], projects: ["Console-Based Calculator App", "Simple Inventory Management System"] },
                    { id: "sd2", name: "Data Structures & Algorithms (DSA)", hours: "80h", desc: "Learn Arrays, Strings, Linked Lists, Stacks, Queues, Trees, and Graphs along with their core operations and use-cases.", why: "DSA mastery is the backbone of technical interviews and writing efficient, scalable code.", resources: ["LeetCode DSA Roadmap", "GeeksforGeeks DSA Course"], projects: ["Custom Linked List Library", "Graph Traversal Visualizer"] },
                    { id: "sd3", name: "Database (SQL, MySQL, PostgreSQL)", hours: "35h", desc: "Learn relational database design, SQL queries, and hands-on practice with MySQL and PostgreSQL.", why: "Almost every application needs to store and retrieve data reliably, making database skills essential.", resources: ["SQLBolt Interactive Lessons", "PostgreSQL Official Tutorial"], projects: ["Library Management Database", "E-Commerce Schema Design"] }
                ]
            },
            {
                name: "Development Skills",
                emoji: "⚡",
                steps: [
                    { id: "sd4", name: "Frontend (HTML, CSS, JavaScript)", hours: "45h", desc: "Build user interfaces using HTML for structure, CSS for styling, and JavaScript for interactivity.", why: "Frontend skills let you bring applications to life visually and make them usable for real people.", resources: ["MDN Web Docs", "freeCodeCamp Responsive Web Design"], projects: ["Personal Portfolio Website", "Interactive Todo List App"] },
                    { id: "sd5", name: "Backend (Spring Boot / Node.js)", hours: "50h", desc: "Build server-side logic, REST APIs, and business logic using Spring Boot or Node.js.", why: "Backend systems power the logic, security, and data flow behind every application.", resources: ["Spring Boot Official Guides", "Node.js Official Documentation"], projects: ["REST API for a Blog Platform", "User Authentication Service"] },
                    { id: "sd6", name: "APIs", hours: "25h", desc: "Design and consume RESTful APIs, and understand HTTP methods, status codes, and token-based authentication.", why: "APIs are the connective tissue that lets frontend, backend, and third-party services communicate.", resources: ["REST API Tutorial - MDN", "Postman Learning Center"], projects: ["Public Weather API Integration", "Custom REST API with Authentication"] }
                ]
            },
            {
                name: "Professional Tools",
                emoji: "🏆",
                steps: [
                    { id: "sd7", name: "Git & GitHub", hours: "15h", desc: "Track code changes, manage branches, and collaborate with teams using Git and GitHub.", why: "Version control is a non-negotiable skill for any professional software development role.", resources: ["Git Official Documentation", "GitHub Learning Lab"], projects: ["Open Source Contribution", "Team Branching Workflow Practice"] },
                    { id: "sd8", name: "Testing Basics", hours: "25h", desc: "Write unit and integration tests to verify code correctness using frameworks like Jest or JUnit.", why: "Automated tests catch bugs early and give you confidence to change code without breaking things.", resources: ["Jest Official Documentation", "JUnit 5 User Guide"], projects: ["Unit Test Suite for a Todo App"] },
                    { id: "sd9", name: "Deployment", hours: "20h", desc: "Deploy applications to production using platforms like Vercel, Render, or a basic VPS setup.", why: "Knowing how to ship an application is just as important as knowing how to build one.", resources: ["Vercel Deployment Docs", "Render Web Service Guide"], projects: ["Deploy a Full-Stack App to Production"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "sd10", name: "Projects", hours: "60h", desc: "Combine frontend, backend, and database skills to build complete full-stack applications.", why: "Projects prove your skills to recruiters and solidify everything you've learned into practical experience.", resources: ["Full Stack Open Course", "Frontend Masters Project Guides"], projects: ["Full-Stack Blog Application", "E-Commerce Web App"] },
                    { id: "sd11", name: "Internship", hours: "20h", desc: "Apply for internships to gain real industry exposure, mentorship, and collaborative coding experience.", why: "Internships bridge the gap between learning and professional, team-based software development.", resources: ["LinkedIn Internship Listings", "Internshala"], projects: ["Internship Capstone Project", "Team Code Review Practice"] },
                    { id: "sd12", name: "Job Ready", hours: "40h", desc: "Polish your resume, practice mock interviews, and prepare for technical and behavioral interview rounds.", why: "Strong interview preparation converts technical skill into actual job offers.", resources: ["Cracking the Coding Interview", "Pramp Mock Interviews"], projects: ["Resume & Portfolio Finalization", "Mock Interview Practice Log"] }
                ]
            }
        ]
    },
    "data-science": {
        title: "Data Science",
        category: "Analytics",
        icon: "fa-solid fa-chart-line",
        desc: "Turn raw data into actionable insights using Python, statistics, machine learning, and modern visualization tools.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "ds1", name: "Python", hours: "40h", desc: "Learn Python fundamentals along with data-focused libraries needed for analysis and scripting.", why: "Python is the primary language used across the entire data science workflow.", resources: ["Python for Data Science - Kaggle", "Automate the Boring Stuff with Python"], projects: ["Data Cleaning Automation Script"] },
                    { id: "ds2", name: "Statistics", hours: "30h", desc: "Learn descriptive statistics, hypothesis testing, and distributions used to summarize and interpret data.", why: "Statistics gives you the tools to separate real patterns in data from random noise.", resources: ["Khan Academy Statistics", "StatQuest YouTube Channel"], projects: ["A/B Test Significance Calculator"] },
                    { id: "ds3", name: "Probability", hours: "25h", desc: "Understand probability theory, conditional probability, and distributions that underpin statistical models.", why: "Probability is the mathematical language that machine learning models use to express uncertainty.", resources: ["Khan Academy Probability", "Introduction to Probability - MIT OCW"], projects: ["Probability Simulation Toolkit"] },
                    { id: "ds4", name: "Linear Algebra", hours: "25h", desc: "Learn vectors, matrices, and matrix operations that power data transformations and ML algorithms.", why: "Linear algebra is the backbone of how datasets and models are represented mathematically.", resources: ["3Blue1Brown Linear Algebra Series", "MIT OpenCourseWare Linear Algebra"], projects: ["Matrix Operations Toolkit"] }
                ]
            },
            {
                name: "Data Handling",
                emoji: "⚡",
                steps: [
                    { id: "ds5", name: "Pandas", hours: "30h", desc: "Clean, filter, and transform tabular data using Pandas DataFrames and Series.", why: "Pandas is the standard tool for wrangling real-world datasets into an analysis-ready format.", resources: ["Pandas Official Documentation", "Kaggle Pandas Course"], projects: ["Sales Dataset Cleaning Pipeline"] },
                    { id: "ds6", name: "NumPy", hours: "20h", desc: "Perform fast numerical computations on arrays and matrices using NumPy.", why: "NumPy underlies almost every data science and machine learning library in Python.", resources: ["NumPy Quickstart Guide", "NumPy Official Documentation"], projects: ["Vectorized Data Computation Script"] },
                    { id: "ds7", name: "SQL", hours: "25h", desc: "Query, join, and aggregate relational data using SQL to extract insights directly from databases.", why: "Most company data lives in databases, making SQL essential for any data professional.", resources: ["Mode SQL Tutorial", "SQLZoo Practice Exercises"], projects: ["Customer Behavior SQL Analysis"] }
                ]
            },
            {
                name: "Analytics & ML",
                emoji: "🏆",
                steps: [
                    { id: "ds8", name: "Data Visualization", hours: "30h", desc: "Create clear, insightful charts and plots using Matplotlib and Seaborn to explore datasets.", why: "Visuals turn raw numbers into stories that stakeholders can actually understand and act on.", resources: ["Matplotlib Official Tutorials", "Seaborn Official Documentation"], projects: ["Exploratory Data Analysis Notebook"] },
                    { id: "ds9", name: "Machine Learning", hours: "60h", desc: "Learn supervised and unsupervised learning algorithms including regression, classification, and clustering.", why: "Machine learning enables predictive insights that go beyond simple descriptive analysis.", resources: ["Andrew Ng Machine Learning Specialization", "Scikit-learn Official Documentation"], projects: ["House Price Prediction Model"] },
                    { id: "ds10", name: "Power BI / Tableau", hours: "25h", desc: "Build interactive dashboards and reports for business stakeholders using Power BI and Tableau.", why: "Business teams often consume insights through dashboards rather than code or notebooks.", resources: ["Tableau Public Training Videos", "Microsoft Power BI Learning Path"], projects: ["Interactive Sales Dashboard"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "ds11", name: "Projects", hours: "50h", desc: "Apply the full data science workflow end-to-end on real datasets, from cleaning to modeling to presentation.", why: "End-to-end projects demonstrate your ability to solve actual business problems with data.", resources: ["Towards Data Science Project Guides", "DataCamp Project Portfolio"], projects: ["Customer Churn Prediction Project"] },
                    { id: "ds12", name: "Kaggle Practice", hours: "40h", desc: "Compete in Kaggle competitions to practice modeling skills against real datasets and benchmarks.", why: "Kaggle sharpens practical skills and builds a portfolio that data science recruiters recognize.", resources: ["Kaggle Learn Courses", "Kaggle Competition Notebooks"], projects: ["Titanic Survival Prediction Submission"] },
                    { id: "ds13", name: "Job Ready", hours: "30h", desc: "Build a strong portfolio, practice case study interviews, and prepare for data science specific technical rounds.", why: "Data science interviews test both technical depth and business communication, requiring focused prep.", resources: ["StrataScratch Interview Questions", "Ace the Data Science Interview"], projects: ["Data Science Portfolio Website"] }
                ]
            }
        ]
    },
    "artificial-intelligence": {
        title: "Artificial Intelligence",
        category: "Intelligence",
        icon: "fa-solid fa-brain",
        desc: "Design intelligent systems spanning machine learning, deep learning, computer vision, NLP, and generative AI.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "ai1", name: "Python", hours: "35h", desc: "Strengthen Python skills with a focus on libraries used heavily in AI development like NumPy and PyTorch.", why: "Python is the dominant language across nearly all AI research and production systems.", resources: ["Python Official Tutorial", "PyTorch Beginner Tutorials"], projects: ["Custom Tensor Operations Script"] },
                    { id: "ai2", name: "Mathematics", hours: "40h", desc: "Master linear algebra and calculus concepts that power machine learning and neural network models.", why: "These mathematical foundations explain how models learn and why algorithms behave the way they do.", resources: ["MIT OpenCourseWare Linear Algebra", "Mathematics for Machine Learning - Coursera"], projects: ["Gradient Descent Visualizer"] },
                    { id: "ai3", name: "Statistics", hours: "30h", desc: "Learn probability distributions, statistical inference, and hypothesis testing as applied to model evaluation.", why: "Statistical reasoning helps you judge whether a model's performance is meaningful or just noise.", resources: ["Khan Academy Statistics & Probability", "StatQuest YouTube Channel"], projects: ["Statistical Model Evaluation Toolkit"] }
                ]
            },
            {
                name: "Machine Learning",
                emoji: "⚡",
                steps: [
                    { id: "ai4", name: "Supervised Learning", hours: "35h", desc: "Learn regression and classification algorithms trained on labeled data, including decision trees and SVMs.", why: "Supervised learning is the most widely used branch of machine learning in real-world applications.", resources: ["Andrew Ng Machine Learning Specialization", "Scikit-learn User Guide"], projects: ["Spam Email Classifier"] },
                    { id: "ai5", name: "Unsupervised Learning", hours: "30h", desc: "Explore clustering and dimensionality reduction techniques like K-Means and PCA on unlabeled data.", why: "Unsupervised learning uncovers hidden patterns and structure when labeled data isn't available.", resources: ["Scikit-learn Clustering Guide", "StatQuest Unsupervised Learning Playlist"], projects: ["Customer Segmentation Clustering Model"] },
                    { id: "ai6", name: "Model Evaluation", hours: "20h", desc: "Learn metrics like precision, recall, and cross-validation techniques to properly assess model performance.", why: "A model is only as good as your ability to measure whether it's actually working.", resources: ["Scikit-learn Model Evaluation Docs", "Google Machine Learning Crash Course"], projects: ["Model Comparison & Evaluation Report"] }
                ]
            },
            {
                name: "Advanced AI",
                emoji: "🏆",
                steps: [
                    { id: "ai7", name: "Deep Learning", hours: "65h", desc: "Build and train deep neural networks using frameworks like PyTorch or TensorFlow, covering backpropagation and optimization.", why: "Deep learning powers the majority of modern breakthroughs in vision, language, and generative systems.", resources: ["Deep Learning Specialization - Coursera", "Fast.ai Practical Deep Learning"], projects: ["Handwritten Digit Recognition Model"] },
                    { id: "ai8", name: "NLP", hours: "50h", desc: "Process and model text data using tokenization, embeddings, and transformer-based language models.", why: "NLP enables machines to understand and generate human language for chatbots, search, and more.", resources: ["Hugging Face NLP Course", "Stanford CS224n Lecture Notes"], projects: ["Sentiment Analysis Tool"] },
                    { id: "ai9", name: "Computer Vision", hours: "50h", desc: "Learn image processing, object detection, and segmentation techniques using deep learning models.", why: "Computer vision powers applications from facial recognition to autonomous vehicles.", resources: ["OpenCV Official Tutorials", "PyImageSearch Guides"], projects: ["Real-Time Object Detection App"] },
                    { id: "ai10", name: "Generative AI", hours: "45h", desc: "Explore generative models including GANs, diffusion models, and large language models for content generation.", why: "Generative AI is reshaping industries through text, image, and code generation capabilities.", resources: ["Hugging Face Diffusers Documentation", "OpenAI API Documentation"], projects: ["AI Image Generator Using Diffusion Models"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "ai11", name: "AI Projects", hours: "60h", desc: "Combine deep learning, NLP, and computer vision skills into complete, deployable AI applications.", why: "Capstone projects showcase your ability to design and ship real AI solutions end-to-end.", resources: ["Papers With Code Project Ideas", "Made With ML Project Guides"], projects: ["End-to-End AI Chatbot Application"] },
                    { id: "ai12", name: "Portfolio", hours: "25h", desc: "Build a polished portfolio website showcasing your AI projects, code, and writeups.", why: "A strong portfolio gives recruiters tangible proof of your skills beyond a resume.", resources: ["GitHub Pages Portfolio Guide", "Made With ML Portfolio Examples"], projects: ["AI Portfolio Website"] },
                    { id: "ai13", name: "Job Ready", hours: "35h", desc: "Prepare for AI/ML interviews covering math fundamentals, model design questions, and coding rounds.", why: "AI roles demand a unique mix of theoretical depth and applied coding ability during interviews.", resources: ["Machine Learning Interview Questions Guide", "Interviewing.io ML Interview Prep"], projects: ["AI Portfolio & Research Blog"] }
                ]
            }
        ]
    },
    "cyber-security": {
        title: "Cyber Security",
        category: "Security",
        icon: "fa-solid fa-shield-halved",
        desc: "Defend systems and networks by mastering networking, ethical hacking, penetration testing, and industry-standard security tools.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "cs1", name: "Networking Fundamentals", hours: "35h", desc: "Understand the OSI model, TCP/IP, DNS, and how data travels across networks.", why: "Networking knowledge is the foundation for understanding how attacks and defenses actually work.", resources: ["Cisco Networking Basics", "Professor Messer Network Plus Course"], projects: ["Home Network Traffic Map"] },
                    { id: "cs2", name: "Linux", hours: "30h", desc: "Master the Linux command line, file permissions, and system administration basics.", why: "Most security tools and servers run on Linux, making fluency essential for the field.", resources: ["Linux Journey", "OverTheWire Bandit Wargame"], projects: ["Linux Server Hardening Checklist"] },
                    { id: "cs3", name: "Operating Systems", hours: "30h", desc: "Learn how Windows and Linux operating systems manage processes, memory, and access control.", why: "Understanding OS internals helps identify and defend against system-level vulnerabilities.", resources: ["Windows Internals Book Series", "Linux Security Cookbook"], projects: ["System Hardening Audit Report"] }
                ]
            },
            {
                name: "Security Core",
                emoji: "⚡",
                steps: [
                    { id: "cs4", name: "Security Basics", hours: "35h", desc: "Cover core concepts like the CIA triad, authentication, and access control models that frame all security work.", why: "These principles form the conceptual backbone of every security decision and control.", resources: ["CompTIA Security+ Study Guide", "Cybrary Security Fundamentals Course"], projects: ["Access Control Policy Design"] },
                    { id: "cs5", name: "Cryptography", hours: "30h", desc: "Learn encryption, hashing, and digital signature techniques that protect data confidentiality and integrity.", why: "Cryptography underlies secure communication, password storage, and data protection everywhere.", resources: ["Cryptography I - Stanford (Coursera)", "Practical Cryptography for Developers"], projects: ["Encryption & Hashing Demo Tool"] },
                    { id: "cs6", name: "Web Security", hours: "45h", desc: "Study common web vulnerabilities like SQL injection, XSS, and CSRF and how to mitigate them.", why: "Web applications are among the most frequently attacked surfaces in modern infrastructure.", resources: ["OWASP Top 10 Documentation", "PortSwigger Web Security Academy"], projects: ["Vulnerable Web App Exploitation Lab"] }
                ]
            },
            {
                name: "Ethical Hacking",
                emoji: "🏆",
                steps: [
                    { id: "cs7", name: "Penetration Testing", hours: "50h", desc: "Learn structured methodologies for testing systems and networks for exploitable security weaknesses.", why: "Pen testing simulates real attacks to proactively find and fix vulnerabilities before attackers do.", resources: ["TryHackMe Pentesting Path", "Penetration Testing Execution Standard"], projects: ["Internal Network Penetration Test Report"] },
                    { id: "cs8", name: "Ethical Hacking", hours: "45h", desc: "Apply offensive security techniques legally and responsibly to assess system and application defenses.", why: "Ethical hacking certifications and skills are highly valued for defensive security roles.", resources: ["Certified Ethical Hacker (CEH) Materials", "Hack The Box Practice Labs"], projects: ["Capture The Flag Challenge Walkthroughs"] },
                    { id: "cs9", name: "Security Tools (Wireshark, Burp Suite, Nmap)", hours: "35h", desc: "Gain hands-on proficiency with Wireshark for packet analysis, Burp Suite for web testing, and Nmap for network scanning.", why: "These tools are industry standards used daily by security analysts and penetration testers.", resources: ["Wireshark Official Documentation", "Nmap Network Scanning Guide"], projects: ["Network Scan & Traffic Analysis Report"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "cs10", name: "Security Projects", hours: "50h", desc: "Build a portfolio of hands-on security labs covering network defense, exploitation, and incident response.", why: "Practical, demonstrable projects are critical for proving skills in a hands-on security field.", resources: ["TryHackMe Practice Rooms", "VulnHub Virtual Machines"], projects: ["Home Security Operations Center Lab"] },
                    { id: "cs11", name: "Certifications", hours: "35h", desc: "Pursue recognized credentials like CompTIA Security+, CEH, or OSCP to validate your security skills.", why: "Certifications are often a hard requirement for security job postings and help you stand out.", resources: ["CompTIA Security+ Exam Guide", "Offensive Security OSCP Overview"], projects: ["Certification Study Plan & Practice Tracker"] },
                    { id: "cs12", name: "Job Ready", hours: "30h", desc: "Prepare for security certifications, technical interviews, and real-world incident response scenarios.", why: "Security roles often require both certification credentials and demonstrated practical thinking under pressure.", resources: ["Cybersecurity Interview Questions Bank", "Mock SOC Analyst Interview Prep"], projects: ["Incident Response Tabletop Exercise"] }
                ]
            }
        ]
    },
    "cloud-computing": {
        title: "Cloud Architecture",
        category: "Infrastructure",
        icon: "fa-solid fa-cloud",
        desc: "Design and deploy scalable, secure cloud infrastructure using AWS compute, storage, networking, and monitoring services.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "cc1", name: "Networking", hours: "30h", desc: "Learn IP addressing, subnetting, VPNs, and load balancing concepts essential to cloud networking.", why: "Cloud infrastructure is built on networking concepts, making this knowledge foundational.", resources: ["Cisco Networking Basics", "AWS Networking Fundamentals Guide"], projects: ["Virtual Private Cloud Network Design"] },
                    { id: "cc2", name: "Linux", hours: "30h", desc: "Build comfort with the Linux command line, package management, and server administration tasks.", why: "The vast majority of cloud servers and containers run on Linux-based systems.", resources: ["Linux Journey", "Red Hat Linux Administration Course"], projects: ["Automated Linux Server Setup Script"] },
                    { id: "cc3", name: "Virtualization", hours: "25h", desc: "Understand virtual machines, hypervisors, and containerization as the building blocks of cloud computing.", why: "Virtualization is what allows cloud providers to offer flexible, on-demand computing resources.", resources: ["VMware Virtualization Basics", "Docker Get Started Guide"], projects: ["Multi-VM Lab Environment Setup"] }
                ]
            },
            {
                name: "Cloud Core",
                emoji: "⚡",
                steps: [
                    { id: "cc4", name: "AWS Fundamentals", hours: "40h", desc: "Learn the AWS global infrastructure, IAM, and core service categories available on the platform.", why: "AWS is the most widely adopted cloud platform, making it a strong starting point for cloud careers.", resources: ["AWS Cloud Practitioner Essentials", "AWS Well-Architected Framework"], projects: ["AWS Account Setup & IAM Policy Design"] },
                    { id: "cc5", name: "Storage Services", hours: "30h", desc: "Work with object, block, and file storage services like S3, EBS, and EFS for different data needs.", why: "Choosing the right storage type directly affects application performance and cost.", resources: ["AWS S3 Developer Guide", "AWS Storage Services Overview"], projects: ["Static Website Hosted on S3"] },
                    { id: "cc6", name: "Compute Services", hours: "40h", desc: "Provision and manage virtual servers, serverless functions, and container services like EC2 and Lambda.", why: "Compute services are the core engines that run applications in the cloud.", resources: ["AWS EC2 User Guide", "AWS Lambda Developer Guide"], projects: ["Serverless API with AWS Lambda"] }
                ]
            },
            {
                name: "Cloud Operations",
                emoji: "🏆",
                steps: [
                    { id: "cc7", name: "Security", hours: "35h", desc: "Implement identity policies, encryption, and network security controls to protect cloud resources.", why: "Misconfigured cloud security is one of the leading causes of major data breaches.", resources: ["AWS Security Best Practices", "CIS AWS Foundations Benchmark"], projects: ["Secure Multi-Account IAM Strategy"] },
                    { id: "cc8", name: "Monitoring", hours: "25h", desc: "Set up monitoring, alerting, and logging using tools like CloudWatch to track system health.", why: "Visibility into system performance is essential for maintaining reliable cloud infrastructure.", resources: ["AWS CloudWatch User Guide", "AWS Observability Best Practices"], projects: ["Automated Alerting Dashboard"] },
                    { id: "cc9", name: "Infrastructure Management", hours: "35h", desc: "Manage infrastructure as code using tools like Terraform or AWS CloudFormation for repeatable deployments.", why: "Infrastructure as code makes cloud environments consistent, version-controlled, and easy to scale.", resources: ["Terraform Official Documentation", "AWS CloudFormation User Guide"], projects: ["Infrastructure as Code Template"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "cc10", name: "Cloud Projects", hours: "50h", desc: "Architect and deploy multi-tier applications using a combination of compute, storage, and networking services.", why: "Real deployments demonstrate your ability to design resilient, scalable cloud systems.", resources: ["AWS Architecture Center Case Studies", "AWS Solutions Library"], projects: ["Three-Tier Web Application Deployment"] },
                    { id: "cc11", name: "AWS Certification", hours: "40h", desc: "Study for and pursue an AWS certification such as Solutions Architect Associate to validate your skills.", why: "Certifications provide recognized proof of cloud expertise that recruiters actively look for.", resources: ["AWS Certified Solutions Architect Guide", "Tutorials Dojo Practice Exams"], projects: ["Certification Practice Exam Tracker"] },
                    { id: "cc12", name: "Job Ready", hours: "25h", desc: "Prepare your resume, portfolio, and interview answers focused on cloud architecture scenarios.", why: "Cloud interviews often involve scenario-based design questions that require structured preparation.", resources: ["Cloud Architect Interview Questions", "AWS Case Study Interview Prep"], projects: ["Cloud Portfolio & Case Study Writeups"] }
                ]
            }
        ]
    },
    "devops-engineering": {
        title: "DevOps Engineering",
        category: "Infrastructure",
        icon: "fa-solid fa-infinity",
        desc: "Automate software delivery with CI/CD pipelines, containerization, orchestration, and cloud infrastructure management.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "do1", name: "Linux", hours: "30h", desc: "Build strong command-line skills, file system knowledge, and system administration basics on Linux.", why: "DevOps tooling and infrastructure overwhelmingly run on Linux-based systems.", resources: ["Linux Journey", "The Linux Command Line Book"], projects: ["Automated System Setup Script"] },
                    { id: "do2", name: "Networking", hours: "25h", desc: "Understand core networking concepts like DNS, load balancing, and firewalls relevant to deployed systems.", why: "Deploying and troubleshooting infrastructure requires a solid grasp of how networks function.", resources: ["Cisco Networking Basics", "DevOps Networking Concepts Guide"], projects: ["Load Balancer Configuration Lab"] },
                    { id: "do3", name: "Git & GitHub", hours: "15h", desc: "Manage source code, branching strategies, and collaborative workflows using Git and GitHub.", why: "Version control underpins every CI/CD pipeline and team collaboration workflow.", resources: ["Git Official Documentation", "GitHub Actions Documentation"], projects: ["Branching Strategy Implementation"] }
                ]
            },
            {
                name: "Automation",
                emoji: "⚡",
                steps: [
                    { id: "do4", name: "Bash Scripting", hours: "20h", desc: "Automate system tasks and file operations using Bash scripts on Linux.", why: "Bash scripting is the quickest way to automate everyday operational tasks on servers.", resources: ["Bash Scripting Tutorial", "ShellCheck Best Practices Guide"], projects: ["Automated Backup Script"] },
                    { id: "do5", name: "Python Scripting", hours: "20h", desc: "Write Python automation scripts for more complex tasks like API calls and data processing in pipelines.", why: "Python scripting extends automation beyond simple shell tasks into more powerful tooling.", resources: ["Automate the Boring Stuff with Python", "Python Official Documentation"], projects: ["Automated Deployment Helper Script"] },
                    { id: "do6", name: "CI/CD", hours: "45h", desc: "Build continuous integration and deployment pipelines that automatically test and ship code changes.", why: "CI/CD reduces manual errors and speeds up the delivery of reliable software releases.", resources: ["GitHub Actions Documentation", "Jenkins User Documentation"], projects: ["Automated Build & Deploy Pipeline"] }
                ]
            },
            {
                name: "DevOps Tools",
                emoji: "🏆",
                steps: [
                    { id: "do7", name: "Docker", hours: "40h", desc: "Package applications into portable containers using Docker images, volumes, and networking.", why: "Containers ensure applications run consistently across development, testing, and production environments.", resources: ["Docker Get Started Guide", "Docker Official Documentation"], projects: ["Containerized Microservice Application"] },
                    { id: "do8", name: "Kubernetes", hours: "55h", desc: "Deploy, scale, and manage containerized applications using Kubernetes pods, services, and deployments.", why: "Kubernetes is the industry standard for orchestrating containers at production scale.", resources: ["Kubernetes Official Documentation", "Kubernetes Up & Running Book"], projects: ["Multi-Service Kubernetes Cluster Deployment"] },
                    { id: "do9", name: "AWS", hours: "35h", desc: "Provision and manage cloud infrastructure on AWS to host and scale DevOps pipelines and applications.", why: "Most modern DevOps practices are built on top of cloud infrastructure providers like AWS.", resources: ["AWS Cloud Practitioner Essentials", "Terraform on AWS Tutorials"], projects: ["Infrastructure as Code with Terraform"] },
                    { id: "do10", name: "Prometheus", hours: "20h", desc: "Collect and query time-series metrics from applications and infrastructure using Prometheus.", why: "Prometheus is the most widely used open-source monitoring system in cloud-native environments.", resources: ["Prometheus Official Documentation", "Prometheus Getting Started Guide"], projects: ["Custom Metrics Exporter Setup"] },
                    { id: "do11", name: "Grafana", hours: "15h", desc: "Build real-time dashboards to visualize metrics collected from Prometheus and other data sources.", why: "Grafana turns raw metrics into visual dashboards that teams can monitor at a glance.", resources: ["Grafana Getting Started Guide", "Grafana Dashboard Examples"], projects: ["Real-Time Monitoring Dashboard"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "do12", name: "DevOps Projects", hours: "50h", desc: "Combine CI/CD, containers, orchestration, and monitoring into a complete end-to-end DevOps pipeline.", why: "End-to-end projects prove your ability to manage the full software delivery lifecycle.", resources: ["DevOps Roadmap Project Ideas", "Awesome DevOps GitHub Repository"], projects: ["Full CI/CD Pipeline with Kubernetes Deployment"] },
                    { id: "do13", name: "Deployment Practice", hours: "25h", desc: "Practice deploying full applications end-to-end through a complete CI/CD pipeline into production.", why: "Hands-on deployment practice proves you can manage the full software delivery lifecycle reliably.", resources: ["DevOps Roadmap Project Ideas", "Production Deployment Checklists"], projects: ["Full Production Deployment Walkthrough"] },
                    { id: "do14", name: "Job Ready", hours: "25h", desc: "Prepare your resume, portfolio, and answers for DevOps-focused technical and scenario-based interviews.", why: "DevOps interviews often test both tool fluency and real-world troubleshooting reasoning.", resources: ["DevOps Interview Questions Guide", "System Design Interview Prep"], projects: ["DevOps Portfolio & Case Studies"] }
                ]
            }
        ]
    }
};

// Color used for each phase's badge + node markers (cycles if more than 4 phases)
const PHASE_COLORS = ["#2563eb", "#9d4edf", "#f59e0b", "#ec4899"];

// ==========================================================================
// REGISTRATION STATES & APPLICATION INSTANCE CACHING
// ==========================================================================
let progressTracker = JSON.parse(localStorage.getItem('pathfinder_progress')) || {};
let savedCareers = JSON.parse(localStorage.getItem('pathfinder_saved')) || [];
let activeOpenCareer = null;

// ==========================================================================
// COMPONENT LIFE CYCLE HOOK INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('fade-out');
    }, 400);

    renderCareerCards();
    setupCoreEventListeners();
    updateGlobalMetricsDashboard();
});

// ==========================================================================
// PHASE-AWARE DATA HELPERS
// ==========================================================================
function getAllSteps(careerKey) {
    const career = careerData[careerKey];
    if (!career || !career.phases) return [];
    return career.phases.flatMap(phase => phase.steps);
}

function findStepById(careerKey, stepId) {
    return getAllSteps(careerKey).find(s => s.id === stepId);
}

// ==========================================================================
// CORE RENDER LOGIC ENGINE
// ==========================================================================
function renderCareerCards(filter = "") {
    const grid = document.getElementById('career-grid');
    if (!grid) return;
    grid.innerHTML = "";
    
    const searchString = filter.toLowerCase().trim();
    let displayCount = 0;

    Object.keys(careerData).forEach(key => {
        const career = careerData[key];
        
        if (searchString !== "" && 
            !career.title.toLowerCase().includes(searchString) && 
            !career.desc.toLowerCase().includes(searchString) &&
            !career.category.toLowerCase().includes(searchString)) {
            return;
        }

        displayCount++;
        const isSaved = savedCareers.includes(key);

        const card = document.createElement('div');
        card.className = "career-card custom-premium-card";
        card.innerHTML = `
            <div class="card-header-row" style="display: flex; justify-content: space-between; width: 100%; align-items: center; margin-bottom: 1.2rem;">
                <div class="card-icon-frame custom-gradient-icon" style="width: 48px; height: 48px; background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); border-radius: 12px; display: flex; justify-content: center; align-items: center; color: #ffffff; font-size: 1.2rem;">
                    <i class="${career.icon}"></i>
                </div>
                <button class="save-card-btn ${isSaved ? 'saved' : ''}" style="background: none; border: none; cursor: pointer; color: ${isSaved ? 'var(--accent-purple)' : 'var(--text-muted)'}; font-size: 1.1rem;" onclick="event.stopPropagation(); toggleSaveCareer('${key}')" aria-label="Pin Trajectory">
                    <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                </button>
            </div>
            <div class="card-body-segment" style="flex-grow: 1; text-align: left; margin-bottom: 1.5rem;">
                <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.65rem;">${career.title}</h3>
                <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; font-weight: 400;">${career.desc}</p>
            </div>
            <div class="card-action-footer" style="width: 100%; text-align: center;">
                <button class="explore-path-action-btn" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--glass-border); color: #ffffff; padding: 0.7rem 1rem; border-radius: 8px; font-size: 0.88rem; font-weight: 500; cursor: pointer;" onclick="openRoadmapView('${key}')">
                    Explore Path
                </button>
            </div>
        `;
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });

        grid.appendChild(card);
    });

    const totalIndicator = document.getElementById('total-tracks-indicator');
    if (totalIndicator) {
        totalIndicator.innerText = `${displayCount} Track${displayCount === 1 ? '' : 's'} Available`;
    }

    if (displayCount === 0) {
        grid.innerHTML = `<div class="glass-card" style="padding: 3rem; text-align: center; grid-column: 1/-1; color: var(--text-muted); font-size: 0.9rem;">No career paths match your query parameters.</div>`;
    }
}

// ==========================================================================
// WORKSPACE TRAJECTORY PINNING OPERATIONS
// ==========================================================================
function toggleSaveCareer(careerKey) {
    const idx = savedCareers.indexOf(careerKey);
    if (idx > -1) {
        savedCareers.splice(idx, 1);
    } else {
        savedCareers.push(careerKey);
    }
    
    localStorage.setItem('pathfinder_saved', JSON.stringify(savedCareers));
    
    const searchBar = document.getElementById('career-search');
    renderCareerCards(searchBar ? searchBar.value : "");
    
    if (!document.getElementById('saved-view').classList.contains('hidden')) {
        renderSavedCareers();
    }
}

function showSavedCareersView() {
    renderSavedCareers();
    showSection('saved-view');
}

function renderSavedCareers() {
    const grid = document.getElementById('saved-career-grid');
    if (!grid) return;
    grid.innerHTML = "";

    if (savedCareers.length === 0) {
        grid.innerHTML = `
            <div class="glass-card" style="padding: 4rem 2rem; text-align: center; grid-column: 1/-1; color: var(--text-muted); width: 100%;">
                <i class="fa-regular fa-bookmark" style="font-size: 2.2rem; margin-bottom: 1rem; display: block; color: var(--accent-purple);"></i>
                <h4 style="color: var(--text-main); margin-bottom: 0.4rem; font-size: 1.1rem;">No Saved Trajectories Pinned</h4>
                <p style="font-size: 0.88rem; max-width: 420px; margin: 0 auto;">Select the bookmark tag on any option tile to construct shortcuts to your targets here.</p>
            </div>`;
        return;
    }

    savedCareers.forEach(key => {
        const career = careerData[key];
        if (!career) return;
        
        const card = document.createElement('div');
        card.className = "career-card custom-premium-card";
        card.innerHTML = `
            <div class="card-header-row" style="display: flex; justify-content: space-between; width: 100%; align-items: center; margin-bottom: 1.2rem;">
                <div class="card-icon-frame custom-gradient-icon" style="width: 48px; height: 48px; background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); border-radius: 12px; display: flex; justify-content: center; align-items: center; color: #ffffff; font-size: 1.2rem;">
                    <i class="${career.icon}"></i>
                </div>
                <button class="save-card-btn saved" style="background: none; border: none; cursor: pointer; color: var(--accent-purple); font-size: 1.1rem;" onclick="event.stopPropagation(); toggleSaveCareer('${key}')" aria-label="Unpin Path">
                    <i class="fa-solid fa-bookmark"></i>
                </button>
            </div>
            <div class="card-body-segment" style="flex-grow: 1; text-align: left; margin-bottom: 1.5rem;">
                <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.65rem;">${career.title}</h3>
                <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">${career.desc}</p>
            </div>
            <div class="card-action-footer" style="width: 100%; text-align: center;">
                <button class="explore-path-action-btn" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--glass-border); color: #ffffff; padding: 0.7rem 1rem; border-radius: 8px; font-size: 0.88rem; font-weight: 500; cursor: pointer;" onclick="openRoadmapView('${key}')">
                    Explore Path
                </button>
            </div>
        `;
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });

        grid.appendChild(card);
    });
}

// ==========================================================================
// RENDERING TIMELINE PIPELINES WITH CONNECTORS (NOW PHASE-GROUPED)
// ==========================================================================
function openRoadmapView(careerKey) {
    activeOpenCareer = careerKey;
    const career = careerData[careerKey];
    
    document.getElementById('roadmap-title').innerText = career.title;
    document.getElementById('roadmap-desc').innerText = career.desc;
    
    const iconFrame = document.getElementById('roadmap-icon');
    if (iconFrame) iconFrame.innerHTML = `<i class="${career.icon}"></i>`;

    renderRoadmapTimeline(careerKey);
    showSection('roadmap-view');
}

function renderRoadmapTimeline(careerKey) {
    const timeline = document.getElementById('roadmap-timeline');
    if (!timeline) return;
    timeline.innerHTML = "";

    const phases = careerData[careerKey].phases;
    let globalIndex = 0;

    phases.forEach((phase, phaseIdx) => {
        const phaseColor = PHASE_COLORS[phaseIdx % PHASE_COLORS.length];

        // Divider between phases (skip before the very first phase)
        if (phaseIdx > 0) {
            const divider = document.createElement('div');
            divider.className = "phase-divider";
            divider.style = "width: 100%; max-width: 680px; margin: 0.5rem auto 2rem auto; border-top: 1px dashed var(--glass-border);";
            timeline.appendChild(divider);
        }

        // Phase header badge
        const phaseHeader = document.createElement('div');
        phaseHeader.className = "phase-banner-row";
        phaseHeader.style = "display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem; width: 100%; max-width: 680px; margin-left: auto; margin-right: auto; padding-left: 0.5rem;";
        phaseHeader.innerHTML = `
            <span class="phase-badge" style="background: ${phaseColor}; color: #ffffff; font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap;">${phase.emoji} Phase ${phaseIdx + 1}</span>
            <h4 class="phase-title" style="font-size: 1.15rem; font-weight: 600; color: #ffffff;">${phase.name}</h4>
        `;
        timeline.appendChild(phaseHeader);

        phase.steps.forEach((step, stepIdxInPhase) => {
            globalIndex++;
            const isDone = progressTracker[step.id] === true;

            const node = document.createElement('div');
            node.className = "timeline-node-wrapper";
            node.style = "display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 680px; margin: 0 auto;";

            node.innerHTML = `
                <div class="milestone-tree-card" style="display: flex; align-items: center; background: rgba(30, 27, 51, 0.45); border: 1px solid var(--glass-border); border-radius: 16px; padding: 1.25rem 1.5rem; width: 100%; min-height: 84px; position: relative; transition: border-color 0.2s;" onclick="openModal('${careerKey}', '${step.id}')">
                    
                    <div class="step-index-circle-marker ${isDone ? 'completed-node' : ''}" style="width: 42px; height: 42px; border-radius: 50%; border: 2px solid ${isDone ? '#10b981' : phaseColor}; display: flex; justify-content: center; align-items: center; font-weight: 700; color: ${isDone ? '#10b981' : phaseColor}; font-size: 0.95rem; margin-right: 1.25rem; flex-shrink: 0; position: relative; cursor: pointer;" onclick="event.stopPropagation(); invertSkillNodeState('${careerKey}', '${step.id}')">
                        <span class="index-num-label">${globalIndex}</span>
                    </div>

                    <div class="milestone-text-block" style="flex-grow: 1; text-align: left; padding-right: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                        <h4 style="font-size: 1rem; font-weight: 600; color: #ffffff; margin-bottom: 0.25rem; cursor: pointer;">${step.name}</h4>
                        <p style="font-size: 0.85rem; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; max-width: 440px;">${step.desc}</p>
                    </div>

                    <div class="timeframe-allocation-label" style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted); flex-shrink: 0; margin-left: auto;">
                        ${step.hours}
                    </div>
                </div>
            `;

            timeline.appendChild(node);

            // Arrow connector only between steps within the same phase
            if (stepIdxInPhase < phase.steps.length - 1) {
                const structuralArrow = document.createElement('div');
                structuralArrow.className = "pipeline-connector-vector";
                structuralArrow.style = "display: flex; justify-content: center; align-items: center; padding: 0.75rem 0; font-size: 1.1rem; width: 100%; margin-left: -2.5rem;";
                structuralArrow.innerHTML = `<i class="fa-solid fa-arrow-down-long" style="color: ${phaseColor}; opacity: 0.65;"></i>`;
                timeline.appendChild(structuralArrow);
            }
        });
    });

    calculateTrackCompletion(careerKey);
}

// ==========================================================================
// QUANTITATIVE VALUES & PROGRESS METRIC MANAGEMENT
// ==========================================================================
function invertSkillNodeState(careerKey, stepId) {
    if (progressTracker[stepId]) {
        delete progressTracker[stepId];
    } else {
        progressTracker[stepId] = true;
    }

    localStorage.setItem('pathfinder_progress', JSON.stringify(progressTracker));
    
    renderRoadmapTimeline(careerKey);
    updateGlobalMetricsDashboard();
}

function calculateTrackCompletion(careerKey) {
    const steps = getAllSteps(careerKey);
    const total = steps.length;
    let completedCount = 0;

    steps.forEach(s => {
        if (progressTracker[s.id]) completedCount++;
    });

    const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    
    const trackPercent = document.getElementById('track-progress-percent');
    const trackFill = document.getElementById('track-progress-fill');

    if (trackPercent) trackPercent.innerText = `${percentage}%`;
    if (trackFill) trackFill.style.width = `${percentage}%`;
}

function updateGlobalMetricsDashboard() {
    let totalSkillsCount = 0;
    let totalCompletedCount = 0;

    Object.keys(careerData).forEach(key => {
        getAllSteps(key).forEach(step => {
            totalSkillsCount++;
            if (progressTracker[step.id]) totalCompletedCount++;
        });
    });

    const remainingCount = totalSkillsCount - totalCompletedCount;
    const globalPercent = totalSkillsCount > 0 ? Math.round((totalCompletedCount / totalSkillsCount) * 100) : 0;

    animateCounter('dash-total-skills', totalSkillsCount, 2500);
    animateCounter('dash-completed-skills', totalCompletedCount, 2500);
    animateCounter('dash-remaining-skills', remainingCount, 2500);
    animateCounter('dash-percentage', globalPercent, 2500, true);
    animateCounter('global-progress-text', globalPercent, 2500, true);

    const globalProgressFill = document.getElementById('global-progress-fill');
    if (globalProgressFill) {
        globalProgressFill.style.transition = 'none';
        globalProgressFill.style.width = '0%';
        void globalProgressFill.offsetWidth; 
        globalProgressFill.style.transition = 'width 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
        globalProgressFill.style.width = `${globalPercent}%`;
    }
}

// ==========================================================================
// SPEC SHEET POPUP OVERLAYS
// ==========================================================================
function openModal(careerKey, stepId) {
    const step = findStepById(careerKey, stepId);
    if (!step) return;

    document.getElementById('modal-topic-name').innerText = step.name;
    document.getElementById('modal-description').innerText = step.desc;
    document.getElementById('modal-why-learn').innerText = step.why;

    const resourceUl = document.getElementById('modal-resources');
    if (resourceUl) {
        resourceUl.innerHTML = "";
        step.resources.forEach(r => {
            const li = document.createElement('li');
            li.innerText = r;
            resourceUl.appendChild(li);
        });
    }

    const projectUl = document.getElementById('modal-projects');
    if (projectUl) {
        projectUl.innerHTML = "";
        step.projects.forEach(p => {
            const li = document.createElement('li');
            li.innerText = p;
            projectUl.appendChild(li);
        });
    }

    const modal = document.getElementById('details-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    if (modal) modal.classList.add('hidden');
}

// ==========================================================================
// VIEW SHIFT OPERATION OVERLAYS
// ==========================================================================
function showSection(sectionId) {
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.remove('hidden');
    
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.remove('show');
    
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    
    if (sectionId === 'home-view' || sectionId === 'roadmap-view') {
        const navHome = document.getElementById('nav-item-home');
        if (navHome) navHome.classList.add('active');
        
    } else if (sectionId === 'dashboard-view') {
        const navDash = document.getElementById('nav-item-dashboard');
        if (navDash) navDash.classList.add('active');
        updateGlobalMetricsDashboard(); 
        
    } else if (sectionId === 'saved-view') {
        const navSaved = document.getElementById('nav-item-saved');
        if (navSaved) navSaved.classList.add('active');
        
    } else if (sectionId === 'recommend-view') {
        const navRec = document.getElementById('nav-item-recommend');
        if (navRec) navRec.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// PREMIUM NUMBER COUNTER ANIMATION ENGINE
// ==========================================================================
function animateCounter(elementId, targetValue, duration = 1500, isPercentage = false) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = Math.floor(easeOut * targetValue);

        element.innerText = isPercentage ? `${currentValue}%` : currentValue;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.innerText = isPercentage ? `${targetValue}%` : targetValue;
        }
    };

    window.requestAnimationFrame(step);
}

// ==========================================================================
// INFRASTRUCTURE INPUT EVENT RUNTIMES
// ==========================================================================
function setupCoreEventListeners() {
    const searchBar = document.getElementById('career-search');
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            renderCareerCards(e.target.value);
        });
    }

    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    if (menuToggleBtn && dropdownMenu) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
    }

    document.addEventListener('click', (e) => {
        if (dropdownMenu && !dropdownMenu.contains(e.target) && e.target !== menuToggleBtn) {
            dropdownMenu.classList.remove('show');
        }
        
        const modal = document.getElementById('details-modal');
        if (e.target === modal) {
            closeModal();
        }
    });

    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    if (chatbotToggleBtn) {
        chatbotToggleBtn.addEventListener('click', toggleChatbot);
    }
}

// ==========================================================================
// CAREER RECOMMENDER CHATBOT
// ==========================================================================
const chatbotQuestions = [
    {
        question: "Hey! I'm your Career Advisor 👋 Let's find your ideal tech path. What excites you most?",
        options: [
            { label: "Building apps & products", scores: { "software-dev": 3, "devops-engineering": 1 } },
            { label: "Numbers, patterns & predictions", scores: { "data-science": 3, "artificial-intelligence": 1 } },
            { label: "Teaching machines to think", scores: { "artificial-intelligence": 3, "data-science": 1 } },
            { label: "Protecting systems from threats", scores: { "cyber-security": 3 } }
        ]
    },
    {
        question: "Got it. Which work style sounds most like you?",
        options: [
            { label: "Coding hands-on every day", scores: { "software-dev": 2, "devops-engineering": 1 } },
            { label: "Digging through data & experiments", scores: { "data-science": 2 } },
            { label: "Researching & training models", scores: { "artificial-intelligence": 2 } },
            { label: "Thinking like an attacker (and defender)", scores: { "cyber-security": 2 } },
            { label: "Automating & scaling infrastructure", scores: { "devops-engineering": 2, "cloud-computing": 1 } }
        ]
    },
    {
        question: "Nice. Pick a toolkit you'd enjoy mastering:",
        options: [
            { label: "React, Node.js, REST APIs", scores: { "software-dev": 2 } },
            { label: "Pandas, SQL, ML models", scores: { "data-science": 2 } },
            { label: "PyTorch, Transformers, GenAI", scores: { "artificial-intelligence": 2 } },
            { label: "Wireshark, Burp Suite, Nmap", scores: { "cyber-security": 2 } },
            { label: "Docker, Kubernetes, CI/CD", scores: { "devops-engineering": 2 } },
            { label: "AWS, Terraform, Cloud Architecture", scores: { "cloud-computing": 2 } }
        ]
    },
    {
        question: "Last one — what's your dream outcome?",
        options: [
            { label: "Ship full products end-to-end", scores: { "software-dev": 2 } },
            { label: "Drive decisions with data insights", scores: { "data-science": 2 } },
            { label: "Push the frontier of AI", scores: { "artificial-intelligence": 2 } },
            { label: "Keep organizations secure", scores: { "cyber-security": 2 } },
            { label: "Build reliable delivery pipelines", scores: { "devops-engineering": 2 } },
            { label: "Architect scalable cloud systems", scores: { "cloud-computing": 2 } }
        ]
    }
];

let chatbotState = { step: 0, scores: {} };

function toggleChatbot() {
    const win = document.getElementById('chatbot-window');
    const btn = document.getElementById('chatbot-toggle-btn');
    if (!win) return;

    if (win.classList.contains('hidden')) {
        win.classList.remove('hidden');
        if (btn) btn.classList.add('hidden-btn');
        if (document.getElementById('chatbot-body').children.length === 0) {
            startChatbot();
        }
    } else {
        closeChatbot();
    }
}

function closeChatbot() {
    const win = document.getElementById('chatbot-window');
    const btn = document.getElementById('chatbot-toggle-btn');
    if (win) win.classList.add('hidden');
    if (btn) btn.classList.remove('hidden-btn');
}

function startChatbot() {
    chatbotState = { step: 0, scores: {} };
    const body = document.getElementById('chatbot-body');
    body.innerHTML = "";
    askChatbotQuestion(0);
}

function appendChatMessage(text, sender) {
    const body = document.getElementById('chatbot-body');
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.innerText = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
}

function askChatbotQuestion(index) {
    const body = document.getElementById('chatbot-body');

    const typing = document.createElement('div');
    typing.className = "chat-typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        typing.remove();
        const q = chatbotQuestions[index];
        appendChatMessage(q.question, "bot");

        const optionsWrap = document.createElement('div');
        optionsWrap.className = "chat-options";
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = "chat-option-btn";
            btn.innerText = opt.label;
            btn.onclick = () => selectChatOption(index, opt);
            optionsWrap.appendChild(btn);
        });
        body.appendChild(optionsWrap);
        body.scrollTop = body.scrollHeight;
    }, 500);
}

function selectChatOption(index, opt) {
    const body = document.getElementById('chatbot-body');
    const optionGroups = body.querySelectorAll('.chat-options');
    optionGroups[optionGroups.length - 1].remove();

    appendChatMessage(opt.label, "user");

    Object.entries(opt.scores).forEach(([key, val]) => {
        chatbotState.scores[key] = (chatbotState.scores[key] || 0) + val;
    });

    const nextIndex = index + 1;
    if (nextIndex < chatbotQuestions.length) {
        askChatbotQuestion(nextIndex);
    } else {
        showChatbotResult();
    }
}

function showChatbotResult() {
    const body = document.getElementById('chatbot-body');
    const typing = document.createElement('div');
    typing.className = "chat-typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        typing.remove();

        const sorted = Object.entries(chatbotState.scores).sort((a, b) => b[1] - a[1]);
        const topKey = sorted.length > 0 ? sorted[0][0] : "software-dev";
        const career = careerData[topKey];

        appendChatMessage("Based on your answers, I think you'd thrive in:", "bot");

        const card = document.createElement('div');
        card.className = "chat-result-card";
        card.innerHTML = `
            <h4><i class="${career.icon}"></i> ${career.title}</h4>
            <p>${career.desc}</p>
            <div class="chat-result-actions">
                <button class="chat-explore-btn" onclick="closeChatbot(); openRoadmapView('${topKey}')">Explore Path</button>
                <button class="chat-restart-btn" onclick="startChatbot()">Retake Quiz</button>
            </div>
        `;
        body.appendChild(card);
        body.scrollTop = body.scrollHeight;
    }, 600);
}