
export const NavBar = () => {
  return (
    <nav className="bg-[#0D0F14] p-11">
      <div className="container mx-auto flex items-center space-x-8">
        <a
          href="#"
          className="text-[#D87D4A] font-semibold relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#D87D4A] after:bottom-0 after:left-0"
        >
          Homepage Car Dealer
        </a>
        <a href="#" className="text-white hover:text-[#D87D4A] text-2-l">
          About us
        </a>
        <a href="#" className="text-white hover:text-[#D87D4A]  text-2-l">
          Contact
        </a>
        <a href="#" className="text-white hover:text-[#D87D4A]">
          Sold
        </a>
        <a href="#" className="text-white hover:text-[#D87D4A]">
          Delivery
        </a>
      </div>
    </nav>
  )
}
