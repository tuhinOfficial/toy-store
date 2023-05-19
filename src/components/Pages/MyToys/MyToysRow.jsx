import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const MyToysRow = ({ data }) => {
  console.log(data);
  const { toyName, category, photo } = data;
  return (
    <>
      <tr>
        <th>
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={photo}
            alt="img"
          />
        </th>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>
          <div className="text-2xl flex gap-4">
            <button>
              <BsPencilSquare className="text-orange-400"></BsPencilSquare>
            </button>
            <button>
              <AiFillDelete className="text-red-500"></AiFillDelete>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyToysRow;
