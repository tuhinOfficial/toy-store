import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const data = useLoaderData();
  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    category,
    description,
    photo,
    _id,
  } = data;

  const [selected, setSelected] = useState("");
  const { email, userName } = useContext(AuthContext);
  console.log(data);

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const updateToyHandler = (event) => {
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

    const updateToy = {
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
    console.log(updateToy);

    Swal.fire({
      title: "Are you sure?",
      text: "Update This Toy Details",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/alltoys/mytoys/${_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateToy),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations!',
                    text: 'Your Item was successfully updated',
                  })
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center text-orange-500">
        Update Your Toy Information
      </h2>

      <div className="my-10 bg-base-200 py-20">
        <form onSubmit={updateToyHandler}>
          <div className="w-[70%] mx-auto">
            <div className="grid grid-cols-2 gap-y-5 ml-8">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Toy Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={toyName}
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
                  defaultValue={price}
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
                  defaultValue={rating}
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
                  defaultValue={quantity}
                  name="quantity"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Sub Category</span>
                </label>
                <select
                  defaultValue={category}
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
                  <option value="Extreme Sports Vehicles">
                    Extreme Sports Vehicles
                  </option>
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Photo Url</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  defaultValue={photo}
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
                defaultValue={description}
                name="description"
                required
              ></textarea>
            </div>

            <input
              className="btn btn-info w-full mt-10"
              type="submit"
              value="Update Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToys;
