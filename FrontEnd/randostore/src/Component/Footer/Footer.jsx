import React from 'react'
import footer_logo from "../Assets/logo_big.png"
import instagram from "../Assets/instagram_icon.png"
import Watsapp from "../Assets/whatsapp_icon.png"
import pinterest from "../Assets/pintester_icon.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 p-10">
  <div className="container mx-auto flex flex-wrap">
    {/* Quick Links */}
    <div className="w-full md:w-1/4">
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <ul className="list-none p-0">
        <li className="mb-2">
          <a href="#" className="hover:text-gray-500">Home</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-500">Shop</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-500">Categories</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-500">Contact</a>
        </li>
      </ul>
    </div>

    {/* Contact Information */}
    <div className="w-full md:w-1/4">
      <h3 className="text-xl font-semibold mb-4">Contact</h3>
      <p className="mb-2">123 Street, City</p>
      <p className="mb-2">Email: info@example.com</p>
      <p>Phone: +1 234 567 890</p>
    </div>

    {/* Social Media Links */}
    <div className="w-full md:w-1/4">
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="text-2xl hover:text-gray-500">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-2xl hover:text-gray-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-2xl hover:text-gray-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-2xl hover:text-gray-500">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </div>

    {/* Newsletter Subscription */}
    <div className="w-full md:w-1/4">
      <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-3 mr-2 w-2/3"
        />
        <button className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-100">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
    <p>&copy; 2023 Your E-Commerce. All rights reserved.</p>
    <div className="flex space-x-4">
      <a href="#" className="text-gray-500 hover:text-white">
        Terms of Service
      </a>
      <a href="#" className="text-gray-500 hover:text-white">
        Privacy Policy
      </a>
    </div>
  </div>
</footer>
  )
}

export default Footer