import React from "react";

const AllToysCard = ({ toys }) => {
  console.log(toys);
  const{image , seller ,toyName ,subCategory ,price} = toys
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-40 w-60"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{seller}</h2>
        <p>{toyName}</p>
        <p>{subCategory}</p>
        <p>$ {price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllToysCard;
