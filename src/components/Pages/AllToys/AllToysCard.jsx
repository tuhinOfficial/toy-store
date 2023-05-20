import React, { useContext } from "react";
import ToysDetails from "../ToysDetails/ToysDetails";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToysCard = ({ toys }) => {
  // console.log(toys);

  const { user } = useContext(AuthContext);

  const { _id, photo, sellerName, toyName, category, price, quantity, rating } =
    toys;
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl h-40 w-60" />
      </figure>
      <div className="card-body">
        <h2>Toy Name : {toyName}</h2>
        <h2>Seller : {sellerName}</h2>
        <h2>Category : {category}</h2>
        <h2>Price : {price} $</h2>
        <h2>Available Quantity : {quantity}</h2>
      </div>
      <div className="w-[100%]">
        {user ? (
          <Link to={`/alltoys/mytoys/${_id}`}>
            <button className="btn btn-info w-full  text-white">
              View Details
            </button>
          </Link>
        ) : (
          <Link to={`/alltoys/mytoys/${_id}`}>
            <button disabled className="btn btn-info w-full  text-white">
              View Details
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AllToysCard;
