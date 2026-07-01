export interface UserProfile {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  location: string;
  summary: string;
  skills: {
    core: string[];
    ai: string[];
    strengths: string[];
  };
  experience: {
    role: string;
    company: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    year: string;
    cgpa: string;
  }[];
  projects: {
    name: string;
    description: string;
    challenge?: string;
    architecture?: string[];
    hurdle?: string;
    usage?: string[];
    impact?: string[];
    successCriteria?: string[];
    links?: { live?: string; github?: string };
    techStack?: string[];
  }[];
  symposium: string;
  passion: string;
}

export const profileData: UserProfile = {
  name: "VIBHA SHREESHAIL B V",
  role: "Entry-level Android App Developer | Specialized in Android & Generative AI",
  email: "vibhashreeshail@gmail.com",
  linkedin: "linkedin.com/in/vibha-shreeshail-29801629a",
  location: "Bangalore",
  summary: "As a computer science engineering student, I possess expertise in HTML, CSS, JavaScript, Kotlin, Jetpack Compose, and large language models (LLMs). Demonstrates a strong commitment to software development with experience in creating Android applications. Consistently collaborated with cross-functional teams to resolve complex challenges and quickly acquire new skills, demonstrating professionalism and adaptability.",
  skills: {
    core: ["Kotlin", "Jetpack Compose", "Firebase", "JavaScript", "HTML", "CSS"],
    ai: ["Android Studio", "Google AI Studio", "Generative AI", "RESTful APIs", "Large Language Models (LLMs)", "Git"],
    strengths: ["Debugging", "Interactive enhancement", "Project-based learning", "Firebase integration", "Android development workflow"]
  },
  experience: [
    {
      role: "Android Development Intern",
      company: "MindMatrix",
      description: "Completed Android app development internship projects utilizing generative AI, developing mobile applications with Kotlin, Android Studio, Firebase and Jetpack Compose. Completed technical projects and currently developing 'Grama-Vasathi,' a real-world hospitality application."
    }
  ],
  education: [
    {
      institution: "KNS Institute of Technology",
      degree: "B.E (Computer Science and Engineering)",
      year: "2022 - 2026",
      cgpa: "9.0 CGPA"
    },
    {
      institution: "Vision girls PU college",
      degree: "PUC",
      year: "2021 - 2022",
      cgpa: "8.5 CGPA"
    },
    {
      institution: "Mahatma Gandhi English Medium High School",
      degree: "SSLC",
      year: "2019 - 2020",
      cgpa: "9.8 CGPA"
    }
  ],
  projects: [
    {
      name: "Grama-Vasathi (Hospitality)",
      description: "A 'Rural Home-stay Accelerator' that acts as a guide for both hosts and guests. For villagers, it's a 'Hospitality School' giving tips on room setup, hygiene, and food serving. For guests, it's a verified catalog of authentic farm-stays to experience 'Matti-Vasane' (scent of the soil).",
      challenge: "Many city dwellers want to experience rural life but fear a lack of basic hygiene information. Local families have spare rooms but lack marketing knowledge and awareness of city guest expectations.",
      architecture: [
        "Kotlin & Jetpack Compose for a reactive, modern UI, using a Wizard/Stepper for the host training checklist",
        "Firebase Firestore for a searchable directory of farm-stays",
        "High-quality media gallery to visualize each farm-stay"
      ],
      usage: [
        "Host Training: A checklist of 'Guest Readiness' (Clean sheets, Safe water, Western toilet).",
        "Farm Experience: List activities (e.g., 'Cow Milking,' 'Field Plowing,' 'Local Cooking').",
        "Guest Booking: (Simulated) Simple calendar to reserve a room.",
        "Cultural Guide: 'How to greet locals', 'What to wear' (for the city guest)."
      ],
      impact: [
        "Reverse Migration: Making villages an attractive economic destination.",
        "Cultural Exchange: Bridging the Urban-Rural divide through shared living.",
        "Income Diversification: Providing farmers with 'Non-Agri' income during lean seasons."
      ],
      successCriteria: [
        "The 'Host Readiness Score' must be calculated based on the checklist.",
        "The search must allow filtering by 'Activities' (e.g., Birdwatching).",
        "The UI must be warm, welcoming, and 'Homy.'"
      ],
      hurdle: "Developing a dynamic 'Host Readiness Score' that actively tracks checklist completion while ensuring the filtering system remained responsive and scalable for activities.",
      links: { github: "#", live: "#" },
      techStack: ["Kotlin", "Jetpack Compose", "Firebase"]
    },
    {
      name: "Calculating water footprints for daily-use products",
      description: "Designed and deployed an AI-powered Water Footprint Calculator using Python and JavaScript that translates complex freshwater usage data into actionable conservation strategies.",
      challenge: "Translating complex, multidimensional freshwater usage data into an intuitive and accessible interface that empowers users to make actionable conservation decisions.",
      architecture: [
        "Python backend for data processing and AI model inference",
        "JavaScript frontend for interactive visualizations",
        "RESTful APIs for seamless client-server communication"
      ],
      hurdle: "The AI inference engine initially caused significant API latency during complex calculations. Debugged the pipeline and implemented server-side caching, reducing response times by over 60%.",
      links: { github: "#", live: "#" },
      techStack: ["Python", "JavaScript", "REST APIs", "AI Models"]
    }
  ],
  symposium: "Presented 'Software Application to Calculate the Water Footprints for Daily-Use Products' at the National Conference on Smart Knowledge Discovery in Information Technology and Communication Engineering (SKITE 2025) at KNSIT, Bangalore.",
  passion: "Pursuing Carnatic Music at Naadalahari Institution."
};
