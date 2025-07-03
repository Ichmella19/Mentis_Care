import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Components/Home";
import Fonctions from "./Components/Fonctions";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Layout from "./Layouts/Layout";
import Connexion from "./Pages/Auth/Connexion";
import Inscription from "./Pages/Auth/Inscription";
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
   
      <Routes>
        <Route
          path="/"
          element={<Layout theme={theme} setTheme={setTheme} />}
        >
          <Route index element={<Home theme={theme} />} />
             <Route path="/aboutUs" element={<AboutUs theme={theme} />} />
                 <Route path="/fonctions" element={<Fonctions theme={theme} />} />
                     <Route path="/contact" element={<Contact theme={theme} />} />
                    
        </Route>
        <Route path="/connexion" element={<Connexion theme={theme} />} />
          <Route path="/inscription" element={<Inscription theme={theme} />} />
      </Routes>
    </Router>
  );
};

export default App;
