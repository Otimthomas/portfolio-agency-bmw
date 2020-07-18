import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import About from './Components/About';
import Clients from './Components/Clients';
import Footer from './Components/Footer';

function App() {
  return (
   <>
      <Header />
      <Gallery />
      <About />
      <Clients />
      <Footer />
   </>
  );
}

export default App;
