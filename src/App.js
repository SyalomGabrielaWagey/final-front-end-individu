
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <body id="page-top">
  
    {/* Navigation*/}
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">Welcome to My Personal Website</a>
        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Masthead*/}
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* Masthead Avatar Image*/}
        <img className="masthead-avatar mb-5" src="assets/img/syalom.jpeg" alt="..." />
        {/* Masthead Heading*/}
        <h1 className="masthead-heading text-uppercase mb-0">Syalom Gabriela Wagey</h1>
        {/* Icon Divider*/}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon"><i className="fas fa-star" /></div>
          <div className="divider-custom-line" />
        </div>
        {/* Masthead Subheading*/}
        <p class="masthead-subheading font-weight-light mb-0">Junior Web Development</p>
      </div>
    </header>
    {/* Portfolio Section*/}
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* Portfolio Section Heading*/}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        {/* Icon Divider*/}
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon"><i className="fas fa-star" /></div>
          <div className="divider-custom-line" />
        </div>
        {/* Portfolio Grid Items*/}
        <div className="row justify-content-center">
          {/* Portfolio Item 1*/}
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/siples.png" alt="..." />
            </div>
          </div>
          {/* Portfolio Item 2*/}
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/hackerrank.jpeg" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About Section*/}
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        {/* About Section Heading*/}
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        {/* Icon Divider*/}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon"><i className="fas fa-star" /></div>
          <div className="divider-custom-line" />
        </div>
        {/* About Section Content*/}
        <div className="row">
          <div className="col-lg-4 ms-auto"><p className="lead">Saya adalah mahasiswa fakultas ilmu komputer, jurusan sistem informasi di Universitas Klabat. Saat ini memasuki tahun ke-3 masa perkuliahan.</p></div>
          <div className="col-lg-4 me-auto"><p className="lead">Tertarik untuk menjadi seorang technopreneur dan membangun bisnis digital yang bergerak di bidang kuliner. Sangat menyukai design khususnya untuk UI/UX.</p></div>
        </div>
      </div>
    </section>
    {/* Contact Section*/}
    <section className="page-section" id="contact">
      <div className="container">
        {/* Contact Section Heading*/}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        {/* Icon Divider*/}
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon"><i className="fas fa-star" /></div>
          <div className="divider-custom-line" />
        </div>
        {/* Contact Section Form*/}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            {/* * * * * * * * * * * * * * * **/}
            {/* * * SB Forms Contact Form * **/}
            {/* * * * * * * * * * * * * * * **/}
            {/* This form is pre-integrated with SB Forms.*/}
            {/* To make this form functional, sign up at*/}
            {/* https://startbootstrap.com/solution/contact-forms*/}
            {/* to get an API token!*/}
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              {/* Name input*/}
              <div className="form-floating mb-3">
                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                <label htmlFor="name">Full name</label>
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
              </div>
              {/* Email address input*/}
              <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                <label htmlFor="email">Email address</label>
                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
              </div>
              {/* Phone number input*/}
              <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                <label htmlFor="phone">Phone number</label>
                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
              </div>
              {/* Message input*/}
              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
                <label htmlFor="message">Message</label>
                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
              </div>
              {/* Submit success message*/}
              {/**/}
              {/* This is what your users will see when the form*/}
              {/* has successfully submitted*/}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              {/* Submit error message*/}
              {/**/}
              {/* This is what your users will see when there is*/}
              {/* an error submitting the form*/}
              <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
              {/* Submit Button*/}
              <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* Footer*/}
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          {/* Footer Location*/}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              Tondano, Sulawesi Utara
              <br />
              Indonesia
            </p>
          </div>
          {/* Footer Social Icons*/}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/G.G.Wagey29"><i className="fab fa-fw fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/s_wagey"><i className="fab fa-fw fa-twitter" /></a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/syalom-gabriela-wagey-581288206/"><i className="fab fa-fw fa-linkedin-in" /></a>
          </div>
          {/* Footer About Text*/}
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About me</h4>
            <p className="lead mb-0">
              
              <a href="https://github.com/SyalomGabrielaWagey">Github</a>
              
            </p>
          </div>
        </div>
      </div>
    </footer>
    {/* Portfolio Modals*/}
    {/* Portfolio Modal 1*/}
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} aria-labelledby="portfolioModal1" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  {/* Portfolio Modal - Title*/}
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">C++</h2>
                  {/* Icon Divider*/}
                  <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                  </div>
                  {/* Portfolio Modal - Image*/}
                  <img className="img-fluid rounded mb-5" src="assets/img/portfolio/retina_1708x683_cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png" alt="..." />
                  {/* Portfolio Modal - Text*/}
                  <p className="mb-4">Telah mempelajari C++ saat semester 3</p>
                  <button className="btn btn-primary" data-bs-dismiss="modal">
                    <i className="fas fa-xmark fa-fw" />
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio Modal 2*/}
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} aria-labelledby="portfolioModal2" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  {/* Portfolio Modal - Title*/}
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Javascript</h2>
                  {/* Icon Divider*/}
                  <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                  </div>
                  {/* Portfolio Modal - Image*/}
                  <img className="img-fluid rounded mb-5" src="assets/img/portfolio/6288755792019456.jpg" alt="..." />
                  {/* Portfolio Modal - Text*/}
                  <p className="mb-4">Mempelajari Js saat mengambil kelas front-end-development</p>
                  <button className="btn btn-primary" data-bs-dismiss="modal">
                    <i className="fas fa-xmark fa-fw" />
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
  );
}

export default App;
