import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaInstagram className="h-6 w-6" />,
      href: "https://instagram.com/ellvrrl._",
      label: "Instagram"
    },
    {
      id: 2,
      icon: <FaGithub className="h-6 w-6" />,
      href: "https://github.com/ellvrrl",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
                aria-label={social.label}
              >
                <div className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} roboFarm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;