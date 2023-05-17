import { AiOutlineArrowRight } from "react-icons/ai";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <div className="mt-16">
      <section className="banner">
        <div className="flex justify-evenly items-center">
          <div className="w-[50%]">
            <h1 className="text-5xl font-semibold leading-normal text-[#0C134F]">
              Find Your Best <br /> Toy For Your <br /> Children.
            </h1>

            <p className="my-6 font-semibold text-gray-400">
              We Have Deliver Best of Fantastic hand picked Age Appropriate Toys
              Straight To Your Door.
            </p>

            <button className="btn btn-outline btn-success">
              Buy Now{" "}
              <AiOutlineArrowRight className="ml-2"></AiOutlineArrowRight>
            </button>
          </div>

          <div>
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_lc46h4dr.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
