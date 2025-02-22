import { Navigate } from "react-router-dom";
import {getUser} from "./getUser";

const PrivateRoute = ({ element, allowedRoles }) => {
  const user = getUser();

  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/login" replace />;

  return element;
};

export default PrivateRoute;
