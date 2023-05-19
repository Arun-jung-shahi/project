import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
// import Spinner from "../Spinner";
import Login from "../../pages/auth/Login";

// import Login from "../../pages/auth/Login";

// export default function PrivateRoute() {
//   const [ok, setOk] = useState(false);
//   const [auth] = useAuth();

//   useEffect(() => {
//     const authCheck = async () => {
//       const res = await axios.get("/api/v1/auth/user-auth");
//       if (res.data.ok) {

//         setOk(true);
//         console.log(ok)
//       } else {
//         setOk(false);
//       }
//     };
//     if (auth?.token) authCheck();
//   }, [auth?.token]);
//   console.log(ok)

//   return ok ?   <Login/>:<Outlet />;
// }
// export default function PrivateRoute() {
//   const [ok, setOk] = useState(false);
//   const [auth] = useAuth();

//   // useEffect(() => {
//     const authCheck = async () => {
//       const res = await axios.get("/api/v1/auth/user-auth");
//       if (res.data.ok) {
//         setOk(true);
//       } else {
//         setOk(false);
//       }
//     };
//     if (auth?.token) authCheck();
//   // }, [auth?.token]);

//   useEffect(() => {
//     console.log("ok:", ok);
//   }, [ok]);

//   return ok ? <Outlet /> : <Login />;
// }
export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth",{
        
          headers: {
            Authorization:  auth?.token
          },
       
        

      });
      
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
      
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

 
    // console.log("ok:", ok);
    // console.log(auth?.token)
    
  

  return ok ? <Outlet /> : <Login />;
}





