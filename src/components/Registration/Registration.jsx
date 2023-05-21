import React, { useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import Swal from "sweetalert2";

const Registration = () => {
  const auth = getAuth(app);

  const { createUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  const registrationHandler = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 8) {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password Minimum Length must be Eight Characters",
          });
    }

    if (password !== confirm) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Not Match",
      });
    }
    if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Must Need at least one character",
      });
    }
    if (!/[0-9]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Must Need at least one Number",
      });
    }

    console.log(name, email, password, photo, confirm);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then((res) => {
            Navigate("/")
          })
          .catch((error) => {});

        Swal.fire({
          icon: "success",
          title: "Congratulations",
          text: "You have successfully Registration",
        });

        form.reset();

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-20">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content w-[100%] mx-auto flex-col lg:flex-row-reverse gap-x-32">
          <div className="text-center lg:text-left">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_2jczmi5y.json"
              style={{ height: "400px", width: "300px" }}
            ></Player>
          </div>
          <div className="card flex-shrink-0 w-full md:max-w-[50%] shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl font-bold">Registration now!</h1>
              <form onSubmit={registrationHandler}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email address"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Photo Url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Enter your Photo URL"
                    className="input input-bordered"
                    name="photo"
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                    name="confirm"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-success"
                    type="submit"
                    value="Registration"
                  />
                </div>
              </form>
              <p className="mt-4 text-center">
                Already Have An Account?{" "}
                <Link to="/login" className="text-blue-400">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
