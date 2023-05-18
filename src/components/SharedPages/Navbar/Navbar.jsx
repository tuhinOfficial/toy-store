import React, { useContext } from "react";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const logoutHandler = () => {
      logOut()
      .then(result=>{})
      .catch(error =>{
        console.log(error.message);
      })
  }

  const li = (
    <>
      <Link to="/">
        <li>Home</li>
      </Link>
      <li>All Toys</li>
      {user ? (
        <>
          <li>My Toys</li>
          <li>Add A Toys</li>
        </>
      ) : (
        <></>
      )}
      <li>Blogs</li>
    </>
  );

  return (
    <div className="my-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-x-4 px-1 font-semibold"
            >
              {li}
            </ul>
          </div>
          <div className="flex items-center gap-x-1">
            <img src="https://i.ibb.co/L6zc9Qk/logo.png" alt="" />
            <h1 className="text-3xl font-semibold text-orange-400">
              Toy Store
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-4 px-1 font-semibold text-[#0C134F]">
            {li}
          </ul>
        </div>
        {user ? (
          <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  My Toys
                </a>
              </li>
              <li>
                <button onClick={logoutHandler}>SignOut</button>
              </li>
            </ul>
          </div>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/login">
              <button className="btn bg-orange-400 border-0">
                <BiLogIn className="mr-2"></BiLogIn>
                <span>LogIn</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
