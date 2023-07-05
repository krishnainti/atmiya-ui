import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { children } = props;

  const { token, isAdmin } = useSelector((state) => state.user);

  if (!token) {
    return <Navigate to="/" />;
  }

  if (props.isAdmin && !isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
