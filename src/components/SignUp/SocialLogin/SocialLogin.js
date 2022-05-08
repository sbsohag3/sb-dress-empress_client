import React from "react";
import { FcGoogle } from "react-icons/fc";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
 const location = useLocation();
 let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  let errorElement;
  if (loading) {
    return <Loading />;
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}
      <div className="mb-2">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-100  mx-auto d-block "
        >
          <FcGoogle className="fs-4 me-2" />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
