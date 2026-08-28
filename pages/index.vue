<template>
  <div class="min-h-screen bg-gray-100 py-12 font-mono">
    <div class="max-w-5xl text-center mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="absolute top-0 left-0 right-0 p-4 flex justify-center sm:justify-end"
      >
        <NuxtLink
          to="https://github.com/elizabthpazp/cv-template"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <GithubIcon class="w-5 h-5 mr-2 text-end" />
          <span>GitHub</span>
        </NuxtLink>
      </div>
      <p class="text-center mb-4 font-semibold text-xl mt-5 sm:mt-2">
        ✨ Aplica a empresas tecnológicas con esta plantilla de CV ✨
      </p>

      <p
        class="text-center mb-8 font-normal text-xs sm:text-sm md:text-lg lg:text-lg xl:text-lg"
      >
        👋 ¡Hola! Creé esta plantilla a partir de mi propio currículum. Antes,
        no obtenía resultados al enviarlo a empresas clave en la industria.
        Luego de recibir retroalimentación de personas con experiencia en
        grandes compañías, logré mejorarlo enfocándose en el impacto que generé
        en cada trabajo. Este enfoque ayudó a que aceptaran mi CV y a mejorar mi
        desempeño en las entrevistas.
      </p>
    </div>
    
   <div class="min-h-screen py-2"> 
  <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"> 
    <div class="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold mb-1">Full Name</h1>
        <p class="text-xl mb-4">AI/ML Software Engineer & Agent Developer</p>
        
        <div class="flex flex-wrap items-center gap-4 text-sm">
          <div class="flex items-center">
            <span class="mr-2">📍</span>
            <span>Country, City</span>
          </div>
          <div class="flex items-center">
            <span class="mr-2">📧</span>
            <span>email@example.com</span>
          </div>
          <div class="flex items-center">
            <span class="mr-2">📱</span>
            <span>+123 456 7890</span>
          </div>
          <div class="flex items-center">
            <span class="mr-2">🌐</span>
            <span>mywebsite.com</span>
          </div>
          <div class="flex items-center">
            <span class="mr-2">💻</span>
            <span>github.com/username</span>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6"> 
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-3 text-indigo-700 border-b border-indigo-200 pb-2">
          Summary
        </h2>
        <p class="text-gray-700">
          AI/ML Software Engineer with 5+ years of experience specializing in autonomous agent development and prompt engineering. 
          Expert in LangChain, LangGraph, and GPT integration with proven ability to reduce development time by 40% through 
          AI-assisted coding. Seeking to contribute advanced AI solutions and agent architecture expertise to cutting-edge technology companies.
        </p>
      </section>

      <!-- AI Skills Section -->
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-3 text-indigo-700 border-b border-indigo-200 pb-2">
          AI & Machine Learning Skills
        </h2>
        
        <!-- Generative AI Tools -->
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2 text-gray-800">Generative AI Tools</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div v-for="skill in generativeAISkills" :key="skill.name" 
                 class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>{{ skill.name }}</span>
              <InfoTooltip :text="skill.tooltip" position="top" class="ml-1" />
            </div>
          </div>
        </div>
        
        <!-- Technical AI Skills -->
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2 text-gray-800">Technical AI Skills</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div v-for="skill in technicalAISkills" :key="skill.name" 
                 class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>{{ skill.name }}</span>
              <InfoTooltip :text="skill.tooltip" position="top" class="ml-1" />
            </div>
          </div>
        </div>
        
        <!-- AI Applications -->
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2 text-gray-800">AI Applications</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div v-for="skill in aiApplications" :key="skill.name" 
                 class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>{{ skill.name }}</span>
              <InfoTooltip :text="skill.tooltip" position="top" class="ml-1" />
            </div>
          </div>
        </div>
        <!-- Print version for PDF export -->
        <div class="hidden print:block">
          <h3 class="text-lg font-semibold mb-2">Generative AI Tools:</h3>
          <p class="text-sm mb-2">{{ generativeAISkills.map(s => `${s.name} - ${s.tooltip}`).join('; ') }}</p>
          <h3 class="text-lg font-semibold mb-2">Technical AI Skills:</h3>
          <p class="text-sm mb-2">{{ technicalAISkills.map(s => `${s.name} - ${s.tooltip}`).join('; ') }}</p>
          <h3 class="text-lg font-semibold mb-2">AI Applications:</h3>
          <p class="text-sm mb-2">{{ aiApplications.map(s => `${s.name} - ${s.tooltip}`).join('; ') }}</p>
        </div>
      </section>

      <!-- Agent Skills Section -->
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-3 text-indigo-700 border-b border-indigo-200 pb-2">
          AI Agent Development
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Frameworks Column -->
          <div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800">Frameworks</h3>
            <div class="space-y-2">
              <div v-for="framework in agentFrameworks" :key="framework.name"
                   class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                <span>{{ framework.name }}</span>
                <InfoTooltip :text="framework.tooltip" position="right" class="ml-1" />
              </div>
            </div>
          </div>
          
          <!-- Concepts Column -->
          <div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800">Concepts & Patterns</h3>
            <div class="space-y-2">
              <div v-for="concept in agentConcepts" :key="concept.name"
                   class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                <span>{{ concept.name }}</span>
                <InfoTooltip :text="concept.tooltip" position="right" class="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Work Experience Section -->
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-3 text-indigo-700 border-b border-indigo-200 pb-2">
          Work Experience
        </h2>
        
        <div v-for="job in workExperience" :key="job.title" class="mb-4">
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-semibold">{{ job.title }}</h3>
            <span class="text-gray-600 text-sm">{{ job.period }}</span>
          </div>
          <p class="text-gray-700 font-medium">{{ job.company }}</p>
          <ul class="mt-2 space-y-1">
            <AchievementCard 
              v-for="achievement in job.achievements" 
              :key="achievement.description"
              :achievement="achievement" 
            />
          </ul>
        </div>
      </section>
      <!-- Projects Section -->
      <section class="mb-6">
        <h2 class="text-xl font-bold mb-3 text-indigo-700 border-b border-indigo-200 pb-2">
          Featured AI/ML Projects
        </h2>
        
        <div class="space-y-4">
          <article v-for="project in projectsData" :key="project.name" 
                   class="border-l-4 border-indigo-300 pl-4">
            <div class="flex justify-between items-start">
              <h3 class="text-lg font-semibold">{{ project.name }}</h3>
              <div v-if="project.links" class="flex space-x-2">
                <a v-if="project.links.demo" 
                   :href="project.links.demo"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-indigo-600 hover:text-indigo-800 text-sm"
                   :aria-label="`View demo of ${project.name}`">
                  Demo
                </a>
                <a v-if="project.links.repo"
                   :href="project.links.repo"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-indigo-600 hover:text-indigo-800"
                   :aria-label="`View repository for ${project.name}`">
                  <GithubIcon class="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <p class="text-gray-700 mt-1">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="tech in project.technologies" :key="tech"
                    class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                {{ tech }}
                <InfoTooltip v-if="getTechTooltip(tech)" 
                             :text="getTechTooltip(tech)" 
                             position="top" 
                             class="ml-1" />
              </span>
            </div>
            
            <div class="mt-2 text-gray-700 flex items-center">
              <span>{{ project.outcome.description }}</span>
              <MetricsBadge v-if="project.outcome.metric"
                            :value="project.outcome.metric.value"
                            :label="project.outcome.metric.label"
                            :variant="project.outcome.metric.variant"
                            class="ml-2" />
            </div>
          </article>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> 
        <section>
          <h2 class="text-xl font-bold mb-3 text-indigo-700 border-b border-indigo-200 pb-2">
            Technical Skills
          </h2>
          <div class="grid grid-cols-2 gap-2">
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>JavaScript/TypeScript</span>
            </div>
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>Python</span>
            </div>
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>Vue.js/Nuxt</span>
            </div>
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>React</span>
            </div>
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>Node.js</span>
            </div>
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>MongoDB/SQL</span>
            </div>
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>REST/GraphQL APIs</span>
            </div>
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>Git/CI/CD</span>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-bold mb-3 text-indigo-700 border-b border-indigo-200 pb-2">
            Education
          </h2>
          <div class="mb-3">
            <div class="flex justify-between">
              <h3 class="font-semibold">Bachelor of Science in Computer Science</h3>
              <span class="text-gray-600 text-sm">2016</span>
            </div>
            <p class="text-gray-700">University of Technology</p>
          </div> 
           
          <div class="mt-4">
            <h3 class="font-semibold mb-2">Languages</h3>
            <div class="flex space-x-4">
              <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Spanish (Native)</span>
              <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">English (Advanced)</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
   
  <div class="max-w-4xl mx-auto mt-8 text-center text-gray-500 text-sm">
    AI-optimized CV template • ATS Compatible • Updated: May 2025
  </div>
