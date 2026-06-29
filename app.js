// ==========================================================================
// ROADMAP REGISTRY SCHEMAS
// Each career now has a `phases` array. Each phase has a name, an emoji
// badge, and its own `steps` array. Step numbering stays continuous across
// all phases (1, 2, 3 ... N) when rendered.
// ==========================================================================
const careerData = {
    "Backend-dev": {
        title: "Backend Development",
        category: "Development",
        icon: "fa-solid fa-code",
        desc: "Build real-world applications by mastering programming fundamentals, data structures, databases.",

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
        category: "AI",
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
    },
    "frontend-development": {
        title: "Frontend Development",
        category: "Development",
        icon: "fa-solid fa-laptop-code",
        desc: "Build beautiful and responsive user interfaces using modern frontend technologies and frameworks.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "fd1", name: "HTML", hours: "20h", desc: "Learn semantic HTML and page structure.", why: "HTML is the foundation of every web page.", resources: ["MDN HTML Guide"], projects: ["Personal Profile Page"] },
                    { id: "fd2", name: "CSS", hours: "30h", desc: "Learn layouts, flexbox, grid, and responsive design.", why: "CSS makes websites visually appealing.", resources: ["CSS Tricks", "MDN CSS"], projects: ["Responsive Landing Page"] },
                    { id: "fd3", name: "JavaScript", hours: "45h", desc: "Learn DOM manipulation and modern JavaScript.", why: "JavaScript brings interactivity to websites.", resources: ["JavaScript.info"], projects: ["Interactive Calculator"] }
                ]
            },
            {
                name: "Frontend Skills",
                emoji: "⚡",
                steps: [
                    { id: "fd4", name: "Responsive Design", hours: "20h", desc: "Create mobile-friendly layouts.", why: "Users browse from different devices.", resources: ["Responsive Design Guide"], projects: ["Mobile First Website"] },
                    { id: "fd5", name: "Git & GitHub", hours: "15h", desc: "Version control and collaboration.", why: "Required for professional development.", resources: ["Git Docs"], projects: ["Portfolio Repository"] },
                    { id: "fd6", name: "API Integration", hours: "20h", desc: "Fetch and display external data.", why: "Modern apps rely on APIs.", resources: ["MDN Fetch API"], projects: ["Weather Dashboard"] }
                ]
            },
            {
                name: "Modern Frameworks",
                emoji: "🏆",
                steps: [
                    { id: "fd7", name: "React.js", hours: "50h", desc: "Build reusable UI components.", why: "React is widely used in industry.", resources: ["React Docs"], projects: ["Task Manager App"] },
                    { id: "fd8", name: "State Management", hours: "20h", desc: "Manage application state effectively.", why: "Complex apps require state handling.", resources: ["Redux Docs"], projects: ["Shopping Cart App"] },
                    { id: "fd9", name: "Performance Optimization", hours: "15h", desc: "Improve speed and user experience.", why: "Fast websites retain users.", resources: ["Web.dev"], projects: ["Optimized Portfolio"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "fd10", name: "Projects", hours: "50h", desc: "Build real-world frontend applications.", why: "Projects demonstrate practical skills.", resources: ["Frontend Mentor"], projects: ["E-Commerce Frontend"] },
                    { id: "fd11", name: "Portfolio", hours: "20h", desc: "Showcase your work professionally.", why: "Recruiters evaluate portfolios.", resources: ["GitHub Pages"], projects: ["Developer Portfolio"] },
                    { id: "fd12", name: "Job Ready", hours: "30h", desc: "Prepare for frontend interviews.", why: "Interview preparation improves hiring chances.", resources: ["Frontend Interview Handbook"], projects: ["Mock Interview Practice"] }
                ]
            }
        ]
    },
    "full-stack-development": {
        title: "Full Stack Development",
        category: "Development",
        icon: "fa-solid fa-layer-group",
        desc: "Build complete web applications by mastering frontend, backend, databases, APIs, deployment, and modern development tools.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "fs1", name: "HTML", hours: "20h", desc: "Learn the structure and semantics of web pages.", why: "HTML is the foundation of every website.", resources: ["MDN HTML Guide"], projects: ["Personal Portfolio Page"] },
                    { id: "fs2", name: "CSS", hours: "25h", desc: "Learn styling, layouts, Flexbox, Grid, and responsive design.", why: "CSS makes websites attractive and responsive.", resources: ["CSS Tricks", "MDN CSS"], projects: ["Responsive Landing Page"] },
                    { id: "fs3", name: "JavaScript", hours: "45h", desc: "Learn modern JavaScript, ES6+, DOM manipulation, and asynchronous programming.", why: "JavaScript powers dynamic web applications.", resources: ["JavaScript.info"], projects: ["Interactive Todo App"] }
                ]
            },
            {
                name: "Frontend Development",
                emoji: "⚡",
                steps: [
                    { id: "fs4", name: "React.js", hours: "50h", desc: "Build reusable and interactive user interfaces.", why: "React is one of the most popular frontend frameworks.", resources: ["React Documentation"], projects: ["Task Management App"] },
                    { id: "fs5", name: "API Integration", hours: "20h", desc: "Consume REST APIs and display dynamic data.", why: "Modern applications depend on APIs.", resources: ["MDN Fetch API"], projects: ["Weather Dashboard"] },
                    { id: "fs6", name: "State Management", hours: "20h", desc: "Manage application state using Context API or Redux.", why: "Large applications require efficient state handling.", resources: ["Redux Documentation"], projects: ["E-Commerce Cart System"] }
                ]
            },
            {
                name: "Backend Development",
                emoji: "🏆",
                steps: [
                    { id: "fs7", name: "Node.js / Spring Boot", hours: "50h", desc: "Build backend services and REST APIs.", why: "Backend powers business logic and data processing.", resources: ["Node.js Docs", "Spring Boot Docs"], projects: ["Blog REST API"] },
                    { id: "fs8", name: "Database (MySQL/PostgreSQL)", hours: "35h", desc: "Design schemas and write efficient SQL queries.", why: "Applications need reliable data storage.", resources: ["SQLBolt", "PostgreSQL Docs"], projects: ["Library Management Database"] },
                    { id: "fs9", name: "Authentication & Security", hours: "25h", desc: "Implement login systems, JWT, and authorization.", why: "Security is essential for modern applications.", resources: ["JWT.io", "Spring Security Docs"], projects: ["Secure User Authentication System"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "fs10", name: "Full Stack Projects", hours: "60h", desc: "Build complete applications using frontend, backend, and databases.", why: "Projects prove practical development skills.", resources: ["Full Stack Open"], projects: ["E-Commerce Platform", "Social Media App"] },
                    { id: "fs11", name: "Deployment", hours: "20h", desc: "Deploy applications using Vercel, Render, AWS, or Docker.", why: "Deployment makes applications available to users.", resources: ["Vercel Docs", "Render Docs"], projects: ["Deploy Full Stack Application"] },
                    { id: "fs12", name: "Job Ready", hours: "40h", desc: "Prepare for interviews, build a portfolio, and optimize your resume.", why: "Interview preparation converts skills into job opportunities.", resources: ["Pramp", "InterviewBit"], projects: ["Portfolio Website", "Mock Interviews"] }
                ]
            }
        ]
    },
    "data-analyst": {
        title: "Data Analyst",
        category: "Analytics",
        icon: "fa-solid fa-chart-column",
        desc: "Transform raw data into meaningful business insights using Excel, SQL, Python, and visualization tools.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "da1", name: "Excel", hours: "30h", desc: "Learn formulas, functions, pivot tables, and dashboards.", why: "Excel is widely used for business data analysis.", resources: ["Microsoft Excel Training", "Excel Easy"], projects: ["Sales Analysis Dashboard"] },
                    { id: "da2", name: "Statistics", hours: "30h", desc: "Learn descriptive statistics, probability, and distributions.", why: "Statistics helps interpret and analyze data accurately.", resources: ["Khan Academy Statistics", "StatQuest"], projects: ["Statistical Analysis Report"] },
                    { id: "da3", name: "SQL", hours: "35h", desc: "Learn querying, joins, aggregation, and database analysis.", why: "Most business data is stored in databases.", resources: ["SQLBolt", "Mode SQL Tutorial"], projects: ["Customer Database Analysis"] }
                ]
            },
            {
                name: "Data Handling",
                emoji: "⚡",
                steps: [
                    { id: "da4", name: "Python", hours: "35h", desc: "Learn Python fundamentals for data analysis.", why: "Python automates analysis and handles large datasets.", resources: ["Python Official Docs", "Automate the Boring Stuff"], projects: ["Data Processing Script"] },
                    { id: "da5", name: "Pandas", hours: "25h", desc: "Clean, transform, and analyze datasets.", why: "Pandas is the industry standard for data analysis.", resources: ["Pandas Documentation", "Kaggle Pandas Course"], projects: ["Data Cleaning Pipeline"] },
                    { id: "da6", name: "Data Cleaning", hours: "20h", desc: "Handle missing values and inconsistent data.", why: "Clean data is essential for accurate insights.", resources: ["Kaggle Data Cleaning"], projects: ["Customer Data Cleanup"] }
                ]
            },
            {
                name: "Visualization & Reporting",
                emoji: "🏆",
                steps: [
                    { id: "da7", name: "Power BI", hours: "30h", desc: "Build business intelligence dashboards.", why: "Power BI is highly demanded in analytics roles.", resources: ["Microsoft Learn Power BI"], projects: ["Sales Dashboard"] },
                    { id: "da8", name: "Tableau", hours: "25h", desc: "Create interactive visual reports.", why: "Visualization makes insights easier to understand.", resources: ["Tableau Learning"], projects: ["Marketing Dashboard"] },
                    { id: "da9", name: "Business Reporting", hours: "20h", desc: "Present findings and recommendations.", why: "Communication is critical for analysts.", resources: ["Google Data Analytics Course"], projects: ["Executive Report"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "da10", name: "Analytics Projects", hours: "50h", desc: "Apply analysis skills on real datasets.", why: "Projects showcase practical abilities.", resources: ["Kaggle", "DataCamp"], projects: ["Customer Churn Analysis"] },
                    { id: "da11", name: "Portfolio", hours: "20h", desc: "Showcase dashboards and reports.", why: "Recruiters evaluate your portfolio.", resources: ["GitHub Pages"], projects: ["Analytics Portfolio Website"] },
                    { id: "da12", name: "Job Ready", hours: "30h", desc: "Prepare for interviews and case studies.", why: "Interview preparation increases hiring chances.", resources: ["StrataScratch", "Interview Query"], projects: ["Mock Analytics Interviews"] }
                ]
            }
        ]
    },
    "game-development": {
        title: "Game Development",
        category: "Development",
        icon: "fa-solid fa-gamepad",
        desc: "Design, develop, and publish interactive games using programming, game engines, physics, and modern development tools.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "gd1", name: "Programming (C# / C++)", hours: "40h", desc: "Learn game programming fundamentals, syntax, OOP, and problem-solving.", why: "Programming is the backbone of all game development.", resources: ["Microsoft C# Documentation", "LearnCpp"], projects: ["Console Adventure Game"] },
                    { id: "gd2", name: "Object-Oriented Programming", hours: "25h", desc: "Understand classes, objects, inheritance, and polymorphism.", why: "Most game engines rely heavily on OOP concepts.", resources: ["OOP Concepts Guide", "C# OOP Tutorial"], projects: ["Character Management System"] },
                    { id: "gd3", name: "Data Structures & Algorithms", hours: "35h", desc: "Learn arrays, linked lists, trees, graphs, and optimization techniques.", why: "Efficient code improves game performance.", resources: ["GeeksforGeeks DSA", "LeetCode"], projects: ["Pathfinding Visualizer"] }
                ]
            },
            {
                name: "Game Engine Skills",
                emoji: "⚡",
                steps: [
                    { id: "gd4", name: "Unity Engine", hours: "50h", desc: "Learn scenes, game objects, components, and scripting in Unity.", why: "Unity is one of the most popular game engines.", resources: ["Unity Learn", "Unity Documentation"], projects: ["2D Platformer Game"] },
                    { id: "gd5", name: "Physics & Collision", hours: "25h", desc: "Implement movement, gravity, collision detection, and rigid bodies.", why: "Physics makes games realistic and interactive.", resources: ["Unity Physics Guide"], projects: ["Physics Puzzle Game"] },
                    { id: "gd6", name: "Animation Systems", hours: "20h", desc: "Create character animations and transitions.", why: "Animations improve gameplay experience.", resources: ["Unity Animator Documentation"], projects: ["Animated Character Controller"] }
                ]
            },
            {
                name: "Advanced Development",
                emoji: "🏆",
                steps: [
                    { id: "gd7", name: "AI for Games", hours: "25h", desc: "Implement enemy behavior, pathfinding, and NPC decision making.", why: "Game AI creates engaging gameplay.", resources: ["Unity AI Tutorials"], projects: ["Enemy NPC System"] },
                    { id: "gd8", name: "Multiplayer Basics", hours: "30h", desc: "Build online multiplayer features and networking.", why: "Multiplayer games are highly popular in the industry.", resources: ["Photon Documentation", "Unity Netcode"], projects: ["Multiplayer Battle Arena"] },
                    { id: "gd9", name: "Optimization", hours: "20h", desc: "Improve FPS, memory usage, and game performance.", why: "Optimization ensures smooth gameplay.", resources: ["Unity Performance Guide"], projects: ["Optimized Open World Scene"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "gd10", name: "Game Projects", hours: "60h", desc: "Build complete games using all learned concepts.", why: "Projects demonstrate practical game development skills.", resources: ["Unity Learn Projects"], projects: ["Action Adventure Game", "Racing Game"] },
                    { id: "gd11", name: "Publishing", hours: "20h", desc: "Publish games on PC, Android, or online platforms.", why: "Publishing gives real-world development experience.", resources: ["Steamworks Documentation", "Google Play Console"], projects: ["Publish First Game"] },
                    { id: "gd12", name: "Job Ready", hours: "30h", desc: "Prepare portfolio, resume, and technical interviews.", why: "A strong portfolio is essential in game development careers.", resources: ["GameDev.tv Career Guide"], projects: ["Game Developer Portfolio Website"] }
                ]
            }
        ]
    },
    "ui-ux-design": {
        title: "UI/UX Design",
        category: "Design",
        icon: "fa-solid fa-pen-ruler",
        desc: "Design intuitive, user-friendly, and visually appealing digital experiences through research, wireframing, prototyping, and design systems.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "ux1", name: "Design Principles", hours: "25h", desc: "Learn visual hierarchy, alignment, contrast, balance, and consistency.", why: "Strong design principles create professional and user-friendly interfaces.", resources: ["Interaction Design Foundation", "Laws of UX"], projects: ["Redesign a Landing Page"] },
                    { id: "ux2", name: "Color Theory", hours: "15h", desc: "Understand color psychology, palettes, and accessibility.", why: "Colors influence user emotions and usability.", resources: ["Adobe Color Guide", "Color Theory Basics"], projects: ["Brand Color System"] },
                    { id: "ux3", name: "Typography", hours: "15h", desc: "Learn font pairing, readability, spacing, and text hierarchy.", why: "Typography improves communication and user experience.", resources: ["Google Fonts", "Typography Handbook"], projects: ["Typography Showcase Design"] }
                ]
            },
            {
                name: "UX Research",
                emoji: "⚡",
                steps: [
                    { id: "ux4", name: "User Research", hours: "25h", desc: "Understand user needs through surveys, interviews, and observation.", why: "Design decisions should be based on real user needs.", resources: ["Nielsen Norman Group", "UX Research Guide"], projects: ["User Research Report"] },
                    { id: "ux5", name: "Wireframing", hours: "20h", desc: "Create low-fidelity layouts before visual design.", why: "Wireframes help structure ideas quickly.", resources: ["Figma Wireframing Guide"], projects: ["Mobile App Wireframe"] },
                    { id: "ux6", name: "User Flows & Information Architecture", hours: "20h", desc: "Map user journeys and organize content effectively.", why: "Good structure improves usability and navigation.", resources: ["UX Planet", "NN Group"], projects: ["E-Commerce User Flow"] }
                ]
            },
            {
                name: "Design Tools & Prototyping",
                emoji: "🏆",
                steps: [
                    { id: "ux7", name: "Figma", hours: "40h", desc: "Master UI design, components, auto-layout, and collaboration.", why: "Figma is the most widely used UI/UX design tool.", resources: ["Figma Official Tutorials"], projects: ["Complete Mobile App Design"] },
                    { id: "ux8", name: "Prototyping", hours: "20h", desc: "Create interactive prototypes to simulate real applications.", why: "Prototypes help validate ideas before development.", resources: ["Figma Prototype Guide"], projects: ["Interactive App Prototype"] },
                    { id: "ux9", name: "Design Systems", hours: "20h", desc: "Build reusable components and style guidelines.", why: "Design systems improve consistency and scalability.", resources: ["Material Design", "Atlassian Design System"], projects: ["Custom Design System"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "ux10", name: "Case Studies", hours: "35h", desc: "Document your design process and decisions professionally.", why: "Recruiters evaluate design thinking through case studies.", resources: ["Behance", "Dribbble"], projects: ["Food Delivery App Case Study"] },
                    { id: "ux11", name: "Portfolio", hours: "25h", desc: "Showcase your best UI/UX work online.", why: "A portfolio is the most important asset for a designer.", resources: ["Behance", "Adobe Portfolio"], projects: ["Professional UX Portfolio"] },
                    { id: "ux12", name: "Job Ready", hours: "30h", desc: "Prepare for design interviews, presentations, and portfolio reviews.", why: "Interview preparation helps convert skills into opportunities.", resources: ["UX Interview Handbook", "Design Career Guide"], projects: ["Mock Portfolio Presentation"] }
                ]
            }
        ]
    },
    "mobile-app-development": {
        title: "Mobile App Development",
        category: "Development",
        icon: "fa-solid fa-mobile-screen-button",
        desc: "Build modern Android and cross-platform mobile applications using Flutter, APIs, databases, and cloud services.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "mad1", name: "Programming (Dart / Java / Kotlin)", hours: "40h", desc: "Learn programming fundamentals and object-oriented concepts.", why: "Programming is the foundation of mobile app development.", resources: ["Dart Documentation", "Kotlin Docs"], projects: ["Calculator App"] },
                    { id: "mad2", name: "Object-Oriented Programming", hours: "25h", desc: "Learn classes, objects, inheritance, and polymorphism.", why: "Mobile frameworks heavily rely on OOP concepts.", resources: ["OOP Tutorial", "Kotlin OOP Guide"], projects: ["Student Management App"] },
                    { id: "mad3", name: "DSA Basics", hours: "30h", desc: "Understand arrays, linked lists, stacks, queues, and searching algorithms.", why: "Efficient apps require strong problem-solving skills.", resources: ["LeetCode", "GeeksforGeeks"], projects: ["Data Structure Visualizer"] }
                ]
            },
            {
                name: "App Development",
                emoji: "⚡",
                steps: [
                    { id: "mad4", name: "Flutter Framework", hours: "50h", desc: "Build beautiful cross-platform mobile applications using Flutter.", why: "Flutter allows Android and iOS development from a single codebase.", resources: ["Flutter Documentation"], projects: ["Weather App"] },
                    { id: "mad5", name: "UI Components & Navigation", hours: "25h", desc: "Create screens, layouts, forms, and navigation flows.", why: "User experience depends on smooth navigation.", resources: ["Flutter Widgets Guide"], projects: ["Multi-Screen App"] },
                    { id: "mad6", name: "State Management", hours: "25h", desc: "Manage application state using Provider, Riverpod, or Bloc.", why: "Large apps need efficient state handling.", resources: ["Provider Documentation"], projects: ["Shopping Cart App"] }
                ]
            },
            {
                name: "Advanced Features",
                emoji: "🏆",
                steps: [
                    { id: "mad7", name: "REST APIs", hours: "25h", desc: "Connect applications with backend services.", why: "Most modern apps rely on APIs.", resources: ["Flutter API Guide"], projects: ["News App"] },
                    { id: "mad8", name: "Firebase", hours: "30h", desc: "Implement authentication, cloud storage, and notifications.", why: "Firebase accelerates mobile app development.", resources: ["Firebase Documentation"], projects: ["Chat Application"] },
                    { id: "mad9", name: "Local Database", hours: "20h", desc: "Store offline data using SQLite or Hive.", why: "Offline support improves user experience.", resources: ["SQLite Guide"], projects: ["Notes Application"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "mad10", name: "Mobile Projects", hours: "60h", desc: "Build complete real-world applications.", why: "Projects demonstrate practical development skills.", resources: ["Flutter Cookbook"], projects: ["Food Delivery App", "Expense Tracker"] },
                    { id: "mad11", name: "Play Store Deployment", hours: "20h", desc: "Publish applications to the Google Play Store.", why: "Publishing provides real-world experience.", resources: ["Google Play Console"], projects: ["Publish First App"] },
                    { id: "mad12", name: "Job Ready", hours: "30h", desc: "Prepare portfolio, resume, and interview skills.", why: "Strong preparation improves hiring opportunities.", resources: ["Flutter Interview Questions"], projects: ["Mobile Developer Portfolio"] }
                ]
            }
        ]
    },
    "digital-marketing": {
        title: "Digital Marketing",
        category: "Marketing",
        icon: "fa-solid fa-bullhorn",
        desc: "Promote brands, products, and services through SEO, social media, content marketing, paid advertising, and analytics.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "dm1", name: "Marketing Fundamentals", hours: "20h", desc: "Learn branding, customer journey, and marketing concepts.", why: "Marketing fundamentals form the base of all digital strategies.", resources: ["HubSpot Academy", "Google Digital Garage"], projects: ["Brand Analysis Report"] },
                    { id: "dm2", name: "Content Marketing", hours: "25h", desc: "Create engaging blogs, articles, and promotional content.", why: "Content is the foundation of digital marketing.", resources: ["HubSpot Content Marketing"], projects: ["Blog Website"] },
                    { id: "dm3", name: "Copywriting", hours: "20h", desc: "Write persuasive content for ads, emails, and landing pages.", why: "Good copy improves conversions and engagement.", resources: ["Copyblogger", "Neil Patel Blog"], projects: ["Landing Page Copy"] }
                ]
            },
            {
                name: "Traffic Generation",
                emoji: "⚡",
                steps: [
                    { id: "dm4", name: "SEO", hours: "40h", desc: "Learn keyword research, on-page SEO, and technical SEO.", why: "SEO helps websites rank higher on search engines.", resources: ["Google SEO Starter Guide", "Ahrefs Academy"], projects: ["SEO Audit Report"] },
                    { id: "dm5", name: "Social Media Marketing", hours: "30h", desc: "Promote brands through Instagram, Facebook, LinkedIn, and X.", why: "Social media is one of the largest traffic sources.", resources: ["Meta Blueprint"], projects: ["Social Media Campaign"] },
                    { id: "dm6", name: "Email Marketing", hours: "20h", desc: "Build email campaigns and marketing funnels.", why: "Email marketing provides high ROI.", resources: ["Mailchimp Academy"], projects: ["Email Newsletter Campaign"] }
                ]
            },
            {
                name: "Advertising & Analytics",
                emoji: "🏆",
                steps: [
                    { id: "dm7", name: "Google Ads", hours: "30h", desc: "Run paid search advertising campaigns.", why: "Google Ads drives targeted traffic quickly.", resources: ["Google Skillshop"], projects: ["Search Ad Campaign"] },
                    { id: "dm8", name: "Meta Ads", hours: "25h", desc: "Create Facebook and Instagram advertising campaigns.", why: "Meta Ads help businesses reach large audiences.", resources: ["Meta Blueprint"], projects: ["Instagram Ad Campaign"] },
                    { id: "dm9", name: "Google Analytics", hours: "20h", desc: "Track user behavior and campaign performance.", why: "Analytics helps optimize marketing decisions.", resources: ["Google Analytics Academy"], projects: ["Website Traffic Analysis"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "dm10", name: "Marketing Projects", hours: "50h", desc: "Execute complete marketing campaigns for products or brands.", why: "Projects demonstrate practical marketing skills.", resources: ["HubSpot Projects"], projects: ["Complete Marketing Strategy"] },
                    { id: "dm11", name: "Portfolio", hours: "20h", desc: "Showcase campaigns, analytics reports, and achievements.", why: "A portfolio helps attract clients and employers.", resources: ["Behance", "Personal Website"], projects: ["Digital Marketing Portfolio"] },
                    { id: "dm12", name: "Job Ready", hours: "30h", desc: "Prepare for interviews, freelancing, and agency roles.", why: "Career preparation improves job opportunities.", resources: ["Google Career Certificates"], projects: ["Mock Marketing Campaign"] }
                ]
            }
        ]
    },
    "react-native-development": {
        title: "React Native Development",
        category: "Development",
        icon: "fa-brands fa-react",
        desc: "Build cross-platform mobile applications for Android and iOS using React Native, JavaScript, APIs, and modern mobile development practices.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "rn1", name: "JavaScript (ES6+)", hours: "40h", desc: "Learn modern JavaScript including functions, promises, async/await, and modules.", why: "React Native is built on JavaScript.", resources: ["JavaScript.info", "MDN JavaScript Guide"], projects: ["Task Manager App"] },
                    { id: "rn2", name: "React.js", hours: "40h", desc: "Learn components, props, hooks, and state management.", why: "React Native is based on React concepts.", resources: ["React Documentation"], projects: ["React Dashboard"] },
                    { id: "rn3", name: "Git & GitHub", hours: "15h", desc: "Learn version control and collaboration workflows.", why: "Professional development requires source control.", resources: ["Git Documentation"], projects: ["Portfolio Repository"] }
                ]
            },
            {
                name: "React Native Core",
                emoji: "⚡",
                steps: [
                    { id: "rn4", name: "React Native Fundamentals", hours: "45h", desc: "Learn components, styling, layouts, and platform-specific development.", why: "Core React Native skills are required to build apps.", resources: ["React Native Docs"], projects: ["Simple Notes App"] },
                    { id: "rn5", name: "Navigation", hours: "20h", desc: "Implement stack, tab, and drawer navigation.", why: "Navigation is essential for mobile applications.", resources: ["React Navigation Docs"], projects: ["Multi-Screen App"] },
                    { id: "rn6", name: "State Management", hours: "25h", desc: "Manage application state using Context API or Redux Toolkit.", why: "Large applications need centralized state management.", resources: ["Redux Toolkit Docs"], projects: ["Shopping Cart App"] }
                ]
            },
            {
                name: "Advanced Mobile Features",
                emoji: "🏆",
                steps: [
                    { id: "rn7", name: "REST APIs", hours: "25h", desc: "Fetch and manage data from backend services.", why: "Most mobile apps communicate with servers.", resources: ["Axios Documentation"], projects: ["News Application"] },
                    { id: "rn8", name: "Firebase", hours: "30h", desc: "Implement authentication, Firestore, and cloud storage.", why: "Firebase simplifies backend development.", resources: ["Firebase Documentation"], projects: ["Chat Application"] },
                    { id: "rn9", name: "Push Notifications", hours: "20h", desc: "Send notifications and engage users.", why: "Notifications improve retention and user engagement.", resources: ["Firebase Cloud Messaging"], projects: ["Reminder Application"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "rn10", name: "Mobile Projects", hours: "60h", desc: "Build complete real-world mobile applications.", why: "Projects showcase practical mobile development skills.", resources: ["React Native Examples"], projects: ["Food Delivery App", "Expense Tracker"] },
                    { id: "rn11", name: "App Store Deployment", hours: "25h", desc: "Publish applications to Google Play Store and Apple App Store.", why: "Deployment is an essential skill for mobile developers.", resources: ["Google Play Console", "App Store Connect"], projects: ["Publish First App"] },
                    { id: "rn12", name: "Job Ready", hours: "30h", desc: "Prepare portfolio, resume, and interview skills.", why: "Interview preparation improves hiring success.", resources: ["React Native Interview Questions"], projects: ["Mobile Developer Portfolio"] }
                ]
            }
        ]
    },
    "software-testing": {
        title: "Software Testing & QA",
        category: "Quality Assurance",
        icon: "fa-solid fa-bug",
        desc: "Ensure software quality through manual testing, automation testing, API testing, and industry-standard QA practices.",
        phases: [
            {
                name: "Foundations",
                emoji: "🚀",
                steps: [
                    { id: "qa1", name: "Software Testing Basics", hours: "25h", desc: "Learn SDLC, STLC, testing types, and QA fundamentals.", why: "Testing fundamentals are the foundation of quality assurance.", resources: ["Guru99 Testing Tutorial", "ISTQB Foundation"], projects: ["Test Case Documentation"] },
                    { id: "qa2", name: "Manual Testing", hours: "30h", desc: "Learn test cases, bug reporting, and test execution.", why: "Manual testing is the starting point for every QA engineer.", resources: ["Software Testing Help"], projects: ["E-Commerce Testing Project"] },
                    { id: "qa3", name: "Bug Tracking Tools", hours: "15h", desc: "Work with Jira and bug tracking workflows.", why: "QA engineers collaborate using bug management tools.", resources: ["Atlassian Jira Guide"], projects: ["Bug Tracking Workflow"] }
                ]
            },
            {
                name: "Testing Skills",
                emoji: "⚡",
                steps: [
                    { id: "qa4", name: "SQL for Testing", hours: "20h", desc: "Validate backend data using SQL queries.", why: "Many applications require database validation.", resources: ["SQLBolt"], projects: ["Database Validation Testing"] },
                    { id: "qa5", name: "API Testing", hours: "25h", desc: "Test REST APIs using Postman.", why: "Modern applications rely heavily on APIs.", resources: ["Postman Learning Center"], projects: ["API Testing Collection"] },
                    { id: "qa6", name: "Test Automation Basics", hours: "30h", desc: "Introduction to Selenium and automation testing.", why: "Automation increases testing efficiency.", resources: ["Selenium Documentation"], projects: ["Automated Login Testing"] }
                ]
            },
            {
                name: "Automation & Tools",
                emoji: "🏆",
                steps: [
                    { id: "qa7", name: "Selenium", hours: "40h", desc: "Automate web applications using Selenium.", why: "Selenium is the most popular automation testing tool.", resources: ["Selenium Docs"], projects: ["Automated E-Commerce Testing"] },
                    { id: "qa8", name: "TestNG / JUnit", hours: "20h", desc: "Create structured automated test suites.", why: "Testing frameworks improve maintainability.", resources: ["TestNG Docs"], projects: ["Automation Test Framework"] },
                    { id: "qa9", name: "CI/CD Testing", hours: "20h", desc: "Integrate automated tests into pipelines.", why: "Modern QA works closely with DevOps workflows.", resources: ["Jenkins Documentation"], projects: ["CI Pipeline Testing"] }
                ]
            },
            {
                name: "Career Launch",
                emoji: "🎯",
                steps: [
                    { id: "qa10", name: "QA Projects", hours: "40h", desc: "Perform complete testing cycles on real applications.", why: "Projects demonstrate testing skills.", resources: ["Open Source Testing Projects"], projects: ["Complete QA Test Plan"] },
                    { id: "qa11", name: "Portfolio", hours: "20h", desc: "Showcase test plans, bug reports, and automation projects.", why: "A portfolio helps recruiters evaluate skills.", resources: ["GitHub"], projects: ["QA Portfolio"] },
                    { id: "qa12", name: "Job Ready", hours: "30h", desc: "Prepare for QA interviews and practical testing rounds.", why: "Interview preparation improves job opportunities.", resources: ["QA Interview Questions"], projects: ["Mock QA Interviews"] }
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

    // Home page ko default dikhao
    showSection("home-view");

    // ===== Roadmap Save Button =====
    const roadmapSaveBtn = document.getElementById("roadmap-save-btn");

    if (roadmapSaveBtn) {
        roadmapSaveBtn.addEventListener("click", function () {

            if (!activeOpenCareer) return;

            toggleSaveCareer(activeOpenCareer);

            if (savedCareers.includes(activeOpenCareer)) {
                this.classList.add("saved");
                this.querySelector("i").textContent = "bookmark";
            } else {
                this.classList.remove("saved");
                this.querySelector("i").textContent = "bookmark_border";
            }

        });
    }

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

function getNextIncompleteStep(careerKey) {
    const career = careerData[careerKey];
    if (!career || !career.phases) return null;

    for (const phase of career.phases) {
        for (const step of phase.steps) {
            if (!progressTracker[step.id]) {
                return { step, phase };
            }
        }
    }
    return null;
}
function isStepUnlocked(careerKey, stepId) {
    const steps = getAllSteps(careerKey);

    const currentIndex = steps.findIndex(step => step.id === stepId);

    // First step hamesha unlocked
    if (currentIndex === 0) return true;

    const previousStep = steps[currentIndex - 1];

    return progressTracker[previousStep.id] === true;
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
        card.dataset.category = career.category;
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
        setTimeout(() => {
            card.classList.add("show");
        }, displayCount * 80);
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
        setTimeout(() => {
            card.classList.add("show");
        }, 100);
    });
}

// ==========================================================================
// RENDERING TIMELINE PIPELINES WITH CONNECTORS (NOW PHASE-GROUPED)
// ==========================================================================
function showRoadmapHint() {
    const existing = document.getElementById('roadmap-hint-toast');
    if (existing) existing.remove();

    const hint = document.createElement('div');
    hint.id = 'roadmap-hint-toast';
    hint.innerHTML = `<i class="fa-solid fa-lightbulb"></i>
        <div>
            <div style="font-weight:600;margin-bottom:2px;">Click any roadmap card</div>
            <div style="opacity:0.75;font-size:0.8rem;">to explore resources, projects & detailed explanation</div>
        </div>`;
    hint.style.cssText = `
        position: fixed;
        bottom: 6rem;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: rgba(14, 10, 31, 0.96);
        border: 1px solid rgba(162, 82, 250, 0.4);
        color: #e2d9f3;
        padding: 0.85rem 1.5rem;
        border-radius: 16px;
        font-size: 0.88rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 3000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease, transform 0.4s ease;
        backdrop-filter: blur(14px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        max-width: 360px;
        text-align: left;
    `;
    hint.querySelector('i').style.cssText = `
        color: #c084fc;
        font-size: 1.2rem;
        flex-shrink: 0;
    `;
    document.body.appendChild(hint);

    // Fade in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            hint.style.opacity = '1';
            hint.style.transform = 'translateX(-50%) translateY(0)';
        });
    });

    // Fade out after 3s
    setTimeout(() => {
        hint.style.opacity = '0';
        hint.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => hint.remove(), 400);
    }, 1500);
}

