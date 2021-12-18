// import logo from './logo.svg';
import "./App.css";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
// import { Navbar1 } from "./Components/Includes/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Service } from "./Components/Pages/Service";
import { Footer } from "./Components/Includes/Footer";
function App() {
  return (
    <div>
      
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>

      {/* <About />
      <Contact /> */}
    </div>
    // <Router>
    //   <Navbar />
    //   <div>
    //     <Routes>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/contact">
    //         <Contact />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
