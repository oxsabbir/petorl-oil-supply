import "./App.css";
import Hero from "./components/section/hero";
import Supply from "./components/section/Supply";
import Services from "./components/section/Services";
import Header from "./components/section/Header";
import Nav from "./components/section/Nav";
import About from "./components/section/About";
import Maps from "./components/section/Maps";
import Footer from "./components/section/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Hero />
        <Supply />
        <Services />
        <About />
        <Maps />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