let roadmapReturnSection = 'home-view';

function openRoadmapView(careerKey, targetPhase = null) {
    // Remember which page the user was on so the Exit button can return there.
    const currentSection = document.querySelector('.view-section:not(.hidden)');
    if (currentSection && currentSection.id !== 'roadmap-view') {
        roadmapReturnSection = currentSection.id;
    }

    activeOpenCareer = careerKey;
    const career = careerData[careerKey];

    document.getElementById('roadmap-title').innerText = career.title;
    document.getElementById('roadmap-desc').innerText = career.desc;

    const iconFrame = document.getElementById('roadmap-icon');
    if (iconFrame) iconFrame.innerHTML = `<i class="${career.icon}"></i>`;

    renderRoadmapTimeline(careerKey);
    showSection('roadmap-view');

    if (targetPhase) {
        // Wait for the section switch + render to settle before scrolling.
        setTimeout(() => scrollToRoadmapPhase(targetPhase), 350);
    } else {
        // Hint sirf pehli baar dikhao
        setTimeout(showRoadmapHint, 600);
    }

    const saveBtn = document.getElementById("roadmap-save-btn");

    if (savedCareers.includes(careerKey)) {
        saveBtn.classList.add("saved");
        saveBtn.querySelector("i").textContent = "bookmark";
    } else {
        saveBtn.classList.remove("saved");
        saveBtn.querySelector("i").textContent = "bookmark_border";
    }
}

