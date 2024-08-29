import { Link } from "react-router-dom";
import notFoundImage from "../../assets/imgs/not found.png";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto">
      <div className="fixed top-[180px] left-0 right-0 bottom-0">
        <div className="flex flex-col items-center justify-center">
          <img src={notFoundImage} alt="img not found" />
          <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
