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
    <div className="pt-10 pb-96 md:pb-72 lg:pb-52 px-10 md:pt-14 lg:pt-20 md:px-20 lg:px-40 bg-[#E2F5FB] flex flex-row items-center justify-center">
      <div className="relative w-full">
        <div className="px-0 lg:px-10">
          <h1 className="text-7xl md:text-7xl lg:text-9xl font-bold text-center text-[#003569]">
            Essential Vitamins
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-around my-10 md:my-14">
            <div className="flex flex-col md:flex-row items-center justify-around gap-5 md:mt-6 lg:mt-0 ">
              <div className="w-[80%] md:w-[50%] lg:w-[40%]">
                <h1 className="text-lg text-[#727272]">
                  Online Medical Supplies
                </h1>
                <h1 className="text-2xl text-[#17414F] font-semibold py-5">
                  Get Your Vitamins & Minerals
                </h1>
                <button className="bg-[#17414F] text-sm text-white py-2 px-8 rounded-3xl">
                  EXPLORE
                </button>
              </div>
              <div className="relative mt-16 md:mt-0 bg-[#FFE9B5] rounded-tl-[90px] rounded-br-[90px] w-60 h-48 lg:w-72 lg:h-64">
                <img
                  src={medicinebottle}
                  alt="medcine bottle"
                  className="absolute w-full bottom-5 lg:bottom-10 right-0 left-0"
                />
              </div>
            </div>
            <div
              className="flex flex-col md:flex-row gap-6 lg:flex-col justify-between mt-14 lg:mt-0 lg:gap-6 lg:w-[30%]"
            >
              <div className="flex flex-col lg:flex-row items-center gap-3 w-full md:w-4/12 lg:w-full">
                <img
                  src={vitamins}
                  alt="vitamins"
                  className="w-[55px] h-[55px] rounded-full"
                />
                <div>
                  <h1 className="text-lg lg:text-xl font-semibold text-[#17414F] text-center lg:text-start">
                    Vitamins
                  </h1>
                  <h1 className="text-sm text-[#727272] text-center lg:text-start">
                    Increased Vitamins and minerals in your diet
                  </h1>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-3 w-full md:w-4/12 lg:w-full">
                <img
                  src={weightmachine}
                  alt="weightmachine"
                  className="w-[55px] h-[55px] rounded-full"
                />
                <div>
                  <h1 className="text-lg lg:text-xl font-semibold text-[#17414F] text-center lg:text-start">
                    Weight Loss
                  </h1>
                  <h1 className="text-sm text-[#727272] text-center lg:text-start">
                    Weight Loss Find scientifically proven solutions
                  </h1>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-3 w-full md:w-4/12 lg:w-full">
                <img
                  src={foods}
                  alt="foods"
                  className="w-[55px] h-[55px] rounded-full"
                />
                <div>
                  <h1 className="text-lg lg:text-xl font-semibold text-[#17414F] text-center lg:text-start">
                    Functinal Foods
                  </h1>
                  <h1 className="text-sm text-[#727272] text-center lg:text-start">
                    Functional Foods From protein powers to baby formula
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3 my-8 lg:my-14">
            <div className="p-2 lg:p-4 rounded-full bg-[#72727235]"></div>
            <div className="p-2 lg:p-4 rounded-full bg-[#72727235]"></div>
          </div>
        </div>

        <div className="absolute w-full">
          <div className="lg:relative lg:h-[440px] bg-[#17414F] rounded-[50px] max-sm:shadow-md">
            <div className="lg:absolute lg:bottom-5 p-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-28 lg:gap-y-16">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={clinical} alt="clinical" className="w-6" />
                </div>
                <h1 className="text-lg lg:text-xl text-white font-medium">
                  Clinically studied
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  All products that we offer have undergone lab and safety tests
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={vegetarian} alt="vegetarian" className="w-6" />
                </div>
                <h1 className="text-lg lg:text-xl text-white font-medium">
                  Vegetarian
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  We have a wide selection of vegetarian products to meet
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={india} alt="Made in India" className="w-6" />
                </div>
                <h1 className="text-lg lg:text-xl text-white font-medium">
                  Made In India
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  Shop local and explore health products made right here in
                  India
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={shipment} alt="shipment" className="w-6" />
                </div>
                <h1 className="text-lg lg:text-xl text-white font-medium">
                  Free Shipping
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  We deliver to your door with no shipping costs on your orders
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={risk} alt="no risk" className="w-6" />
                </div>
                <h1 className="text-lg lg:text-xl text-white font-medium">
                  No Risk
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  We ensure that all products are safe and within their use-by
                  date
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="bg-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex flex-col items-center justify-center">
                  <img src={gmo} alt="gmo" className="w-6" />
                </div>
                <h1 className="text-lg lg:text-xl text-white font-medium">
                  GMO Free
                </h1>
                <p className="text-[#D9D9D9] text-sm text-center">
                  Natural, no modified products and derivatives
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
