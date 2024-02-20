// src/App.js
import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyPhoto from './components/MyPhoto';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <div className="row">
          
          <div className="col-lg-4">
            <MyPhoto />
          </div>
          <div className="col-lg-8">
            <AboutMe />
            <MySkills />
            <Gallery />
          </div>
          
          <Contact />

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
