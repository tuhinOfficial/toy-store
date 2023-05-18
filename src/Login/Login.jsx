import React, { useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/Providers/AuthProvider";

const Login = () => {
  AOS.init();

  const {logIn} = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logIn(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })

  };

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
                  />
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Login" />
                </div>
              </form>
              <p className="mt-4 text-center">
                New To Toy Store? Please{" "}
                <Link to="/registration" className="text-blue-400">
                  Registration
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
