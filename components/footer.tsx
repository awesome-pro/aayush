import React from 'react';
//import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Medical App Info */}
          <div>
            <h2 className="text-blue-400 text-lg font-bold mb-4">Medical App</h2>
            <p className="text-gray-400 leading-relaxed">
              <strong>Phone:</strong> +1 232 2321 4543<br />
              <strong>Email:</strong> info@medical.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg text-gray-100 font-semibold mb-4">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">➡️</span> About Us</a></li>
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">➡️</span> Our Pricing</a></li>
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">➡️</span> Our Gallery</a></li>
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">➡️</span> Appointment</a></li>
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">➡️</span> Privacy Policy</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h2 className="text-lg text-gray-100 font-semibold mb-4">Specialties</h2>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">🩺</span> Orthology</a></li>
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">🧠</span> Neurology</a></li>
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">🦷</span> Dental Care</a></li>
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">👁️</span> Ophthalmology</a></li>
              <li><a href="#" className="hover:text-white flex items-center"><span className="mr-2">❤️</span> Cardiology</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h2 className="text-lg text-gray-100 font-semibold mb-4">Connect With Us</h2>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-full p-3 transition-all"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-full p-3 transition-all"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-full p-3 transition-all"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-full p-3 transition-all"><FaYoutube size={20} /></a>
            </div> */}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">&copy; 2024 <strong>Medical Application</strong>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