</div>

    <Footer />
  </div>
</template>
<script setup>
import { 
  GithubIcon,
} from "lucide-vue-next";
import { onMounted, ref, provide, onUnmounted, readonly } from 'vue';
import InfoTooltip from '@/components/InfoTooltip.vue';
import MetricsBadge from '@/components/MetricsBadge.vue';
import AchievementCard from '@/components/AchievementCard.vue';

const analytics = useNuxtApp().$analytics;

// Global tooltip state management
const activeTooltipId = ref(null);

const setActiveTooltip = (tooltipId) => {
  activeTooltipId.value = tooltipId;
};

const clearActiveTooltip = () => {
  activeTooltipId.value = null;
};

// Provide tooltip state to all child components
provide('tooltipState', {
  activeTooltipId: readonly(activeTooltipId),
  setActiveTooltip,
  clearActiveTooltip
});

// Global escape key handler to close tooltips
const handleEscape = (event) => {
  if (event.key === 'Escape') {
    clearActiveTooltip();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});

// Inicializar Buy Me a Coffee widget después de que el DOM esté listo
onMounted(() => {
  // Asegurar que el script esté cargado correctamente
  const script = document.querySelector('script[data-name="BMC-Widget"]');
  if (script && window.BMC) {
    window.BMC.init();
  }
});

