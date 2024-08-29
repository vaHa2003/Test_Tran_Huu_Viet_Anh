import { Link } from "react-router-dom";
import { logo } from "../../assets/imgs/Logo";

const Sidebar = () => {
  return (
    <div className="flex items-center justify-center pb-10">
      <Link to="/profile">
        <img src={logo} alt=" img logo" className="text-center" />
      </Link>
    </div>
  );
};

export default Sidebar;
