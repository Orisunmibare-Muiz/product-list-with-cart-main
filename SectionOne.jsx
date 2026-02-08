import React, { useState } from "react";
import { SectionOneData } from "./src/Data/SectionOneData";
import illustration from "./public/images/illustration-empty-cart.svg";
import cart from "./public/images/icon-add-to-cart.svg";

export default function SectionOne() {
  let [hideCount, setHideCount] = useState(false); // automatically hides the count

  // Add to cart button functions 🔘
  const addToCart = () => {
    setHideCount(!hideCount); // to make the count span appear
  };

  return (
    <>
      <div className="bg-[#f4edeb] h-full px-30 py-20 flex flex-row">
        <div className="mr-10">
          <div>
            <h1 className="font-bold text-[50px] mb-5">Desserts</h1>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {SectionOneData.map((props) => (
              <div key={props.id}>
                <div className="relative mb-6">
                  {hideCount && (
                    <div className="bg-white px-2 py-1 absolute outline-amber-600 outline-2 top-2 left-2 rounded">
                      <span>1</span>
                    </div>
                  )}

                  <img
                    src={props.image}
                    alt=""
                    className="rounded-[10px] w-65"
                  />

                 <div>
                   {/*decrement */}
                  {hideCount && (
                    <button className="absolute text-amber-700 px-2.5 py-0.5 top-58 left-5 bg-white font-bold outline-2 outline-amber-700 rounded flex justify-center items-center">-</button>
                  )}
                   <div className="w-full flex justify-center items-center absolute top-58">
                    {/*Add to cart button */}
                  <button
                    className="flex flex-row outline-1 rounded-[20px] px-5 py-1 outline-[#260f08] bg-white gap-2 text-[14px] font-semibold active:bg-amber-700"
                    onClick={addToCart}
                  >
                    {" "}
                    {hideCount ?  "< return": (<><img src={cart} alt="" /> Add to Cart</>)}
                  </button>
                   </div>
                  {/*increment */}
                  {hideCount && (
                    <button className="absolute text-amber-700 font-bold px-2 py-0.5 top-58 left-52 outline-2 outline-amber-700 rounded bg-white flex justify-center items-center">+</button>
                  )}
                 </div>
                </div>

                <p className="text-[#87635a] fontThree">{props.food}</p>
                <h3 className="fontFive">{props.foodName}</h3>
                <p className="text-[#c73a0f] font-semibold">
                  $
                  {props.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white px-5 py-7 h-75 w-100 rounded-[10px]">
          <h3 className="text-[#c73a0f] font-bold mb-5 text-[25px]">
            Your Cart
          </h3>
          <div className="flex flex-col justify-center items-center">
            <img src={illustration} alt="" />
            <p className="text-[14px] mt-3">
              Your added items will appear here
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
