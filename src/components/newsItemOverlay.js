const NewsItemOverlay = ({ title, description, image, imageHeight }) => {
  return (
    <div>
      <div className=" space-y-2">
        <div className="relative ">
          <img
            alt=""
            className={`rounded-xl object-cover top-0 bottom-0 w-full ${imageHeight}`}
            src={image}
          />
          <div className="bg-black bg-opacity-30 rounded-xl absolute flex flex-col bottom-0 top-0 justify-end ">
            <div className=" text-white p-8 ">
              <div className="flex space-x-1 items-center text-muted text-sm text-white">
                <div>
                  <img
                    alt=""
                    className="size-4 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZhYUrmk6vDmi1-Pj7oI-HzTpQDCi9-IFTA&s"
                  />
                </div>
                <div className="text-white">Movie .</div>
                <div>4 min read</div>
              </div>
              <h1 className="text-xl font-semibold font-serif">
                {title ?? "Where to watch John Wick: Chapter 4"}
              </h1>
              <p className=" text-white ">
                {description ??
                  ` Reprehenderit mollit sint aute ex amet aliquip. Ea nulla quis nostrud
            consectetur dolor eiusmod dolor. Deserunt ut qui culpa sunt
            reprehenderit cupidatat. Aute sunt mollit do quis aliqua aliqua
            aliquip culpa sint aute nostrud nisi minim qui.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItemOverlay;
