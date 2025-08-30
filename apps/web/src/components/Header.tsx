import React from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="fixed top-0 right-0 left-0 h-[4.2rem] md:h-[5rem] px-4 flex items-center justify-between 
                       bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-700 border-b dark:border-gray-700 
                       sm:px-8 md:px-12 transition-colors duration-300"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-lg">
          <div className="w-4 h-4 bg-white dark:bg-gray-200 rounded-sm"></div>
        </div>
        <span className="text-[1.8rem] md:text-[2.2rem] font-bold text-black dark:text-white">
          <Link to="/app">ahead</Link>
        </span>
      </div>

      {/* Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {navigation.map((item) => (
          <Link
            to={item.href}
            key={item.href}
            className="font-medium cursor-pointer text-[1.2rem] md:text-[1.3rem] text-black dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Auth + Dark Mode */}
      <div className="flex items-center gap-4 md:gap-6 relative">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-colors duration-300 cursor-pointer relative -top-[2px] sm:top-0"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer rounded-sm font-medium text-[1.2rem] text-black dark:text-white transition-colors duration-200">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer rounded-lg text-white font-medium text-[1.2rem] transition-colors duration-200">
            Start Free Trial
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <button aria-label="Open menu">
            <Menu className="w-8 h-8 text-black dark:text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
