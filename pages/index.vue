<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-mono">
    <div class="max-w-5xl text-center mx-auto">
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
    <div
      class="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden"
    >
      <div class="flex flex-col md:flex-row">
        <div class="bg-gray-900 text-white p-8 md:w-1/3">
          <div class="text-center mb-8">
            <img
              src="/assets/img/profile2.jfif"
              alt="Profile Picture"
              class="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-gray-700"
            />
            <div class="flex text-center mb-3 items-center justify-center">
              (Foto opcional)
              <InfoTooltip
                class="ml-2 text-gray-500 hover:text-gray-700"
                :text="infoTexts[0].text"
              />
            </div>
            <h1
              class="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold"
            >
              Nombre completo
            </h1>
            <p class="text-gray-400">Rol al que aplicas</p>
          </div>
          <div class="space-y-4">
            <div class="flex items-center">
              <MapPinIcon class="w-5 h-5 mr-2" />
              <span>País, ciudad (opcional)</span>
            </div>
            <div class="flex items-center">
              <MailIcon class="w-5 h-5 mr-2" />
              <span>Correo electrónico</span>
            </div>
            <div class="flex items-center">
              <PhoneIcon class="w-5 h-5 mr-2" />
              <span>Teléfono (opcional)</span>
            </div>
            <div class="flex items-center">
              <GlobeIcon class="w-5 h-5 mr-2" />
              <span>Sitio web</span>
            </div>
          </div>
          <div class="mt-8">
            <div class="flex">
              <h2 class="text-xl font-semibold mb-4">Habilidades</h2>
              <InfoTooltip
                class="ml-2 text-gray-500 hover:text-gray-700"
                position="right"
                :text="infoTexts[4].text"
                style="margin-top: 7px"
              />
            </div>
            <p class="text-gray-600 text-md mb-4">
              Destaca las habilidades que consideras más relevantes para el
              puesto que buscas. Las palabras clave son importantes, ya que
              muchas empresas usan software automatizado para filtrar CVs.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="skill in skills"
                :key="skill.name"
                class="flex items-center col-auto"
              >
                <div class="text-blue-500 mr-2">◉</div>
                <span class="text-sm">{{ skill.name }}</span>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <div class="flex">
              <h2 class="text-xl font-semibold mb-4">Idiomas</h2>
              <InfoTooltip
                class="ml-2 text-gray-500 hover:text-gray-700"
                position="right"
                :text="infoTexts[5].text"
                style="margin-top: 7px"
              />
            </div>
            <p class="text-gray-600 text-md mb-4">
              Enumera los idiomas que hablas.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="lang in langs"
                :key="lang.name"
                class="flex items-center col-auto"
              >
                <div class="text-blue-500 mr-2">◉</div>
                <span class="text-sm">{{ lang.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-8 md:w-2/3">
          <section class="mb-8">
            <div class="flex">
              <h2
                class="font-bold mb-4 text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"
              >
                Resumen
              </h2>
              <InfoTooltip
                class="ml-2 text-gray-700 hover:text-gray-400 mt-mobile-cv"
                position="right"
                :text="infoTexts[1].text"
              />
            </div>
            <p class="text-gray-700">
              Escribe un párrafo breve (3-4 líneas máximo) explicando quién
              eres, cuántos años de experiencia tienes y lo que puedes aportar a
              la empresa a la que aplicas. Utiliza este espacio para resaltar
              tus valores, principios, logros y motivaciones. Mantén la
              brevedad, pero sé impactante.
            </p>
          </section>

          <section class="mb-8">
            <div class="flex items-center">
              <h2 class="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold mb-4">
                Experiencia laboral más reciente
                <InfoTooltip
                  class="ml-2 text-gray-700 hover:text-gray-400 hidden sm:inline"
                  position="bottom"
                  :text="infoTexts[2].text"
                  style="margin-top: 0; display: inline-block"
                />
              </h2>
            </div>

            <p class="text-md text-gray-700 mb-4">
              Añade tu experiencia más reciente y relevante (menos de 10 años).
              Incluye tu rol más reciente en la empresa, destacando si recibiste
              alguna promoción. Especifica la duración e industria o tipo de
              empresa. Describe tus responsabilidades, enfocándote en resultados
              clave y procesos diferenciadores, y resalta el impacto que
              generaste en el negocio.
            </p>
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
            <div class="flex">
              <h2
                class="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold mb-4"
              >
                Educación
              </h2>
              <InfoTooltip
                class="ml-2 text-gray-700 hover:text-gray-400 mt-mobile-cv"
                position="right"
                :text="infoTexts[3].text"
              />
            </div>
            <p class="text-gray-700 text-md mb-4">
              Añade solo títulos académicos o estudios relevantes para el puesto
              (Grados universitarios, cursos especializados o bootcamps). Un
              curso corto online puede no ser tan relevante a menos que esté
              directamente relacionado con el trabajo que buscas.
            </p>
            <div v-for="edu in education" :key="edu.degree" class="mb-4">
              <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
              <p class="text-gray-600">{{ edu.school }} | {{ edu.year }}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import {
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  GlobeIcon,
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
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7738434269106493",
      async=true,
      crossorigin="anonymous" 
    }
  ],
});
</script>

<style>
.mt-mobile-cv {
  margin-top: 7px;
}
</style>
