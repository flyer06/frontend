import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;