import {XMarkIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({nav, closeNav}: Props) => {
  const pathname = usePathname();

  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`transform transition-all ${navOpenStyle} duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-slate-900`}
    >
      <XMarkIcon
        onClick={closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] right-[2rem] text-white z-[202] hover:cursor-pointer"
      />
      <ul className="relative z-[201] space-y-10 text-white flex flex-col justify-center items-center h-[100%] ">
        <li onClick={closeNav}>
          <Link
            className={`text-[25px] cursor-pointer hover:text-red-500 transition-all duration-1000 [&.active]:text-yellow-500 px-3 py-1  ${
              pathname === "/" ? "active" : ""
            }
            `}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`text-[25px] cursor-pointer hover:text-red-500 transition-all duration-1000 [&.active]:text-yellow-500 px-3 py-1  ${
              pathname === "/about" ? "active" : ""
            }
            `}
            href="/about"
            onClick={closeNav}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`text-[25px] cursor-pointer hover:text-red-500 transition-all duration-1000 [&.active]:text-yellow-500 px-3 py-1  ${
              pathname === "/services" ? "active" : ""
            }
            `}
            href="/services"
            onClick={closeNav}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={`text-[25px] cursor-pointer hover:text-red-500 transition-all duration-1000  [&.active]:text-yellow-500 px-3 py-1  ${
              pathname === "/contact" ? "active" : ""
            }
            `}
            href="/contact"
            onClick={closeNav}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={`text-[25px] cursor-pointer hover:text-red-500 transition-all duration-1000   [&.active]:text-yellow-500  px-3 py-1  ${
              pathname === "/blog" ? "active" : ""
            }
            `}
            href="/blog"
            onClick={closeNav}
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
