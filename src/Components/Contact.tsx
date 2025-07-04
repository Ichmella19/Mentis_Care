import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

type ContactFormProps = {
  theme?: "light" | "dark";
};

const ContactForm: React.FC<ContactFormProps> = ({ theme = "light" }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const textColor = theme === "light" ? "text-black" : "text-white";
  const bgColor = theme === "light" ? "bg-white" : "bg-black";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";

  return (
    <div className={`flex flex-col ${bgColor}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* ✅ Message d'alerte */}
      <div className="fixed top-[80px] left-1/2 z-50 -translate-x-1/2 w-[90%] max-w-[400px] flex flex-col">
        {errorMessage && (
          <div className="text-sm rounded shadow text-white bg-red-700 my-2 font-bold text-center p-4">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="text-sm rounded shadow text-white bg-green-700 my-2 font-bold text-center p-4">
            {successMessage}
          </div>
        )}
      </div>

      {/* ✅ Section Hero */}
    
          <div className="bg-[#2E86AB] text-white py-[120px] px-6 md:px-24 text-center">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-extrabold mb-6">Contactez-nous</motion.h1>
        <p className="text-xl max-w-3xl mx-auto">     MentisCare est à votre écoute. Écrivez-nous ou consultez nos informations pour nous joindre facilement.</p>
      </div>
   

      {/* ✅ Section principale */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ✅ Formulaire */}
          <div className={`rounded-lg shadow-md p-6 ${cardBg}`}>
            <h2 className={`text-2xl font-bold mb-2 ${textColor}`}>Envoyez-nous un message</h2>
            <p className="text-gray-500 text-sm mb-6">Nous reviendrons vers vous rapidement.</p>
            <Formik
              initialValues={{
                prenoms: "",
                email: "",
                sujet: "",
                message: "",
              }}
              validationSchema={Yup.object({
                prenoms: Yup.string().required("Ce champ est requis"),
                email: Yup.string().email("Email invalide").required("Ce champ est requis"),
                sujet: Yup.string().required("Sujet requis"),
                message: Yup.string().required("Veuillez écrire un message"),
              })}
              onSubmit={(values, { resetForm }) => {
                setSuccessMessage("Message envoyé avec succès !");
                setErrorMessage("");
                resetForm();
              }}
            >
              <Form className="space-y-4">
                {/* Champs */}
                <div>
                  <label className={`font-semibold block ${textColor}`}>Noms et Prénoms *</label>
                  <Field name="prenoms" type="text" className={`w-full mt-1 p-2 rounded border ${borderColor} ${textColor} ${cardBg}`} />
                  <ErrorMessage name="prenoms" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className={`font-semibold block ${textColor}`}>Email *</label>
                  <Field name="email" type="email" className={`w-full mt-1 p-2 rounded border ${borderColor} ${textColor} ${cardBg}`} />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className={`font-semibold block ${textColor}`}>Sujet *</label>
                  <Field name="sujet" type="text" className={`w-full mt-1 p-2 rounded border ${borderColor} ${textColor} ${cardBg}`} />
                  <ErrorMessage name="sujet" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className={`font-semibold block ${textColor}`}>Message *</label>
                  <Field as="textarea" name="message" rows={5} className={`w-full mt-1 p-2 rounded border ${borderColor} ${textColor} ${cardBg} resize-none`} />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button type="submit" className="bg-[#08A3DC] hover:bg-[#014AA9] text-white font-bold py-2 px-6 rounded-full transition duration-300">
                  Envoyer le message
                </button>
              </Form>
            </Formik>
          </div>

          {/* ✅ Informations de contact */}
          <div className="space-y-8">
            <div className={`rounded-lg shadow-md p-6 ${cardBg}`}>
              <h3 className={`text-xl font-bold mb-2 ${textColor}`}>Nos coordonnées</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#08A3DC]" />
                  <div>
                    <strong className={`${textColor}`}>Adresse</strong>
                    <p className="text-white dark:text-black">Abomey-Calavi, Kpota</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-[#08A3DC]" />
                  <div>
                    <strong className={`${textColor}`}>Email</strong>
                    <p className="text-white dark:text-black">contact@mentiscare.tech</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-[#08A3DC]" />
                  <div>
                    <strong className={`${textColor}`}>Horaires</strong>
                    <p className="text-white dark:text-black">Lun - Sam : 8h - 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`rounded-lg shadow-md p-6 ${cardBg}`}>
              <h3 className={`text-xl font-bold mb-2 ${textColor}`}>Support client</h3>
              <p className="text-white dark:text-black mb-2">Notre équipe est disponible pour répondre à vos préoccupations.</p>
              <ul className="text-sm space-y-1 text-white dark:text-black">
                <li><strong>Temps de réponse :</strong> 2–4 heures</li>
                <li><strong>Support téléphone :</strong> Lun–Sam 8h–18h</li>
                <li><strong>Support email :</strong> 24h/24</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Section FAQ */}
      <section className={`py-16 text-center ${bgColor}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>Vous avez une question ?</h2>
          <p className="text-white dark:text-black mb-6">
            Consultez notre FAQ pour obtenir des réponses rapides à vos questions fréquentes.
          </p>
          <Link to="/faq">
            <button className="border border-[#08A3DC] text-[#08A3DC] hover:bg-[#08A3DC] hover:text-white px-6 py-2 rounded-full transition duration-300">
              Consulter la FAQ
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
