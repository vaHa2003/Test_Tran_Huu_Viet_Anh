import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SignInContext } from "../../context/SignInContext";
import { deleteLogOut } from "../Header/Header";

const NavMobile = () => {
  const { user } = useContext(SignInContext);
  return (
    <div className="px-9 container mx-auto">
      <div>
        <ul className="bg-accent-tertiary flex items-start flex-col gap-y-4 py-[32px] px-[24px] rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <li>
            <Link to="/" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/">
              Help
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/">
              Features
            </Link>
          </li>
          <li>
            {user ? (
              <span className="flex flex-row gap-2">
                <Link
                  className="text-white"
                  to="/profile/post"
                  onClick={() => deleteLogOut}
                >
                  Profile
                </Link>
                <Link
                  className="text-white"
                  to="/"
                  onClick={() => deleteLogOut}
                >
                  Logout
                </Link>
              </span>
            ) : (
              <Link className="text-white" to="/signin">
                Signin
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
