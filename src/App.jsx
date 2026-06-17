import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { Phone, Scale, Menu, X } from "lucide-react";
import { useState } from "react";

// Components
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Navbar Component
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1 transition"
      : "hover:text-yellow-300 transition";

  return (
    <nav className="bg-[#1a237e] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-yellow-400" />
            <div>
              <h1 className="text-xl font-bold">J. Paul Stephen Raja</h1>
              <p className="text-xs text-yellow-400">M.A., B.L.</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>

            <NavLink to="/services" className={navLinkClasses}>
              Services
            </NavLink>

            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm">
              <Phone className="h-4 w-4" />
              <span>8300885003</span>
            </div>

            <button className="bg-yellow-400 text-[#1a237e] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md hover:bg-white/10"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3 text-sm font-medium">
              <NavLink
                to="/"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
              <div className="pt-2 border-t border-white/5 mt-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">8300885003</span>
                </div>
                <button className="bg-yellow-400 text-[#1a237e] px-3 py-1 rounded-md font-semibold hover:bg-yellow-300 transition">
                  Book
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#0a0f2e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">J.Paul Stephen Raja</h3>
            <p className="text-gray-400">M.A., B.L.</p>
            <p className="text-gray-400 mt-2">
              Professional Legal Services You Can Trust
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Civil Law</li>
              <li>Criminal Law</li>
              <li>Family Law</li>
              <li>Property Law</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>8300885003</li>
              <li>jsr0637@gmail.com</li>
              <li>Vallioor, Tirunelveli</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 J.Paul Stephen Raja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;
