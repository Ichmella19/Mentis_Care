import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

type HeaderProps = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};
const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isLight = theme === 'light';

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 py-4 shadow-md ${isLight ? "bg-white text-black" : "bg-black text-white"}`}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16">
        
        {/* Logo */}
        <img
          src="/src/assets/images/logo.png"
          alt="Logo"
          className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain"
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-8 font-medium text-[16px] items-center">
            {[
              { label: "Accueil", to: "/" },
              { label: "À Propos", to: "/aboutUs" },
              { label: "Fonctionnalités", to: "/fonctions" },
              { label: "Réalisations", to: "/portfolio" },
              { label: "Contact", to: "/contact" },
            ].map(({ label, to }) => (
              <li key={to} className="relative group">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `px-2 pb-1 ${isActive
                      ? "text-[#08A3DC] after:scale-x-100"
                      : "text-inherit after:scale-x-0"
                    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#08A3DC] after:transition-transform after:duration-300 group-hover:after:scale-x-100`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Boutons & thème (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Boutons Connexion / Dons */}
          <div className="flex rounded-lg overflow-hidden shadow border border-[#08A3DC]">
            <button
              className="bg-[#08A3DC] text-white px-6 py-2 hover:bg-[#0b91c6] transition duration-200"
              onClick={() => navigate("/connexion")}
            >
              Se Connecter
            </button>
            <button
              className="bg-[#014AA9] text-white px-6 py-2 hover:bg-[#013a87] transition duration-200"
              onClick={() => navigate("/inscription")}
            >
              Faire des dons
            </button>
          </div>

          {/* Thème */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {isLight
              ? <Moon className="text-gray-800" size={20} />
              : <Sun className="text-yellow-400" size={20} />}
          </button>
        </div>

        {/* Mobile - Buttons + menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="bg-[#08A3DC] text-white px-2 py-1 rounded-lg text-sm"
            onClick={() => navigate("/connexion")}
          >
            Connexion
          </button>
          <button
            className="bg-[#08A3DC] text-white px-2 py-1 rounded-lg text-sm"
            onClick={() => navigate("/inscription")}
          >
            Inscription
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle theme"
          >
            {isLight
              ? <Moon className="text-gray-800" size={20} />
              : <Sun className="text-yellow-400" size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className={`ml-2 ${isLight ? "text-black" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[64px] left-0 w-full z-40 px-6 py-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isLight ? "bg-gray-800" : "bg-gray-900"}`}
      >
        <ul className="flex flex-col font-medium text-[16px] gap-6">
          {[
            { label: "Accueil", to: "/" },
            { label: "À Propos", to: "/aboutUs" },
            { label: "Fonctionnalités", to: "/fonctions" },
            { label: "Réalisations", to: "/portfolio" },
            { label: "Contact", to: "/contact" },
          ].map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${
                    isActive ? "bg-[#08A3DC] text-white" : "text-white hover:bg-gray-700"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
