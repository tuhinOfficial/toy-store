import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { email, loading } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  console.log(myToys);

  console.log(email);
  const url = `http://localhost:3000/alltoys/mytoys?email=${email}`;
  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, email);

  const handleDelete = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/alltoys/mytoys/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'Item deleted successfully',
              })

              const remaining = myToys.filter(toys => toys._id !== id);
              setMyToys(remaining);
            }
          });
      }
    })

    
  };

  return (
    <div>
      <h2 className="text-center my-10 text-3xl font-semibold">Toys of User :  {email}</h2>

      <div className="mb-60">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                myToys.map(singleToy => <MyToysRow data={singleToy} handleDelete={handleDelete} key={singleToy._id}></MyToysRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
