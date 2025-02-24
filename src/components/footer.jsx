import { footerLinks, socialMedia } from "../constants/constants";
import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-container flex flex-col gap-10 pb-0 mb-0 lg:h-96 sm:h-screen ">
      <div className="flex items-start gap-10 flex-wrap flex-col  pt-0 mt-0">
        <div className="flex flex-col items-start">
          <img src={footerLogo} alt="" width={150} height={46} />
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatum numquam quam
            nesciunt commodi magnam asperiores quaerat minima assumenda
            cupiditate. Fugiat?
          </p>
        </div>

        <div className="flex items-start gap-10 max-sm:flex-col">
          <div className="flex gap-5 mt-8 items-end">
            {socialMedia.map((social) => (
              <div
                className="w-12 h-12 p-2 rounded-full bg-white-400 card-hover"
                key={social.alt}
              >
                <img src={social.src} alt="icon" width={40} height={24} />
              </div>
            ))}
          </div>

          <div className="flex max-sm:flex-wrap max-sm:gap-8 lg:gap-20">
            {footerLinks.map((item) => (
              <div key={item.title}>
                <span className="text-white font-montserrat">{item.title}</span>
                <ul>
                  {item.links.map((link) => (
                    <li key={link.name} className="text-white">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 max-sm:flex-col max-sm:items-center mt-12">
        <div className="text-white font-montserrat">
          <p>All rights reserved to mogwera letso</p>
        </div>
        <div className="text-white font-montserrat">
          <p> 2025@letso</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
