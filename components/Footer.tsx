import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center m-auto mt-[51px] px-[80px] py-4 w-full max-w-[1440px]">
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-[34px]">LOGO</p>
        <div className="flex items-center gap-[16px]">
          <input
            className="bg-white px-[16px] py-[12px] w-[345px] h-[46px] text-gray-900"
            type="text"
            placeholder="🔎  Enter your email to get the latest news..."
            id="username"
          />
          <button className="bg-[#0077FF] hover:bg-blue-700 px-[16px] py-[12px] w-[110px] h-[46px] font-semibold text-white cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="mt-[48px] mb-[48px] py-4 border-white border-t border-b w-[1280px] text-center">
        <div className="flex flex-wrap justify-center gap-[48px] mt-[48px] text-white">
          <ul className="flex flex-col items-start gap-[16px] w-[284px]">
            <p className="mb-[16px] font-bold text-[18px]">Column One</p>
            <li>
              <a href="#" className="hover:text-gray-500">
                Twenty One
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Twenty Two
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Fourty Three
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Fifty Four
              </a>
            </li>
          </ul>

          <ul className="flex flex-col items-start gap-[16px] w-[284px]">
            <p className="mb-[16px] font-bold text-[18px]">Column Two</p>
            <li>
              <a href="#" className="hover:text-gray-500">
                Sixty Five
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Seventy Six
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Eighty Seven
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Ninety Eight
              </a>
            </li>
          </ul>

          <ul className="flex flex-col items-start gap-[16px] mb-[48px] w-[284px]">
            <p className="mb-[16px] font-bold text-[18px]">Column Three</p>
            <li>
              <a href="#" className="hover:text-gray-500">
                One Two
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Three Four
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Five Six
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Seven Eight
              </a>
            </li>
          </ul>

          <div className="flex flex-col items-start w-[284px]">
            <p className="mb-[24px] font-bold text-[18px]">Column Four</p>
            <p className="mb-[8px] font-bold text-[18px]">Join us</p>
            <div className="flex gap-[16px]">
              <a href="https://www.youtube.com/">
                <Youtube />
              </a>
              <a href="https://www.facebook.com/">
                <Facebook />
              </a>
              <a href="https://x.com/">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/">
                <Instagram />
              </a>
              <a href="https://ge.linkedin.com/">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[48px] w-full">
        <p>Greelogix @ 202X. All rights reserved.</p>
        <ul className="flex gap-[24px]">
          <li>
            <a href="#" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
