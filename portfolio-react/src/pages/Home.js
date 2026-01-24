import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeExperienceTab, setActiveExperienceTab] = useState('current');
  const formRef = useRef();
  
  // Add smooth scrolling effect for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Frankline Otieno'
      };

      await emailjs.send(
        'service_x9oq0pf', // Replace with your EmailJS service ID
        'template_se4q6he', // Replace with your EmailJS template ID
        templateParams,
        'VKdJ9CuLlJWxJNjp2' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.96) 25%, rgba(51, 65, 85, 0.94) 50%, rgba(71, 85, 105, 0.92) 75%, rgba(100, 116, 139, 0.90) 100%)',
      minHeight: '100vh', 
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Cloud Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden'
      }}>
        {/* Cloud 1 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          fontSize: '3rem',
          opacity: 0.1,
          animation: 'float 20s infinite linear'
        }}>☁️</div>
        
        {/* Cloud 2 */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          fontSize: '2.5rem',
          opacity: 0.08,
          animation: 'float 25s infinite linear reverse'
        }}>☁️</div>
        
        {/* Cloud 3 */}
        <div style={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          fontSize: '2rem',
          opacity: 0.12,
          animation: 'float 30s infinite linear'
        }}>☁️</div>
        
        {/* Cloud 4 */}
        <div style={{
          position: 'absolute',
          top: '80%',
          right: '20%',
          fontSize: '2.5rem',
          opacity: 0.1,
          animation: 'float 22s infinite linear reverse'
        }}>☁️</div>
        
        {/* Server Icons */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '80%',
          fontSize: '1.5rem',
          opacity: 0.06,
          animation: 'float 18s infinite linear reverse'
        }}>🖥️</div>
        
        <div style={{
          position: 'absolute',
          top: '70%',
          left: '85%',
          fontSize: '1.2rem',
          opacity: 0.08,
          animation: 'float 24s infinite linear'
        }}>⚙️</div>
        
        {/* Network Icons */}
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '2%',
          fontSize: '1.8rem',
          opacity: 0.05,
          animation: 'float 28s infinite linear reverse'
        }}>🌐</div>
      </div>
      
      {/* Add CSS animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateX(-10px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-10px); }
          50% { transform: translateX(5px) translateY(-5px); }
          75% { transform: translateX(-5px) translateY(-15px); }
          100% { transform: translateX(-10px) translateY(0px); }
        }
        
        .animate-in {
          animation: slideInUp 0.8s ease-out;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Mobile-first responsive improvements */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .project-card {
            min-height: 220px !important;
            padding: 1.25rem !important;
          }
          
          /* Touch targets for mobile */
          .project-card:active {
            transform: translateY(-2px) scale(0.98) !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Improve image loading on mobile */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '1200px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(51, 65, 85, 0.8) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        zIndex: 1000,
        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <div style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}>Frankline Otieno</div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 1001
            }}
          >
            <div style={{
              width: '24px',
              height: '2px',
              background: '#fff',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: mobileMenuOpen ? '0' : '-8px',
                left: '0',
                width: '24px',
                height: '2px',
                background: '#fff',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: mobileMenuOpen ? '0' : '-8px',
                left: '0',
                width: '24px',
                height: '2px',
                background: '#fff',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)'
              }}></div>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <div style={{
            display: window.innerWidth <= 768 ? 'none' : 'flex',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'center'
          }}>
            <a href="#home" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = '#60a5fa'}
               style={{
              color: '#60a5fa', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>Home</a>
            <a href="#about" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
               style={{
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>About</a>
            <a href="#experience" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
               style={{
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>Experience</a>
            <a href="#projects" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
               style={{
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>Projects</a>
            <a href="#contact" 
               onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
               onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
               style={{
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 500,
              padding: '0.5rem 0',
              transition: 'color 0.3s ease'
            }}>Contact</a>
            
            {/* Social Icons - Hidden on mobile */}
            <div style={{
              display: window.innerWidth <= 1024 ? 'none' : 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginLeft: '1rem'
            }}>
                <a href="https://gitlab.com/CloudChuck" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="GitHub"
              >
                <i className="fab fa-gitlab"></i>
              </a>
               <a href="https://github.com/ChuckyCharles" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/charles-ochieng-177ba3253" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/CharlesO21441" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:frankotieno044@gmail.com" 
                 style={{
                   color: 'rgba(255, 255, 255, 0.7)',
                   fontSize: '1.2rem',
                   transition: 'color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                 onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                 title="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: window.innerWidth <= 768 && mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          padding: '6rem 2rem 2rem',
          zIndex: 999,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}>
          <a href="#home" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>Home</a>
          <a href="#about" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>About</a>
          <a href="#experience" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>Experience</a>
          <a href="#projects" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>Projects</a>
          <a href="#contact" 
             onClick={() => setMobileMenuOpen(false)}
             style={{
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none', 
              fontSize: '1.5rem',
              fontWeight: 500,
              padding: '0.75rem 0',
              transition: 'color 0.3s ease'
            }}>Contact</a>
          
          {/* Mobile Social Icons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            marginTop: '2rem'
          }}>
             <a href="https://gitlab.com/CloudChuck"
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="GitLab"
            >
              <i className="fab fa-gitlab"></i>
            </a>
            <a href="https://www.linkedin.com/in/charles-ochieng-177ba3253" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
               <a href="https://github.com/ChuckyCharles" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/CharlesO21441" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:frankotieno044@gmail.com" 
               style={{
                 color: 'rgba(255, 255, 255, 0.8)',
                 fontSize: '1.5rem',
                 transition: 'color 0.3s ease'
               }}
               title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(1rem, 3vw, 2rem)',
        paddingTop: 'clamp(100px, 15vw, 140px)',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 50%, rgba(51, 65, 85, 0.65) 100%)',
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div>
            {/* Tech Stack Icons */}
            <div style={{
              display: 'flex',
              gap: 'clamp(0.5rem, 2vw, 0.75rem)',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              flexWrap: 'wrap'
            }}>
              <TechIcon>☁️</TechIcon>
              <TechIcon>🐳</TechIcon>
              <TechIcon>K8s</TechIcon>
              <TechIcon>🐍</TechIcon>
              <TechIcon>TF</TechIcon>
              <TechIcon>🟢</TechIcon>
              <TechIcon>VM</TechIcon>
              <TechIcon>⚙️</TechIcon>
              <TechIcon>📋</TechIcon>
            </div>
            
            <div style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              color: '#64748b',
              marginBottom: '0.5rem',
              fontWeight: 500
            }}>IT and QA Engineer </div>
            
            <h1 style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              lineHeight: 1.1
            }}>Franklin Otieno</h1>
            
            <div style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              color: '#3b82f6',
              fontWeight: 600,
              marginBottom: '0.5rem'
            }}>QA Engineer</div>
            
            <div style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              color: '#64748b',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              lineHeight: 1.6
            }}>Specializing in software testing, test automation, and quality assurance for modern web and cloud-based applications. Skilled in manual and automated testing, API validation, and test automation using Python and JavaScript. Focused on improving software reliability, enhancing test coverage, and ensuring seamless user experiences. With hands-on experience in CI/CD integration, I value quality, precision, and close collaboration with development teams to deliver high-performing and dependable software.</div>
            <div style={{
              display: 'flex',
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
                style={{
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '6px',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}>
                View My Work
              </button>
              <a href="https://charlesochieng.hashnode.dev" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   background: 'transparent',
                   color: '#ffffff',
                   border: '1px solid #374151',
                   padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                   borderRadius: '6px',
                   fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                   fontWeight: 600,
                   cursor: 'pointer',
                   textDecoration: 'none',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '0.5rem',
                   transition: 'all 0.3s ease',
                   whiteSpace: 'nowrap'
                 }}
                 onMouseEnter={(e) => {
                   e.target.style.borderColor = '#3b82f6';
                   e.target.style.color = '#3b82f6';
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.borderColor = '#374151';
                   e.target.style.color = '#ffffff';
                 }}>
                📝 Read My Blogs
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1px solid #374151',
                  padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '6px',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.color = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#374151';
                  e.target.style.color = '#ffffff';
                }}>
                Get In Touch
              </button>
            </div>
            
            {/* Tech Stack */}
            <div style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
              color: '#64748b'
            }}>
              <strong>Cloud Expertise:</strong> VMware vSphere, Kubernetes, OpenShift, Terraform, Ansible, AWS, Azure, <span style={{color: '#3b82f6'}}>+10 more tools</span>
            </div>
          </div>
          
          {/* Right Content - Code Editor */}
          <div style={{
            background: '#1a1a1a',
            border: '1px solid #374151',
            borderRadius: '8px',
            overflow: 'hidden',
            display: window.innerWidth <= 768 ? 'none' : 'block'
          }}>
            {/* Code Editor Header */}
            <div style={{
              background: '#2a2a2a',
              padding: '0.75rem 1rem',
              borderBottom: '1px solid #374151',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444'}}></div>
              <div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b'}}></div>
              <div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#10b981'}}></div>
              <span style={{marginLeft: '1rem', fontSize: '0.875rem', color: '#9ca3af'}}>portfolio.tsx</span>
            </div>
            
            {/* Code Content */}
            <div style={{
              padding: '1.5rem',
              fontFamily: 'JetBrains Mono, Monaco, monospace',
              fontSize: '0.875rem',
              lineHeight: 1.6
            }}>
              <CodeLine number="01">QA engineer = {'{'};</CodeLine>
              <CodeLine number="02">  name: <span style={{color: '#10b981'}}>'Frankline Otieno'</span>,</CodeLine>
              <CodeLine number="03">  role: <span style={{color: '#10b981'}}>'QA Engineer'</span>,</CodeLine>
              <CodeLine number="04">  company: <span style={{color: '#10b981'}}>'Supreme Court Kenya'</span>,</CodeLine>
              <CodeLine number="05">  experience: <span style={{color: '#10b981'}}>'3+ years'</span>,</CodeLine>
              <CodeLine number="06">  skills: [</CodeLine>
              <CodeLine number="07">    <span style={{color: '#10b981'}}>'VMware'</span>, <span style={{color: '#10b981'}}>'Kubernetes'</span>, <span style={{color: '#10b981'}}>'OpenShift'</span>,</CodeLine>
              <CodeLine number="08">    <span style={{color: '#10b981'}}>'Terraform'</span>, <span style={{color: '#10b981'}}>'Ansible'</span>, <span style={{color: '#10b981'}}>'Python'</span></CodeLine>
              <CodeLine number="09">  ],</CodeLine>
              <CodeLine number="10">  infrastructure: () =&gt; manageCloudResources(),</CodeLine>
              <CodeLine number="11">  contact: <span style={{color: '#10b981'}}>'frankotieno044@gmail.com'</span></CodeLine>
              <CodeLine number="12">{'}'};</CodeLine>
            </div>
            
            {/* Status Bar */}
            <div style={{
              background: '#2a2a2a',
              padding: '0.5rem 1rem',
              borderTop: '1px solid #374151',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              color: '#9ca3af'
            }}>
              <span>🟢 CloudChuck Automation</span>
              <span>Last commit: Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact & Leadership Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Section Header */}
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#3b82f6',
            marginBottom: '1rem'
          }}>Community Impact & Leadership</h2>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#9ca3af',
            marginBottom: '3rem',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto 3rem auto'
          }}>Speaking engagements, community contributions, and volunteering activities</p>
          
          {/* Category Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              color: '#60a5fa',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🎤 Speaking Engagements
            </div>
            
            <div style={{
              background: 'rgba(75, 85, 99, 0.3)',
              border: '1px solid rgba(75, 85, 99, 0.5)',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              color: '#d1d5db',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              👥 Community Leadership
            </div>
            
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              color: '#60a5fa',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              💝 Volunteering & Mentorship
            </div>
          </div>
          
          {/* Community Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 2rem)',
            textAlign: 'left'
          }}>
            {/* Mentor & Graphic Designer Card */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '12px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  border: '1px solid rgba(75, 85, 99, 0.5)'
                }}>
                  🎨
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>Career Ambassador</h3>
                  <div style={{
                    color: '#3b82f6',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>Machakos University</div>
                  <div style={{
                    color: '#9ca3af',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>⏰</span> October 2023 - Present
                  </div>
                </div>
              </div>
              
              <div style={{
                marginBottom: '1rem'
              }}>
                <div style={{
                  color: '#10b981',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>Focus:</div>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  marginBottom: '1rem'
                }}>Mentoring students in Career Selection and Navigation</p>
                
                <p style={{
                  color: '#9ca3af',
                  fontSize: '0.85rem',
                  lineHeight: 1.5
                }}>Serving as a Career Ambassador for Machakos University , guiding students in career selection and design principles.</p>
              </div>
              
              <div style={{
                background: 'rgba(75, 85, 99, 0.3)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(75, 85, 99, 0.4)'
              }}>
                <div style={{
                  color: '#10b981',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>Impact:</div>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '0.85rem',
                  lineHeight: 1.4
                }}>Boosted student career engagement with consistent, professional design assets that strengthened Machakos University's presence</p>
              </div>
            </div>
            
            {/* Technical Writer Card */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '12px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)'
                }}>
                  ✍️
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>Technical Writer</h3>
                  <div style={{
                    color: '#3b82f6',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>Hashnode Platform</div>
                  <div style={{
                    color: '#9ca3af',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>⏰</span> May 2024 - Current
                  </div>
                </div>
              </div>
              
              <div style={{
                marginBottom: '1rem'
              }}>
                <div style={{
                  color: '#10b981',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>Focus:</div>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  marginBottom: '1rem'
                }}>Creating technical content for developers in tech</p>
                
                <p style={{
                  color: '#9ca3af',
                  fontSize: '0.85rem',
                  lineHeight: 1.5
                }}>Contributing technical articles and tutorials to support technology in Africa and beyond. Topics include virtualization, cloud computing, and DevOps practices.</p>
              </div>
              
              <div style={{
                background: 'rgba(75, 85, 99, 0.3)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(75, 85, 99, 0.4)'
              }}>
                <div style={{
                  color: '#10b981',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>Impact:</div>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '0.85rem',
                  lineHeight: 1.4
                }}>Articles reached 5,000+ readers, contributing to increased participation in tech events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <SkillsShowcase />
        </div>
      </section>

      {/* Experience Highlight */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.85) 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>🏆 Top Performer</h2>
          <h3 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#3b82f6',
            marginBottom: '1rem'
          }}>Cloud Infrastructure & DevOps Engineering</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{color: '#64748b'}}>💰 <strong>KES 2M+</strong> Infrastructure Cost Savings</div>
            <div style={{color: '#64748b'}}>🏢 <strong>5+</strong> Organizations Served</div>
            <div style={{color: '#64748b'}}>🎤 <strong>5+</strong> Technical Presentations</div>
          </div>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
            style={{
              background: '#3b82f6',
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Explore</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.75) 0%, rgba(51, 65, 85, 0.65) 100%)',
        padding: '6rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>About Me</h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: 1.7
          }}>
            Cloud Infrastructure Engineer and DevOps specialist, building solutions that impact thousands of users across Kenya. 
            Part of the growing tech talent ecosystem, passionate about continuous learning, community building, and sharing knowledge through technical presentations and mentorship.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.7) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <ModernExperienceSection activeTab={activeExperienceTab} setActiveTab={setActiveExperienceTab} />
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.82) 0%, rgba(51, 65, 85, 0.72) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>Featured Projects</h2>
          
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
            gap: 'clamp(1rem, 3vw, 2rem)'
          }}>
            <SimpleProjectCard 
              title="Hypervisor Deployment Automation"
              description="Automated KVM hypervisor deployment for enterprise environments"
              technologies={['KVM', 'Ansible', 'Terraform']}
              link="https://gitlab.com/cloudchuck/kvm_deplyoment"
              backgroundImage="/assets/images/projects/hypervisor-bg.jpg"
            />
            <SimpleProjectCard 
              title="Multi/Hybrid-Cloud Management Platform"
              description="Unified platform for hybrid cloud infrastructure management"
              technologies={['AWS', 'Azure', 'Python', 'Docker']}
              link="https://gitlab.com/cloudchuck/cloud_manager_stack.git"
              backgroundImage="/assets/images/projects/multicloud-bg.jpg"
            />
            <SimpleProjectCard 
              title="Terraform VM Deployment"
              description="Infrastructure as Code for automated VM provisioning"
              technologies={['Terraform', 'vSphere', 'HashiCorp']}
              link="https://gitlab.com/cloudchuck/terraform_vm_deployment.git"
              backgroundImage="/assets/images/projects/terraform-bg.jpg"
            />
            <SimpleProjectCard 
              title="OpenShift Voting Application"
              description="Containerized voting app with CI/CD on ROSA"
              technologies={['OpenShift', 'Kubernetes', 'ROSA']}
              link="https://github.com/ChuckyCharles/Voting_App_Openshift"
              backgroundImage="/assets/images/projects/kubernetes-bg.jpg"
            />
          </div>
          
          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <a href="https://gitlab.com/cloudchuck" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 background: '#3b82f6',
                 color: '#ffffff',
                 padding: '0.75rem 1.5rem',
                 borderRadius: '6px',
                 textDecoration: 'none',
                 fontSize: '0.9rem',
                 fontWeight: 600
               }}>
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>Get In Touch</h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#9ca3af',
            marginBottom: '3rem',
            lineHeight: 1.7,
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Have a project in mind or want to discuss cloud infrastructure solutions? Let's connect and build something amazing together.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)',
            alignItems: 'start'
          }}>
            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <a href="mailto:ochiengcharles531@gmail.com" 
                   style={{
                     background: '#3b82f6',
                     color: '#ffffff',
                     padding: '0.75rem 1.5rem',
                     borderRadius: '6px',
                     textDecoration: 'none',
                     fontSize: '0.9rem',
                     fontWeight: 600,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     flex: 1,
                     justifyContent: 'center'
                   }}>
                  ✉️ Email Me
                </a>
                <a href="tel:+254718166201" 
                   style={{
                     background: 'transparent',
                     color: '#ffffff',
                     border: '1px solid #374151',
                     padding: '0.75rem 1.5rem',
                     borderRadius: '6px',
                     textDecoration: 'none',
                     fontSize: '0.9rem',
                     fontWeight: 600,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     flex: 1,
                     justifyContent: 'center'
                   }}>
                  📱 Call
                </a>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <a href="https://www.linkedin.com/in/charles-ochieng-177ba3253" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     background: 'transparent',
                     color: '#ffffff',
                     border: '1px solid #374151',
                     padding: '0.75rem 1.5rem',
                     borderRadius: '6px',
                     textDecoration: 'none',
                     fontSize: '0.9rem',
                     fontWeight: 600,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     flex: 1,
                     justifyContent: 'center'
                   }}>
                  LinkedIn
                </a>
                <a href="https://github.com/ChuckyCharles" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     background: 'transparent',
                     color: '#ffffff',
                     border: '1px solid #374151',
                     padding: '0.75rem 1.5rem',
                     borderRadius: '6px',
                     textDecoration: 'none',
                     fontSize: '0.9rem',
                     fontWeight: 600,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     flex: 1,
                     justifyContent: 'center'
                   }}>
                  GitHub
                </a>
              </div>
              
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                textAlign: 'center',
                padding: '1rem',
                background: '#1a1a1a',
                borderRadius: '8px',
                border: '1px solid #374151'
              }}>
                📍 Based in Nairobi, Kenya • Available for remote work worldwide
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={{
              background: '#1a1a1a',
              border: '1px solid #374151',
              borderRadius: '12px',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,

                color: '#ffffff',
                marginBottom: '1rem'
              }}>Send a Message</h3>
              <p style={{
                color: '#9ca3af',
                fontSize: '0.875rem',
                marginBottom: '1.5rem'
              }}>Let's discuss your cloud infrastructure needs</p>              
              <form ref={formRef} onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>

                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  style={{
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                />
                
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  style={{
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                />
                
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  style={{
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                />
                
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  style={{
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    resize: 'vertical',
                    minHeight: '100px'
                  }}
                />
                
                {submitStatus === 'success' && (
                  <div style={{
                    color: '#10b981',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    padding: '0.75rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '6px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                     Message sent successfully! I'll get back to you in a short while.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div style={{
                    color: '#ef4444',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    padding: '0.75rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    borderRadius: '6px',
                    border: '1px solid rgba(239, 68, 68, 0.2)'
                  }}>
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: isSubmitting ? '#6b7280' : '#3b82f6',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid transparent',
                        borderTop: '2px solid currentColor',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L2 8.667l9 4 4 9L22 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
     
    </div>
  );
}
// ModernSkillBar component
function ModernSkillBar({ label, color, percent, icon }) {
  return (
    <div style={{ marginBottom: 0 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.75rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <span style={{
            fontSize: '1rem',
            opacity: 0.8
          }}>{icon}</span>
          <span style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
            fontWeight: 500
          }}>{label}</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{
            color: color,
            fontWeight: 700,
            fontSize: 'clamp(0.875rem, 2vw, 0.95rem)'
          }}>{percent}%</span>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: color,
            opacity: 0.6
          }}></div>
        </div>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(30, 41, 59, 0.8)',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          width: `${percent}%`,
          height: '100%',
          background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
          borderRadius: '12px',
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated shine effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'shine 2s ease-in-out infinite',
            animationDelay: '0.5s'
          }}></div>
        </div>
      </div>
    </div>
  );
}

// Add shine animation to global styles
const shineKeyframes = `
  @keyframes shine {
    0% { left: -100%; }
    50% { left: -100%; }
    100% { left: 100%; }
  }
`;

// Inject the keyframes into the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shineKeyframes;
  document.head.appendChild(style);
}

