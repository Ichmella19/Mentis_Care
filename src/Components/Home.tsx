import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaHeartbeat, FaUsers, FaLightbulb, FaHospital } from "react-icons/fa";

type HeroSectionProps = {
  theme?: "light" | "dark";
};

export default function Fonctionnalites({ theme = "light" }: HeroSectionProps) {
    const navigate = useNavigate();
    
    const services = [
        {
            icon: <FaUserMd className="text-blue-600 text-5xl" />,
            title: "Consultations en ligne",
            description: "Grâce à MentisCare, nous avons pu suivre ma sœur pendant sa période difficile, et obtenir des conseils de spécialistes à distance. Une solution indispensable pour les familles comme la nôtre.",
        },
        {
            icon: <FaHeartbeat className="text-red-500 text-5xl" />,
            title: "Outils de suivi mental",
            description: "Grâce à MentisCare, nous avons pu suivre ma sœur pendant sa période difficile, et obtenir des conseils de spécialistes à distance. Une solution indispensable pour les familles comme la nôtre.",
        },
        {
            icon: <FaUsers className="text-green-500 text-5xl" />,
            title: "Espace d’échange",
            description: "MentisCare a changé notre quotidien. Le suivi médical à distance a permis à mon fils de continuer son traitement tout en restant à la maison.",
        },
        {
            icon: <FaLightbulb className="text-yellow-500 text-5xl" />,
            title: "Sensibilisation et éducation",
            description: "MentisCare a changé notre quotidien. Le suivi médical à distance a permis à mon fils de continuer son traitement tout en restant à la maison.",
        },
        {
            icon: <FaHospital className="text-purple-500 text-5xl" />,
            title: "Orientation vers des structures spécialisées",
            description: "MentisCare a changé notre quotidien. Le suivi médical à distance a permis à mon fils de continuer son traitement tout en restant à la maison.",
        },
    ];
   
    return (
        <>
            <main
                className={`w-full h-full mt-[40px] min-h-screen overflow-hidden transition-colors duration-300 ${
                    theme === "light" 
                        ? "bg-gradient-to-b from-blue-50 to-white text-black" 
                        : "bg-gradient-to-b from-gray-900 to-black text-white"
                }`}
            >
                {/* Hero Section */}
                <section
                    className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
                    style={{
                        backgroundImage: "url('../src/assets/images/mentis.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay pour assombrir l'image et améliorer la lisibilité */}
                    <div className={`absolute inset-0 ${
                        theme === "light" ? "bg-black opacity-70" : "bg-black opacity-80"
                    }`}></div>

                    {/* Contenu en avant-plan */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative max-w-4xl text-white"
                    >
                        <h1
                            className="md:text-5xl text-4xl font-bold mb-4"
                            style={{ fontFamily: "Winky Sans, sans-serif" }}
                        >
                            Prenez soin du bien-être mental de vos proches avec{" "}
                            <span className="text-[#08A3DC]">MentisCare</span>
                        </h1>
                        <p
                            className="md:text-xl text-lg mb-6"
                            style={{ fontFamily: "Winky Sans, sans-serif" }}
                        >
                            Une plateforme numérique pour accompagner et suivre les personnes en
                            détresse mentale, en offrant des consultations, des outils de suivi
                            et un espace d’échange. 80% des personnes en détresse mentale issues
                            de milieux précaires n’ont pas accès à un suivi. MentisCare veut
                            changer cela.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                className={`px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity ${
                                    theme === "light" 
                                        ? "bg-[#08A3DC] text-white" 
                                        : "bg-[#08A3DC] text-white"
                                }`}
                                style={{ fontFamily: "Winky Sans, sans-serif" }}
                                onClick={() => navigate("/services")}
                            >
                                Découvrir nos services
                            </button>
                            <button
                                className={`px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity ${
                                    theme === "light" 
                                        ? "bg-white border border-[#08A3DC] text-[#08A3DC]" 
                                        : "bg-gray-800 border border-[#08A3DC] text-white"
                                }`}
                                style={{ fontFamily: "Winky Sans, sans-serif" }}
                                onClick={() => navigate("/contact")}
                            >
                                Besoin d’aide ? Contactez-nous
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Section Problématique séparée */}
                <section 
                    className={`py-16 px-6 transition-colors duration-300 ${
                        theme === "light" 
                            ? "bg-gradient-to-b from-blue-50 to-white text-black" 
                            : "bg-gradient-to-b from-gray-900 to-black text-white"
                    }`} 
                    style={{ fontFamily: "Winky Sans, sans-serif" }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            className="md:text-5xl text-4xl font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className={theme === "light" ? "text-[#003A44]" : "text-blue-300"}>
                                Pourquoi cette plateforme ?
                            </span>
                        </motion.h2>
                        <motion.p
                            className="md:text-xl text-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <span className={theme === "light" ? "text-black" : "text-white"}>
                                Au Bénin, de nombreuses familles issues de milieux défavorisés n'ont
                                pas les ressources nécessaires pour assurer un suivi médical et
                                psychologique à leurs proches en détresse mentale. Cette plateforme
                                vise à rendre l’accompagnement accessible à tous, en offrant des
                                outils de suivi, des consultations en ligne et un espace d’échange
                                sécurisé.
                            </span>
                        </motion.p>
                    </div>
                </section>
                
                {/* Section Témoignages & Impacts */}
                <section 
                    className={`py-16 px-6 text-center transition-colors duration-300 ${
                        theme === "light" 
                               ? "bg-gradient-to-b from-blue-50 to-white text-black"
          : "bg-black text-white"
                    }`}
                >
                    <div className="max-w-5xl mx-auto">
                        <h2
                            className="md:text-5xl text-4xl font-bold mb-6"
                            style={{ fontFamily: "Winky Sans, sans-serif" }}
                        >
                            <span className={theme === "light" ? "text-[#003A44]" : "text-blue-300"}>
                                Témoignages & Impacts
                            </span>
                        </h2>
                        <p
                            className="mb-12 md:text-xl text-lg"
                            style={{ fontFamily: "Winky Sans, sans-serif" }}
                        >
                            <span className={theme === "light" ? "text-black" : "text-white"}>
                                Découvrez les témoignages des familles que nous avons pu accompagner et soutenir.
                            </span>
                        </p>

                        {/* Grid des services */}
                        <motion.div
                            className="grid md:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="show"
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.2, duration: 1 },
                                },
                            }}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className={`p-10 rounded-2xl shadow-lg cursor-pointer text-center transition-colors duration-300 ${
                                        theme === "light" 
                                            ? "bg-white border border-gray-200" 
                                            : "bg-gray-800 border border-gray-700"
                                    }`}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        show: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.5, ease: "easeOut" },
                                        },
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 
                                        className={`text-xl font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}  
                                        style={{ fontFamily: "Winky Sans, sans-serif" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p 
                                        className={`text-lg ${theme === "light" ? "text-black" : "text-white"}`}  
                                        style={{ fontFamily: "Winky Sans, sans-serif" }}
                                    >
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}