import phone from "../assets/icons/phone.png";
import mail from "../assets/icons/mail.png";
import location from "../assets/icons/location.png";
import logo from "../../src/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#17414F] pt-10 pb-5 px-12 md:px-32 lg:px-52 mt-10">
      <div className="grid md:grid-col-2 lg:grid-cols-3 gap-2 lg:gap-8">
        <div className="bg-[#215D72] text-white py-4 px-10 flex flex-row items-center justify-center gap-6 rounded-md">
          <img src={phone} alt="phone" className="w-8 lg:w-10" />
          <div>
            <h1 className="text-sm">Phone Number</h1>
            <h1 className="font-semibold max-sm:text-sm">+974 3118 1843</h1>
          </div>
        </div>
        <div className="bg-[#215D72] text-white py-4 px-10 flex flex-row items-center justify-center gap-6 rounded-md">
          <img src={mail} alt="mail" className="w-8 lg:w-10" />
          <div>
            <h1 className="text-sm">Email Address</h1>
            <h1 className="font-semibold max-sm:text-sm">Elbrithcqhr@gmail.com</h1>
          </div>
        </div>
        <div className="bg-[#215D72] text-white py-4 px-10 flex flex-row items-center justify-center gap-6 rounded-md">
          <img src={location} alt="location" className="w-8 lg:w-10" />
          <div>
            <h1 className="text-sm">Office Location</h1>
            <h1 className="font-semibold max-sm:text-sm"> Ambassador Street, Zone</h1>
          </div>
        </div>
      </div>
      <div className="my-5 lg:my-10 grid md:grid-col-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <img src={logo} alt="logo" className="w-48 md:w-60 lg:w-72 rounded-sm" />
        <p className="text-white text-xs">
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>
      <div className="flex flex-row items-center gap-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <p className="text-xs">
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </p>
      </div>
    </div>
  );
};

export default Footer;
