import { useState, useEffect } from 'react';
import { Wrench, Mail, MapPin, Phone } from 'lucide-react';

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .hero-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a202c 0%, #2b4c7e 50%, #1a202c 100%);
          position: relative;
          overflow: hidden;
        }
        
        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
        }
        
        .blob-1 {
          width: 300px;
          height: 300px;
          background: #3b82f6;
          top: -150px;
          right: -150px;
          animation: pulse 3s ease-in-out infinite;
        }
        
        .blob-2 {
          width: 400px;
          height: 400px;
          background: #06b6d4;
          bottom: -200px;
          left: -200px;
          animation: pulse 3s ease-in-out infinite 1s;
        }
        
        .blob-3 {
          width: 250px;
          height: 250px;
          background: #0ea5e9;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 3s ease-in-out infinite 2s;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }
        
        .logo-container {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          transition: all 0.3s ease;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .progress-bar {
          height: 8px;
          background: #374151;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          width: 75%;
          border-radius: 4px;
          transition: width 2s ease-out;
        }
        
        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        
        .icon-blue { background: rgba(59, 130, 246, 0.2); }
        .icon-cyan { background: rgba(6, 182, 212, 0.2); }
        .icon-sky { background: rgba(14, 165, 233, 0.2); }
        
        .pulsing-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .dot-blue { background: #60a5fa; }
        .dot-cyan { background: #22d3ee; animation-delay: 0.3s; }
        .dot-sky { background: #0ea5e9; animation-delay: 0.7s; }
        
        .btn-gradient {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border: none;
          transition: all 0.3s ease;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 500;
          cursor: pointer;
        }
        
        .btn-gradient:hover {
          background: linear-gradient(135deg, #2563eb, #0891b2);
          transform: translateY(-1px);
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
        }
        
        .footer {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          z-index: 1000;
        }
        
        .form-control-custom {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          flex: 1;
        }
        
        .form-control-custom::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .form-control-custom:focus {
          background: rgba(255, 255, 255, 0.2);
          border-color: #3b82f6;
          outline: none;
          box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);
          color: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: -0.5rem;
        }
        
        .col {
          flex: 1;
          padding: 0.5rem;
          min-width: 300px;
        }
        
        .text-center { text-align: center; }
        .text-white { color: white; }
        .text-light { color: #d1d5db; }
        .d-flex { display: flex; }
        .align-items-center { align-items: center; }
        .justify-content-center { justify-content: center; }
        .gap-2 { gap: 0.5rem; }
        .mb-5 { margin-bottom: 3rem; }
        .mb-4 { margin-bottom: 1.5rem; }
        .mb-3 { margin-bottom: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .me-2 { margin-right: 0.5rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .fw-bold { font-weight: 700; }
        .fw-semibold { font-weight: 600; }
        .fw-medium { font-weight: 500; }
        .display-1 { font-size: 5rem; line-height: 1; }
        .display-4 { font-size: 2.5rem; }
        .lead { font-size: 1.25rem; line-height: 1.6; }
        .small { font-size: 0.875rem; }
        
        @media (max-width: 768px) {
          .display-1 { font-size: 3rem; }
          .display-4 { font-size: 2rem; }
          .row { flex-direction: column; }
          .col { min-width: auto; }
        }
      `}</style>
      
      <div className="hero-bg d-flex align-items-center">
        {/* Background blobs */}
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
        
        <div className="container" style={{position: 'relative', zIndex: 10}}>
          <div className={`text-center ${animate ? 'animate-fade-in' : ''}`}>
            
            {/* Logo Section */}
            <div className="mb-5">
              <div className="logo-container">
                <Wrench size={40} color="white" />
              </div>
              <h1 className="display-1 fw-bold text-white mb-4">
                <span className="gradient-text">ElanDrive</span>
                <span className="text-white"> Labs</span>
              </h1>
            </div>
            
            {/* Main Message */}
            <div className="mb-5">
              <h2 className="display-4 fw-semibold text-white mb-4">
                Something Amazing is Coming Soon
              </h2>
              <p className="lead text-light mb-5 mx-auto" style={{maxWidth: '600px'}}>
                We're working hard to bring you an innovative experience. Our team is crafting 
                something special that will transform the way you think about technology.
              </p>
              
              {/* Progress Bar */}
              <div className="mx-auto mb-5" style={{maxWidth: '400px'}}>
                <div className="d-flex justify-content-center mb-2" style={{justifyContent: 'space-between'}}>
                  <small className="text-light">Progress</small>
                  <small className="text-light">75%</small>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="row mb-5">
              <div className="col">
                <div className="glass-card">
                  <div className="feature-icon icon-blue">
                    <div className="pulsing-dot dot-blue"></div>
                  </div>
                  <h5 className="text-white fw-semibold mb-2">Innovation</h5>
                  <p className="text-light small mb-0">Cutting-edge solutions for tomorrow's challenges</p>
                </div>
              </div>
              
              <div className="col">
                <div className="glass-card">
                  <div className="feature-icon icon-cyan">
                    <div className="pulsing-dot dot-cyan"></div>
                  </div>
                  <h5 className="text-white fw-semibold mb-2">Excellence</h5>
                  <p className="text-light small mb-0">Commitment to quality and user experience</p>
                </div>
              </div>
              
              <div className="col">
                <div className="glass-card">
                  <div className="feature-icon icon-sky">
                    <div className="pulsing-dot dot-sky"></div>
                  </div>
                  <h5 className="text-white fw-semibold mb-2">Future</h5>
                  <p className="text-light small mb-0">Building the technology of tomorrow, today</p>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="glass-card mb-5">
              <h5 className="text-white fw-semibold mb-4">Get in Touch</h5>
              <div className="row">
                <div className="col">
                  <div className="d-flex align-items-center justify-content-center text-light mb-3">
                    <Mail size={20} className="me-2" style={{color: '#60a5fa'}} />
                    <span>info@elandrivelabs.com</span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center justify-content-center text-light mb-3">
                    <Phone size={20} className="me-2" style={{color: '#22d3ee'}} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center justify-content-center text-light mb-3">
                    <MapPin size={20} className="me-2" style={{color: '#0ea5e9'}} />
                    <span>Montréal</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mx-auto" style={{maxWidth: '400px'}}>
              <p className="text-light mb-3">Be the first to know when we launch</p>
              <div className="d-flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="form-control-custom"
                />
                <button className="btn-gradient">
                  Notify Me
                </button>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Footer */}
        <div className="footer">
          <small style={{color: '#9ca3af'}}>© 2025 ElanDrive Labs. All rights reserved.</small>
        </div>
      </div>
    </>
  );
}

export default App;