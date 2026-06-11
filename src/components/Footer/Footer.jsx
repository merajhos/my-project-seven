import React from 'react';
import {  FaSquareFacebook, FaSquareXTwitter, FaTelegram} from 'react-icons/fa6';

const Footer = () => {
     return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        
        <h2 className="text-xl font-bold mb-2">KeenKeeper</h2>

        <p className="text-sm text-gray-300 mb-4">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.       
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4">
          <span className="w-8 h-8 bg-white text-green-900 flex items-center justify-center rounded-full"><FaSquareFacebook /></span>
          <span className="w-8 h-8 bg-white text-green-900 flex items-center justify-center rounded-full"><FaSquareXTwitter
           /></span>
          <span className="w-8 h-8 bg-white text-green-900 flex items-center justify-center rounded-full"><FaTelegram /></span>
        </div>

        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">

          <p>
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;