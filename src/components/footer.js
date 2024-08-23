import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-8/12 mx-auto my-8 mb-48">
      <div className="grid grid-cols-12 gap-12">
        <div className=" space-y-2 col-span-4">
          <h1 className="text-xl text-primaryColor font-semibold font-serif">
            Buletin
          </h1>
          <p className="text-sm ">
            Craft narrative that ignite inspiration knowledge, and entertainment
          </p>
          <div className="flex space-x-2">
            <div className="size-8 bg-primaryColor rounded-full text-white flex justify-center items-center">
              <FaFacebook />
            </div>
            <div className="size-8 bg-primaryColor rounded-full text-white flex justify-center items-center">
              <FaTwitter />
            </div>
            <div className="size-8 bg-primaryColor rounded-full text-white flex justify-center items-center">
              <FaSquareWhatsapp />
            </div>
            <div className="size-8 bg-primaryColor rounded-full text-white flex justify-center items-center">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="col-span-2 text-mutedText text-sm">
          <h1 className="font-semibold text-black text-lg">Business</h1>
          <p>Startup</p>
          <p>Employee</p>
          <p>Success</p>
          <p>Videos</p>
          <p>Markets</p>
        </div>
        <div className="col-span-2 text-mutedText text-sm">
          <h1 className="font-semibold text-black text-lg">Technology</h1>
          <p>Innovate</p>
          <p>Gadget</p>
          <p>innovative Cities</p>
          <p>Upstarts</p>
          <p>Future Tech</p>
        </div>
        <div className="col-span-2 text-mutedText text-sm">
          <h1 className="font-semibold text-black text-lg">Sports</h1>
          <p>Football</p>
          <p>Tennis</p>
          <p>Golf</p>
          <p>Motosports</p>
          <p>Esports</p>
        </div>
        <div className="col-span-2 text-mutedText text-sm">
          <h1 className="font-semibold text-black text-lg">Travel</h1>
          <p>Destinations</p>
          <p>Food & Drink</p>
          <p>Stay</p>
          <p>News</p>
          <p>Videos</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
