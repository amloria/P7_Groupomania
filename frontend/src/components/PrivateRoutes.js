import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));

function PrivateRoutes() {
  const auth = () => {
    try {
      axios
        .get(`http://localhost:3000/api/auth/profile/${currentUser._id}`, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          return <Outlet />;
        })
        .catch(function (err) {
          console.error(`Retour du serveur : ${err}`);
          return <Navigate to="/login" replace />;
        });
    } catch (err) {
      console.error(
        `Retour du serveur : "NOT AUTHORIZED! PLEASE LOG IN TO ACCESS THIS PAGE."`
      );
      return <Navigate to="/login" replace />;
    }
  };

  // return auth ? <Outlet /> : <Navigate to="/login" replace />;
  return auth();
}

export default PrivateRoutes;

// image modif(ok)
// maj localStorage (ok)
// private routes 2nd*   working on it !
// file name db (ok)
