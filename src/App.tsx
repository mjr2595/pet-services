import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
