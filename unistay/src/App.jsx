import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import PopularHostels from "./components/PopularHostels";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>

      <Navbar />

      {/* Home Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Features */}
      <WhyChoose />

      {/* Popular Hostels */}
      <PopularHostels />

      {/* About */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </>
  );
}

export default App;