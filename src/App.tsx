import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import item1 from "./assets/item1.png";
import item2 from "./assets/item2.png";
import item3 from "./assets/item3.png";
import item4 from "./assets/item4.png";
import Navbar from "./components/product/Navbar";

function App() {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity === 1 || quantity < 1) {
      toast.error("You can't buy less than 1 item");
      return;
    }

    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity === 9 || quantity > 9) {
      toast.error("You can't buy more than 9 items");
      return;
    }

    setQuantity(quantity + 1);
  };

  return (
    <main className="flex w-full items-center justify-center pb-20">
      <div className="w-[90%] flex flex-col justify-between">
        <Navbar />

        <div className="flex gap-4 items-center text-xs font-medium mt-10">
          <span>HOME</span>
          <MdOutlineKeyboardArrowRight />
          <span>SALES</span>
          <MdOutlineKeyboardArrowRight />
          <span>HOODIE</span>
        </div>

        <div className="mt-8 flex flex-col gap-16 lg:flex-row justify-between">
          <div className="flex flex-col gap-10 w-full lg:w-[30%]">
            <div className="w-full ">
              <img src={item1} alt="" className="rounded-3xl w-full" />
            </div>
            <div className="flex items-center justify-between">
              <img src={item2} alt="" className="rounded-3xl" />
              <img src={item3} alt="" className="rounded-3xl" />
              <img src={item4} alt="" className="rounded-3xl" />
            </div>
          </div>

          <div className="w-full lg:w-[60%]">
            <h2 className="text-5xl font-semibold leading-tight">
              Plaid Sleeve Kangaroo Pocket Drawstring Hoodie
            </h2>
            <p className="mt-2 text-lg">
              BY{" "}
              <span className="text-blue-700 font-medium">COSMO FASHION</span>
            </p>

            <div className="mt-4 flex items-center gap-4">
              <div className="bg-gray-200 h-12 px-2 flex items-center justify-start rounded-lg w-fit">
                <span className="text-[#29B6F6] text-lg font-bold">$</span>
                <span className="text-blue-800 font-bold text-3xl">67</span>
              </div>
              <div className="">
                <p className="text-[#29B6F6] font-semibold text-xl">Save 25%</p>
                <p>Inclusive deal of the day</p>
              </div>
            </div>

            <p className="mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>

            <div className="mt-4 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-4">
                <p className="text-lg">Quantity:</p>
                <div className="flex items-center gap-8">
                  <button
                    className="text-2xl border rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:text-gray-400 disabled:hover:bg-transparent"
                    onClick={decreaseQuantity}
                    // disabled={quantity === 1 || quantity < 1}
                  >
                    -
                  </button>
                  <div className="">{quantity}</div>
                  <button
                    className="text-2xl border rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:text-gray-400 disabled:hover:bg-transparent"
                    onClick={increaseQuantity}
                    // disabled={quantity === 9 || quantity > 9}
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="bg-blue-600 py-2 px-8 text-white rounded hover:bg-blue-800">
                Add To Cart
              </button>
            </div>

            <hr className="my-4" />

            <div className="flex gap-4 justify-between">
              <FaCircleUser className="text-gray-400 h-10 w-10" />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="">
                    <p className="text-gray-500 font-medium">
                      Alex Morningstar
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                      Contrary to popular belief
                    </p>
                  </div>

                  <div className="">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis molestiae repellat vitae enim id a eveniet, rerum
                  obcaecati tenetur maiores minima earum, ipsum laudantium
                  dolores temporibus maxime quos totam saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default App;
