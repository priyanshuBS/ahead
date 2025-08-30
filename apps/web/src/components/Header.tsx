import React from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-[4.5rem] sm:h-[5rem] fixed bg-gray-200 min-w-full px-4 sm:px-10">
      <div className="text-[2.1rem] sm:text-4xl text-green-700 font-bold font-sans italic cursor-pointer">
        ahead
      </div>

      {/* Desktop View*/}
      <div className="hidden sm:flex sm:items-center sm:gap-16">
        <div>
          <Link
            className="text-[1.4rem] sm:text-[1.4rem] font-semibold cursor-pointer"
            to="/app/home"
          >
            Home
          </Link>
        </div>
        <button className="text-blue-600 font-semibold text-[1.2rem] sm:text-[1.4rem] cursor-pointer hover:underline">
          Login
        </button>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden">
        <Menu className="w-8 h-8 font-bold text-black cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
