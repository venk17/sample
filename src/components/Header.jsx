import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X, Globe, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showTopBar, setShowTopBar] = useState(true);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const navigate = useNavigate();

  // 🔁 CHANGE THIS ADDRESS ANYTIME
  const locationText = "Chennai, Tamil Nadu, India";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Services data with routes
  const services = [
    { 
      name: "Business & Market Intelligence", 
      path: "/services/business-market-intelligence",
      description: "Data-driven insights for strategic decisions"
    },
    { 
      name: "Brand Strategy & Premium Positioning", 
      path: "/services/brand-strategy",
      description: "Elevate your brand in competitive markets"
    },
    { 
      name: "Digital Experience & Technology", 
      path: "/services/digital-experience",
      description: "Transform digital touchpoints"
    },
    { 
      name: "Growth, Marketing & Sales Systems", 
      path: "/services/growth-marketing",
      description: "Scalable revenue growth systems"
    },
    { 
      name: "Organisation & Capability Building", 
      path: "/services/organisation-capability",
      description: "Build high-performing teams"
    },
    { 
      name: "AI & Automation Enablement", 
      path: "/services/ai-automation",
      description: "Leverage AI for efficiency"
    }
  ];

  const navigation = [
    { name: "Our Work", path: "/work" },
    { 
      name: "DD Insights", 
      dropdown: true,
      items: [
        { name: "Blog Articles", path: "/insights/blog" },
        { name: "Case Studies", path: "/insights/cases" },
        { name: "Industry Reports", path: "/insights/reports" }
      ]
    },
    { 
      name: "What We Do", 
      dropdown: true,
      items: [
        { 
          name: "View All Services", 
          path: "/services",
          isHighlighted: true
        },
        ...services
      ]
    },
    { 
      name: "Who We Are", 
      dropdown: true,
      items: [
        { name: "About Us", path: "/about" },
        { name: "Our Team", path: "/team" },
        { name: "Careers", path: "/careers" }
      ]
    },
    { 
      name: "More", 
      dropdown: true,
      items: [
        { name: "Resources", path: "/resources" },
        { name: "FAQs", path: "/faqs" },
        { name: "Contact", path: "/contact" }
      ]
    },
  ];

  // Toggle mobile dropdown
  const toggleMobileDropdown = (dropdownName) => {
    setMobileOpenDropdown(mobileOpenDropdown === dropdownName ? null : dropdownName);
  };

  // Handle mouse enter for desktop
  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = (e) => {
    const relatedTarget = e.relatedTarget;
    if (!relatedTarget || !relatedTarget.closest('.dropdown-container')) {
      setTimeout(() => {
        setActiveDropdown(null);
      }, 200);
    }
  };

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Handle service click
  const handleServiceClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}
      `}
    >
      {/* 🔝 TOP BAR (CLOSEABLE) */}
      {showTopBar && (
        <div
          className={`border-b transition-colors duration-300
            ${isScrolled ? "border-gray-200" : "border-white/20"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              className={`flex justify-between items-center h-10 sm:h-12 text-xs sm:text-sm gap-2 sm:gap-4
                ${isScrolled ? "text-gray-600" : "text-white"}
              `}
            >
              {/* Location info - hidden on very small screens */}
              <div className="flex items-center gap-1 sm:gap-2">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate max-w-[150px] sm:max-w-none">{locationText}</span>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowTopBar(false)}
                className="opacity-70 hover:opacity-100 transition flex-shrink-0"
                aria-label="Close top bar"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`text-xl sm:text-2xl font-bold leading-none
              ${isScrolled ? "text-black" : "text-white"}`}>
              YourBrand
            </div>
            <div className={`text-base sm:text-lg font-normal ${isScrolled ? "text-gray-600" : "text-white"}`}>
              Digital
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative dropdown-container"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                ref={el => dropdownRefs.current[item.name] = el}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 font-medium transition-colors whitespace-nowrap
                        ${isScrolled
                          ? "text-gray-700 hover:text-black"
                          : "text-white hover:opacity-80"}
                      `}
                      onClick={() => setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )}
                    >
                      {item.name}
                      <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`} />
                    </button>

                    {/* DROPDOWN MENU */}
                    {activeDropdown === item.name && item.items && (
                      <div 
                        className={`absolute top-full left-0 mt-2 bg-white shadow-xl rounded-md p-4 sm:p-6 
                          transition-all duration-200 dropdown-container z-50
                          ${item.name === "What We Do" ? "min-w-80 sm:min-w-96" : "min-w-56 sm:min-w-64"}
                        `}
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Special styling for "What We Do" dropdown */}
                        {item.name === "What We Do" ? (
                          <div className="space-y-3 sm:space-y-4">
                            <p className="text-sm font-semibold text-gray-900 mb-2">
                              Our Services
                            </p>
                            <ul className="space-y-2 sm:space-y-3">
                              {item.items.map((service, index) => {
                                if (service.isHighlighted) {
                                  return (
                                    <li key={index} className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-100">
                                      <Link
                                        to={service.path}
                                        className="text-sm font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        {service.name} <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                      </Link>
                                    </li>
                                  );
                                }
                                return (
                                  <li key={index}>
                                    <button
                                      onClick={() => handleServiceClick(service.path)}
                                      className="text-sm text-gray-600 hover:text-black transition-colors duration-150
                                        border-l-2 border-transparent hover:border-black pl-2 sm:pl-3 py-1 sm:py-2 block w-full text-left
                                        hover:bg-gray-50 rounded-r-md"
                                    >
                                      <div className="font-medium text-sm sm:text-base">{service.name}</div>
                                      {service.description && (
                                        <div className="text-xs text-gray-400 mt-1">
                                          {service.description}
                                        </div>
                                      )}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : (
                          // Default dropdown for other items
                          <div className="space-y-2 sm:space-y-3">
                            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                              {item.name}
                            </p>
                            <ul className="space-y-1 sm:space-y-2">
                              {item.items.map((subItem, index) => (
                                <li key={index}>
                                  <Link
                                    to={subItem.path}
                                    className="text-sm text-gray-600 hover:text-black transition-colors block py-1 sm:py-2 px-2
                                      hover:bg-gray-50 rounded-md"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  // Regular link (no dropdown)
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors whitespace-nowrap
                      ${isScrolled
                        ? "text-gray-700 hover:text-black"
                        : "text-white hover:opacity-80"}
                    `}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-all font-medium whitespace-nowrap
                ${
                  isScrolled
                    ? "border-black text-black hover:bg-black hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-black"
                }
              `}
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`lg:hidden mobile-menu-button ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setMobileOpenDropdown(null);
            }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" 
                 onClick={() => setIsMobileMenuOpen(false)} />
            
            {/* Menu Panel */}
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl z-50 lg:hidden mobile-menu overflow-y-auto">
              <div className="p-6 h-full">
                {/* Close button */}
                <div className="flex justify-between items-center mb-6">
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="text-2xl font-bold text-black">YourBrand</div>
                    <div className="text-lg font-normal text-gray-600">Digital</div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-500 hover:text-black"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation items */}
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 last:border-0">
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className="flex justify-between items-center w-full py-4 text-gray-700 hover:text-black transition-colors text-left"
                          >
                            <span className="font-medium">{item.name}</span>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                              mobileOpenDropdown === item.name ? "rotate-180" : ""
                            }`} />
                          </button>
                          
                          {/* Mobile dropdown content */}
                          {mobileOpenDropdown === item.name && item.items && (
                            <div className="pl-4 pb-4 animate-in slide-in-from-top-3 duration-200">
                              {item.name === "What We Do" ? (
                                <>
                                  <Link
                                    to="/services"
                                    className="block text-sm font-semibold text-blue-600 mb-4 pb-2 border-b border-gray-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    View All Services →
                                  </Link>
                                  <ul className="space-y-2">
                                    {item.items
                                      .filter(service => !service.isHighlighted)
                                      .map((service, index) => (
                                        <li key={index}>
                                          <button
                                            onClick={() => handleServiceClick(service.path)}
                                            className="text-sm text-gray-500 hover:text-black transition-colors block py-3 pl-3 border-l border-gray-200 hover:border-black w-full text-left"
                                          >
                                            <div className="font-medium">{service.name}</div>
                                            {service.description && (
                                              <div className="text-xs text-gray-400 mt-1">
                                                {service.description}
                                              </div>
                                            )}
                                          </button>
                                        </li>
                                      ))}
                                  </ul>
                                </>
                              ) : (
                                <ul className="space-y-2">
                                  {item.items.map((subItem, index) => (
                                    <li key={index}>
                                      <Link
                                        to={subItem.path}
                                        className="text-sm text-gray-500 hover:text-black transition-colors block py-3"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        // Regular mobile link (no dropdown)
                        <Link
                          to={item.path}
                          className="flex justify-between items-center w-full py-4 text-gray-700 hover:text-black transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  className="mt-8 block text-center bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;