const Header = () => {
  return (
    <header className="flex justify-between items-center m-auto px-[80px] py-4 border-[#DDE1E666] border-b w-full">
      <div className="font-bold text-[34px]">LOGO</div>

      <nav className="left-1/2 absolute flex justify-center gap-[24px] -translate-x-1/2">
        <a href="#" className="hover:text-gray-500">
          Home
        </a>
        <a href="#" className="hover:text-gray-500">
          Dashboard
        </a>
        <a href="#" className="hover:text-gray-500">
          Blog
        </a>
        <a href="#" className="hover:text-gray-500">
          Help Center
        </a>
        <a href="#" className="hover:text-gray-500">
          About
        </a>
      </nav>

      <div className="flex items-center gap-[16px]">
        <button className="border border-white rounded-[40px] w-[99px] h-[56px] font-semibold text-white hover:text-gray-500 cursor-pointer">
          Sign Up
        </button>
        <button className="bg-white hover:bg-gray-500 rounded-[40px] w-[99px] h-[56px] font-semibold text-black hover:text-white cursor-pointer">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
