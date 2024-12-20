// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Programs from "./components/Programs";
// import GetInvolved from "./components/GetInvolved";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <About />
//       <Programs />
//       <GetInvolved />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css'; // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