// AI Skills Data
const generativeAISkills = ref([
  {
    name: "Prompt Engineering",
    category: "generative",
    tooltip: "Crafted advanced prompts for ChatGPT and Claude to generate production-ready code, reducing development time by 40%",
    keywords: ["prompt engineering", "AI-assisted development", "generative AI"]
  },
  {
    name: "ChatGPT/Claude",
    category: "generative", 
    tooltip: "Used GPT-5.6 and Opus 5 for code generation, debugging, and architectural planning in 15+ projects",
    keywords: ["ChatGPT", "Claude", "AI tools"]
  },
  {
    name: "GitHub Copilot",
    category: "generative",
    tooltip: "Integrated GitHub Copilot for intelligent code completion and pair programming, increasing coding efficiency by 35%",
    keywords: ["GitHub Copilot", "AI coding assistant", "pair programming"]
  }
]);
const technicalAISkills = ref([
  {
    name: "OpenAI API",
    category: "technical",
    tooltip: "Built production applications using OpenAI GPT-3.5/4 API for chat, completion, and embedding generation",
    keywords: ["OpenAI API", "GPT integration", "embeddings"]
  },
  {
    name: "Vector Databases", 
    category: "technical",
    tooltip: "Implemented RAG systems using Pinecone and Chroma for semantic search and knowledge retrieval",
    keywords: ["vector databases", "RAG", "semantic search", "Pinecone", "Chroma"]
  },
  {
    name: "Fine-tuning",
    category: "technical", 
    tooltip: "Fine-tuned custom language models for domain-specific tasks, achieving 25% improvement in task accuracy",
    keywords: ["fine-tuning", "custom models", "model training"]
  }
]);

const aiApplications = ref([
  {
    name: "Code Generation",
    category: "application",
    tooltip: "Automated boilerplate code generation and API endpoint creation, reducing development time by 50%",
    keywords: ["code generation", "automation", "boilerplate"]
  },
  {
    name: "Documentation",
    category: "application", 
    tooltip: "AI-powered documentation generation and code commenting, improving code maintainability across teams",
    keywords: ["AI documentation", "code comments", "maintainability"]
  },
  {
    name: "Testing & QA",
    category: "application",
    tooltip: "Automated test case generation and bug detection using AI, increasing test coverage by 60%",
    keywords: ["AI testing", "automated QA", "bug detection"]
  }
]);

