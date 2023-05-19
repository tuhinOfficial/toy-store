import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { MagnifyingGlass } from "react-loader-spinner";
import MyToysRow from "./MyToysRow";

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
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                myToys.map(singleToy => <MyToysRow data={singleToy} key={singleToy._id}></MyToysRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
