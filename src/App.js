import logo from './logo.svg';
import './App.css';
import React from 'react';

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
          <div className="social-links">
            {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
            <a href="https://www.facebook.com/tali.tali.5682"  target='_blank' className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/talifhanitshif/"  target='_blank' className="instagram"><i className="bx bxl-instagram"></i></a>
            {/* <a href="#" className="google-plus"  target='_blank' ><i className="bx bxl-skype"></i></a> */}
            <a href="https://www.linkedin.com/in/talifhani-tshifura-6b93681b1"  target='_blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </section>

      <main id="main">


        <section id="about" className="about">
          <div className="container" data-aos="fade-up">



            <div className="row">
              <div className="col-lg-4">
                <img src="assets/img/tali.jpeg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <div className="section-title">
                  <h2>About</h2>
                  <p>

                  </p>
                </div>
                <p className="fst-italic">
                  I recently graduated from Venda University with a Bachelor of Science in Computer Science and am
                  about to complete my Honours degree in Computer Science. I also attended GirlCode bootcamp
                  from June 2021 to September 2021, which improved not only my technical skills but also my
                  problem-solving and creative skills. I also took part in an 8-week mentorship program with Equals
                  Tech4Girls.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>02 Dec 1999</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+27 79 083 6007</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Randburg</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bsc</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>tshifura887@gmail.com</span></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        <section id="sovtec" className="skills section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Why Sovtec ?</h2>
              <p>
                When I was looking for opportunities that would allow me to use my computer science knowledge, I
                came across your company and began investigating it. I respect the work you do and the fact that
                you are a leader in this field. I've read a lot of reviews about your company, and it appears that your
                employees are enthusiastic about the work environment, the freedom to try new things, and the
                collaborative and diversified work structure your company supports. I'd be honoured to join your
                team and contribute to your further success.
              </p>
            </div>



          </div>
        </section>


      </main>


      <footer id="footer">
        <div className="container">
          {/* <h3>Tshifura Talifhani</h3> */}
          <div className="social-links">
            {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
            <a href="https://www.facebook.com/tali.tali.5682" target='_blank' className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/talifhanitshif/"  target='_blank' className="instagram"><i className="bx bxl-instagram"></i></a>
            {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
            <a href="https://www.linkedin.com/in/talifhani-tshifura-6b93681b1"  target='_blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>Talifhani Profile</span></strong>. All Rights Reserved
          </div>

        </div>
      </footer>

      {/* <div id="preloader"></div> */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </React.Fragment>
  );
}

export default App;
