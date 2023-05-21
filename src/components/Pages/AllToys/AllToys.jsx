import React, { useContext, useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";


const AllToys = () => {
  const [allToys, setAllToys] = useState([]);


  useEffect(() => {
    fetch("https://toy-store-sever.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  return (
    <div>
      <div className="mt-20 flex justify-center">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Toys"
              className="input input-bordered md:w-96"
            />
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 my-20 md:ml-10">
        {allToys.map((toys) => (
          <AllToysCard toys={toys} key={toys._id}></AllToysCard>
        ))}
      </div>

      <div className="mb-10 flex justify-center">
        <button className="btn btn-primary">See All</button>
      </div>
    </div>
  );
};

export default AllToys;
