import React, { useContext, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToys = () => {
  const [selected, setSelected] = useState("");

  const {email,userName} = useContext(AuthContext);
  console.log(email,userName);
  // console.log(selected);

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const addToyHandler = (event) => {
    event.preventDefault();

    const form = event.target;

    const toyName = form.name.value;
    const sellerName = form.seller.value;
    const sellerEmail = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const category = selected;
    const description = form.description.value;
    const photo = form.photo.value;

    const newToy = {
      toyName,
      sellerName,
      sellerEmail,
      price,
      rating,
      quantity,
      category,
      description,
      photo,
    };
    

    fetch("https://toy-store-sever.vercel.app/alltoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
            Swal.fire({
                icon: "success",
                title: "Congratulations",
                text: "Toy Added Successfully",
              });

              form.reset()
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center text-orange-500">
        Add Your Toys
      </h2>

      <div className="my-10 bg-base-200 py-20">
        <form onSubmit={addToyHandler}>
          <div className="w-[70%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:ml-8">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Toy Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Toy Name"
                  className="input input-bordered w-full max-w-xs"
                  name="name"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Seller Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Seller Name"
                  defaultValue={userName}
                  className="input input-bordered w-full max-w-xs"
                  name="seller"
                  required
                  readOnly
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Seller Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Seller Email"
                  defaultValue={email}
                  name="email"
                  className="input input-bordered w-full max-w-xs"
                  required
                  readOnly
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Price"
                  className="input input-bordered w-full max-w-xs"
                  name="price"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="Ratings"
                  className="input input-bordered w-full max-w-xs"
                  name="rating"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">
                    Available Quantity
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full "
                  name="quantity"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Sub Category</span>
                </label>
                <select
                  defaultValue="select"
                  onChange={handleSelect}
                  className="select max-w-xs"
                  required
                >
                  <option value="select" disabled>
                    Select Category
                  </option>
                  <option value="Classic Cars">Classic Cars</option>
                  <option value="Space Explorers">Space Explorers</option>
                  <option value="Oceanic Adventures">Oceanic Adventures</option>
                  <option value="Fire and Rescue">Fire and Rescue</option>
                  <option value="Extreme Sports Vehicles">Extreme Sports Vehicles</option>
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Photo Url</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered w-full "
                  name="photo"
                  required
                />
              </div>
            </div>

            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Detail description
                </span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered textarea-sm w-full resize-none"
                name="description"
                required
              ></textarea>
            </div>

            <input
              className="btn btn-info w-full mt-10"
              type="submit"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
