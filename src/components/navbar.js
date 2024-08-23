import { AiOutlineBell, AiOutlineNotification } from "react-icons/ai";
import { BiSolidNotification } from "react-icons/bi";
import { Bs0Circle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" w-11/12 2xl:w-8/12  mx-auto py-3 flex items-center space-x-4 justify-between">
        <div className="flex space-x-4">
          <h1
            onClick={() => {
              navigate("/");
            }}
            className="text-2xl object-cover cursor-pointer text-primaryColor font-semibold font-serif"
          >
            Buletin
          </h1>
          <div className="flex space-x-2 items-center">
            <p>Politics</p>
            <p>Travel</p>
            <p>Business</p>
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <p>
            <AiOutlineBell className="text-xl" />
          </p>
          <div className="size-8 bg-slate-400 rounded-full">
            <img
              alt=""
              className="rounded-full object-cover size-8"
              src="https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
