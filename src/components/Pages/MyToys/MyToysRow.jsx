import React from "react";

const MyToysRow = ({ data }) => {
  console.log(data);
  const {toyName ,category,photo} = data;
  return (
    <>
      <tr>
        <th><img className="w-[40px] h-[40px] rounded-full" src={photo} alt="img" /></th>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>Blue</td>
      </tr>
    </>
  );
};

export default MyToysRow;
