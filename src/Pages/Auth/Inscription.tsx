import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Image from '../../assets/images/Image5.webp';

// Définir les types du formulaire
interface FormValues {
  name: string;
  email: string;
  password: string;
  
}

interface ThemeProps {
  theme: "light" | "dark";
}const CreateAccount: React.FC<ThemeProps> = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Ce champ est requis'),
    email: Yup.string().email('Email invalide').required('Ce champ est requis'),
    password: Yup.string().min(6, 'Minimum 6 caractères').required('Ce champ est requis'),
  });

  const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    // console.log('Données soumises :', values);
    // alert('Inscription réussie !');
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen" style={{ fontFamily: 'Winky Sans, sans-serif' }}>
      {/* Partie gauche avec image */}
      <div
        className="w-full lg:w-1/2 relative bg-cover bg-center h-[300px] lg:h-auto"
        style={{ backgroundImage: `url(${Image})` }}
      >
      

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-60 backdrop-blur-sm rounded-[20px] p-5 shadow-xl border border-white border-opacity-20 w-[90%] max-w-[500px] h-[200px] lg:w-[600px] lg:h-[550px] flex flex-col justify-center items-center">
          <h1 className="text-[40px] lg:text-[80px] drop-shadow-md text-center">
            <span className="text-[#3252DF]">Mentis</span>
            <span className="text-[#152C5B]">Care.</span>
          </h1>
        </div>
      </div>

      {/* Partie droite avec formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 md:py-0 py-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Faire un don</h2>

          <Formik<FormValues>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-4">
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Nom
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Entrez votre nom"
                    className={`w-full px-3 py-2 border rounded ${
                      errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="nom@exemple.com"
                    className={`w-full px-3 py-2 border rounded ${
                      errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Mot de passe */}
                <div>
                  <label htmlFor="password" className="block mb-1">
                    Mot de passe
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="6+ caractères"
                    className={`w-full px-3 py-2 border rounded ${
                      errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Conditions */}
                <div className="text-sm text-gray-500">
                  En vous inscrivant, vous acceptez les{' '}
                  <span className="text-blue-600 underline cursor-pointer">termes et conditions</span>.
                </div>

                {/* Bouton de soumission */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                >
                  S'inscrire
                </button>

                {/* Lien Connexion */}
                <div className="text-sm text-center mt-4">
                  Déjà inscrit ?{' '}
                  <a href="/Connexion" className="text-blue-600 underline">
                    Se connecter
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
