import React from "react";

import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
const RequireAuth = ({ children }) => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center w-25 mx-auto p-4 mt-5 shadow border">
        <h3 className="text-danger">Your Email is not Verified!</h3>
        <h4 className="text-success">Please Verify Your Email </h4>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            toast.success("Sent Email",{
              position: 'top-center'
            });
          }}
        >
          Send Verification email Again
        </button>
        <ToastContainer/>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
