import Navbar from "./components/Navbar";
import {Banner} from "./components/Banner"
import About from "./components/About";
import Service from "./components/Service";
import {Contact} from "./components/Contact"
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Contact />
      <Footer2 />
    </div>
  );
}

export default App;
