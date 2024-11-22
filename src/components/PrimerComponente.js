import React, { useEffect } from 'react';
import '../styles/global.css';

const Portfolio = () => {
  useEffect(() => {
    // Crear el elemento <link> y agregarlo al <head>
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/boxicons@2.1.1/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      document.head.removeChild(link);
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monte

  return (
    <>
      <header className="header">
        <a href="#home" className="Logo">Tomas <span>Osorno Gomez</span></a>
        <div id="menu-icon" className="menu-icon">
          <i className="bx bx-menu"></i>
        </div>
        <nav className="Navbar">
          <a href="#education">Educación</a>
          <a href="#services">Servicios</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Hola, soy <span>Tomas Osorno Gomez</span></h1>
          <h3 className="text-Animation">Soy Diseñador Web</h3>
          <p>
            Soy estudiante de programación en ingeniería mecánica, apasionado por el desarrollo de software y el aprendizaje de nuevas tecnologías. 
            A lo largo de mi carrera académica, he adquirido habilidades en diversos lenguajes de programación, bases de datos y desarrollo web. 
            Mi objetivo es aplicar mis conocimientos para resolver problemas complejos y crear soluciones innovadoras en el campo de la tecnología. 
            Me interesa seguir creciendo profesionalmente, explorar nuevas oportunidades y colaborar en proyectos que me desafíen a seguir aprendiendo.
          </p>

          <div className="social-icons">
  <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
    <i className='bx bxl-linkedin' style={{ color: '#0A66C2' }}></i>
  </a> {/* LinkedIn */}
  
  <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">
    <i className='bx bxl-github' style={{ color: '#333' }}></i>
  </a> {/* GitHub */}
  
  <a href="https://www.instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer">
    <i className='bx bxl-instagram-alt' style={{ color: '#E4405F' }}></i>
  </a> {/* Instagram */}
  
  <a href="https://twitter.com/tu-perfil" target="_blank" rel="noopener noreferrer">
    <i className='bx bxl-twitter' style={{ color: '#1DA1F2' }}></i>
  </a> {/* Twitter */}
  
  <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer">
    <i className='bx bxl-whatsapp' style={{ color: '#25D366' }}></i>
  </a> {/* WhatsApp */}
  
  <a href="https://www.facebook.com/tu-perfil" target="_blank" rel="noopener noreferrer">
    <i className='bx bxl-facebook' style={{ color: '#1877F2' }}></i>
  </a> {/* Facebook */}
</div>


          <div className="btn-group">
            <a href="#about" className="btn">Acerca de mi</a>
            <a href="#contact" className="btn">Contacto</a>
          </div>
        </div>

        <div className="home-img">
          <img src="https://static.vecteezy.com/system/resources/previews/007/319/933/non_2x/black-avatar-person-icons-user-profile-icon-vector.jpg" alt="Tomas Osorno Gomez" />
        </div>
      </section>

      {/* Sección de Educación */}
      <h2 className="heading" id="education">Educación</h2>
      <div className="timeline">
        <div className="timeline-item left animate">
          <div className="timeline-content">
            <h3>Escuela Secundaria</h3>
            <p>Estudié en el Pascual Bravo. Me desempeñé como desarrollador de software y me apasiona programar.</p>
            <span className="timeline-date">2022</span>
          </div>
        </div>

        <div className="timeline-item right animate">
          <div className="timeline-content">
            <h3>Universidad</h3>
            <p>Actualmente estudio Ingeniería Mecánica en Pascual Bravo, combinando mi interés en la programación con los principios de la ingeniería.</p>
            <span className="timeline-date">2024</span>
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <section className="services" id="services">
        <h2 className="heading">Servicios</h2>
        <div className="services-container">
          <ul className="services-list">
            <li>Desarrollo de aplicaciones web</li>
            <li>Diseño de interfaces de usuario (UI/UX)</li>
            <li>Integración de APIs y servicios externos</li>
            <li>Optimización de rendimiento de aplicaciones</li>
            <li>Pruebas y depuración de código</li>
            <li>Mantenimiento y actualización de sistemas</li>
            <li>Creación de bases de datos</li>
            <li>Automatización de procesos</li>
          </ul>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials" id="testimonials">
        <h2 className="heading">Testimonios</h2>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <p>"Tomas ha sido un profesional excepcional, siempre atento a los detalles y con un enfoque innovador para resolver los problemas en el desarrollo de nuestras aplicaciones web."</p>
            <span>- Cliente 1</span>
          </div>
          <div className="testimonial-item">
            <p>"Excelente trabajo en la integración de API, siempre superando nuestras expectativas en cada proyecto. Definitivamente recomendaría a Tomas para cualquier proyecto de desarrollo web."</p>
            <span>- Cliente 2</span>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="contact" id="contact">
        <h2 className="heading">Contacto</h2>
        <form className="contact-form">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" placeholder="tomas.osornoQ@example.com" required />
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" placeholder="Escribe tu mensaje..." required></textarea>
          <button type="submit" className="btn">Enviar</button>
        </form>
      </section>
    </>
  );
};

export default Portfolio;
