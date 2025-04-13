import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { JSX } from "react";

const UserRoute
 = ({ children }: { children: JSX.Element }) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "user") return <Navigate to="/" replace />;

  return children;
};

export default UserRoute
;