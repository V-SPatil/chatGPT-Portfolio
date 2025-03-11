import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Vishal's Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
        <li><a href="#gallery" className="hover:text-blue-500">Gallery</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
};
