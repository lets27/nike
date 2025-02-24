import { hamburger } from "../assets/icons/index.js";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/constants.js";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className=" flex  justify-between  items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 gap-16 justify-center items-center max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="ham" width={20} height={20} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
