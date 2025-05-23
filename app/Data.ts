interface Project {
    id: number;
    featured?: boolean;
    position: number;
    imageUrl: string;
    imageUrl_2: string;
    imageUrl_3: string;
    title: string;
    description: string;
    livelink: string;
    technologies: string[];
    features: string[];
}

export const ProjectData: Project[] = [
    {
        id: 1,
        featured: true,
        position: 1,
        imageUrl: "/projects/4367899465.png",
        imageUrl_2: "/projects/12341324.png",
        imageUrl_3: "/projects/4367899465.png",
        title: "CareerEdge - AI Resume Generator",
        description: "An AI-powered platform that generates tailored, ATS-optimized resumes based on user-provided job descriptions. Users can input a job description, and the system crafts a customized resume ready for download.",
        livelink: "https://careeredge.io/",
        technologies: ["TypeScript", "Next.js", "FastAPI", "OpenAI", "PostgreSQL"],
        features: [
            "AI-driven resume creation aligned with specific job descriptions",
            "Seamless resume download functionality",
            "User-friendly interface for inputting job details",
            "Integration with OpenAI for content generation",
            "Backend powered by FastAPI and PostgreSQL for efficient data handling"
        ]
    },
    {
        id: 2,
        featured: true,
        position: 2,
        imageUrl: "/projects/4567890.png",
        imageUrl_2: "/projects/6548769.png",
        imageUrl_3: "/projects/232332323.png",
        title: "PandaUI – Modern React UI Component Library",
        description: "PandaUI is a sleek and developer-friendly React component library designed to accelerate modern web development. Built with TypeScript and optimized for Next.js and FastAPI applications, it offers a comprehensive set of customizable components that enhance SEO performance and Google rankings.",
        livelink: "https://pandaui.co/",
        technologies: ["TypeScript", "JavaScript", "React.js", "Next.js", "FastAPI", "PostgreSQL", "SEO"],
        features: [
            "Extensive collection of reusable and accessible React components",
            "Seamless integration with Next.js for server-side rendering and static site generation",
            "Optimized for SEO to improve Google search rankings",
            "Built-in support for FastAPI backend integration",
            "Responsive design with customizable theming options",
            "Comprehensive documentation and examples for easy adoption"
        ]
    },
    {
        id: 3,
        featured: false,
        position: 3,
        imageUrl: "/projects/22232352345.png",
        imageUrl_2: "/projects/123231123.png",
        imageUrl_3: "",
        title: "Textberry – Intelligent Text Processing Platform",
        description: "Textberry is a Python and Django-based platform designed for smart text analysis and manipulation. It offers a suite of tools for content transformation, summarization, keyword extraction, and more — perfect for writers, marketers, and developers working with textual data. (Worked as an Backend Developer)",
        livelink: "https://textberry.io/",
        technologies: ["Python", "Django", "HTML", "CSS", "JavaScript","Twilio", "Firebase"],
        features: [
            "Text summarization using NLP techniques",
            "Keyword and entity extraction",
            "User-friendly interface for uploading and processing text files",
            "Django-powered backend with secure user management",
            "Support for multiple file formats (TXT, PDF, DOCX)",
            "RESTful API for third-party integrations"
        ]
    },
    {
        id: 4,
        featured: false,
        position: 4,
        imageUrl: "/projects/45653244.png",
        imageUrl_2: "",
        imageUrl_3: "",
        title: "Technova – Modern Tech Startup Landing Page",
        description: "Technova is a high-performance, responsive landing page built with Next.js. Designed to showcase innovative tech products and services, it features a clean design, lightning-fast performance, and SEO optimization to help startups gain traction.",
        livelink: "https://technova.io/",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
        features: [
            "Responsive and modern UI/UX",
            "Next.js static generation for blazing-fast performance",
            "Built-in SEO optimization for better discoverability",
            "Smooth scrolling and interactive animations",
            "Fully responsive on all devices",
            "Modular and reusable component structure"
        ]
    },
    {
        id: 5,
        featured: true,
        position: 5,
        imageUrl: "/projects/512343421.png",
        imageUrl_2: "/projects/57666758.png",
        imageUrl_3: "/projects/765878698.png",
        title: "PicShare – Social Image Sharing Platform",
        description: "PicShare is a modern web application for uploading, sharing, and exploring images. Built with Next.js, MongoDB, and Firebase, it delivers a seamless user experience with real-time features, secure authentication, and a sleek interface.",
        livelink: "https://picshare.mohitcodes.com/",
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Firebase"],
        features: [
            "Image upload and sharing functionality",
            "Firebase authentication with secure login/signup",
            "Real-time updates and feed using Firebase",
            "MongoDB database for storing user and image metadata",
            "Responsive design with smooth user experience",
            "Explore and like photos from other users"
        ]
    },
    {
        id: 6,
        featured: false,
        position: 6,
        imageUrl: "/projects/434468776.png",
        imageUrl_2: "/projects/5434558987.png",
        imageUrl_3: "",
        title: "Muscle Magnet – Gym & Fitness Landing Page",
        description: "Muscle Magnet is a modern, responsive landing page designed for gyms and fitness centers. Built with Next.js, it features bold visuals, strong call-to-actions, and clean layout optimized for conversions and mobile responsiveness.",
        livelink: "https://musclemagnet.io/",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        features: [
            "Hero section with strong branding and CTA",
            "Class schedules and membership pricing display",
            "Trainer profiles and testimonial sections",
            "Optimized performance with static generation",
            "Fully responsive design for all screen sizes",
            "SEO-friendly structure for improved visibility"
        ]
    },
    {
        id: 7,
        featured: true,
        position: 7,
        imageUrl: "/projects/6465356.png",
        imageUrl_2: "/projects/23432432423.png",
        imageUrl_3: "",
        title: "Zylo – NFT Marketplace for Digital Assets",
        description: "Zylo is a cutting-edge NFT marketplace platform built with Next.js, enabling users to buy, sell, and explore unique digital assets. With a sleek user interface and smooth Web3 integration, Zylo provides a seamless experience for creators and collectors.",
        livelink: "",
        technologies: ["Next.js", "React", "TypeScript", "Web3.js", "IPFS", "Tailwind CSS"],
        features: [
            "Minting and listing of NFTs with metadata",
            "Wallet integration (e.g., MetaMask) for secure transactions",
            "NFT browsing, filtering, and detailed view pages",
            "Responsive and modern UI design",
            "Integration with IPFS for decentralized asset storage",
            "Fast performance with Next.js static optimization"
        ]
    },
    {
        id: 8,
        featured: true,
        position: 8,
        imageUrl: "/projects/324324443.png",
        imageUrl_2: "/projects/2342432434.png",
        imageUrl_3: "",
        title: "AlleyBot – An AI Friend to Talk With",
        description: "AlleyBot is an intelligent chatbot powered by OpenAI, designed to be a friendly and engaging companion. Built with Node.js and Next.js, AlleyBot offers real-time conversations, emotional awareness, and a natural chatting experience.",
        livelink: "",
        technologies: ["Node.js", "Next.js", "React", "TypeScript", "OpenAI API"],
        features: [
            "Conversational AI powered by OpenAI's GPT models",
            "Real-time chat interface with contextual memory",
            "Emotionally aware responses for a more human experience",
            "Node.js backend with secure API routing",
            "Responsive and clean UI built with Next.js",
            "User-friendly design for all age groups"
        ]
    },
    {
        id: 9,
        featured: true,
        position: 9,
        imageUrl: "/projects/323434322.png",
        imageUrl_2: "/projects/4565333244.png",
        imageUrl_3: "/projects/32324432.png",
        title: "DevilsPlanet – Clothing E-Commerce Website",
        description: "DevilsPlanet is a sleek and modern e-commerce platform for trendy clothing and streetwear. Built with React and Node.js, the website delivers a fast, intuitive shopping experience with dynamic product listings and secure checkout.",
        livelink: "",
        technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Stripe API"],
        features: [
            "Dynamic product catalog with filtering and sorting",
            "User authentication and profile management",
            "Shopping cart with real-time updates",
            "Secure payment integration using Stripe",
            "Order tracking and admin dashboard for inventory",
            "Responsive UI optimized for mobile and desktop"
        ]
    }
    
]

