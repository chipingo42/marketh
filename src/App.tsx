import React from 'react';
import Clients from './Components/Clients';
import Compaines from './Components/Compaines';
import CuttingEdge from './Components/CuttingEdge';
import Hero from './Components/Hero';
import Hire from './Components/Mentor/Hire';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Compaines />
      <Hire />
      <CuttingEdge />
      <Clients />
    </div>
  );
}

export default App;
