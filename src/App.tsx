import React from 'react';
import Clients from './Components/Clients';
import Compaines from './Components/Compaines';
import CuttingEdge from './Components/CuttingEdge';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Launch from './Components/Launch';
import Hire from './Components/Mentor/Hire';
import Navbar from './Components/Navbar';
import Princing from './Components/Princing';



function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Compaines />
      <Hire />
      <CuttingEdge />
      <Clients />
      <Launch />
      <Princing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