function scrollToRoadmapPhase(phaseNumber) {
    const phaseEl = document.getElementById(`phase-block-${phaseNumber}`);
    if (phaseEl) {
        phaseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        phaseEl.classList.add('phase-jump-highlight');
        setTimeout(() => phaseEl.classList.remove('phase-jump-highlight'), 1800);
    }
}

function exitRoadmapView() {
    showSection(roadmapReturnSection);
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
            timeline.appendChild(divider);
        }

        // Phase header badge
        const phaseHeader = document.createElement('div');
        phaseHeader.className = "phase-banner-row";
        phaseHeader.id = `phase-block-${phaseIdx + 1}`;
        phaseHeader.innerHTML = `
            <span class="phase-badge" style="background:${phaseColor};">${phase.emoji} Phase ${phaseIdx + 1}</span>
            <h4 class="phase-title">${phase.name}</h4>
        `;
        timeline.appendChild(phaseHeader);

        phase.steps.forEach((step, stepIdxInPhase) => {
            globalIndex++;
            const isDone = progressTracker[step.id] === true;
            const isUnlocked = isStepUnlocked(careerKey, step.id);

            const node = document.createElement('div');
            node.className = "timeline-node-wrapper";

            node.innerHTML = `
                <div class="milestone-tree-card" onclick="openModal('${careerKey}', '${step.id}')">
                    
                    <!-- Step number circle -->
                    <div class="step-index-circle-marker ${isDone ? 'completed-node' : ''}"
                         style="border-color:${phaseColor}; color:${phaseColor};"
                         onclick="event.stopPropagation(); invertSkillNodeState('${careerKey}', '${step.id}')">
                        <span class="index-num-label">${globalIndex}</span>
                    </div>

                    <!-- Title + description -->
                    <div class="milestone-text-block">
                        <h4 class="milestone-title">${step.name}</h4>
                        <p class="milestone-desc">${step.desc}</p>
                    </div>

                    <!-- Right side: checkbox + hours -->
                    <div class="milestone-right-col">
                        <div class="milestone-checkbox"
                             style="border-color:${phaseColor}; background:${isDone ? phaseColor : 'transparent'};"
                             onclick="event.stopPropagation(); invertSkillNodeState('${careerKey}','${step.id}')"
                             data-unlocked="${isUnlocked}">
                            ${isDone ? '<i class="fa-solid fa-check" style="color:white;font-size:11px;"></i>' : ''}
                        </div>
                        <div class="milestone-hours">${step.hours}</div>
                    </div>

                </div>
            `;

            timeline.appendChild(node);

            // Arrow connector only between steps within the same phase
            if (stepIdxInPhase < phase.steps.length - 1) {
                const structuralArrow = document.createElement('div');
                structuralArrow.className = "pipeline-connector-vector";
                structuralArrow.innerHTML = `<i class="fa-solid fa-arrow-down-long" style="color:${phaseColor}; opacity:0.65;"></i>`;

                timeline.appendChild(structuralArrow);
            }
        });
    });

    calculateTrackCompletion(careerKey);
}

