import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/imgs/Logo";
import { deleteLogOut } from "../components/Header/Header";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogoOut = () => {
    deleteLogOut();
    navigate("/");
  };
  return (
    <div className="flex">
      {/* sidebar */}
      <div className=" xl:block w-[320px] h-screen bg-gray-200 sticky top-0 p-8 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <div className="flex items-center justify-center pb-10">
          <Link to="/">
            <img src={logo} alt=" img logo" className="text-center" />
          </Link>
        </div>

        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/profile/post">Post</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogoOut}>
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* content */}
      <div className="w-full bg-white xl:p-20 p-6">{children}</div>
    </div>
  );
};

export default ProfileLayout;
