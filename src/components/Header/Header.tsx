import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets/imgs/Logo";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import NavMobile from "../NavMobile/NavMobile";
import { SignInContext } from "../../context/SignInContext";
import AxiosInstance from "../../api/axiosInstance";

export const deleteLogOut = async () => {
  try {
    await AxiosInstance.delete("/auth/logout");
    localStorage.removeItem("token");
  } catch (error) {
    console.error(error);
  }
};

const Header = () => {
  const { user } = useContext(SignInContext);

  const handleLogoOut = async () => {
    deleteLogOut();
  };

  const [toogleNav, setToogleNav] = useState<boolean>(false);
  return (
    <div className="bg-[#f6fafd] mb-12 lg:mb-0 z-30 px-4 lg:px-0 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            <Link to="/">
              <img src={logo} alt="img logo" />
            </Link>

            <div className="hidden lg:flex">
              <ul className="flex items-center gap-x-8">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Help</Link>
                </li>
                <li>
                  <Link to="/">Features</Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`lg:hidden bg-purple-50 absolute top-24 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden ${
              toogleNav ? "max-h-52" : "max-h-0"
            }`}
          >
            <NavMobile />
          </div>

          {/* login succesfully */}
          {!user && (
            <Link to="/signin">
              <button className="h-[40px] px-[30px] rounded-[20px] text-white btn-primary mb-8 xl:mb-0">
                Sign in
              </button>
            </Link>
          )}

          {user && (
            <div className="flex gap-2 items-center">
              <Link to="/profile/post">
                <button className="h-[40px] px-[30px] rounded-[20px] text-white btn-primary mb-8 xl:mb-0">
                  Profile
                </button>
              </Link>
              <button
                onClick={handleLogoOut}
                className="h-[40px] px-[30px] rounded-[20px] text-white btn-primary mb-8 xl:mb-0"
              >
                Logout
              </button>
            </div>
          )}

          <div
            className="lg:hidden text-2xl text-primary cursor-pointer"
            onClick={() => setToogleNav(!toogleNav)}
          >
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
