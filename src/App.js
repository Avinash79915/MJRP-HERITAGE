import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Admission from "./Pages/Admission";
import MandatoryDisclosure from "./Pages/MandatoryDisclosure";
import ScrollToTop from './Component/ScrollToTop'; 

function App() {
  
  return (
    <div>
   <Router>
   <ScrollToTop />

   <Navbar/>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/MandatoryDisclosure" element={<MandatoryDisclosure />} />
        </Routes>
        <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
