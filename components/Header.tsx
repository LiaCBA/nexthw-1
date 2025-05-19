import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center m-auto px-[80px] py-4 border-[#DDE1E666] border-b w-full max-w-[1440px]">
      <p className="font-bold text-[34px]">LOGO</p>

      <nav className="left-1/2 absolute flex justify-center -translate-x-1/2">
        <ul className="flex gap-[24px]">
          <li className="hover:text-gray-500">
            <Link href="/"> Home</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/pages/dashboard/my-account">Dashboard</Link>
          </li>
          <li className="hover:text-gray-500">Blog</li>
          <li className="hover:text-gray-500">Help Center</li>
          <li className="hover:text-gray-500">About</li>
        </ul>
      </nav>

      <div className="flex items-center gap-[16px]">
        <button className="border border-white rounded-[40px] w-[99px] h-[56px] font-semibold text-white hover:text-gray-500 cursor-pointer">
          Sign Up
        </button>
        <button className="bg-white hover:bg-gray-500 rounded-[40px] w-[99px] h-[56px] font-semibold text-black cursor-pointer">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
