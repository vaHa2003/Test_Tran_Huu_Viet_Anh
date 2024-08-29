import { Navigate } from "react-router-dom";
import ProfileLayout from "../../layout/ProfileLayout";

type PrivateComponentProps = {
  component: React.ComponentType;
};

const PrivateComponent = ({ component: Component }: PrivateComponentProps) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? (
    <ProfileLayout>
      <Component />
    </ProfileLayout>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateComponent;
