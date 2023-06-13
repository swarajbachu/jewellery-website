import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-gray-200 px-4 py-8 md:px-8">
      <div className="container flex flex-col justify-center items-center mx-auto">
        <div className='max-w-screen-xl'>

        <div className="lg:flex justify-center gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
            <a href='mailto:cs@jhunjhunwaladiamonds.com'>Email – cs@jhunjhunwaladiamonds.com</a>
            <p>Office Address –</p>
            <p>Diamond Trade Centre, Mahidharpura, Surat, Gujarat, 395003</p>
            <p>Telephone – +91 6387604561</p>
          </div>
          <div className="lg:col-span-3 lg:mt-0 mt-5">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://instagram.com/jhunjhunwala_diamonds?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" className="text-xl">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100093413652928&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-xl">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/company/jhunjhunwala-diamonds/" target="_blank" rel="noopener noreferrer" className="text-xl">
                <FaLinkedin />
              </a>
              <span className="text-xl">
                <FaTwitter />
              </span>
              <span className="text-xl">
                <FaYoutube />
              </span>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-8 text-center">
          <p>© 2023 Jhunjhunwala Diamonds. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
