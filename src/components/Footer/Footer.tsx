import { Link } from "react-router-dom";
import { footerData } from "../../data/data";

const Footer = () => {
  const { logo, address, email, phone, list1, list2, socialList } = footerData;

  return (
    <footer>
      <div className="container mx-auto" data-aos="fade-up">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
          {/* info */}
          <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
            {/* logo */}
            <Link to="/">
              <img src={logo} className="mb-[65px]" alt="img logo" />
            </Link>

            {/* address */}
            <div className="max-w-[260px] mb-5 text-primary font-bold">
              {address}
            </div>
            <div className="font-light italic ">{email}</div>
            <div className="mb-[24px] font-light italic">{phone}</div>
          </div>
          {/* list */}
          <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
            {/* list 1 */}
            <div className="">
              <div className="font-extrabold text-primary mb-[32px]">About</div>
              <ul className="flex flex-col gay-y-4">
                {list1.map((list, index) => {
                  return (
                    <li key={index}>
                      <a className="text-primary" href={list.href}>
                        {list.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* list 2 */}
            <div className="">
              <div className="font-extrabold text-primary mb-[32px]">Help</div>
              <ul className="flex flex-col gay-y-4">
                {list2.map((list, index) => {
                  return (
                    <li key={index}>
                      <a className="text-primary" href={list.href}>
                        {list.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* list 3 */}
            <div className="">
              <div className="font-extrabold text-primary mb-[32px]">
                Social Media
              </div>
              <ul className="flex gap-4 justify-center">
                {socialList.map((list, index) => {
                  return (
                    <li
                      key={index}
                      className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full cursor-pointer hover:bg-pink-500 transition-all"
                    >
                      <a className="text-white text-xl" href={list.href}>
                        {list.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
