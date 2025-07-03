import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from '../../assets/images/Image5.webp';
import { useNavigate, Link } from 'react-router-dom';
interface ThemeProps {
  theme: "light" | "dark";
}

const Login: React.FC<ThemeProps> = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email invalide')
      .required('Ce champ est requis'),
    password: Yup.string()
      .min(6, 'Minimum 6 caractères')
      .required('Ce champ est requis'),
  });

  const onSubmit = (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log('Données du formulaire :', values);
    // Simulation de connexion
    setTimeout(() => {
      navigate('/SucessLogin');
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen" style={{ fontFamily: 'Winky Sans, sans-serif' }}>
      {/* Partie gauche avec image */}
      <div
        className="w-full lg:w-1/2 relative bg-cover bg-center h-[300px] lg:h-auto"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className="absolute md:top-[40%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-60 backdrop-blur-sm rounded-[20px] p-5 shadow-xl border border-white border-opacity-20 w-[90%] max-w-[600px] h-[200px] lg:w-[600px] lg:h-[400px] flex flex-col justify-center items-center">
          <h1 className="text-[40px] lg:text-[80px] drop-shadow-md text-center">
            <span className="text-[#08A3DC]">Mentis</span>
            <span className="text-[#152C5B]">Care.</span>
          </h1>
        </div>
      </div>

      {/* Partie droite avec formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Connexion</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-1">E-mail</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="nom@exemple.com"
                    className={`w-full px-3 py-2 border rounded ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Mot de passe */}
                <div>
                  <label htmlFor="password" className="block mb-1">Mot de passe</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="6+ caractères"
                    className={`w-full px-3 py-2 border rounded ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Bouton de soumission */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 bg-[#08A3DC] text-white rounded hover:bg-[#0b91c6] transition duration-200"
                >
                  {isSubmitting ? 'Connexion...' : 'Se connecter'}
                </button>

                {/* Lien vers inscription */}
                <div className="text-center text-sm mt-2 flex gap-x-2 justify-center">
                  <p className="font-bold text-sm">Vous n'avez pas de compte ?</p>
                  <Link to="/Inscription" className="underline text-[#08A3DC]">Créer un compte</Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
