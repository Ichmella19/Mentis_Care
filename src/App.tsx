import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Components/Home";
import Fonctions from "./Components/Fonctions";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import PageLoader from "./Components/PageLoader";
import FaqSection from "./Components/FaqSection";
import Layout from "./Layouts/Layout";
import Connexion from "./Pages/Auth/Connexion";
import Donnation from "./Pages/Auth/Donnation";
import Scroll from "./Components/Scroll";

// Copie ce composant dans le même fichier ou dans un fichier séparé
const AppLoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const location = window.location.pathname;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <PageLoader />;
  }
  return <>{children}</>;
};

// Type pour le thème
type Theme = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
        <AppLoaderWrapper>
      <Scroll />
    
        <Routes>
          <Route
            path="/"
            element={<Layout theme={theme} setTheme={setTheme} />}
          >
            <Route index element={<Home theme={theme} />} />
            <Route path="/aboutUs" element={<AboutUs theme={theme} />} />
            <Route path="/fonctions" element={<Fonctions theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
               <Route path="/faq" element={<FaqSection  />} />
          </Route>
          <Route path="/connexion" element={<Connexion theme={theme} />} />
          <Route path="/donnation" element={<Donnation  />} />
          <Route path="/loader" element={<PageLoader />} />
        </Routes>
      </AppLoaderWrapper>
    </Router>
  );
};

export default App;