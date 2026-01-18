import { ArrowRight, Linkedin, Facebook, Twitter, Instagram, Youtube, Globe, ChevronDown } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Glassdoor', icon: Globe, href: '#' }
  ];

  const legalLinks = [
    'Privacy',
    'Legal',
    'Cookie'
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Deloitte Digital */}
            <div>
              <h3 className="text-2xl font-normal mb-6">Deloitte Digital</h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-lg mb-8">
                We create great brand experiences by combining the powers of creativity, technology, and 
                consultancy. Why? To make great things happen for our clients, communities, and beyond.
              </p>
            </div>

            {/* Right Column - Deloitte */}
            <div>
              <h3 className="text-2xl font-normal mb-6">Deloitte</h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-lg mb-8">
                Alongside all of Deloitte, we foster the connections necessary to shape a better future for our clients, our culture, 
                our society, and our planet.
              </p>
              
                     <a
  href="#"
  className="
    group box-border
    inline-flex items-center justify-center
    px-10 py-4
    rounded-full
    bg-black
    text-white
    tracking-[0.25em]
    text-xs
    font-medium
    transition-all duration-300 ease-out
    border border-transparent hover:border-2

    hover:text-[#3b42c4]
    hover:border-[#3b42c4]
  "
>
  VISIT DELOITTE.COM

  <span className="ml-3 text-2xl font-light transition-transform duration-300 group-hover:translate-x-2">
    →
  </span>
</a>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Left Side - Social and Location */}
            <div className="flex flex-col gap-8">
              {/* Social Links */}
              <div>
                <div className="text-sm font-medium tracking-wider uppercase text-gray-400 mb-4">
                  FOLLOW US TO CREATE GREAT IMPACT
                </div>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-200"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Location Selector */}
            <div>
              <div className="text-sm font-medium tracking-wider uppercase text-gray-400 mb-4">
                CHANGE LOCATION
              </div>
              <div className="flex items-center gap-2 text-white cursor-pointer hover:text-gray-300 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="font-medium">UNITED STATES</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-gray-800">
            {/* Legal Links */}
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              Copyright © 2026 Deloitte Global Services Limited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;