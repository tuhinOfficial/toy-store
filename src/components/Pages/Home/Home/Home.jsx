import { AiOutlineArrowRight } from "react-icons/ai";
import "./Home.css";
import { Player} from "@lottiefiles/react-lottie-player";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    AOS.init();

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

      <section className="trending my-20">
        <div>
          <h2 className="text-3xl font-semibold text-center">Trending Toys</h2>
        </div>
      </section>

      <section className="my-20">
        <div className="client">
          <div className="flex justify-evenly py-20 text-white font-bold text-center">
            <div>
              <h1 className="text-3xl">Products</h1>
              <span className="text-2xl">5000 +</span>
            </div>
            <div>
              <h1 className="text-3xl">Customers</h1>
              <span className="text-2xl">50k +</span>
            </div>
            <div>
              <h1 className="text-3xl">Happy Customer</h1>
              <span className="text-2xl">100K +</span>
            </div>
            <div>
              <h1 className="text-3xl">Sales</h1>
              <span className="text-2xl">$100K +</span>
            </div>
          </div>
        </div>
      </section>

      <section className="review my-20">
        <h1 className="text-3xl font-semibold text-center mb-16">
          Customer Review
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 ml-16">
          <div data-aos="fade-down-right" data-aos-duration="1000" data-aos-offset="100" className="card w-96 bg-primary text-primary-content text-center">
            <div className="card-body">
              <div className="avatar">
                <div className="w-14 rounded-full mx-auto">
                  <img src="https://i.ibb.co/VwYLp3b/cheerful-curly-business-girl-wearing-glasses.jpg" />
                </div>
              </div>
              <h2>Name1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-offset="100" className="card w-96 bg-primary text-primary-content text-center">
            <div className="card-body">
              <div className="avatar">
                <div className="w-14 rounded-full mx-auto">
                  <img src="https://i.ibb.co/VwYLp3b/cheerful-curly-business-girl-wearing-glasses.jpg" />
                </div>
              </div>
              <h2>Name2</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="1000" data-aos-offset="100" className="card w-96 bg-primary text-primary-content text-center">
            <div className="card-body">
              <div className="avatar">
                <div className="w-14 rounded-full mx-auto">
                  <img src="https://i.ibb.co/VwYLp3b/cheerful-curly-business-girl-wearing-glasses.jpg" />
                </div>
              </div>
              <h2>Name3</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div data-aos="zoom-in-left" data-aos-duration="1000" data-aos-offset="100" className="card w-96 bg-primary text-primary-content text-center">
            <div className="card-body">
              <div className="avatar">
                <div className="w-14 rounded-full mx-auto">
                  <img src="https://i.ibb.co/VwYLp3b/cheerful-curly-business-girl-wearing-glasses.jpg" />
                </div>
              </div>
              <h2>Name4</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          
          
         
        </div>
      </section>
    </div>
  );
};

export default Home;
