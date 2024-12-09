import dec from "../../src/assets/ingredients/dec.jpg";

const Ingredients = () => {
  return (
    <div className="mt-[850px] md:mt-96 lg:mt-60 px-10 md:px-20 lg:px-40 py-16">
      <div className="flex flex-row gap-3 lg:gap-5 flex-wrap">
        <div className="w-[100%] md:w-[55%] lg:w-[36%]">
          <h1 className="text-[#003569] font-bold">INGREDIENTS</h1>
          <h1 className="text-[#17414F] py-6 font-semibold text-4xl">
            Better Ingredients
          </h1>
          <p className="text-[#727272]">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </p>
        </div>
        <div className="mt-5 md:mt-0 bg-vitaminC bg-no-repeat bg-cover bg-right-bottom lg:bg-center h-52 lg:h-60 w-[100%] md:w-[42%] lg:w-[30%] p-6 rounded-lg">
          <div className="h-full flex flex-col items-start justify-between">
            <div>
              <h1 className="text-[#2D3F59] font-semibold text-lg">
                Vitamin C
              </h1>
              <p className="text-[#727272] font-semibold mt-2">
                Vitamin C as ascorbic acid
              </p>
            </div>
            <button className="font-semibold text-sm text-[#003569] pb-1 border-b-2 border-[#003569]">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="bg-vitaminB3 bg-no-repeat bg-cover bg-right-bottom lg:bg-center h-52 lg:h-60 w-[100%] md:w-[51%] lg:w-[30%] p-6 rounded-lg">
          <div className="h-full flex flex-col items-start justify-between">
            <div>
              <h1 className="text-[#2D3F59] font-semibold text-lg ">
                Vitamin B3
              </h1>
              <p className="text-[#727272]  font-semibold mt-2">
                Niacin for healthy gut and skin
              </p>
            </div>
            <button className="font-semibold text-sm text-[#003569] pb-1 border-b-2 border-[#003569]">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="bg-Magnesium bg-no-repeat bg-cover bg-right-bottom lg:bg-center h-52 lg:h-60 w-[100%] md:w-[46%] lg:w-[29%] p-6 rounded-lg">
          <div className="h-full flex flex-col items-start justify-between">
            <div>
              <h1 className="text-[#2D3F59] font-semibold text-lg">
                Magnesium
              </h1>
              <p className="text-[#727272] w-3/4  font-semibold mt-2">
                Boost energy and support muscle function
              </p>
            </div>
            <button className="font-semibold text-sm text-[#003569] pb-1 border-b-2 border-[#003569]">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="bg-hyaluronic bg-no-repeat bg-cover bg-right-bottom lg:bg-center h-52 lg:h-60 w-[100%] md:w-[51%] lg:w-[29%] p-6 rounded-lg">
          <div className="h-full flex flex-col items-start justify-between">
            <div>
              <h1 className="text-[#2D3F59] font-semibold text-lg">
                Hyaluronic Acid
              </h1>
              <p className="text-[#727272] w-3/4  font-semibold mt-2">
                For smooth, supple and soft skin!
              </p>
            </div>
            <button className="font-semibold text-sm text-[#003569] pb-1 border-b-2 border-[#003569]">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="bg-lactobacillus bg-no-repeat bg-cover bg-right-bottom lg:bg-center h-52 lg:h-60 w-[100%] md:w-[46%] lg:w-[29%] p-6 rounded-lg">
          <div className="h-full flex flex-col items-start justify-between">
            <div>
              <h1 className="text-[#2D3F59] font-semibold text-lg">
                Lactobacillus
              </h1>
              <p className="text-[#727272] w-3/4  font-semibold mt-2">
                Invigorate your gut microbiome
              </p>
            </div>
            <button className="font-semibold text-sm text-[#003569] pb-1 border-b-2 border-[#003569]">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="hidden lg:block h-60 w-[7%]">
          <img src={dec} alt="dec" className="h-full"/>{" "}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
