import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-gray-400 text-center p-4">
        © 2025 Syed Minoar Hasan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
