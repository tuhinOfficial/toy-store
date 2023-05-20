import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const Navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  console.log(user);

  // if (loading) {
  //   return (
  //     <RotatingLines
  //       strokeColor="grey"
  //       strokeWidth="5"
  //       animationDuration="0.75"
  //       width="96"
  //       visible={true}
  //     />
  //   );
  // }

  if (user) {
    return children;
  }

  return Navigate("/login");
};

export default PrivateRoute;
