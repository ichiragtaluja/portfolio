// // App.js
// import React from "react";
// import Navbar from "./components/Navbar";
// import AboutMe from "./components/AboutMe";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

// function App() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <main className="container mx-auto px-4 py-6">
//         <AboutMe id="about" />
//         <Projects id="projects" />
//         <Contact id="contact" />
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-6">
        <AboutMe id="about" darkMode={darkMode} />
        <Projects id="projects" darkMode={darkMode} />
        <Contact id="contact" darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
