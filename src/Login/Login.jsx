import React, { useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/Providers/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { logIn,googleLogin} = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "Login Success",
          });
        }
        form.reset();
      })
      .catch((error) => {
        if (error.message) {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Passwords do not match",
          });
        }
      });
  };

  const googleLoginHandler = () => {
    googleLogin()
    .then((result) => {})
    .catch((error) => {
      console.log(error.message);
    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-[100%] mx-auto flex-col lg:flex-row-reverse gap-x-32">
          <div className="text-center lg:text-left">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_mjlh3hcy.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
          </div>
          <div className="card flex-shrink-0 w-full max-w-[50%] shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl font-bold">Login now!</h1>
              <form onSubmit={loginHandler}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="mt-4 text-center">
                New To Toy Store? Please{" "}
                <Link to="/registration" className="text-blue-400">
                  Registration
                </Link>
              </p>
              <div>
                <p className="text-center">Other Login</p>

                <span className="flex justify-center mt-2">
                  {" "}
                  <button onClick={googleLoginHandler}><FcGoogle  className="text-center text-3xl"></FcGoogle></button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