// ProjectCard component
function ProjectCard({ image, title, description, technologies, link, category, gradient }) {
  return (
    <div className="card animate-fadeInUp" style={{
      background: 'linear-gradient(135deg, var(--background-secondary) 0%, #2d3748 100%)',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      height: 'fit-content'
    }}>
      {/* Category badge */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        background: gradient,
        color: 'white',
        padding: '0.375rem 0.75rem',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        zIndex: 2,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
      }}>
        {category}
      </div>
      
      {/* Image container with overlay */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        height: '240px'
      }}>
        <img 
          src={image} 
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}></div>
      </div>
      
      {/* Content */}
      <div style={{
        padding: '2rem'
      }}>
        <h3 style={{
          color: 'var(--text-primary)',
          fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
          fontWeight: 700,
          marginBottom: '0.75rem',
          lineHeight: 1.3,
          letterSpacing: '-0.01em'
        }}>
          {title}
        </h3>
        
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          lineHeight: 1.6,
          marginBottom: '1.5rem'
        }}>
          {description}
        </p>
        
        {/* Technologies */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          {technologies.map((tech, index) => (
            <TechTag key={index} gradient={gradient}>{tech}</TechTag>
          ))}
        </div>
        
        {/* Action button */}
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-primary)',
            fontSize: '0.95rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '0.5rem 0'
          }}
        >
          View Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      
      {/* Hover effects */}
      <style jsx>{`
        .card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4) !important;
        }
        .card:hover img {
          transform: scale(1.05) !important;
        }
        .card:hover .gradient-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

// TechTag component
function TechTag({ children, gradient }) {
  return (
    <span style={{
      background: 'rgba(30, 41, 59, 0.8)',
      color: 'var(--text-secondary)',
      borderRadius: '12px',
      padding: '0.375rem 0.75rem',
      fontSize: '0.8rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {children}
    </span>
  );
}

// ContactCard component
function ContactCard({ icon, title, info, link, linkText, gradient, fullWidth }) {
  return (
    <div className="card" style={{
      background: 'linear-gradient(135deg, var(--background-secondary) 0%, #2d3748 100%)',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      width: fullWidth ? '100%' : 'auto'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: gradient
      }}></div>
      
      <div style={{
        background: gradient,
        color: 'white',
        borderRadius: '50%',
        width: '4rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        margin: '0 auto 1rem auto',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
      }}>
        {icon}
      </div>
      
      <h4 style={{
        color: 'var(--text-primary)',
        fontSize: '1.125rem',
        fontWeight: 600,
        marginBottom: '0.5rem'
      }}>
        {title}
      </h4>
      
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        marginBottom: '1rem',
        wordBreak: 'break-word'
      }}>
        {info}
      </p>
      
      <a 
        href={link}
        target={link.startsWith('http') ? '_blank' : undefined}
        rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{
          color: 'var(--primary)',
          fontSize: '0.9rem',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
      >
        {linkText}
      </a>
    </div>
  );
}

// ModernInput component
function ModernInput({ type, name, value, onChange, placeholder, icon, required }) {
  return (
    <div style={{
      position: 'relative'
    }}>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          background: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '1rem 1rem 1rem 3rem',
          color: 'var(--text-primary)',
          fontSize: '1rem',
          fontFamily: 'inherit',
          transition: 'all 0.3s ease',
          outline: 'none'
        }}
      />
      <div style={{
        position: 'absolute',
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '1rem',
        opacity: 0.6,
        pointerEvents: 'none'
      }}>
        {icon}
      </div>
    </div>
  );
}

// SocialLink component
function SocialLink({ href, platform }) {
  const getIcon = (platform) => {
    const icons = {
      'LinkedIn': 'in',
      'GitHub': 'github',
      'GitLab': 'gitlab', 
      'Twitter': 'x'
    };
    return icons[platform] || 'link';
  };
  
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1rem',
        background: 'rgba(30, 41, 59, 0.6)',
        borderRadius: '12px',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        fontWeight: 500,
        textDecoration: 'none',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      <i className={`fab fa-${getIcon(platform)}`} style={{ fontSize: '1rem' }}></i>
      {platform}
    </a>
  );
}

// TechIcon component
function TechIcon({ children }) {
  return (
    <div style={{
      width: 'clamp(2rem, 4vw, 2.5rem)',
      height: 'clamp(2rem, 4vw, 2.5rem)',
      background: '#1a1a1a',
      border: '1px solid #374151',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      fontWeight: 600,
      color: '#ffffff'
    }}>
      {children}
    </div>
  );
}

// CodeLine component
function CodeLine({ number, children }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      marginBottom: '0.25rem'
    }}>
      <span style={{ color: '#6b7280', minWidth: '2rem' }}>{number}</span>
      <span style={{ color: '#e5e7eb' }}>{children}</span>
    </div>
  );
}

// StatCard component
function StatCard({ icon, title, subtitle, highlight }) {
  return (
    <div style={{
      background: highlight ? 'linear-gradient(135deg, #1e40af, #3b82f6)' : '#1a1a1a',
      border: '1px solid #374151',
      borderRadius: '8px',
      padding: '2rem',
      textAlign: 'center',
      transition: 'transform 0.3s ease'
    }}>
      <div style={{
        fontSize: '2rem',
        marginBottom: '1rem'
      }}>{icon}</div>
      <div style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: '0.5rem'
      }}>{title}</div>
      <div style={{
        fontSize: '0.875rem',
        color: '#9ca3af'
      }}>{subtitle}</div>
    </div>
  );
}

// ExperienceCard component
function ExperienceCard({ title, skills, description }) {
  return (
    <div style={{
      background: '#1a1a1a',
      border: '1px solid #374151',
      borderRadius: '8px',
      padding: '2rem',
      transition: 'transform 0.3s ease'
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: '1rem'
      }}>{title}</h3>
      <p style={{
        color: '#9ca3af',
        fontSize: '0.875rem',
        marginBottom: '1.5rem',
        lineHeight: 1.6
      }}>{description}</p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {skills.map((skill, index) => (
          <span key={index} style={{
            background: '#374151',
            color: '#e5e7eb',
            padding: '0.25rem 0.75rem',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 500
          }}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

// SimpleProjectCard component
function SimpleProjectCard({ title, description, technologies, link, backgroundImage }) {
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  React.useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = backgroundImage;
    }
  }, [backgroundImage]);
  
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  
  // Responsive background image sizing
  const getBackgroundStyle = () => {
    if (!backgroundImage) return '#1a1a1a';
    
    const overlayOpacity = isMobile ? '0.9' : '0.85';
    const backgroundSize = isMobile ? 'cover' : 'cover';
    const backgroundPosition = isMobile ? 'center center' : 'center';
    
    return `linear-gradient(135deg, rgba(26, 26, 26, ${overlayOpacity}) 0%, rgba(55, 65, 81, 0.78) 100%), url('${backgroundImage}') ${backgroundPosition}/${backgroundSize} no-repeat`;
  };
  
  return (
    <div className="project-card" style={{
      background: getBackgroundStyle(),
      opacity: imageLoaded || !backgroundImage ? 1 : 0.8,
      transition: 'all 0.3s ease, opacity 0.5s ease, transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid #374151',
      borderRadius: isMobile ? '12px' : '8px',
      padding: isMobile ? '1.5rem' : (isTablet ? '1.75rem' : '2rem'),
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? '240px' : (isTablet ? '260px' : '280px'),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}
    onClick={() => window.open(link, '_blank')}
    onMouseEnter={(e) => {
      e.target.style.borderColor = '#3b82f6';
      e.target.style.transform = 'translateY(-4px)';
      e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.target.style.borderColor = '#374151';
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }}>
      <div>
        <h3 style={{
          fontSize: isMobile ? '1.125rem' : (isTablet ? '1.2rem' : '1.25rem'),
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: isMobile ? '0.5rem' : '0.75rem',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          lineHeight: 1.3
        }}>{title}</h3>
        <p style={{
          color: '#e5e7eb',
          fontSize: isMobile ? '0.8rem' : '0.875rem',
          marginBottom: isMobile ? '1.25rem' : '1.5rem',
          lineHeight: isMobile ? 1.5 : 1.6,
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
        }}>{description}</p>
      </div>
      <div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: isMobile ? '0.375rem' : '0.5rem',
          marginBottom: isMobile ? '0.75rem' : '1rem'
        }}>
          {technologies.map((tech, index) => (
            <span key={index} style={{
              background: 'rgba(55, 65, 81, 0.85)',
              color: '#e5e7eb',
              padding: isMobile ? '0.2rem 0.6rem' : '0.25rem 0.75rem',
              borderRadius: '6px',
              fontSize: isMobile ? '0.7rem' : '0.75rem',
              fontWeight: 500,
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(75, 85, 99, 0.4)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}>{tech}</span>
          ))}
        </div>
        <div style={{
          color: '#60a5fa',
          fontSize: isMobile ? '0.8rem' : '0.875rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
          padding: isMobile ? '0.5rem 0' : '0'
        }}>
          View Project 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ExperienceTimelineItem component
function ExperienceTimelineItem({ company, role, period, type, location, description, achievements, technologies }) {
  return (
    <div style={{
      background: '#1a1a1a',
      border: '1px solid #374151',
      borderRadius: '12px',
      padding: '2rem',
      position: 'relative',
      transition: 'all 0.3s ease'
    }}>
      {/* Timeline dot */}
      <div style={{
        position: 'absolute',
        left: '-6px',
        top: '2rem',
        width: '12px',
        height: '12px',
        background: '#3b82f6',
        borderRadius: '50%',
        border: '3px solid #0a0a0a'
      }}></div>
      
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.25rem'
          }}>{role}</h3>
          <div style={{
            fontSize: '1.125rem',
            color: '#3b82f6',
            fontWeight: 600,
            marginBottom: '0.25rem'
          }}>{company}</div>
          <div style={{
            fontSize: '0.875rem',
            color: '#9ca3af'
          }}>
            {type} • {location}
          </div>
        </div>
        <div style={{
          background: '#374151',
          color: '#e5e7eb',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontSize: '0.875rem',
          fontWeight: 500,
          whiteSpace: 'nowrap'
        }}>
          {period}
        </div>
      </div>
      
      {/* Description */}
      <p style={{
        color: '#d1d5db',
        fontSize: '1rem',
        lineHeight: 1.6,
        marginBottom: '1.5rem'
      }}>
        {description}
      </p>
      
      {/* Achievements */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h4 style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: '#ffffff',
          marginBottom: '0.75rem'
        }}>Key Achievements:</h4>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {achievements.map((achievement, index) => (
            <li key={index} style={{
              color: '#9ca3af',
              fontSize: '0.875rem',
              lineHeight: 1.5,
              marginBottom: '0.5rem',
              paddingLeft: '1rem',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                top: '0.125rem',
                color: '#3b82f6',
                fontSize: '0.75rem'
              }}>•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Technologies */}
      <div>
        <h4 style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#ffffff',
          marginBottom: '0.75rem'
        }}>Technologies Used:</h4>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {technologies.map((tech, index) => (
            <span key={index} style={{
              background: '#374151',
              color: '#e5e7eb',
              padding: '0.375rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 500
            }}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// SkillsShowcase component
function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('Cloud Platforms');
  const [searchTerm, setSearchTerm] = useState('');

  const skillCategories = {
    'Cloud Platforms': {
      icon: '☁️',
      description: 'Leading cloud service providers and platforms',
      skills: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud', 'DigitalOcean', 'Linode'],
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    'Containerization': {
      icon: '📦',
      description: 'Container orchestration and management technologies',
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Podman', 'Docker Compose', 'Helm', 'Kustomize'],
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    'Infrastructure as Code': {
      icon: '🏗️',
      description: 'Infrastructure automation and configuration management',
      skills: ['Terraform', 'Ansible', 'Pulumi', 'Crossplane', 'Chef', 'Puppet'],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    'Virtualization': {
      icon: '🖥️',
      description: 'Virtualization platforms and hypervisor technologies',
      skills: ['VMware vSphere', 'Proxmox', 'Hyper-V', 'KVM', 'Xen', 'VirtualBox', 'QEMU'],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    'Monitoring & Observability': {
      icon: '🔍',
      description: 'System monitoring, logging, and observability tools',
      skills: ['Prometheus', 'Grafana', 'OTel','ELK Stack', 'Jaeger', 'Datadog', 'Zabbix'],
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    },
    'CI/CD & DevOps': {
      icon: '⚙️',
      description: 'Continuous integration, deployment, and DevOps practices',
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'CircleCI', 'ArgoCD', 'FluxCD'],
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
    },
    'Scripting & Automation': {
      icon: '🐍',
      description: 'Programming languages and automation scripting',
      skills: ['Python', 'Bash', 'YAML',],
      gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
    },
    'Security & Compliance': {
      icon: '🔒',
      description: 'Security tools and compliance frameworks',
      skills: ['Vault', 'Wazuh', 'CIS Benchmarks', 'NIST', ],
      gradient: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)'
    }
  };

  const filteredCategories = Object.keys(skillCategories).filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skillCategories[category].skills.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const selectedSkills = skillCategories[selectedCategory];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 2fr',
      gap: 'clamp(2rem, 5vw, 3rem)',
      minHeight: '600px'
    }}>
      {/* Left Sidebar */}
      <div style={{
        background: 'rgba(30, 41, 59, 0.8)',
        border: '1px solid rgba(75, 85, 99, 0.3)',
        borderRadius: '12px',
        padding: 'clamp(1.5rem, 4vw, 2rem)',
        backdropFilter: 'blur(10px)'
      }}>
        {/* Search Bar */}
        <div style={{
          position: 'relative',
          marginBottom: '2rem'
        }}>
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.5)',
              borderRadius: '8px',
              padding: '0.75rem 1rem 0.75rem 2.5rem',
              color: '#ffffff',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(75, 85, 99, 0.5)'}
          />
          <div style={{
            position: 'absolute',
            left: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            fontSize: '1rem'
          }}>
            🔍
          </div>
        </div>

        {/* Filter by Category */}
        <h3 style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: '#ffffff',
          marginBottom: '1rem'
        }}>Filter by Category</h3>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2rem'
        }}>
          {['All', ...Object.keys(skillCategories)].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? 'Cloud Platforms' : category)}
              style={{
                background: category === selectedCategory || (category === 'All' && selectedCategory === 'Cloud Platforms') 
                  ? 'rgba(59, 130, 246, 0.2)' 
                  : 'rgba(75, 85, 99, 0.3)',
                border: category === selectedCategory || (category === 'All' && selectedCategory === 'Cloud Platforms')
                  ? '1px solid #3b82f6'
                  : '1px solid rgba(75, 85, 99, 0.5)',
                color: category === selectedCategory || (category === 'All' && selectedCategory === 'Cloud Platforms')
                  ? '#60a5fa'
                  : '#d1d5db',
                padding: '0.5rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Count */}
        <h3 style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: '#ffffff',
          marginBottom: '1rem'
        }}>{Object.keys(skillCategories).length} Categories</h3>

        {/* Category List */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
          gap: '0.75rem'
        }}>
          {filteredCategories.map(category => {
            const isSelected = category === selectedCategory;
            return (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  background: isSelected ? selectedSkills.gradient : 'rgba(75, 85, 99, 0.3)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '8px',
                  padding: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    opacity: 0.9
                  }}>{skillCategories[category].icon}</div>
                  <div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.25rem'
                    }}>{category}</div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: isSelected ? 'rgba(255, 255, 255, 0.8)' : '#9ca3af',
                      lineHeight: 1.4
                    }}>{skillCategories[category].description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Hint */}
        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <span>↑↓</span>
          <span>to navigate skills</span>
        </div>
      </div>

      {/* Right Content Area */}
      <div style={{
        background: 'rgba(30, 41, 59, 0.8)',
        border: '1px solid rgba(75, 85, 99, 0.3)',
        borderRadius: '12px',
        padding: 'clamp(1.5rem, 4vw, 2rem)',
        backdropFilter: 'blur(10px)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.5rem',
              lineHeight: 1.2
            }}>{selectedCategory}</h2>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#9ca3af',
              lineHeight: 1.5
            }}>{selectedSkills.description}</p>
          </div>
          <div style={{
            background: selectedSkills.gradient,
            color: '#ffffff',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 600
          }}>
            {selectedCategory}
          </div>
        </div>

        {/* Skills Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '2rem'
        }}>
          {selectedSkills.skills.map((skill, index) => (
            <span
              key={index}
              style={{
                background: 'rgba(59, 130, 246, 0.2)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                color: '#60a5fa',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(59, 130, 246, 0.3)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(59, 130, 246, 0.2)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Share Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '2rem'
        }}>
          <button
            onClick={() => navigator.share ? navigator.share({
              title: `${selectedCategory} Skills`,
              text: `Check out my ${selectedCategory} skills: ${selectedSkills.skills.join(', ')}`,
              url: window.location.href
            }) : navigator.clipboard.writeText(window.location.href)}
            style={{
              background: 'rgba(75, 85, 99, 0.3)',
              border: '1px solid rgba(75, 85, 99, 0.5)',
              color: '#d1d5db',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(75, 85, 99, 0.5)';
              e.target.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(75, 85, 99, 0.3)';
              e.target.style.borderColor = 'rgba(75, 85, 99, 0.5)';
            }}
          >
            📤 Share
          </button>
        </div>

        {/* Overview Section */}
        <div style={{
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <div style={{
              fontSize: '1.2rem',
              color: '#3b82f6'
            }}>🏷️</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#ffffff'
            }}>Overview</h3>
          </div>
          <p style={{
            color: '#d1d5db',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            marginLeft: '2rem'
          }}>
            {selectedCategory === 'Cloud Platforms' && 'Comprehensive expertise in leading cloud service providers, enabling scalable and cost-effective infrastructure solutions across public, private, and hybrid cloud environments.'}
            {selectedCategory === 'Containerization' && 'Advanced container orchestration and management capabilities, specializing in Docker and Kubernetes for modern application deployment and scaling.'}
            {selectedCategory === 'Infrastructure as Code' && 'Proficient in infrastructure automation tools and practices, enabling consistent, repeatable, and version-controlled infrastructure deployments.'}
            {selectedCategory === 'Virtualization' && 'Deep knowledge of virtualization platforms and hypervisor technologies for efficient resource utilization and infrastructure optimization.'}
            {selectedCategory === 'Monitoring & Observability' && 'Expertise in comprehensive monitoring solutions, logging, and observability tools to ensure system reliability and performance optimization.'}
            {selectedCategory === 'CI/CD & DevOps' && 'Strong background in continuous integration and deployment practices, enabling rapid and reliable software delivery pipelines.'}
            {selectedCategory === 'Scripting & Automation' && 'Proficient in multiple programming languages and automation scripting for infrastructure management and process optimization.'}
            {selectedCategory === 'Security & Compliance' && 'Knowledge of security best practices and compliance frameworks to ensure infrastructure security and regulatory adherence.'}
          </p>
        </div>

        {/* Key Skills Section */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <div style={{
              fontSize: '1.2rem',
              color: '#10b981'
            }}>⚡</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#ffffff'
            }}>Key Skills</h3>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
            gap: '0.75rem',
            marginLeft: '2rem'
          }}>
            {selectedSkills.skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#d1d5db',
                  fontSize: '0.9rem'
                }}
              >
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10b981'
                }}></div>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Modern Experience Section Component
function ModernExperienceSection({ activeTab, setActiveTab }) {
  const experienceData = {
    current: {
      title: "Experience",
      subtitle: "My professional journey in cloud infrastructure and DevOps engineering",
      mainRole: {
        company: "Angani Limited",
        role: "Cloud Support Engineer",
        period: "Jul 2025 - Sep 2025",
        duration: "3+ Months",
        location: "Nairobi County, Kenya",
        type: "Contract",
        icon: "☁️",
        website: "https://angani.co",
        description: "Delivered timely resolution of infrastructure support tickets, reducing escalations and improving service quality. Allocated and optimized compute resources based on usage patterns and client needs.",
        details: [
          {
            icon: "",
            title: "Infrastructure Support",
            description: "Supported failover testing, hardware diagnostics, and rapid response to outages in production systems"
          },
          {
            icon: "",
            title: "Resource Optimization",
            description: "Helped right-size server builds and deployments to match client SLAs while avoiding resource waste"
          },
          {
            icon: "",
            title: "Performance Monitoring",
            description: "Delivered timely resolution of infrastructure support tickets, reducing escalations and improving service quality"
          }
        ]
      }
    },
    previous: {
      title: "Previous Experience",
      subtitle: "My journey through different roles and organizations",
      experiences: [
        {
          company: "Safaricom PLC",
          role: "Cloud Infrastructure Automation Specialist",
          period: "Oct 2024 - Apr 2025",
          duration: "7 Months",
          location: "Nairobi, Kenya",
          type: "Internship",
          icon: "🏢",
          website: "https://www.safaricom.co.ke",
          description: "Led the development of a single-plane self-service platform for IaaS, deploying Kubernetes clusters on-prem and in public clouds.",
          details: [
            {
              icon: "",
              title: "Infrastructure as Code",
              description: "Developed Infrastructure as Code (IaC) for private and public clouds using Terraform, SDKs, and Ansible"
            },
            {
              icon: "",
              title: "Open Source Adoption",
              description: "Championed open-source adoption in cloud infrastructure (OpenStack, OpenShift, Linux)"
            },
            {
              icon: "",
              title: "CI/CD Implementation",
              description: "Implemented CI/CD pipelines in hybrid cloud environments with automated deployment workflows"
            }
          ]
        },
        {
          company: "ICT Authority",
          role: "IT Infrastructure Engineer",
          period: "May 2024 - Aug 2024",
          duration: "4 Months",
          location: "Homabay • On-site",
          type: "Internship",
          icon: "🏛️",
          website: "https://www.icta.go.ke",
          description: "Provisioned IT infrastructure based on requirements and administered servers across multiple platforms.",
          details: [
            {
              icon: "",
              title: "Server Administration",
              description: "Administered, configured and troubleshooted servers based on Windows, Linux, VMware, OpenStack and RHEV"
            },
            {
              icon: "",
              title: "Hardware Setup",
              description: "Performed racking and mounting of IT infrastructure including servers and storage hardware"
            },
            {
              icon: "",
              title: "Stakeholder Management",
              description: "Liaised with internal users, hardware and software vendors to fine tune systems"
            }
          ]
        }
      ]
    },
    achievements: {
      title: "Key Professional Achievements",
      subtitle: "Highlights of my impact and recognition in the industry",
      achievements: [
        {
          icon: "",
          title: "Performance Recognition",
          description: "Top performer in recent performance reviews with consistent delivery excellence"
        },
        {
          icon: "",
          title: "Cost Optimization",
          description: "Implemented solutions saving organizations significant operational costs through automation"
        },
        {
          icon: "",
          title: "Innovation Leadership",
          description: "Led adoption of modern cloud technologies and DevOps practices across multiple organizations"
        }
      ],
      stats: [
        { number: "36+", label: "Months Experience" },
        { number: "15+", label: "Technologies" },
        { number: "9", label: "Key Responsibilities" },
        { number: "100%", label: "Commitment" }
      ]
    }
  };

  const currentData = experienceData[activeTab];

  return (
    <div style={{
      background: 'rgba(30, 41, 59, 0.8)',
      border: '1px solid rgba(75, 85, 99, 0.3)',
      borderRadius: '20px',
      padding: 'clamp(2rem, 4vw, 3rem)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem'
        }}>{currentData.title}</h2>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#9ca3af',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>{currentData.subtitle}</p>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        {[
          { id: 'current', label: 'Current Role', icon: '💼' },
          { id: 'previous', label: 'Previous Experience', icon: '🕒' },
          { id: 'achievements', label: 'Key Achievements', icon: '🏆' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id 
                ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                : 'rgba(75, 85, 99, 0.3)',
              border: activeTab === tab.id 
                ? '1px solid #3b82f6'
                : '1px solid rgba(75, 85, 99, 0.5)',
              color: activeTab === tab.id ? '#ffffff' : '#d1d5db',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
              borderRadius: '25px',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.target.style.background = 'rgba(75, 85, 99, 0.5)';
                e.target.style.borderColor = '#3b82f6';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.target.style.background = 'rgba(75, 85, 99, 0.3)';
                e.target.style.borderColor = 'rgba(75, 85, 99, 0.5)';
              }
            }}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {activeTab === 'current' && (
        <div>
          {/* Main Role Card */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(75, 85, 99, 0.3)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: '#ffffff',
                fontWeight: 'bold'
              }}>
                {currentData.mainRole.icon}
              </div>
              <div>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}>{currentData.mainRole.role}</h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.25rem',
                  fontSize: '1.125rem',
                  color: '#3b82f6',
                  fontWeight: 600
                }}>
                  <span>🏢</span>
                  <span>{currentData.mainRole.company}</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#9ca3af'
                }}>
                  <span>📍</span>
                  <span>{currentData.mainRole.location}</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                color: '#9ca3af'
              }}>
                <span>📅</span>
                <span>{currentData.mainRole.period}</span>
              </div>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#10b981'
              }}>
                {currentData.mainRole.duration}
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, #3b82f6 0%, #10b981 100%)',
              borderRadius: '1px'
            }}></div>
            
            {currentData.mainRole.details.map((detail, index) => (
              <div key={index} style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(75, 85, 99, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginLeft: '3rem',
                marginBottom: '1.5rem',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(15, 23, 42, 0.8)';
                e.target.style.borderColor = '#3b82f6';
                e.target.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(15, 23, 42, 0.6)';
                e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
                e.target.style.transform = 'translateX(0)';
              }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-3rem',
                  top: '1.5rem',
                  width: '12px',
                  height: '12px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  border: '3px solid rgba(15, 23, 42, 0.8)'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    marginTop: '0.25rem'
                  }}>{detail.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.5rem'
                    }}>{detail.title}</h4>
                    <p style={{
                      color: '#d1d5db',
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}>{detail.description}</p>
                  </div>
                  <div style={{
                    color: '#3b82f6',
                    fontSize: '1.2rem',
                    cursor: 'pointer'
                  }}>⌄</div>
                </div>
              </div>
            ))}
          </div>

          {/* Visit Company Website Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem'
          }}>
            <a
              href={currentData.mainRole.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '25px',
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                e.target.style.borderColor = '#3b82f6';
                e.target.style.color = '#60a5fa';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(15, 23, 42, 0.8)';
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.target.style.color = '#d1d5db';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>↗</span>
              <span>Visit Company Website</span>
            </a>
          </div>
        </div>
      )}

      {activeTab === 'previous' && (
        <div>
          {currentData.experiences.map((exp, index) => (
            <div key={index} style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: '#ffffff'
                  }}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.5rem'
                    }}>{exp.role}</h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.25rem',
                      fontSize: '1rem',
                      color: '#3b82f6',
                      fontWeight: 600
                    }}>
                      <span>🏢</span>
                      <span>{exp.company}</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      color: '#9ca3af'
                    }}>
                      <span>📍</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#9ca3af'
                  }}>
                    <span>📅</span>
                    <span>{exp.period}</span>
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#10b981'
                  }}>
                    {exp.duration}
                  </div>
                </div>
              </div>
              
              <p style={{
                color: '#d1d5db',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                fontSize: '0.95rem'
              }}>{exp.description}</p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem'
              }}>
                {exp.details.map((detail, detailIndex) => (
                  <div key={detailIndex} style={{
                    background: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    padding: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(30, 41, 59, 0.8)';
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(30, 41, 59, 0.6)';
                    e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
                  }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}>
                      <div style={{
                        fontSize: '1.25rem',
                        marginTop: '0.125rem'
                      }}>{detail.icon}</div>
                      <div>
                        <h5 style={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          marginBottom: '0.25rem'
                        }}>{detail.title}</h5>
                        <p style={{
                          color: '#d1d5db',
                          fontSize: '0.875rem',
                          lineHeight: 1.5
                        }}>{detail.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visit Company Website Button */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1.5rem'
              }}>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '25px',
                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.color = '#60a5fa';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(15, 23, 42, 0.8)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                    e.target.style.color = '#d1d5db';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>↗</span>
                  <span>Visit Company Website</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'achievements' && (
        <div>
          {/* Achievement Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {currentData.achievements.map((achievement, index) => (
              <div key={index} style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(75, 85, 99, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(15, 23, 42, 0.9)';
                e.target.style.borderColor = '#3b82f6';
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(15, 23, 42, 0.8)';
                e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginTop: '0.25rem'
                  }}>{achievement.icon}</div>
                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.5rem'
                    }}>{achievement.title}</h4>
                    <p style={{
                      color: '#d1d5db',
                      fontSize: '0.95rem',
                      lineHeight: 1.5
                    }}>{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 480 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {currentData.stats.map((stat, index) => (
              <div key={index} style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(75, 85, 99, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(15, 23, 42, 0.9)';
                e.target.style.borderColor = '#10b981';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(15, 23, 42, 0.8)';
                e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
                e.target.style.transform = 'scale(1)';
              }}
              >
                <div style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: '#10b981',
                  marginBottom: '0.5rem'
                }}>{stat.number}</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  fontWeight: 500
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home; 