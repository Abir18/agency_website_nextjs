import {Bars3BottomRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Button} from "../ui/button";

interface Props {
  openNav: () => void;
}

const Nav = ({openNav}: Props) => {
  const pathname = usePathname();
  return (
    <div className="h-[12vh] bg-white shadow-md">
      <div className="w-[85%] h-[12vh] flex items-center justify-between mx-auto">
        <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800">
          <span className="text-[27px] md:text-[40px] text-red-600">W</span>
          ebdev.
        </h1>
        <ul className="hidden lg:flex items-center space-x-10 ">
          <li
            className={`text-[17px] cursor-pointer [&.active]:bg-indigo-100 [&.active]:text-red-600 rounded-full px-3 py-1
              ${pathname === "/" ? "active" : ""}`}
            data-aos="fade-down"
          >
            <Link href="/">Home</Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="400">
            <Link
              href="/about"
              className={`text-[17px] cursor-pointer hover:text-red-500 transition-all duration-1000  [&.active]:bg-indigo-100 [&.active]:text-red-500 rounded-full px-3 py-1  ${
                pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="800">
            <Link
              href="/services"
              className={`text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200  [&.active]:bg-indigo-100 [&.active]:text-red-600 rounded-full px-3 py-1
              ${pathname === "/services" ? "active" : ""}`}
            >
              Services
            </Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="1200">
            <Link
              href="/contact"
              className={`text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200  [&.active]:bg-indigo-100 [&.active]:text-red-600 rounded-full px-3 py-1
              ${pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="1600">
            <Link
              className={`text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200  [&.active]:bg-indigo-100 [&.active]:text-red-600 rounded-full px-3 py-1
              ${pathname === "/blog" ? "active" : ""}`}
              href="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-5">
          <Button className="max-sm:hidden">Book a free call</Button>
          {/* <ButtonBlue text="Login" />
          <ButtonRed text="SignUp" /> */}
          <Bars3BottomRightIcon
            onClick={openNav}
            className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
          />
          {/* <button className="btn btn-secondary">Accept</button> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
