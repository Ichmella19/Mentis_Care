import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type ContactFormProps = {
  theme?: "light" | "dark";
};
const ContactForm: React.FC<ContactFormProps> = ({ theme = "light" }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const textColor = theme === "light" ? "text-gray-700" : "text-white";
  const lightText = theme === "light" ? "text-gray-500" : "text-white";
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const inputBg = theme === "light" ? "bg-gray-100" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";

  return (
    <>
      {/* Messages d'erreur / succès */}
      <div className="fixed top-[80px] left-1/2 z-[100] -translate-x-1/2 w-[80%] overflow-hidden max-w-[400px] flex flex-col" style={{ fontFamily: "Winky Sans, sans-serif" }}>
        {errorMessage && (
          <div className="text-sm w-full rounded-[5px] shadow-4xl text-white bg-red-700 my-[10px] font-bold text-center p-[20px]">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="text-sm w-full rounded-[5px] shadow-4xl text-white bg-green-700 my-[10px] font-bold text-center p-[20px]">
            {successMessage}
          </div>
        )}
      </div>

      {/* SECTION */}
      <section className={`mt-[70px] flex justify-center items-center pt-[20px] lg:pt-[50px] py-[50px] transition-colors duration-300 ${bgColor}`} style={{ fontFamily: "Winky Sans, sans-serif" }}>
        <div className="container lg:max-w-[1024px] px-[20px] w-full relative flex justify-center items-center flex-col">
          <div className="w-full relative flex flex-col-reverse gap-x-10 md:flex-row justify-center items-start">

            {/* Partie GAUCHE : Infos */}
            <div className="w-full relative py-[25px] flex flex-col">
              <h1 className={`font-bold text-xl ${textColor}/50 uppercase`}>NOUS SOMMES LÀ POUR VOUS</h1>
              <span className={`text-3xl my-4 w-[400px] ${textColor}`}>
                <span className="font-semibold">Discutons</span> de votre projet avec MentisCare
              </span>
              <p className={`text-sm my-2 ${lightText}`}>
                Vous travaillez sur une initiative en santé mentale ou souhaitez mettre en place un accompagnement digital pour des populations vulnérables ?
                Avec <span className="font-medium text-[#08A3DC]">MentisCare</span>, construisons ensemble des solutions humaines, accessibles et impactantes. Parlons-en.
              </p>

              {[
                {
                  label: "Email",
                  value: "contact@vaybe.tech",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#1D4ED8" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 4.99L4 6zm0 12H4V8l8 5l8-5z" /></svg>
                  )
                },
                {
                  label: "Téléphone",
                  value: "+229 01 41 78 77 00",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#1D4ED8" d="M7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" /></svg>
                  )
                },
                {
                  label: "Localisation",
                  value: "Abomey-calavi / Kanzounkpa",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#1D4ED8" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"/><circle cx="12" cy="9" r="2.5" fill="#1D4ED8" /></svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-x-5 mt-4">
                  {item.icon}
                  <div className="flex flex-col">
                    <p className={`text-sm ${textColor}/50`}>{item.label}</p>
                    <p className="text-[#08A3DC] text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partie DROITE : Formulaire avec Formik & Yup */}
            <div className={`w-full max-w-[800px] overflow-x-hidden py-[40px] pb-[10px] rounded-lg shadow-md px-[20px] ml-auto ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
              <Formik
                initialValues={{
                  prenoms: "",
                  email: "",
                  objet: "",
                  content: "",
                }}
                validationSchema={Yup.object({
                  prenoms: Yup.string().required("Ce champ est requis"),
                  email: Yup.string().email("Email invalide").required("Ce champ est requis"),
                  objet: Yup.string().required("Veuillez choisir un objet"),
                  content: Yup.string().required("Veuillez écrire un message"),
                })}
                onSubmit={(values, { resetForm }) => {
                  console.log("Formulaire soumis :", values);
                  setSuccessMessage("Message envoyé avec succès !");
                  setErrorMessage("");
                  resetForm();
                }}
              >
                <Form>
                  {/* Champ prénom */}
                  <div className="py-[10px]">
                    <label className={`text-lg font-bold ${textColor}`}>Noms et Prénoms <span className="text-red-700">*</span></label>
                    <Field
                      name="prenoms"
                      type="text"
                      className={`w-full border ${borderColor} ${inputBg} rounded-[5px] p-[10px] text-sm outline-none ${textColor}`}
                    />
                    <ErrorMessage name="prenoms" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Email */}
                  <div className="py-[10px]">
                    <label className={`text-lg font-bold ${textColor}`}>Email <span className="text-red-700">*</span></label>
                    <Field
                      name="email"
                      type="email"
                      className={`w-full border ${borderColor} ${inputBg} rounded-[5px] p-[10px] text-sm outline-none ${textColor}`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Objet */}
                  <div className="py-[10px]">
                    <label className={`text-lg font-bold ${textColor}`}>Objet <span className="text-red-700">*</span></label>
                    <Field
                      as="select"
                      name="objet"
                      className={`w-full border ${borderColor} ${inputBg} rounded-[5px] p-[10px] text-sm outline-none ${textColor}`}
                    >
                      <option value="">Choisir un objet</option>
                      <option value="demande">Demande d'information</option>
                      <option value="assistance">Assistance technique</option>
                      <option value="autre">Autre</option>
                    </Field>
                    <ErrorMessage name="objet" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Message */}
                  <div className="py-[10px]">
                    <label className={`text-lg font-bold ${textColor}`}>Message <span className="text-red-700">*</span></label>
                    <Field
                      as="textarea"
                      name="content"
                      className={`w-full border ${borderColor} ${inputBg} rounded-[5px] p-[10px] text-sm outline-none md:h-[150px] h-[100px] resize-none ${textColor}`}
                    />
                    <ErrorMessage name="content" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Bouton soumettre */}
                  <div className="py-[10px]">
                    <button
                      type="submit"
                      className="bg-[#014AA9] flex items-center gap-2 px-[5px] py-[2px] justify-center rounded-full cursor-pointer duration-300 hover:bg-blue-900 ease-in text-sm font-bold text-white"
                    >
                      <div className="bg-white rounded-full p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#014AA9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span>Soumettre</span>
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