// Agent Skills Data
const agentFrameworks = ref([
  {
    name: "LangChain",
    type: "framework",
    tooltip: "Built production LangChain applications with custom chains, memory management, and vector store integration for RAG systems",
    keywords: ["LangChain", "AI agents", "chain orchestration"]
  },
  {
    name: "LangGraph", 
    type: "framework",
    tooltip: "Developed complex agent workflows using LangGraph for multi-step reasoning and decision-making processes",
    keywords: ["LangGraph", "agent workflows", "multi-step reasoning"]
  },
  {
    name: "AutoGPT",
    type: "framework",
    tooltip: "Implemented autonomous task execution systems using AutoGPT for goal-driven automation projects",
    keywords: ["AutoGPT", "autonomous agents", "task automation"]
  },
  {
    name: "CrewAI",
    type: "framework", 
    tooltip: "Orchestrated multi-agent systems using CrewAI for collaborative problem-solving and task delegation",
    keywords: ["CrewAI", "multi-agent systems", "collaborative AI"]
  },
  {
    name: "Microsoft Agent Framework",
    type: "framework",
    tooltip: "Developed enterprise-grade conversational agents using Microsoft Bot Framework and Semantic Kernel",
    keywords: ["Microsoft Agent Framework", "Bot Framework", "Semantic Kernel"]
  }
]);
const agentConcepts = ref([
  {
    name: "Autonomous Agents",
    type: "concept",
    tooltip: "Designed self-directed agent systems with goal decomposition, planning, and execution loops using ReAct patterns",
    keywords: ["autonomous agents", "agent architecture", "ReAct"]
  },
  {
    name: "Memory Management",
    type: "concept",
    tooltip: "Implemented persistent and contextual memory systems for agents using vector stores and conversation buffers",
    keywords: ["memory management", "agent memory", "context persistence"]
  },
  {
    name: "File Persistence",
    type: "concept", 
    tooltip: "Built file-based knowledge systems allowing agents to read, write, and maintain persistent state across sessions",
    keywords: ["file persistence", "knowledge management", "agent state"]
  },
  {
    name: "Multi-Agent Systems",
    type: "concept",
    tooltip: "Architected collaborative agent ecosystems with role-based specialization and inter-agent communication protocols",
    keywords: ["multi-agent systems", "agent collaboration", "distributed AI"]
  },
  {
    name: "Control Surfaces",
    type: "concept",
    tooltip: "Implemented agent monitoring and control interfaces for real-time oversight and intervention in autonomous processes",
    keywords: ["control surfaces", "agent monitoring", "human oversight"]
  }
]);

// Projects Data
const projectsData = ref([
  {
    name: "AI-Powered Code Review Assistant", 
    description: "Built an autonomous agent using LangChain and GPT-4 to review pull requests and suggest improvements",
    technologies: ["LangChain", "GPT-4", "Python", "GitHub API"],
    outcome: {
      description: "Reduced manual review time",
      metric: { value: "60%", label: "time saved", variant: "success" }
    },
    links: {
      repo: "https://github.com/elizabthpazp/cv-template"
    }
  },
  {
    name: "Multi-Agent Customer Support System",
    description: "Developed a CrewAI-based system with specialized agents for ticket routing, response generation, and quality assurance",
    technologies: ["CrewAI", "OpenAI API", "Redis", "FastAPI"],
    outcome: {
      description: "Improved response accuracy",
      metric: { value: "85%", label: "accuracy rate", variant: "success" }
    },
    links: {
      demo: "https://elijs.dev/",
      repo: "https://github.com/elizabthpazp/cv-template"
    }
  },
  {
    name: "RAG-Powered Documentation Assistant",
    description: "Created an intelligent documentation system using vector databases and retrieval-augmented generation",
    technologies: ["LangChain", "Pinecone", "OpenAI Embeddings", "Streamlit"],
    outcome: {
      description: "Reduced documentation search time",
      metric: { value: "70%", label: "faster queries", variant: "info" }
    },
    links: {
      demo: "https://elijs.dev/"
    }
  }
]);
// Work Experience Data with Harvard Format
const workExperience = ref([
  {
    title: "Senior AI/ML Engineer",
    company: "TechCorp Inc.", 
    period: "2021 - Present",
    achievements: [
      {
        action: "Led",
        description: "a team of 8 developers in building autonomous AI agent systems for enterprise automation",
        metric: { value: "40%", label: "efficiency improvement", variant: "success" }
      },
      {
        action: "Implemented", 
        description: "LangChain-based RAG systems that enhanced customer support response accuracy",
        metric: { value: "85%", label: "accuracy rate", variant: "success" }
      },
      {
        action: "Optimized",
        description: "prompt engineering workflows, reducing AI model response time and improving code generation quality",
        metric: { value: "50%", label: "faster responses", variant: "info" }
      }
    ]
  },
  {
    title: "Full Stack Developer", 
    company: "Innovate Solutions",
    period: "2019 - 2021", 
    achievements: [
      {
        action: "Developed",
        description: "3 responsive web applications with AI-assisted development tools, serving over 10,000 active users",
        metric: { value: "10K+", label: "active users", variant: "highlight" }
      },
      {
        action: "Reduced",
        description: "production bugs through automated testing and AI-powered code analysis",
        metric: { value: "35%", label: "bug reduction", variant: "success" }
      }
    ]
  }
]);

