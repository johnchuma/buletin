import { useNavigate } from "react-router-dom";

const NewsItem = ({ title, description, image, imageHeight }) => {
  const navigate = useNavigate();
  return (
    <div className=" cursor-pointer">
      <div
        onClick={() => {
          navigate("/news/adfa");
        }}
        className=" space-y-1"
      >
        <img
          alt=""
          className={`rounded-xl ${imageHeight ?? "h-48 w-full object-cover"}`}
          src={image}
        />
        <div className="flex space-x-1 items-center text-muted text-sm text-mutedText">
          <div>
            <img
              alt=""
              className="size-4 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZhYUrmk6vDmi1-Pj7oI-HzTpQDCi9-IFTA&s"
            />
          </div>
          <div>Movie .</div>
          <div>4 min read</div>
        </div>
        <h1 className="text-xl font-semibold font-serif">{title}</h1>
        <p className=" text-mutedText line-clamp-4">
          {description ??
            ` Reprehenderit mollit sint aute ex amet aliquip. Ea nulla quis nostrud
          consectetur dolor eiusmod dolor. Deserunt ut qui culpa sunt
          reprehenderit cupidatat. Aute sunt mollit do quis aliqua aliqua
          aliquip culpa sint aute nostrud nisi minim qui.`}
        </p>
        <div className="flex space-x-3 text-mutedText text-sm">
          <div className="text-red-500">Movie</div>
          <div>4 min read</div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