// ==========================================================================
// QUANTITATIVE VALUES & PROGRESS METRIC MANAGEMENT
// ==========================================================================
function showSaveGuardWarning(message, iconClass) {
    document.querySelectorAll('.milestone-tree-card').forEach(card => {
        card.classList.remove('vibrate-shake');
        void card.offsetWidth;
        card.classList.add('vibrate-shake');
        setTimeout(() => card.classList.remove('vibrate-shake'), 600);
    });
    const toast = document.getElementById('save-guard-toast');
    if (!toast) return;

    const textNode = toast.querySelector('.save-guard-toast-text');
    if (message && textNode) {
        textNode.textContent = message;
    }

    const iconNode = toast.querySelector('.save-guard-toast-icon');
    if (iconNode) {
        iconNode.className = `fa-solid ${iconClass || 'fa-bookmark'} save-guard-toast-icon`;
    }

    toast.classList.add('show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

function invertSkillNodeState(careerKey, stepId) {

    // Save guard — career saved nahi hai toh block karo
    if (!savedCareers.includes(careerKey)) {
        showSaveGuardWarning("Save this career first to track your progress!", "fa-bookmark");
        return;
    }

    // Lock check
    if (!isStepUnlocked(careerKey, stepId)) {
        showSaveGuardWarning("Complete the previous step first to unlock this one!", "fa-lock");
        return;
    }

    if (progressTracker[stepId]) {
        delete progressTracker[stepId];
    } else {
        progressTracker[stepId] = true;
    }

    localStorage.setItem(
        "pathfinder_progress",
        JSON.stringify(progressTracker)
    );

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

    renderActiveCareerProgress();
}

// ==========================================================================
// ACTIVE CAREER PROGRESS LIST (DASHBOARD) — only careers with at least
// one completed skill node are shown here.
// ==========================================================================
function renderActiveCareerProgress() {
    const list = document.getElementById('active-career-progress-list');
    const titleText = document.getElementById('active-progress-title-text');
    if (!list) return;

    list.innerHTML = "";

    const activeCareers = Object.keys(careerData).map(key => {
        const steps = getAllSteps(key);
        const total = steps.length;
        const completed = steps.filter(s => progressTracker[s.id]).length;
        return { key, title: careerData[key].title, total, completed };
    }).filter(c => c.completed > 0);

    // Case 1: nothing started yet
    if (activeCareers.length === 0) {
        if (titleText) titleText.textContent = "Active Career Progress";
        list.innerHTML = `
            <div class="active-progress-empty">
                <i class="fa-regular fa-circle-play"></i>
                No learning started yet. Tick a skill node on any roadmap to see it tracked here.
            </div>`;
        return;
    }

    // Case 2: exactly one career started — show the focused "Current Learning" card
    if (activeCareers.length === 1) {
        if (titleText) titleText.textContent = "Current Learning Progress";

        const c = activeCareers[0];
        const percentage = Math.round((c.completed / c.total) * 100);
        const next = getNextIncompleteStep(c.key);

        const card = document.createElement('div');
        card.className = "current-progress-card";
        card.innerHTML = `
            <div class="current-progress-top">
                <span class="current-progress-title">${c.title}</span>
                <span class="current-progress-percent">${percentage}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${percentage}%;"></div>
            </div>
            <div class="current-progress-meta">${c.completed} / ${c.total} Skills Completed</div>
            <div class="current-progress-divider"></div>
            <div class="current-progress-info-grid">
                <div class="current-progress-info-block">
                    <span class="current-progress-info-label">Current Phase</span>
                    <span class="current-progress-info-value">${next ? `${next.phase.emoji} ${next.phase.name}` : '🎉 All Phases Complete'}</span>
                </div>
                <div class="current-progress-info-block">
                    <span class="current-progress-info-label">Current Skill</span>
                    <span class="current-progress-info-value">${next ? next.step.name : 'All skills completed!'}</span>
                </div>
            </div>
            <button class="continue-learning-btn" onclick="openRoadmapView('${c.key}')">${next ? 'Continue Learning' : 'View Roadmap'}</button>
        `;
        list.appendChild(card);
        return;
    }

    // Case 3: multiple careers started — show the ranked list
    if (titleText) titleText.textContent = "Active Career Progress";

    // Highest progress first
    activeCareers.sort((a, b) => (b.completed / b.total) - (a.completed / a.total));

    activeCareers.forEach(c => {
        const percentage = Math.round((c.completed / c.total) * 100);

        const item = document.createElement('div');
        item.className = "active-progress-item";
        item.innerHTML = `
            <div class="active-progress-item-top">
                <span class="active-progress-item-title">${c.title}</span>
                <span class="active-progress-item-percent">${percentage}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${percentage}%;"></div>
            </div>
            <div class="active-progress-item-meta">${c.completed} / ${c.total} Skills Completed</div>
        `;
        list.appendChild(item);
    });
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

    document.querySelectorAll('.nav-links li, .mobile-navbar-links li').forEach(li => li.classList.remove('active'));

    if (sectionId === 'home-view' || sectionId === 'roadmap-view') {
        const navHome = document.getElementById('nav-item-home');
        if (navHome) navHome.classList.add('active');
        const navHomeM = document.getElementById('nav-item-home-m');
        if (navHomeM) navHomeM.classList.add('active');

    } else if (sectionId === 'dashboard-view') {
        const navDash = document.getElementById('nav-item-dashboard');
        if (navDash) navDash.classList.add('active');
        const navDashM = document.getElementById('nav-item-dashboard-m');
        if (navDashM) navDashM.classList.add('active');
        updateGlobalMetricsDashboard();

    } else if (sectionId === 'saved-view') {
        const navSaved = document.getElementById('nav-item-saved');
        if (navSaved) navSaved.classList.add('active');

    } else if (sectionId === 'recommend-view') {
        const navRec = document.getElementById('nav-item-recommend');
        if (navRec) navRec.classList.add('active');
        const navRecM = document.getElementById('nav-item-recommend-m');
        if (navRecM) navRecM.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showTrendingCareers() {
    showSection("recommend-view");
    renderTrendingCareers();
}

// ==========================================================================
// TRENDING CAREERS — explicit manual ranking. Edit this array to change
// which rank badge (#1, #2, #3...) each track gets in the Trending view.
// Any careerData key not listed here is appended automatically at the end.
// ==========================================================================
const trendingOrder = [
    "artificial-intelligence",     // #1
    "full-stack-development",      // #2
    "react-native-development",    // #3
    "Backend-dev",                 // #4
    "frontend-development",        // #5
    "data-science",                // #6
    "cyber-security",              // #7
    "devops-engineering",          // #8
    "cloud-computing",             // #9
    "mobile-app-development",      // #10
    "data-analyst",                // #11
    "ui-ux-design",                // #12
    "game-development",            // #13
    "software-testing",            // #14
    "digital-marketing"            // #15
];

function getTrendingCareerList() {
    const ranked = trendingOrder
        .filter(key => careerData[key])
        .map(key => ({ key, career: careerData[key] }));

    // Safety net: include any career not explicitly listed above, in
    // their natural careerData order, so new tracks never get dropped.
    const seen = new Set(ranked.map(entry => entry.key));
    Object.keys(careerData).forEach(key => {
        if (!seen.has(key)) {
            ranked.push({ key, career: careerData[key] });
        }
    });

    return ranked;
}

function renderTrendingCareers() {
    const grid = document.getElementById('trending-grid');
    if (!grid) return;
    grid.innerHTML = "";

    const ranked = getTrendingCareerList();

    const indicator = document.getElementById('trending-tracks-indicator');
    if (indicator) {
        indicator.innerText = `${ranked.length} Trending Track${ranked.length === 1 ? '' : 's'}`;
    }

    ranked.forEach((entry, index) => {
        const { key, career } = entry;
        const rank = index + 1;
        const isSaved = savedCareers.includes(key);
        const isTop3 = rank <= 3;

        const card = document.createElement('div');
        card.className = "career-card custom-premium-card";
        card.dataset.category = career.category;
        card.innerHTML = `
            <div class="card-header-row" style="display: flex; justify-content: space-between; width: 100%; align-items: center; margin-bottom: 1.2rem;">
                <div style="display: flex; align-items: center; gap: 0.7rem;">
                    <div class="card-icon-frame custom-gradient-icon" style="width: 48px; height: 48px; background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); border-radius: 12px; display: flex; justify-content: center; align-items: center; color: #ffffff; font-size: 1.2rem;">
                        <i class="${career.icon}"></i>
                    </div>
                    <span style="display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.78rem; font-weight: 700; padding: 0.3rem 0.65rem; border-radius: 999px; ${isTop3 ? 'background: rgba(247, 127, 0, 0.12); border: 1px solid rgba(247, 127, 0, 0.35); color: #f7a844;' : 'background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); color: var(--text-muted);'}">
                        ${isTop3 ? '🔥' : '#'}${rank}
                    </span>
                </div>
                <button class="save-card-btn ${isSaved ? 'saved' : ''}" style="background: none; border: none; cursor: pointer; color: ${isSaved ? 'var(--accent-purple)' : 'var(--text-muted)'}; font-size: 1.1rem;" onclick="event.stopPropagation(); toggleSaveCareer('${key}'); renderTrendingCareers();" aria-label="Pin Trajectory">
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
        setTimeout(() => {
            card.classList.add("show");
        }, index * 80);
    });
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
        question: "Hey! 👋 I'm your AI Career Advisor. Let's find the perfect path for you!\n\nFirst up — what level of education are you currently at?",
        options: [
            { label: "🎓 Diploma / Polytechnic", scores: { "Backend-dev": 1, "ui-ux-design": 1, "digital-marketing": 1 } },
            { label: "🎓 Bachelor's Degree", scores: { "Backend-dev": 2, "data-science": 1, "artificial-intelligence": 1 } },
            { label: "🎓 Master's / Postgraduate", scores: { "data-science": 2, "artificial-intelligence": 2, "cyber-security": 1 } },
            { label: "📚 Self-Learning / Bootcamp", scores: { "Backend-dev": 1, "ui-ux-design": 2, "digital-marketing": 2 } },
            { label: "🏫 Still in School (10th/12th)", scores: { "ui-ux-design": 1, "digital-marketing": 1, "Backend-dev": 1 } }
        ]
    },
    {
        question: "Nice! Now tell me — which area excites you the most? 🚀\n\nDon't overthink it, go with your gut!",
        options: [
            { label: "💻 Coding & Building Apps", scores: { "Backend-dev": 3, "devops-engineering": 1 } },
            { label: "🎨 Design & User Experience", scores: { "ui-ux-design": 3 } },
            { label: "📊 Data, Analytics & AI", scores: { "data-science": 3, "artificial-intelligence": 2 } },
            { label: "📱 Digital Marketing & Growth", scores: { "digital-marketing": 3 } },
            { label: "🔐 Cybersecurity & Networking", scores: { "cyber-security": 3 } },
            { label: "☁️ Cloud & DevOps", scores: { "devops-engineering": 3, "cloud-computing": 2 } }
        ]
    },
    {
        question: "Almost there! 🎯\n\nWhat's your current experience level with tech & computers?",
        options: [
            { label: "🌱 Beginner — Just starting out", scores: { "ui-ux-design": 1, "digital-marketing": 1 }, phase: 1 },
            { label: "⚡ Intermediate — Know the basics", scores: { "Backend-dev": 1, "data-science": 1, "cyber-security": 1 }, phase: 2 },
            { label: "🔥 Advanced — Pretty comfortable", scores: { "artificial-intelligence": 1, "devops-engineering": 1, "cloud-computing": 1 }, phase: 3 }
        ]
    }
];

let chatbotState = { step: 0, scores: {}, selectedPhase: null };

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
    chatbotState = { step: 0, scores: {}, selectedPhase: null };
    const body = document.getElementById('chatbot-body');
    body.innerHTML = "";
    askChatbotQuestion(0);
}

function appendChatMessage(text, sender) {
    const body = document.getElementById('chatbot-body');
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    if (sender === 'bot') {
        msg.innerHTML = text.replace(/\n/g, '<br>');
    } else {
        msg.innerText = text;
    }
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

    if (opt.phase) {
        chatbotState.selectedPhase = opt.phase;
    }

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
        const topKey = sorted.length > 0 ? sorted[0][0] : "Backend-dev";
        const career = careerData[topKey];

        if (!career) {
            appendChatMessage("Hmm, I couldn't find a perfect match. Try again!", "bot");
            return;
        }

        appendChatMessage("🎯 Analysis complete! Based on your education, interests & experience level — here's your ideal career path:", "bot");

        const card = document.createElement('div');
        card.className = "chat-result-card";
        card.innerHTML = `
            <h4><i class="${career.icon}"></i> ${career.title}</h4>
            <p>${career.desc}</p>
            <div class="chat-result-actions">
                <button class="chat-explore-btn" onclick="closeChatbot(); openRoadmapView('${topKey}', ${chatbotState.selectedPhase || 1});">🗺️ Explore Roadmap</button>
                <button class="chat-restart-btn" onclick="startChatbot()">🔄 Retake Quiz</button>
            </div>
        `;
        body.appendChild(card);
        body.scrollTop = body.scrollHeight;
    }, 600);
}
function showTermsModal() {
    document.getElementById('terms-modal')
        .classList.remove('hidden');
}

function closeTermsModal() {
    document.getElementById('terms-modal')
        .classList.add('hidden');
}
function filterCareers(category, btn) {

    document.querySelectorAll('.filter-btn')
        .forEach(button => button.classList.remove('active'));

    btn.classList.add('active');

    const cards = [...document.querySelectorAll('.career-card')];

    // Fade out all cards
    cards.forEach(card => {
        card.classList.remove('show');
    });

    setTimeout(() => {

        let delay = 0;

        cards.forEach(card => {

            const match =
                category === "all" ||
                card.dataset.category === category;

            if (match) {

                card.style.display = "";

                setTimeout(() => {
                    card.classList.add("show");
                }, delay);

                delay += 80;

            } else {

                card.style.display = "none";

            }

        });

    }, 250);

}
function showRoadmapTip() {

    const toast = document.getElementById("roadmap-toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}
const saveBtn = document.querySelector(".save-btn");
const icon = saveBtn.querySelector("i");

saveBtn.addEventListener("click", () => {

    saveBtn.classList.toggle("saved");

    if (saveBtn.classList.contains("saved")) {
        icon.textContent = "bookmark";
        showToast("⭐ Saved to Favorites");
    } else {
        icon.textContent = "bookmark_border";
        showToast("Removed from Favorites");
    }

});

// ==========================================================================
// MOBILE HAMBURGER MENU
// ==========================================================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-nav-menu');
    const btn = document.getElementById('hamburger-btn');
    if (!menu || !btn) return;
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        closeMobileMenu();
    } else {
        menu.classList.add('open');
        btn.classList.add('open');
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-nav-menu');
    const btn = document.getElementById('hamburger-btn');
    if (menu) menu.classList.remove('open');
    if (btn) btn.classList.remove('open');
}

// Close mobile menu when tapping outside
document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobile-nav-menu');
    const btn = document.getElementById('hamburger-btn');
    if (
        menu && menu.classList.contains('open') &&
        !menu.contains(e.target) &&
        btn && !btn.contains(e.target)
    ) {
        closeMobileMenu();
    }
});

// Sync mobile search input with main search
const mobileSearch = document.getElementById('mobile-career-search');
if (mobileSearch) {
    mobileSearch.addEventListener('input', (e) => {
        const mainSearch = document.getElementById('career-search');
        if (mainSearch) mainSearch.value = e.target.value;
        renderCareerCards(e.target.value);
        closeMobileMenu();
        showSection('home-view');
    });
}