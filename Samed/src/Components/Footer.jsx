import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer bg-sky-700">
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-6 md:mx-16 p-6 text-white font-medium">
        
        <div className="Mission">
          <h1 className="font-bold text-2xl mb-2">Our Mission</h1>
          <p>
            To provide safe, reliable, and effective pharmaceutical products
            that support the health and well-being of every customer.
          </p>

          <div className="contact mt-6">
            <h1 className="font-bold text-2xl mb-2">Our Contact</h1>
            <ul className="space-y-1">
              <li>Bamburi house ground floor</li>
              <li>Mombasa Bamburi</li>
              <li>
                <strong>Phone:</strong> 07xxxxxxx
              </li>
              <li>
                <strong>Address:</strong> 6558-00, Mombasa
              </li>
              <li>
                <strong>Email:</strong> samed@info
              </li>
            </ul>

           
            <div className="flex space-x-4 mt-4 text-white text-xl">
              <a href="/" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="/" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="/" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="/" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

    
        <div className="Useful Links">
          <h1 className="font-bold text-2xl mb-2">Useful Links</h1>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Delivery information</li>
          </ul>

          <div className="mt-6">
            <h1 className="font-bold text-xl mb-2">Complaints</h1>
            <ul className="space-y-1">
              <li>Report Issue</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        <div className="Partner">
          <h1 className="font-bold text-2xl mb-2">Partner</h1>
          <img
            src="https://iili.io/FkenoVs.md.png"
            alt="Partner Logo"
            className="w-auto h-40 md:h-60 rounded transition-transform duration-300 hover:scale-150"
          />
        </div>
      </div>

      
      <div className="Separator w-full border-t border-white mx-6 md:mx-16"></div>

      
      <div className="mx-6 md:mx-16 text-white py-5 font-bold text-center md:text-left">
        ©2025 www.Samedpharmacy.co.ke - All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
