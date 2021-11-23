import React from 'react'

const About = (props) =>{

    return (
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
    )
}

export default About