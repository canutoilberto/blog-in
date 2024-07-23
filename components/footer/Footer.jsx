import React from "react";

const Footer = () => {
  return (
    <div className="mt-[100px]">
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Neno&apos;s</h2>
              <p className="mt-2 text-gray-400">
                Craft narratives that ignite inspiration, knowledge, and
                entertainment.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400">
                Início
              </a>
              <a href="#" className="text-gray-400">
                Blog
              </a>
              <a href="#" className="text-gray-400">
                Quem somos
              </a>
              <a href="#" className="text-gray-400">
                Contato
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Neno&apos;s. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
