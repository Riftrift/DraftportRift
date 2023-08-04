import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/project";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
