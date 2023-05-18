import React from "react";

const AllToysCard = ({ toys }) => {
  console.log(toys);
  const{photo , sellerName ,toyName ,category ,price ,quantity ,rating} = toys;
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Shoes"
          className="rounded-xl h-40 w-60"
        />
      </figure>
      <div className="card-body">
        <h2>Toy Name : {toyName}</h2>
        <h2>Seller :  {sellerName}</h2>
        <h2>Category : {category}</h2>
        <h2>Price : {price} $</h2>
        <h2>Available Quantity : {quantity}</h2>
        <h2>Ratings : {rating}</h2>
        
        
        <button className="btn btn-info mt-3">View Details</button>
        
      </div>
    </div>
  );
};

export default AllToysCard;
