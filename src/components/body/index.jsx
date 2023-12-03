const Body = () => {
  return (
    <div className="page-content">
  <div className="container">
    <div className="cover shadow-lg bg-white">
      <div className="cover-bg p-3 p-lg-4 text-white">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="avatar hover-effect bg-white shadow-sm p-1"><img src="images/me.jpg" width={200} height={200} /></div>
          </div>
          <div className="col-lg-8 col-md-7 text-center text-md-start">
            <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay={0}>Joyce Harrison</h2>
            <p data-aos="fade-left" data-aos-delay={100}>Graphic Designer &amp; Web Developer</p>
            <div className="d-print-none" data-aos="fade-left" data-aos-delay={200}><a className="btn btn-light text-dark shadow-sm mt-1 me-1" href="right-resume.pdf" target="_blank">Download CV</a><a className="btn btn-success shadow-sm mt-1" href="#contact">Hire Me</a></div>
          </div>
        </div>
      </div>
      <div className="about-section pt-4 px-3 px-lg-4 mt-1">
        <div className="row">
          <div className="col-md-6">
            <h2 className="h3 mb-3">About Me</h2>
            <p>Hello! I’m Melia Giroth. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.</p>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row mt-2">
              <div className="col-sm-4">
                <div className="pb-1">Age</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">21</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Email</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">girothmelia@gmail.com</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Phone</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">+62815244443434</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Address</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">Manado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="d-print-none" />
      {/* <div className="skills-section px-3 px-lg-4">
        <h2 className="h3 mb-3">Professional Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-2"><span>HTML</span>
              <div className="progress my-1">
                <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay={100} data-aos-anchor=".skills-section" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="mb-2"><span>CSS</span>
              <div className="progress my-1">
                <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay={200} data-aos-anchor=".skills-section" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="mb-2"><span>JavaScript</span>
              <div className="progress my-1">
                <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay={300} data-aos-anchor=".skills-section" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-2"><span>Adobe Photoshop</span>
              <div className="progress my-1">
                <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={400} data-aos-anchor=".skills-section" style={{width: '80%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="mb-2"><span>Sketch</span>
              <div className="progress my-1">
                <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={500} data-aos-anchor=".skills-section" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="mb-2"><span>Adobe XD</span>
              <div className="progress my-1">
                <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={600} data-aos-anchor=".skills-section" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <hr className="d-print-none" />
      <div className="work-experience-section px-3 px-lg-4">
        <h2 className="h3 mb-4">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-card timeline-card-primary card shadow-sm">
            <div className="card-body">
              <div className="h5 mb-1">Frontend Developer <span className="text-muted h6"></span></div>
              <div className="text-muted text-small mb-2"></div>
              <div>Work closely with the team on using front-end frameworks such as React.js and Implement front-end development best practices to ensure high code quality and maintainability.</div>
            </div>
          </div>
          <div className="timeline-card timeline-card-primary card shadow-sm">
            <div className="card-body">
              <div className="h5 mb-1">Web Design <span className="text-muted h6"></span></div>
              <div className="text-muted text-small mb-2">August - November 2022</div>
              <div>In this course, I learned about web design principles, visual design techniques, and web programming. And I learned about page layout, color, typography, and the use of multimedia in web design. Apart from that, I also learned how to create a responsive (mobile-friendly) website and create a good user experience.</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="d-print-none" />
      <div className="page-break" />
      <div className="education-section px-3 px-lg-4 pb-4">
        <h2 className="h3 mb-4">Education</h2>
        <div className="timeline">
          <div className="timeline-card timeline-card-success card shadow-sm">
            <div className="card-body">
              <div className="h5 mb-1">SMKN 1 TUMPAAN</div>
              <div className="text-muted text-small mb-2">2011 - 2013</div>
              <div>I have skills in using a variety of graphic design, and video editing software, as well as experience in operating the required multimedia hardware.
              I have a great desire to continue learning and developing my multimedia skills, to always be at the forefront of innovation in this industrI.</div>
            </div>
          </div>
          <div className="timeline-card timeline-card-success card shadow-sm">
            <div className="card-body">
              <div className="h5 mb-1">Bachelor of Computer Science <span className="text-muted h6">Klabat University</span></div>
              <div className="text-muted text-small mb-2">2021 - Now</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <hr className="d-print-none" />
      <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
        <h2 className="h3 text mb-3">Contact</h2>
        <div className="row">
          <div className="col-md-7 d-print-none">
            <div className="my-2"><form action="https://formspree.io/your@email.com" method="POST">
                <div className="row">
                  <div className="col-6">
                    <input className="form-control" type="text" id="name" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-6">
                    <input className="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail" required />
                  </div>
                </div>
                <div className="form-group my-2">
                  <textarea className="form-control" style={{resize: 'none'}} id="message" name="message" rows={4} placeholder="Your Message" required defaultValue={""} />
                </div>
                <button className="btn btn-primary mt-2" type="submit">Send</button>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="mt-2">
              <h3 className="h6">Address</h3>
              <div className="pb-2 text-secondary">Manado</div>
              <h3 className="h6">Phone</h3>
              <div className="pb-2 text-secondary">+62815244443434</div>
              <h3 className="h6">Email</h3>
              <div className="pb-2 text-secondary">girothmelia@gmail.com</div>
            </div>
          </div>
          <div className="col d-none d-print-block">
            <div className="mt-2">
              <div>
                <div className="mb-2">
                  <div className="text-dark"><i className="fab fa-twitter mr-1" /><span>https://twitter.com/templateflip</span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-dark"><i className="fab fa-facebook mr-1" /><span>https://www.facebook.com/templateflip</span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-dark"><i className="fab fa-instagram mr-1" /><span>https://www.instagram.com/templateflip</span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-dark"><i className="fab fa-github mr-1" /><span>https://github.com/templateflip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
</div>

  )
}

export default Body