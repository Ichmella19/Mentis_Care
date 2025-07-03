import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
type June = {
  title: string;
  description: string;
};
type AboutUsProps = {
  theme?: 'light' | 'dark';
};

const June = [
  {
    title: "Outils de suivi médical",
    description:
      "Une approche numérique pour un accompagnement médical personnalisé.",
  },
  {
    title: "Espace d'échange",
    description:
      "Favoriser l'inclusion et l'écoute active via des espaces sécurisés.",
  },
  {
    title: "Sensibilisation et éducation",
    description:
      "Informer pour déstigmatiser et construire une société plus compréhensive.",
  },
  {
    title: "Orientation vers les structures spécialisées ",
    description:
      "Diriger les patients vers les centres de soins les plus adaptés.",
  },
];
const AboutUs: React.FC<AboutUsProps> = ({ theme = "light" }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const textColor = theme === "light" ? "text-gray-700" : "text-gray-200";
  const softTextColor = theme === "light" ? "text-gray-600" : "text-gray-400";
  const bgGradient = theme === "light" ? "from-blue-50 to-white" : "from-gray-800 to-gray-900";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-600";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const titleColor = theme === "light" ? "text-blue-800" : "text-blue-400";

  return (
    <section
      className={`w-full bg-gradient-to-b ${bgGradient} py-20 overflow-hidden md:px-28 text-center transition-colors duration-300`}
      style={{ fontFamily: "Winky Sans, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto py-[35px]">
        <h2 className={`text-4xl md:text-4xl font-semibold ${titleColor} mb-6`}>
          Nous sommes
        </h2>
        <h2 className={`relative inline-block text-4xl md:text-7xl font-extrabold ${titleColor} mb-6`}>
          <span className="relative z-10">MentisCare</span>
        </h2>
        <p className={`text-lg md:text-xl font-medium ${textColor} mb-8 leading-relaxed`}>
          "Une initiative humaine et technologique pour redonner de l'espoir à ceux que la société oublie trop souvent."
        </p>
        <p className={`${softTextColor} text-lg md:text-xl leading-relaxed mb-6`}>
          💡 <strong>Notre réponse ?</strong> Une plateforme numérique conçue pour <strong>digitaliser les processus du centre</strong>,
          <strong> assurer un suivi médical à distance</strong>, <strong> sensibiliser le public</strong>, et <strong> lutter contre la stigmatisation</strong>
          autour des troubles psychiques.
        </p>
      </div>

      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 border ${borderColor} rounded-xl p-[40px]`}>  
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className={`text-4xl md:text-6xl font-extrabold ${titleColor} relative inline-block after:block after:w-16 after:h-1 after:${titleColor} after:mt-2`}>
            Qui sommes-nous ?
          </h2>
        </div>

        <div className={`w-full md:w-1/2 ${textColor} text-lg md:text-xl leading-relaxed`}>
          <p className="mb-4">
            <strong className="text-blue-700">MentisCare</strong> est né d’un constat poignant : au Bénin, la santé mentale est encore largement négligée.
          </p>
          <p className="mb-4">
            Lors d’une immersion au <span className="font-semibold text-blue-700">Centre Psychiatrique Saint Camille de Tokan</span>,
            notre équipe a réalisé l'urgence d'agir.
          </p>
          <p className={`italic ${softTextColor} mt-6 text-base md:text-lg border-l-4 border-blue-700 pl-4`}>
            « Digitaliser la santé mentale au Bénin, c’est offrir un avenir plus digne, plus humain, et plus connecté. »
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="py-12 px-4 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-3xl md:text-5xl font-semibold ${titleColor}`}>NOS SERVICES</h2>
          <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-1 rounded-full text-sm">
            Voir tout
            <span className="bg-blue-600 text-white p-1 rounded-full">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {June.map((item, index) => (
            <div
              key={index}
              className={`border ${borderColor} ${cardBg} shadow-md p-6 rounded-lg flex flex-col items-start`}
            >
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className={`text-sm ${softTextColor} mb-4`}>{item.description}</p>
              <button className="mt-auto text-sm bg-blue-600 text-white px-4 py-2 rounded-full">
                Prendre RDV
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Identité */}
      <section id="identite" className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1" data-aos="fade-right">
            <img
              src="../src/assets/images/mentis.webp"
              alt="Identité MentisCare"
              className="rounded-2xl shadow-xl object-cover h-[400px] md:h-[600px] w-full md:w-[600px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6" data-aos="fade-left">
            <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}>Notre identité</h2>
            <p className={`${textColor} md:text-xl text-lg leading-relaxed`}>
              MentisCare, c’est une initiative humaine et sociale, pour briser le silence autour de la santé mentale au Bénin.
              Nous combinons technologie, compassion et engagement communautaire.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <div className={`border ${borderColor} rounded-2xl p-4`}>
                <h3 className="text-xl font-semibold text-blue-700 mb-1">1. Notre vision</h3>
                <p className={`${textColor} md:text-xl text-lg`}>
                  Offrir à chaque personne en détresse un accès digne, humain et durable à des soins adaptés.
                </p>
              </div>

              <div className={`border ${borderColor} rounded-2xl p-4`}>
                <h3 className="text-xl font-semibold text-blue-700 mb-1">2. Notre mission</h3>
                <p className={`${textColor} md:text-xl text-lg`}>
                  Développer une plateforme innovante pour faciliter le suivi et la prise en charge psychologique.
                </p>
              </div>

              <div className={`border ${borderColor} rounded-2xl p-4`}>
                <h3 className="text-xl font-semibold text-blue-700 mb-1">3. Pourquoi nous ?</h3>
                <p className={`${textColor} md:text-xl text-lg`}>
                  Parce que nous croyons qu’aucune vie ne mérite d’être oubliée, et que la technologie peut être un pont vers la dignité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
