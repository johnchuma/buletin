import { newsItems } from "../utils/constants";

const NewsPage = () => {
  const news = newsItems[0];
  return (
    <div>
      <div className="w-8/12 mx-auto py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <h1 className="text-4xl font-semibold font-serif">{news.title}</h1>
            <div className="flex space-x-1 mt-2 mb-4 items-center text-muted text-sm text-mutedText">
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
            <div className=" space-y-1">
              <img
                alt=""
                className={`rounded-xl h-96 ${" w-full object-cover"}`}
                src={news.image}
              />

              <p className=" text-mutedText line-clamp-4">
                {news.description ??
                  ` `}
              </p>
              <div className="flex space-x-3 text-mutedText text-sm">
                <div className="text-red-500">Movie</div>
                <div>4 min read</div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <iframe
              src="https://videoad.vercel.app"
              className="w-full h-screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
