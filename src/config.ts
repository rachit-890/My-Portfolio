export const config = {
    developer: {
        name: "Rachit",
        fullName: "Rachit Kushwaha",
        title: "Java Backend Developer",
        description: "Java Backend Developer skilled in building scalable microservices and RESTful APIs using Spring Boot. Experienced in event-driven architecture, secure authentication, and containerized deployments."
    },
    social: {
        github: "rachit-890",
        email: "rachitkushwaha890@gmail.com",
        location: "Ghaziabad, Uttar Pradesh"
    },
    about: {
        title: "About Me",
        description: "I am a Java Backend Developer based in Ghaziabad, Uttar Pradesh, India. I specialize in building high-performance, scalable microservices and robust RESTful APIs using Spring Boot. I have hands-on experience in designing secure authentication mechanisms with JWT and OAuth2 (using Keycloak), establishing event-driven communication with Apache Kafka, and optimizing data layers with Redis caching. With a solid foundation in OOP, clean architecture, and Agile workflows, I aim to build secure, reliable, and high-performance backend systems."
    },
    experiences: [
        {
            position: "Backend Developer (Academic Projects)",
            company: "KIET Group of Institutions",
            period: "Oct 2025 - Dec 2025",
            location: "Ghaziabad, India",
            description: "Built full-stack applications using Java, Spring Boot, and React across 3+ collaborative projects.",
            responsibilities: [
                "Designed backend systems using clean architecture and OOP principles, improving code maintainability and scalability",
                "Implemented unit and integration tests using JUnit and Mockito, enhancing API reliability and reducing defects",
                "Collaborated in Agile/Scrum workflows, contributing to sprint planning, code reviews, and iterative feature delivery"
            ],
            technologies: ["Java", "Spring Boot", "React", "Clean Architecture", "JUnit", "Mockito", "Agile"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "DreamShops",
            category: "E-commerce Microservices Platform",
            technologies: "Java, Spring Boot, Spring Cloud, Kafka, Redis, PostgreSQL, MongoDB, Docker",
            image: "/images/dreamshops.png",
            description: "Architected a scalable microservices-based e-commerce platform with API Gateway, service discovery, and load balancing. Implemented secure JWT/OAuth2 authentication using Keycloak with role-based access control (RBAC). Optimized performance by 60% using Redis caching and Kafka-based event-driven processing. Engineered and documented RESTful APIs with Swagger/OpenAPI."
        },
        {
            id: 2,
            title: "Kinetic Cybernetics",
            category: "AI Fitness Ecosystem",
            technologies: "Java, Spring Boot, Python, Node.js, React, PostgreSQL, Docker",
            image: "/images/kinetic.png",
            description: "Developed an AI-driven fitness platform processing 500+ biometric data points for real-time health insights. Developed secure backend services using Spring Boot with JWT authentication and RESTful APIs. Integrated Python ML pipelines, improving prediction accuracy by 40%."
        },
        {
            id: 3,
            title: "Fitness Tracker",
            category: "AI Fitness Ecosystem",
            technologies: "Java 25, Spring Boot 3.5.5, Python 3.14, FastAPI, React 19, Redux Toolkit, TailwindCSS, H2, JWT, Docker",
            image: "/images/fitness.png",
            description: "Engineered a neural-inspired fitness tracking ecosystem leveraging Machine Learning (FastAPI, Scikit-learn) for dynamic calorie prediction and custom 8-week workout protocols. Built with a high-performance Spring Boot 3.5.5 backend (Java 25) using secure JWT authorization, and a responsive React 19 frontend with Redux Toolkit and TailwindCSS. Fully containerized with Docker Compose."
        }
    ],
    contact: {
        email: "rachitkushwaha890@gmail.com",
        github: "https://github.com/rachit-890",
        linkedin: "https://www.linkedin.com/in/rachit-kushwaha-8b8714297/",
        instagram: "https://instagram.com/_.rachitkushwaha",
        resume: "/resume.pdf"
    },
    skills: {
        develop: {
            title: "BACKEND DEV",
            description: "Scalable Systems & APIs",
            details: "Specializing in high-performance microservices, Spring Boot applications, distributed caching, and clean database integrations.",
            tools: ["Java", "Spring Boot", "Spring Cloud", "Hibernate/JPA", "Apache Kafka", "Redis", "Docker", "RESTful APIs", "Keycloak", "OAuth2", "JUnit", "Mockito"]
        },
        design: {
            title: "DATABASES & INFRA",
            description: "Data Persistence & Tools",
            details: "Experienced in managing SQL and NoSQL databases, building API documentation, and maintaining containerized environments.",
            tools: ["PostgreSQL", "MySQL", "MongoDB", "Git", "Maven", "Swagger/OpenAPI", "Linux", "CI/CD"]
        }
    }
};
