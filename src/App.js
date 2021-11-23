import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sovtec from './components/Sovtec';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';


function App() {
  return (
    <React.Fragment>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center">

        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#sovtec" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Why Sovtec ?</span></a></li>

          </ul>
        </nav>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Tshifura Talifhani</h1>
          <p>I'm a developer</p>
          <div className="social-links"><a href="https://www.facebook.com/tali.tali.5682"  target='_blank' className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/talifhanitshif/"  target='_blank' className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/in/talifhani-tshifura-6b93681b1"  target='_blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </section>

      <main id="main">


        <section id="about" className="about">
          <About />
        </section>


        <section id="sovtec" className="skills section-bg">
          <Sovtec />
        </section>


      </main>


     
      <Footer />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </React.Fragment>
  );
}

export default App;
