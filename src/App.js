import Navbar from "./components/Navbar";
import {Banner} from "./components/Banner"
import About from "./components/About";
import Service from "./components/Service";
import {Contact} from "./components/Contact"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
