import React from 'react';

import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "Quels types d'accompagnements propose MentisCare ?",
    answer: "Nous proposons des accompagnements en ligne pour les populations vulnérables, y compris des sessions d'écoute, du soutien psychologique, et des programmes éducatifs en santé mentale."
  },
  {
    question: "Comment accéder à vos services ?",
    answer: "Vous pouvez accéder à nos services via notre plateforme en ligne ou en nous contactant directement via le formulaire de contact."
  },
  {
    question: "Proposez-vous des accompagnements gratuits ?",
    answer: "Oui, certains programmes sont subventionnés par des partenaires et offerts gratuitement à des publics ciblés."
  },
  {
    question: "Comment garantissez-vous la confidentialité ?",
    answer: "La protection de vos données est essentielle. Nos échanges sont sécurisés et vos informations ne sont jamais partagées sans votre consentement."
  },
  {
    question: "Comment puis-je m'impliquer ou soutenir MentisCare ?",
    answer: "Vous pouvez nous soutenir en devenant partenaire, en faisant un don ou en partageant notre mission autour de vous."
  },
  {
    question: "Offrez-vous des services aux entreprises ou ONG ?",
    answer: "Oui, nous collaborons avec des entreprises, ONG et institutions pour sensibiliser, former et accompagner leurs publics sur les enjeux de santé mentale."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);

  const renderFAQColumn = (columnFaqs: typeof faqs, startIndex: number) => (
    <div className="space-y-4">
      {columnFaqs.map((faq, index) => {
        const actualIndex = startIndex + index * 2;
        return (
          <div
            key={actualIndex}
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden"
            style={{ animationDelay: `${actualIndex * 0.1}s` }}
          >
            <button
              onClick={() => toggleFAQ(actualIndex)}
              className="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-white/5 transition-colors"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-[#08A3DC]">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                  openIndex === actualIndex ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === actualIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-5">
                <div className="w-full h-px bg-gradient-to-r from-[#08A3DC]/40 to-[#014AA9]/40 mb-3"></div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      ref={ref}
      className="py-16 bg-[#08A3DC] relative  overflow-hidden"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none ">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mt-[100px]">
            <div className="p-3 bg-white/10 rounded-2xl">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Trouvez des réponses claires sur notre mission, nos services et comment nous pouvons vous aider.
          </p>
        </div>

        {/* FAQ Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderFAQColumn(leftColumnFaqs, 0)}
          {renderFAQColumn(rightColumnFaqs, 1)}
        </div>

        {/* Call-to-action */}
        <div className="flex flex-col items-center justify-center mt-12 text-center">
          <p className="text-white/80 mb-3">Vous avez d’autres questions ?</p>
          <Link to="/contact">
            <button className="transition-all duration-300 transform hover:scale-105 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/20">
              Contactez-nous
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
