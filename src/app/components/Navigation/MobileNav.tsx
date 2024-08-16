import {XMarkIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="transform transition-all duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-slate-900">
      <XMarkIcon className="w-[2rem] h-[2rem] absolute top-[2rem] right-[2rem] text-white z-[202]" />
      <ul className="relative z-[201] space-y-10 text-white flex flex-col justify-center items-center h-[100%] ">
        <li className="text-[25px] cursor-pointer text-yellow-300">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[25px] cursor-pointer hover:text-yellow-300 transition-all duration-200">
          <Link href="/">About</Link>
        </li>
        <li className="text-[25px] cursor-pointer hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Services</Link>
        </li>
        <li className="text-[25px] cursor-pointer hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Customer</Link>
        </li>
        <li className="text-[25px] cursor-pointer hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
