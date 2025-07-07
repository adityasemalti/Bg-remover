import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} RemoveBG App. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:underline text-sm">Privacy Policy</a>
          <a href="#" className="hover:underline text-sm">Terms of Service</a>
          <a href="#" className="hover:underline text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
