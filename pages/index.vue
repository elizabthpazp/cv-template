<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-mono"> 
    <div class="max-w-5xl text-center mx-auto">
     <NuxtLink to="https://github.com/elizabthpazp/cv-template"><GithubIcon class="w-5 h-5 mr-2 text-end" /></NuxtLink>
     <p class="text-center mb-4 font-semibold text-xl">
        ✨ Aplica a empresas tecnológicas con esta plantilla de CV ✨
     </p>
     
     <p class="text-center mb-8 font-normal text-lg">
        👋 ¡Hola!
        Creé esta plantilla basada en mi propio currículum. Antes, no obtenía resultados al enviarlo a grandes empresas tech. Tras pedir retroalimentación a personas con experiencia en compañías como Google, Amazon y Microsoft, logré mejorarlo enfocándome en el impacto empresarial de mis experiencias. No solo me ayudó a que aceptaran mi CV, sino también a mejorar en las entrevistas.
     </p>
    </div>
    <div
      class="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden"
    >
      <div class="flex flex-col md:flex-row"> 
        <div class="bg-gray-900 text-white p-8 md:w-1/3">
          <div class="text-center mb-8">
            <img
              src="/assets/img/profile.jpg"
              alt="Profile Picture"
              class="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-gray-700"
            />
            <h1 class="text-2xl font-bold">Nombre completo</h1>
            <p class="text-gray-400">Rol al que aplicas</p>
          </div>
          <div class="space-y-4">
            <div class="flex items-center">
              <MapPinIcon class="w-5 h-5 mr-2" />
              <span>País, ciudad</span>
            </div>
            <div class="flex items-center">
              <MailIcon class="w-5 h-5 mr-2" />
              <span>Correo electrónico</span>
            </div>
            <div class="flex items-center">
              <PhoneIcon class="w-5 h-5 mr-2" />
              <span>Numero de teléfono</span>
            </div>
            <div class="flex items-center">
              <GlobeIcon class="w-5 h-5 mr-2" />
              <span>Sitio web</span>
            </div>
          </div>
          <div class="mt-8">
            <h2 class="text-xl font-semibold mb-4">Skills</h2>
            <div class="space-y-2">
              <div
                v-for="skill in skills"
                :key="skill.name"
                class="flex items-center"
              >
                <div class="w-full bg-gray-700 rounded-full h-2 mr-2">
                  <div
                    class="bg-blue-500 h-2 rounded-full"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
                <span class="text-sm">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
 
        <div class="p-8 md:w-2/3">
          <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Professional Summary</h2>
            <p class="text-gray-700">
              Passionate and creative web developer with 5+ years of experience
              in building responsive and user-friendly websites. Proficient in
              modern front-end technologies and frameworks.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Work Experience</h2>
            <div v-for="job in experience" :key="job.company" class="mb-4">
              <h3 class="text-xl font-semibold">{{ job.title }}</h3>
              <p class="text-gray-600">{{ job.company }} | {{ job.period }}</p>
              <ul class="list-disc list-inside mt-2 text-gray-700">
                <li
                  v-for="responsibility in job.responsibilities"
                  :key="responsibility"
                >
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-4">Education</h2>
            <div v-for="edu in education" :key="edu.degree" class="mb-4">
              <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
              <p class="text-gray-600">{{ edu.school }} | {{ edu.year }}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPinIcon, MailIcon, PhoneIcon, GlobeIcon, GithubIcon } from "lucide-vue-next";

const skills = ref([
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Vue.js", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
]);

const experience = ref([
  {
    title: "Senior Web Developer",
    company: "TechCorp Inc.",
    period: "2019 - Present",
    responsibilities: [
      "Lead a team of 5 developers in creating responsive web applications",
      "Implemented new features resulting in a 30% increase in user engagement",
      "Optimized website performance, improving load times by 40%",
    ],
  },
  {
    title: "Web Developer",
    company: "WebSolutions LLC",
    period: "2016 - 2019",
    responsibilities: [
      "Developed and maintained client websites using Vue.js and Laravel",
      "Collaborated with designers to implement pixel-perfect UI/UX",
      "Integrated third-party APIs to enhance website functionality",
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
</script>
 