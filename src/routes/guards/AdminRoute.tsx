import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

const AdminRoute
 = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;

  return children;
};

export default AdminRoute;
;