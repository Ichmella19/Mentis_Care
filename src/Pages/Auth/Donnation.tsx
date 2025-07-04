import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "../../assets/images/Image5.webp";

interface DonationFormValues {
  amount: string;
  email: string;
  civility: string;
  firstname: string;
  lastname: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  paymentMethod: string;
}

const DonationPage: React.FC = () => {
  const initialValues: DonationFormValues = {
    amount: "80",
    email: "",
    civility: "",
    firstname: "",
    lastname: "",
    address: "",
    postalCode: "",
    city: "",
    country: "BÉNIN",
    phone: "",
    paymentMethod: "card",
  };

  const validationSchema = Yup.object({
    amount: Yup.string().required("Champ requis"),
    email: Yup.string().email("Email invalide").required("Champ requis"),
    civility: Yup.string().required("Champ requis"),
    firstname: Yup.string().required("Champ requis"),
    lastname: Yup.string().required("Champ requis"),
    address: Yup.string().required("Champ requis"),
    postalCode: Yup.string().required("Champ requis"),
    city: Yup.string().required("Champ requis"),
    phone: Yup.string().required("Champ requis"),
  });

  const handleSubmit = (values: DonationFormValues) => {
    console.log("Don envoyé :", values);
    alert("Merci pour votre don !");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: `url(${Image})`,
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl max-w-[1300px] mx-auto p-6 lg:flex gap-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="w-full flex flex-col lg:flex-row gap-6">
              {/* Bloc Don */}
              <div className="flex-1 space-y-4">
                <h2 className="text-lg font-bold text-[#003A44]">Mon don</h2>

                <div className="flex gap-2">
                  {["80", "130", "200"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className="border rounded px-3 py-2 text-[#003A44] hover:bg-[#08A3DC] hover:text-white transition"
                      onClick={() => {
                        const input = document.getElementById("amount") as HTMLInputElement;
                        if (input) input.value = val;
                      }}
                    >
                      {val} €
                    </button>
                  ))}
                </div>

                <Field
                  name="amount"
                  type="number"
                  id="amount"
                  className="w-full border rounded p-2"
                  placeholder="Montant libre €"
                />
                <ErrorMessage name="amount" component="div" className="text-red-500 text-sm" />

                <p className="text-sm text-white bg-[#08A3DC] p-2 rounded">
                  Votre don ne vous coûte réellement que <strong>20 €</strong> après réduction
                  fiscale (réduction de 60 € à hauteur de 20% du revenu imposable)
                </p>
              </div>

              {/* Bloc Coordonnées */}
              <div className="flex-1 space-y-4">
                <h2 className="text-lg font-bold text-[#003A44]">Mes coordonnées</h2>

                <Field
                  name="email"
                  type="email"
                  placeholder="Email *"
                  className="w-full border rounded p-2"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                <div className="flex gap-2">
                  <Field as="select" name="civility" className="w-1/2 border rounded p-2">
                    <option value="">Civilité *</option>
                    <option value="Mr">Mr</option>
                    <option value="Mme">Mme</option>
                  </Field>
                  <Field
                    name="firstname"
                    placeholder="Prénom *"
                    className="w-1/2 border rounded p-2"
                  />
                </div>

                <Field
                  name="lastname"
                  placeholder="Nom *"
                  className="w-full border rounded p-2"
                />
                <Field
                  name="address"
                  placeholder="Adresse *"
                  className="w-full border rounded p-2"
                />
                <Field
                  name="postalCode"
                  placeholder="Code postal *"
                  className="w-full border rounded p-2"
                />
                <Field name="city" placeholder="Ville *" className="w-full border rounded p-2" />
                <Field name="phone" placeholder="Téléphone *" className="w-full border rounded p-2" />
              </div>

              {/* Bloc Paiement */}
              <div className="flex-1 space-y-4">
                <h2 className="text-lg font-bold text-[#003A44]">Mon règlement</h2>

                <div className="flex justify-between gap-2 text-sm font-medium">
                  <label className="flex-1 text-center border rounded p-2 cursor-pointer">
                    <Field type="radio" name="paymentMethod" value="card" className="mr-2" />
                    Carte Bancaire
                  </label>
                  <label className="flex-1 text-center border rounded p-2 cursor-pointer">
                    <Field type="radio" name="paymentMethod" value="paypal" className="mr-2" />
                    PayPal
                  </label>
                  <label className="flex-1 text-center border rounded p-2 cursor-pointer">
                    <Field type="radio" name="paymentMethod" value="transfer" className="mr-2" />
                    Virement
                  </label>
                </div>

                <button type="submit" className="w-full bg-[#003A44] text-white rounded p-3 mt-4">
                  VALIDER
                </button>
                <p className="text-sm text-center text-[#003A44] underline">PAIEMENT SÉCURISÉ</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default DonationPage;
