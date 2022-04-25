import Navbar from "./components/Navbar";
import {Banner} from "./components/Banner"
import About from "./components/About";
import Service from "./components/Service";
import {Contact} from "./components/Contact"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
