const Blog = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40">
      <div>
        <h1 className="font-semibold text-[#003569] text-center">OUR BLOG</h1>
        <h1 className="text-3xl lg:text-4xl font-bold text-[#17414F] text-center mt-2">
          Latest News
        </h1>
      </div>
      <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative bg-jellybee bg-no-repeat bg-cover bg-center rounded-md m-2 px-10 py-16 h-44 md:h-80">
            <div className="absolute bg-[#003569] rounded-r-full w-fit text-white pr-6 pl-7 py-1 text-sm -left-2 top-4">20 APR</div>
            <h1 className="text-white font-semibold text-lg">The Covid-19 Epidemic In 2022 Is Back</h1>
          </div>
          <div className="relative bg-capsule bg-no-repeat bg-cover bg-center rounded-md m-2 px-10 py-16 h-44">
            <div className="absolute bg-[#003569] rounded-r-full w-fit text-white pr-6 pl-7 py-1 text-sm -left-2 top-4">20 APR</div>
            <h1 className="text-white font-semibold text-lg">The Covid-19 Epidemic In 2023 Is Back</h1>
          </div>
        </div>
        <div>
          <div className="relative bg-jellybee bg-no-repeat bg-cover bg-top rounded-md m-2 px-10 py-16 h-44">
            <div className="absolute bg-[#003569] rounded-r-full w-fit text-white pr-6 pl-7 py-1 text-sm -left-2 top-4">20 APR</div>
            <h1 className="text-white font-semibold text-lg">The Covid-19 Epidemic In 2022 Is Back</h1>
          </div>
          <div className="relative bg-capsule bg-no-repeat bg-cover bg-center rounded-md m-2 px-10 py-16 md:h-80">
            <h1 className="text-white font-semibold text-lg">The Covid-19 Epidemic In 2023 Is Back</h1>
          </div>
        </div>
        <div>
          <div className="relative bg-jellybee bg-no-repeat bg-cover bg-center rounded-md m-2 px-10 py-16 h-44 md:h-80">
            <div className="absolute bg-[#003569] rounded-r-full w-fit text-white pr-6 pl-7 py-1 text-sm -left-2 top-4">20 APR</div>
            <h1 className="text-white font-semibold text-lg">The Covid-19 Epidemic In 2022 Is Back</h1>
          </div>
          <div className="relative bg-capsule bg-no-repeat bg-cover bg-center rounded-md m-2 px-10 py-16 h-44">
            <div className="absolute bg-[#003569] rounded-r-full w-fit text-white pr-6 pl-7 py-1 text-sm -left-2 top-4">20 APR</div>
            <h1 className="text-white font-semibold text-lg">The Covid-19 Epidemic In 2023 Is Back</h1>
          </div>
        </div>
        <div>
          <div className="relative bg-jellybee bg-no-repeat bg-cover bg-top rounded-md m-2 px-10 py-16 h-44">
            <div className="absolute bg-[#003569] rounded-r-full w-fit text-white pr-6 pl-7 py-1 text-sm -left-2 top-4">20 APR</div>
            <h1 className="text-white font-semibold text-lg">The Covid-19 Epidemic In 2022 Is Back</h1>
          </div>
          <div className="relative bg-capsule bg-no-repeat bg-cover bg-center rounded-md m-2 px-10 py-16 h-44 md:h-80">
          <div className="absolute bg-[#003569] rounded-r-full w-fit text-white pr-6 pl-7 py-1 text-sm -left-2 top-4">17 MAR</div>
            <h1 className="text-white font-semibold text-lg">Hac hendrerit mus nons semper suspendisse</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
