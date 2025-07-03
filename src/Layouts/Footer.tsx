import { Mail, Facebook, Linkedin, Instagram, Github, Send } from "lucide-react";

type FooterProps = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export default function Footer({ theme = "light" }: FooterProps) {
  return (
    <footer
      className={`py-12 text-xl md:text-lg transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-b from-blue-50 to-white text-black"
          : "bg-black text-white"
      }`}
      style={{ fontFamily: "Winky Sans, sans-serif" }}
    >
      <div className="max-w-8xl mx-auto px-[10%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* À propos de nous */}
        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4 relative w-fit cursor-pointer">
            À propos de nous
            <span className="absolute left-0 bottom-0 w-1/2 h-1 rounded-md bg-[#08A3DC]"></span>
          </h3>
          <h2 className="text-3xl font-bold text-[#08A3DC] mb-2">MentisCare</h2>
          <p className={`text-lg ${theme === "light" ? "text-black" : "text-white"}`}>
            Une plateforme numérique dédiée au bien-être mental, offrant un suivi et un accompagnement personnalisé.
          </p>
          <div className="flex gap-4 mt-4">
            {[Facebook, Linkedin, Instagram, Mail, Github].map((Icon, i) => (
              <a key={i} href="#" className={`hover:text-[#08A3DC] ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4 relative w-fit cursor-pointer">
            Liens rapides
            <span className="absolute left-0 bottom-0 w-1/2 h-1 rounded-md bg-[#08A3DC]"></span>
          </h3>
          <ul className={`${theme === "light" ? "text-black" : "text-white"} text-lg`}>
            {[
              { label: "Accueil", path: "/" },
              { label: "Fonctionnalités", path: "/fonctionnalites" },
              { label: "Contact", path: "/contact" },
              { label: "Réalisations", path: "/realisations" },
              { label: "À propos", path: "/about" },
            ].map(({ label, path }) => (
              <li key={label} className="mb-2">
                <a href={path} className="hover:text-blue-500">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Nos services */}
        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4 relative w-fit cursor-pointer">
            Nos services
            <span className="absolute left-0 bottom-0 w-1/2 h-1 rounded-md bg-[#08A3DC]"></span>
          </h3>
          <ul className={`${theme === "light" ? "text-black" : "text-white"} text-lg`}>
            {[
              { label: "Consultations en ligne", path: "/services#consultation" },
              { label: "Suivi personnalisé", path: "/services#suivi" },
              { label: "Espace d'échange", path: "/services#communauté" },
              { label: "Orientation vers des spécialistes", path: "/services#orientation" },
            ].map(({ label, path }) => (
              <li key={label} className="mb-2">
                <a href={path} className="hover:text-[#08A3DC]">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4 relative w-fit cursor-pointer">
            Newsletter
            <span className="absolute left-0 bottom-0 w-1/2 h-1 rounded-md bg-[#08A3DC]"></span>
          </h3>
          <p className={`mb-4 text-lg ${theme === "light" ? "text-black" : "text-white"}`}>
            Inscrivez-vous pour recevoir des conseils et actualités sur la santé mentale.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full p-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-[#08A3DC] hover:bg-[#08A3DC] px-4 rounded-r-md">
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="text-center mt-12">
        <p className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-sm`}>
      MentisCare. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
