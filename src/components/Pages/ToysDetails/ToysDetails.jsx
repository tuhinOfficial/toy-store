import { useLoaderData } from "react-router-dom";

const ToysDetails = () => {
  const data = useLoaderData();
  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
    photo,
  } = data;
  console.log(data);

  return (
    <div>
      <div className="hero min-h-full bg-base-200 my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl h-48 w-48" />
          <div>
            <h1 className="text-2xl font-bold">Toy Name :  <span className="text-sky-500">{toyName}</span></h1>
            <h1 className="text-1xl font-bold">price : <span className="text-orange-500">{price} $</span></h1>           
            <h1 className="text-1xl font-bold">Available : <span className="text-orange-500">{quantity} pcs</span></h1>        
            <h1 className="text-1xl font-bold">Rating :<span className="text-orange-500"> {rating}</span></h1>       
            <h1 className="text-1xl font-bold">Seller : <span className="text-orange-500">  {sellerName}</span></h1>   
            <h1 className="text-1xl font-bold">Seller Email : <span className="text-orange-500">  {sellerEmail}</span></h1>

            <p className="text-slate-500 mt-5">{description}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
