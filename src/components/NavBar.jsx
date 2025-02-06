import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="bg-[#0f141e] p-10">
      <div className="container mx-auto flex items-center space-x-8 text-xl">
        <Link
          to="/"
          className="text-white hover:text-[#D87D4A] text-2-l relative group"
        >
          Homepage Car Dealer
          <span className="absolute left-0 -top-2 w-full h-[2px] bg-[#D87D4A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-[#D87D4A] text-2-l relative group"
        >
          About us
          <span className="absolute left-0 -top-2 w-full h-[2px] bg-[#D87D4A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-[#D87D4A] text-2-l relative group"
        >
          Contact
          <span className="absolute left-0 -top-2 w-full h-[2px] bg-[#D87D4A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
        <Link
          to="/sold"
          className="text-white hover:text-[#D87D4A] relative group"
        >
          Sold
          <span className="absolute left-0 -top-2 w-full h-[2px] bg-[#D87D4A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
        <Link
          to="/delivery"
          className="text-white hover:text-[#D87D4A] relative group"
        >
          Delivery
          <span className="absolute left-0 -top-2 w-full h-[2px] bg-[#D87D4A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
      </div>
    </nav>
  );
};