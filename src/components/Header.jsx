import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Globe } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showTopBar, setShowTopBar] = useState(true);

  // 🔁 CHANGE THIS ADDRESS ANYTIME
  const locationText = "Chennai, Tamil Nadu, India";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Our Work" },
    { name: "DD Insights", dropdown: true },
    { name: "What We Do", dropdown: true },
    { name: "Who We Are", dropdown: true },
    { name: "More", dropdown: true },
  ];

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
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`flex justify-end items-center h-12 text-sm gap-4
                ${isScrolled ? "text-gray-600" : "text-white"}
              `}
            >
              <Globe className="w-4 h-4" />

              {/* LOCATION TEXT */}
              <span>{locationText}</span>

              <ChevronDown className="w-4 h-4" />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowTopBar(false)}
                className="opacity-70 hover:opacity-100 transition"
                aria-label="Close top bar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div
            className={`text-2xl font-bold leading-none
              ${isScrolled ? "text-black" : "text-white"}
            `}
          >
            <div>YourBrand</div>
            <div className="text-lg font-normal">Digital</div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 font-medium transition-colors
                    ${isScrolled
                      ? "text-gray-700 hover:text-black"
                      : "text-white"}
                  `}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* DUMMY DROPDOWN */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl rounded-md p-4">
                    <p className="text-xs text-gray-400 mb-2">
                      Dummy Content
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="hover:text-black cursor-pointer">
                        Option One
                      </li>
                      <li className="hover:text-black cursor-pointer">
                        Option Two
                      </li>
                      <li className="hover:text-black cursor-pointer">
                        Option Three
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`px-6 py-2 rounded-full border transition-all
                ${
                  isScrolled
                    ? "border-black text-black hover:bg-black hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-black"
                }
              `}
            >
              Contact Us
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`lg:hidden ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-lg p-6 mb-4">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center py-3 text-gray-700"
              >
                {item.name}
                {item.dropdown && <ChevronDown />}
              </div>
            ))}
            <a
              href="#contact"
              className="mt-4 block text-center bg-black text-white py-3 rounded-full"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
