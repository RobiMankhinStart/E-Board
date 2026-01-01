import React from "react";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 font-inter">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">cyber</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
          <div className="flex gap-6 mt-28">
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTiktok />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Bonus program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Gift cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Credit and payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Service contracts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Non-cash account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Payment
              </a>
            </li>
          </ul>
        </div>

        {/* Assistance to the buyer */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Assistance to the buyer
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Find an order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Exchange and return of goods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Guarantee
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Frequently asked questions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of use of the site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
