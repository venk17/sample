import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ScrollProgressBar from "./ScrollProgressBar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showTopBar, setShowTopBar] = useState(true);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const locationText = "India";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMobileMenuOpen]);

  const services = [
    { name: "Business & Market Intelligence", path: "/services/business-market-intelligence" },
    { name: "Brand Strategy & Premium Positioning", path: "/services/brand-strategy" },
    { name: "Digital Experience & Technology", path: "/services/digital-experience" },
    { name: "Growth, Marketing & Sales Systems", path: "/services/growth-marketing" },
    { name: "Organisation & Capability Building", path: "/services/organisation-capability" },
    { name: "AI & Automation Enablement", path: "/services/ai-automation" }
  ];

  const navigation = [
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
      items: [{ name: "View All Services", path: "/services", isHighlighted: true }, ...services]
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
  ];

  const toggleMobileDropdown = (name) =>
    setMobileOpenDropdown(mobileOpenDropdown === name ? null : name);

  const handleMobileClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* TOP BAR */}
      {showTopBar && (
        <div className={`border-b ${isScrolled ? "border-gray-200" : "border-white/20"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`flex justify-between items-center h-10 text-sm ${isScrolled ? "text-gray-600" : "text-white"}`}>
              <div className="flex items-center gap-2">
                <Globe size={14} />
                {locationText}
                <ChevronDown size={14} />
              </div>
              <button onClick={() => setShowTopBar(false)}>
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>YourBrand</span>
            <span className={`${isScrolled ? "text-gray-600" : "text-white"}`}>Digital</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
              >
                <button
                  className={`flex items-center gap-1 font-medium ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                </button>

                {/* DROPDOWN */}
                {activeDropdown === item.name && item.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-3 min-w-[240px] rounded-md p-5 shadow-xl z-50
                    ${
                      isScrolled
                        ? "bg-white text-black"
                        : "bg-white/10 backdrop-blur-2xl border border-white/20 text-white"
                    }`}
                  >
                    {item.name === "What We Do" && (
                      <Link
                        to="/services"
                        onClick={() => setActiveDropdown(null)}
                        className={`block mb-3 font-semibold ${
                          isScrolled ? "text-blue-600" : "text-white"
                        }`}
                      >
                        View All Services →
                      </Link>
                    )}

                    <ul className="space-y-2">
                      {item.items.map(
                        (sub, i) =>
                          !sub.isHighlighted && (
                            <li key={i}>
                              <Link
                                to={sub.path}
                                onClick={() => setActiveDropdown(null)}   // ✅ FIX
                                className={`block px-2 py-1 rounded transition
                                  ${
                                    isScrolled
                                      ? "text-gray-700 hover:bg-gray-100 hover:text-black"
                                      : "text-white/90 hover:bg-white/10 hover:text-white"
                                  }`}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className={`hidden lg:block border px-4 py-1.5 rounded-full ${
              isScrolled
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Contact Us
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className={`lg:hidden ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/40 z-40 lg:hidden">
            <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">

              {navigation.map((item) => (
                <div key={item.name} className="border-b py-3">
                  <button
                    onClick={() => toggleMobileDropdown(item.name)}
                    className="flex justify-between w-full text-left font-medium"
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </button>

                  {mobileOpenDropdown === item.name && (
                    <div className="mt-3 space-y-2 pl-3">
                      {item.items.map((sub, i) => (
                        <button
                          key={i}
                          onClick={() => handleMobileClick(sub.path)}
                          className="block text-sm text-gray-600 text-left"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-6 text-center bg-black text-white py-2 rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      <ScrollProgressBar headerRef={headerRef} />
    </header>
  );
};

export default Header;
