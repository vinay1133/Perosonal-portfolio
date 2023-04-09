import "./App.css";
import { Logo } from "./Components/Logo";
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Academics } from "./Components/Academics";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Academics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
