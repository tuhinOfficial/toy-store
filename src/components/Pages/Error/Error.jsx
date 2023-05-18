import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <div>
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_pNx6yH.json"
          style={{ height: "400px", width: "600px" }}
        ></Player>
      </div>
      <h2 className="text-center text-6xl font-bold text-red-600">
        {error.status}
      </h2>
      <h6 className="text-center font-semibold text-2xl text-orange-500 mt-2">
        {error.error.message}
      </h6>

      <div className="flex justify-center mt-4">
        <Link to="/"><button className="btn btn-outline btn-error">Back To Home</button></Link>
      </div>
    </div>
  );
};

export default Error;
