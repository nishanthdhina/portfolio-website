import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const fullText = '> Initializing Portfolio...';
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setLoadingText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setFormStatus('sending');
      
      await emailjs.sendForm(
        'service_0mn9yks',
        'template_zojtfjj',
        formRef.current,
        'ItDbSGS9fjRn4qS7q'
      );
      
      setFormStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="app">
      <div className="animated-bg"></div>
      {isLoading ? (
        <div className="loader">
          <div className="loader-content">
            <div className="typing-animation">
              {loadingText}
            </div>
          </div>
        </div>
      ) : (
        <main className="main-content">
          <header className="header">
            <h1>Nishanth Dhina</h1>
            <nav>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <section id="hero" className="hero-section">
            <div className="hero-content">
              <div className="title-container">
                <h1 className="hero-title">
                  <span className="title-prefix">I'm a</span>
                  <div className="title-animation">
                    <div className="title-words">
                      <span>Web Developer</span>
                      <span>App Developer</span>
                      <span>Software Developer</span>
                    </div>
                  </div>
                </h1>
              </div>
              <div className="hero-subtitle">
                <span className="age-tag">CEO & Founder</span>
                <span className="divider"> of </span>
                <span>ProVocis</span>
              </div>
              <p className="hero-about">
                At 17 years old, I am a driven and innovative developer passionate about creating impactful digital solutions. With expertise in web development and a growing portfolio across diverse domains, I combine creativity, precision, and a vision for excellence to deliver meaningful results on every project.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years of Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
            </div>
          </section>

          <section className="story-section">
            <div className="container">
              <h2 className="section-title">My Journey: <br /> How ProVocis Was Born</h2>
              <div className="story-content">
                <div className="story-main">
                  <div className="story-paragraphs">
                    <p>
                      As a developer passionate about creating meaningful solutions, I've always believed that technology should make a difference in people's lives. One day, during a conversation with my best friend Alex, we started discussing the challenges faced by employees, particularly those from immigrant backgrounds. Many are incredibly skilled but face barriers in their careers simply because they aren't native English speakers.
                    </p>
                    <p>
                      That conversation sparked an idea—what if we could create a tool to help them overcome these challenges? ProVocis was born from this vision. Together, Alex and I began designing an app that would deliver daily, industry-specific vocabulary to help users build confidence and improve communication skills.
                    </p>
                    <p>
                      However, we knew that creating something impactful required more than just the two of us. That's when we brought Caleb and Akshanan into the team. Their unique perspectives and talents added depth to our mission, transforming ProVocis into a powerful platform for career-focused language learning.
                    </p>
                    <p>
                      Our ultimate goal? To create a space where employees from all walks of life, especially those from immigrant backgrounds, can overcome language barriers and thrive in their careers. ProVocis isn't just a product—it's our way of opening doors, empowering growth, and helping people succeed.
                    </p>
                  </div>
                </div>
                <div className="story-timeline">
                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Idea Inception</h4>
                      <p>Early 2024</p>
                      <div className="team-member">
                        <span>Nishanth Dhinakar</span>
                        <small>CEO & Web Designer</small>
                      </div>
                      <div className="team-member">
                        <span>Alexandru Barza</span>
                        <small>CTO & App Developer</small>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <i className="fas fa-code"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Development</h4>
                      <p>February 2024</p>
                      <div className="team-member">
                        <span>Akshanan Mayuran</span>
                        <small>CFO & Copywriter</small>
                      </div>
                      <div className="team-member">
                        <span>Caleb Grobler</span>
                        <small>Social Media Manager & App Designer</small>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Launch</h4>
                      <p>March 2024</p>
                      <div className="team-member">
                        <span>Full Team Collaboration</span>
                        <small>Working together to make it happen</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="education-section">
            <div className="container">
              <h2 className="section-title">Education Journey</h2>
              <div className="education-timeline">
                <div className="timeline-line"></div>
                <div className="timeline-items">
                  <div className="timeline-item">
                    <div className="timeline-marker" data-year="2012">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Ebor Gardens Primary School</h4>
                      <p className="timeline-period">2012 - 2016</p>
                      <p className="timeline-location">
                        <i className="fas fa-map-marker-alt"></i>
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker" data-year="2016">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>APL Global School</h4>
                      <p className="timeline-period">2016 - 2021</p>
                      <p className="timeline-location">
                        <i className="fas fa-map-marker-alt"></i>
                        India
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker" data-year="2021">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Freie Waldorfschule</h4>
                      <p className="timeline-period">2021 - 2025</p>
                      <p className="timeline-location">
                        <i className="fas fa-map-marker-alt"></i>
                        Germany
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker" data-year="2025">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Mercedes-Benz Internship</h4>
                      <p className="timeline-period">2025 - 2028</p>
                      <p className="timeline-location">
                        <i className="fas fa-map-marker-alt"></i>
                        Germany
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="projects-section">
            <div className="container">
              <h2 className="section-title">Featured Projects</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3>ProVocis</h3>
                  <p>A language learning app tailored for professionals, offering industry-specific vocabulary to help users improve communication and advance in their careers.</p>
                  <div className="project-tech">
                    <span>Flutter</span>
                    <span>Firebase</span>
                    <span>SwiftUI</span>
                    <span>AI</span>
                  </div>
                  <a href="https://provocis.com" className="project-link" target="_blank" rel="noopener noreferrer">
                    Visit Website <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>

                <div className="project-card">
                  <div className="project-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>RecEzy</h3>
                  <p>An AI-powered hiring management bot that streamlines recruitment processes by matching candidates with the right opportunities efficiently and effectively.</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>AI</span>
                  </div>
                  <a href="https://www.recezy.ai" className="project-link" target="_blank" rel="noopener noreferrer">
                    Visit Website <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>

                <div className="project-card">
                  <div className="project-icon">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <h3>AdevTech</h3>
                  <p>A hub for innovative tech solutions, providing businesses with cutting-edge tools and services to enhance their operations and growth.</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                  <a href="https://www.adevtechcorp.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                    Visit Website <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>

                <div className="project-card">
                  <div className="project-icon">
                    <i className="fas fa-cloud"></i>
                  </div>
                  <h3>CloudHub</h3>
                  <p>A platform that simplifies cloud integration and management, enabling seamless deployment and scaling for modern digital infrastructure.</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Firebase</span>
                    <span>Node.js</span>
                  </div>
                  <a href="https://twrteam.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                    Visit Website <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="contact-section">
            <div className="container">
              <h2 className="section-title">Get in Touch</h2>
              <div className="contact-container">
                <div className="contact-info">
                  <h3>Let's Connect</h3>
                  <p>Have a project in mind or just want to chat? I'd love to hear from you!</p>
                  <div className="contact-methods">
                    <div className="contact-method">
                      <i className="fas fa-envelope"></i>
                      <span>Email me at</span>
                      <a href="mailto:contact@nishanthdhina.com">nishanthdhinacontact@gmail.com</a>
                    </div>
                    <div className="contact-method">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Based in</span>
                      <p>Munich, Germany</p>
                    </div>
                  </div>
                </div>
                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h3>Send a Message</h3>
                    <p>I'll get back to you as soon as possible.</p>
                  </div>
                  <div className="form-group">
                    <div className="input-container">
                      <i className="fas fa-user"></i>
                      <input type="text" name="user_name" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-container">
                      <i className="fas fa-envelope"></i>
                      <input type="email" name="user_email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-container">
                      <i className="fas fa-pen"></i>
                      <textarea name="message" placeholder="Your Message" required></textarea>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className={`submit-btn ${formStatus !== 'idle' ? 'submitting' : ''}`}
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <span>Sending...</span>
                        <i className="fas fa-spinner fa-spin"></i>
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <span>Message Sent!</span>
                        <i className="fas fa-check"></i>
                      </>
                    ) : formStatus === 'error' ? (
                      <>
                        <span>Error Sending</span>
                        <i className="fas fa-exclamation-circle"></i>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="fas fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </section>

          <div className="social-bar">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/nishanthdhina" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/nishanthdhina" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
                <span className="social-tooltip">Instagram</span>
              </a>
              <a href="https://twitter.com/nishanthdhin4" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
                <span className="social-tooltip">Twitter</span>
              </a>
              <a href="https://github.com/nishanthdhina" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
                <span className="social-tooltip">GitHub</span>
              </a>
            </div>
            <div className="social-line"></div>
          </div>
        </main>
      )}
    </div>
  )
}

export default App