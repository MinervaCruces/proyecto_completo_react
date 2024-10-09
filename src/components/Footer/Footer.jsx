import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="piepagina">
        <div className='footer-logo'>
            <img className='logo-footer' src="../../../Public/Logo.png" alt="Logo"/>
        </div>
        <p className="footer-text">
           Murci Store.
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
             Facebook
            
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
             Instagram
            
          </a>
          <a
            href="https://web.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
             Whatsapp
            
          </a>
          
        </p>
      </footer>
    </>
  );
}