// Technical tooltips for projects
const getTechTooltip = (tech) => {
  const tooltips = {
    "LangChain": "Framework for developing applications powered by language models with chains, agents, and memory",
    "GPT-4": "Advanced language model from OpenAI for natural language understanding and generation",
    "CrewAI": "Framework for orchestrating role-playing, autonomous AI agents for collaborative task execution",
    "Pinecone": "Vector database for similarity search and machine learning applications",
    "OpenAI Embeddings": "Vector representations of text for semantic search and similarity matching",
    "Streamlit": "Framework for building and sharing data applications with simple Python scripts",
    "FastAPI": "Modern, fast web framework for building APIs with Python based on standard type hints",
    "Redis": "In-memory data structure store used for caching and session management"
  };
  return tooltips[tech] || null;
};
useHead({
  title: "✨ Modern AI/ML CV Template - Agent Developer Portfolio ✨",
  meta: [
    {
      name: "description",
      content:
        "Professional AI/ML CV template showcasing autonomous agent development, prompt engineering, and LangChain expertise. Perfect for AI engineers, ML developers, and agent specialists applying to cutting-edge tech companies.",
    },
    {
      name: "keywords",
      content:
        "AI CV, ML resume, agent developer, LangChain, prompt engineering, ChatGPT, autonomous agents, RAG systems, vector databases, AI templates, tech resume",
    },
    {
      name: "author",
      content: "elijs.dev",
    },
    {
      property: "og:title",
      content: "✨ Modern AI/ML CV Template - Agent Developer Portfolio ✨",
    },
    {
      property: "og:description", 
      content:
        "Professional AI/ML CV template showcasing autonomous agent development, prompt engineering, and LangChain expertise. Optimized for ATS and modern tech companies.",
    },
    {
      property: "og:image",
      content: "/assets/img/favicon.ico",
    },
    {
      property: "og:url",
      content: "https://elijs.dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  script: [
    {
      src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js",
      "data-name": "BMC-Widget",
      "data-cfasync": "false",
      "data-id": "elizabethpH",
      "data-description": "Support me on Buy me a pizza!",
      "data-message":
        "¡Muchas gracias por ayudarme a seguir creando contenido! 💜",
      "data-color": "#7C3AED",
      "data-position": "Right",
      "data-x_margin": "19",
      "data-y_margin": "15",
      defer: true,
      tagPosition: "bodyClose",
    },
    {
      src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7738434269106493",
      async:true,
      crossorigin:"anonymous" 
    }
  ],
});
</script>
<style>
.mt-mobile-cv {
  margin-top: 7px;
}

/* Print styles for PDF export */
@media print {
  .print\:block {
    display: block !important;
  }
  
  .print\:hidden {
    display: none !important;
  }
  
  /* Ensure tooltip content is visible in print */
  .tooltip-content-print {
    display: inline;
    font-size: 0.875rem;
    color: #4b5563;
    margin-left: 0.5rem;
  }
  
  /* Hide interactive elements in print */
  button[role="button"] {
    display: none;
  }
  
  /* Ensure proper page breaks */
  section {
    page-break-inside: avoid;
  }
  
  /* Maintain single-column layout for ATS */
  .grid {
    display: block !important;
  }
  
  .grid > div {
    margin-bottom: 1rem;
  }
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  /* Ensure touch targets are at least 44px */
  button[role="button"] {
    min-width: 44px;
    min-height: 44px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Accessibility and keyboard navigation */
button[role="button"]:focus {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

/* Ensure high contrast for WCAG compliance */
.text-indigo-700 {
  color: #3730a3;
}

.border-indigo-200 {
  border-color: #c7d2fe;
}

/* ATS-safe styling */
section {
  margin-bottom: 1.5rem;
}

h1, h2, h3 {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

/* Ensure content is accessible to screen readers */
[role="img"] {
  font-weight: bold;
}

/* Responsive badge scaling */
@media (max-width: 640px) {
  .inline-flex {
    font-size: 0.8rem;
  }
}
</style>