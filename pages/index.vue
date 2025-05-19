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
        grandes compañías, logré mejorarlo enfocándome en el impacto que generé
        en cada trabajo. Este enfoque ayudó a que aceptaran mi CV y a mejorar mi
        desempeño en las entrevistas.
      </p>
    </div>
    
   <div class="min-h-screen py-2"> 
  <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"> 
    <div class="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold mb-1">Full Name</h1>
        <p class="text-xl mb-4">Role You’re Applying For</p>
        
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
          Professional with [X] years of experience in [specialty]. Specialized in [main skills] 
          with a focus on [value you bring]. Proven ability to [notable achievement] and [another key skill or achievement].
          Seeking to contribute [specific benefit] to [type of company/role].
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-xl font-bold mb-3 text-indigo-700 border-b border-indigo-200 pb-2">
          Work Experience
        </h2>
        
        <div class="mb-4">
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-semibold">Senior Web Developer</h3>
            <span class="text-gray-600 text-sm">2019 - Present</span>
          </div>
          <p class="text-gray-700 font-medium">TechCorp Inc.</p>
          <ul class="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Led a team of 5 developers, improving team efficiency by 25%</li>
            <li>Implemented features that increased user retention by 30%</li>
            <li>Optimized web performance, reducing load times by 40%</li>
          </ul>
        </div>
        
        <div class="mb-4">
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-semibold">Web Developer</h3>
            <span class="text-gray-600 text-sm">2017 - 2019</span>
          </div>
          <p class="text-gray-700 font-medium">Innovate Solutions</p>
          <ul class="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Developed 3 responsive web applications with over 10K active users</li>
            <li>Reduced production bugs by 35% through automated testing</li>
          </ul>
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
              <span>JavaScript</span>
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
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span>Testing (Jest/Cypress)</span>
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
    CV optimized for ATS and AI analysis • Updated: May 2025
  </div>
</div> 

    <Footer />
  </div>
</template>

<script setup>
import { 
  GithubIcon,
} from "lucide-vue-next";

const analytics = useNuxtApp().$analytics;

const infoTexts = ref([
  {
    text: "Muchas empresas prefieren evitar fotos para reducir sesgos de género o etnia.",
  },
  {
    text: "Debes presentarte de manera clara y concisa. Decir qué puedes aportar a la empresa, lo que te mueve en tu carrera profesional. La clave es ser breve, pero impactante, dejando claro tu valor en poco espacio.",
  },
  {
    text: "Puedes omitir trabajos de corta duración que no fueron relevantes. Evita incluir experiencias que no estén relacionadas con el rol que buscas, a menos que hayas adquirido habilidades aplicables.",
  },
  {
    text: "Este enfoque garantiza que tu formación académica resalte de manera efectiva, demostrando tu preparación y adecuación para el puesto en cuestión.",
  },
  {
    text: "Inspírate en la descripción del trabajo que estás solicitando. Las habilidades que buscan generalmente están ahí. Elige las que mejor te definan y añádelas aquí.",
  },
  {
    text: "No es necesario indicar niveles a menos que tengas una certificación que desees destacar.",
  },
  { text: "" },
]);

const skills = ref([
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Vue.js", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Python", level: 70 },
]);

const langs = ref([{ name: "Español" }, { name: "Inglés" }]);

const experience = ref([
  {
    title: "Senior Web Developer",
    company: "TechCorp Inc.",
    period: "2019 - Presente",
    responsibilities: [
      "Lideré un equipo de 5 desarrolladores en la creación de aplicaciones web responsivas",
      "Implementé nuevas funciones que resultaron en un aumento del 30 % en la participación de los usuarios",
      "Optimicé el rendimiento del sitio web, mejorando los tiempos de carga en un 40 %",
    ],
  },
]);

const education = ref([
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    year: "2016",
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    school: "CodeAcademy",
    year: "2015",
  },
]);

useHead({
  title: "✨ Aplica a empresas tecnológicas con esta plantilla de CV ✨",
  meta: [
    {
      name: "description",
      content:
        "👋 ¡Hola! Creé esta plantilla a partir de mi propio currículum. Al principio, no obtenía resultados al enviarlo a empresas tecnológicas importantes. Luego de recibir retroalimentación de personas con experiencia en grandes compañías, logré mejorarlo enfocándome en el impacto que generé en cada experiencia laboral. Este enfoque no solo ayudó a que aceptaran mi CV, sino también a mejorar mi desempeño en las entrevistas.",
    },
    {
      name: "keywords",
      content:
        "CV, currículum, platilla, tecnología, tech, trabajo, empleo, empresas",
    },
    {
      name: "author",
      content: "elizabthpazp",
    },
    {
      property: "og:title",
      content: "✨ Aplica a empresas tecnológicas con esta plantilla de CV ✨",
    },
    {
      property: "og:description",
      content:
        "👋 ¡Hola! Creé esta plantilla a partir de mi propio currículum. Al principio, no obtenía resultados al enviarlo a empresas tecnológicas importantes. Luego de recibir retroalimentación de personas con experiencia en grandes compañías, logré mejorarlo enfocándome en el impacto que generé en cada experiencia laboral. Este enfoque no solo ayudó a que aceptaran mi CV, sino también a mejorar mi desempeño en las entrevistas.",
    },
    {
      property: "og:image",
      content: "/assets/img/favicon.ico",
    },
    {
      property: "og:url",
      content: "https://elizabthpazp.github.io/",
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
      "data-color": "rgb(124 58 237)",
      "data-position": "Right",
      "data-x_margin": "19",
      "data-y_margin": "15",
      defer: true,
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
</style>
