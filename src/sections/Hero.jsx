import medicinebottle from "../assets/medicinebottle.png";
import vitamins from "../assets/vitamins.png";
import weightmachine from "../assets/weightmachine.png";
import foods from "../assets/foods.png";

import clinical from "../assets/icons/clinical.png";
import vegetarian from "../assets/icons/vegetarian.png";
import india from "../assets/icons/indiamade.png";
import shipment from "../assets/icons/shipment.png";
import risk from "../assets/icons/risk.png";
import gmo from "../assets/icons/gmo.png";

function Hero() {
  return (
    <div className="pt-20 pb-52 px-40 bg-[#E2F5FB] flex flex-row items-center justify-center">
      <div className="relative">
        <h1 className="text-9xl font-bold text-[#003569]">
          Essential Vitamins
        </h1>
        <div className="flex flex-row items-center justify-around my-14">
          <div className="w-[20%]">
            <h1 className="text-lg text-[#727272]">Online Medical Supplies</h1>
            <h1 className="text-2xl text-[#17414F] font-semibold py-5">
              Get Your Vitamins & Minerals
            </h1>
            <button className="bg-[#17414F] text-sm text-white py-2 px-8 rounded-3xl">
              EXPLORE
            </button>
          </div>
          <div className="relative bg-[#FFE9B5] rounded-tl-[90px] rounded-br-[90px] w-72 h-64">
            <img
              src={medicinebottle}
              alt="medcine bottle"
              className="absolute w-full bottom-10 right-0 left-0"
            />
          </div>
          <div className="flex flex-col gap-6 w-[30%]">
            <div className="flex flex-row items-center gap-3">
              <img
                src={vitamins}
                alt="vitamins"
                className="w-[55px] h-[55px] rounded-full"
              />
              <div>
                <h1 className="text-xl font-semibold text-[#17414F]">
                  Vitamins
                </h1>
                <h1 className="text-sm text-[#727272] ">
                  Increased Vitamins and minerals in your diet
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <img
                src={weightmachine}
                alt="weightmachine"
                className="w-[55px] h-[55px] rounded-full"
              />
              <div>
                <h1 className="text-xl font-semibold text-[#17414F]">
                  Weight Loss
                </h1>
                <h1 className="text-sm text-[#727272] ">
                  Weight Loss Find scientifically proven solutions
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <img
                src={foods}
                alt="foods"
                className="w-[55px] h-[55px] rounded-full"
              />
              <div>
                <h1 className="text-xl font-semibold text-[#17414F]">
                  Functinal Foods
                </h1>
                <h1 className="text-sm text-[#727272] ">
                  Functional Foods From protein powers to baby formula
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 my-14">
          <div className="p-4 rounded-full bg-[#72727235]"></div>
          <div className="p-4 rounded-full bg-[#72727235]"></div>
        </div>
        <div className="absolute w-full">
          <div className="relative h-[440px] bg-[#17414F] rounded-[50px]">
            <div className="absolute bottom-16 px-16 grid grid-cols-3 gap-x-28 gap-y-16">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-20 h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={clinical} alt="clinical" className="w-6" />
                </div>
                <h1 className="text-xl text-white font-medium">
                  Clinically studied
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  All products that we offer have undergone lab and safety tests
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-20 h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={vegetarian} alt="vegetarian" className="w-6" />
                </div>
                <h1 className="text-xl text-white font-medium">
                  Vegetarian Friendly
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  We have a wide selection of vegetarian products to meet your
                  needs
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-20 h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={india} alt="Made in India" className="w-6" />
                </div>
                <h1 className="text-xl text-white font-medium">
                  Made In India
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  Shop local and explore health products made right here in
                  India
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-20 h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={shipment} alt="shipment" className="w-6" />
                </div>
                <h1 className="text-xl text-white font-medium">
                  Free Shipping
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  We deliver to your door with no shipping costs on your orders
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-20 h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={risk} alt="no risk" className="w-6" />
                </div>
                <h1 className="text-xl text-white font-medium">No Risk</h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  We ensure that all products are safe and within their use-by
                  date
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-20 h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={gmo} alt="gmo" className="w-6" />
                </div>
                <h1 className="text-xl text-white font-medium">GMO Free</h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  Natural, no modified products and derivatives for those who
                  need it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
