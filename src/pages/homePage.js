import { AiOutlineArrowRight } from "react-icons/ai";
import NewsItem from "../components/newsItem";
import NewsItemOverlay from "../components/newsItemOverlay";
import { newsItems } from "../utils/constants";

const HomePage = () => {
  return (
    <div className="w-8/12 mx-auto">
      <div className=" fixed bottom-0 right-0 left-0 z-50   flex flex-col justify-end">
        <iframe src="https://selectionad.vercel.app" className="w-full" />
      </div>
      <div className=" bg-lightBackground p-12 rounded-lg mt-8">
        <div className="w-6/12 text-center mx-auto space-y-2">
          <h1 className="text-sm text-mutedText">WELCOME TO BULETIN</h1>
          <p className="text-2xl font-semibold">
            Craft narratives 🤌 that ignite{" "}
            <span className="text-primaryColor">inspiration</span>,💡{" "}
            <span className="text-primaryColor">Knowledge 📕</span> , and{" "}
            <span className="text-primaryColor">entertainment 🎥</span>
          </p>
        </div>
      </div>
      <div className="flex justify-end ">
        <iframe src="https://hoverads.vercel.app/" className="w-full" />
      </div>
      <div className="grid grid-cols-12 gap-12 items-center mt-8">
        <div className=" col-span-6 ">
          <img
            alt=""
            className=" rounded-xl"
            src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/d4795c6b-9718-4c52-8d4a-858ce47cd694/review-john-wick-chapter-4-elevates-the-badass-action-franchise-to-a-new-level.jpg"
          />
        </div>
        <div className=" col-span-6">
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
          <h1 className="text-4xl font-semibold pb-3 mt-1 font-serif">
            Where to watch John Wick: Chapter 4
          </h1>
          <p className="pb-3 text-mutedText">
            Reprehenderit mollit sint aute ex amet aliquip. Ea nulla quis
            nostrud consectetur dolor eiusmod dolor. Deserunt ut qui culpa sunt
            reprehenderit cupidatat. Aute sunt mollit do quis aliqua aliqua
            aliquip culpa sint aute nostrud nisi minim qui.
          </p>
          <div className="flex space-x-3 text-mutedText text-sm">
            <div className="text-red-500">Movie</div>
            <div>4 min read</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-3xl font-semibold">Latest News</h1>
        <div className="flex space-x-2 text-primaryColor items-center text-sm">
          <p>See All</p>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-4">
        {newsItems.map((item, index) => {
          return (
            index < 4 && (
              <NewsItem
                image={item.image}
                title={item.title}
                description={item.description}
              />
            )
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-3xl font-semibold">Buletin Story</h1>
        <div className="flex space-x-2 text-primaryColor items-center text-sm">
          <p>See All</p>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="grid grid-cols-10 gap-12 mt-6">
        {[
          {
            title: "Economics",
            image:
              "https://media.istockphoto.com/id/1351440359/vector/megaphone-with-breaking-news-speech-bubble-banner-loudspeaker-label-for-business-marketing.jpg?s=612x612&w=0&k=20&c=o2Q3N327CD_YdTjXqQ5cP2MW7rNHWDRD33ZO7iFA9QE=",
          },
          {
            title: "Economics",
            image:
              "https://img.freepik.com/free-vector/gradient-breaking-news-logo-design_23-2151157248.jpg",
          },
          {
            title: "Economics",
            image:
              "https://ichef.bbci.co.uk/news/480/cpsprodpb/cef5/live/7e7c7680-609e-11ef-b970-9f202720b57a.jpg.webp",
          },
          {
            title: "Economics",
            image:
              "https://www.euroschoolindia.com/wp-content/uploads/2023/10/short-story-that-have-moral-lesson-jpg.webp",
          },
          {
            title: "Economics",
            image:
              "https://www.euroschoolindia.com/wp-content/uploads/2023/10/short-story-that-have-moral-lesson-jpg.webp",
          },
          {
            title: "Economics",
            image:
              "https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w1920-q80/marquee/1042340/cen_sp_hero_landscape_0.jpg",
          },
          {
            title: "Economics",
            image:
              "https://www.euroschoolindia.com/wp-content/uploads/2023/10/short-story-that-have-moral-lesson-jpg.webp",
          },
          {
            title: "Economics",
            image:
              "https://www.euroschoolindia.com/wp-content/uploads/2023/10/short-story-that-have-moral-lesson-jpg.webp",
          },
          {
            title: "Economics",
            image:
              "https://i.ytimg.com/vi/qrMrwRAurBM/hq720_live.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsrLLdpJj5qAlB9abDwkZexlbIJQ",
          },
          {
            title: "Economics",
            image:
              "https://yt3.googleusercontent.com/ytc/AIdro_n-3q1GCZk-HxpvR8cGNj-guqNBNNrb2kgbqKwWsbZe6w=s900-c-k-c0x00ffffff-no-rj",
          },
        ].map((item) => {
          return (
            <div
              key={item.title}
              className="text-center flex flex-col items-center justify-center "
            >
              <div className="rounded-full size-24">
                <img
                  alt=""
                  className="rounded-full size-full object-cover"
                  src={item.image}
                />
              </div>
              <h1 className="text-sm text-mutedText">{item.title}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex justify-between items-center mt-8">
          <h1 className="text-3xl font-semibold">Must Read</h1>
          <div className="flex space-x-2 text-primaryColor items-center text-sm">
            <p>See All</p>
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-6 gap-6">
          <div className="col-span-3">
            <NewsItem
              title={newsItems[2].title}
              image={newsItems[2].image}
              description={newsItems[2].description}
            />
          </div>
          <div className="col-span-6">
            <NewsItemOverlay
              image={
                "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/12-10-2023-UNICEF-Ethiopia.jpg/image1170x530cropped.jpg"
              }
            />
            <iframe src="https://audioad.vercel.app" className="w-full" />
          </div>
          <div className="col-span-3 space-y-4">
            <NewsItem
              imageHeight={"h-24 w-full object-cover"}
              title={newsItems[1].title}
              image={newsItems[1].image}
              description={""}
            />
            <NewsItem
              imageHeight={"h-24 w-full object-cover"}
              title={newsItems[3].title}
              image={newsItems[3].image}
              description={""}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 mb-4">
          <h1 className="text-3xl font-semibold">Editor's Pick</h1>
          <div className="flex space-x-2 text-primaryColor items-center text-sm">
            <p>See All</p>
            <AiOutlineArrowRight />
          </div>
        </div>
        <NewsItemOverlay
          image={
            "https://wallpapers.com/images/hd/news-background-btwhco8v58xtiohi.jpg"
          }
          imageHeight={"h-72"}
        />
        <div className="grid grid-cols-4 gap-6 mt-8">
          {newsItems.map((item, index) => {
            return (
              index < 4 && (
                <NewsItem
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              )
            );
          })}
        </div>
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-3xl font-semibold">Business News</h1>
          <div className="flex space-x-2 text-primaryColor items-center text-sm">
            <p>See All</p>
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {newsItems.map((item, index) => {
            return (
              index < 4 && (
                <NewsItem
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              )
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-3xl font-semibold">Top Creator</h1>
        <div className="flex space-x-2 text-primaryColor items-center text-sm">
          <p>See All</p>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-12 mt-6">
        {[
          {
            title: "John Doe",
            image:
              "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg",
          },
          {
            title: "Mary John",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZ15mJGh-yB_6FMAFU9m6iUEBjqmQBsxk7EKR_2JTsyjT_PK_41CBLTC3yDNc3UY2to0&usqp=CAU",
          },
          {
            title: "Juma Amosi",
            image:
              "https://images.generated.photos/-tzBOz5MEUrjptB-Nk644VokV1V6vFiSk8CZfPzwGKE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDQ1MTI4XzA4ODUz/NTJfMDkwNjgzOC5q/cGc.jpg",
          },
          {
            title: "Hamza Juma",
            image:
              "https://images.generated.photos/tScf-Nu6UKfInJ6VE5HByCxnGVJyxwg2VLj_SMWv5Dk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQ3ODE0LmpwZw.jpg",
          },
          {
            title: "Erick Ndaki",
            image:
              "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
          },
        ].map((item) => {
          return (
            <div key={item.title} className="flex space-x-2 items-center ">
              <div className="rounded-full size-16">
                <img
                  alt=""
                  className="rounded-full size-16 object-cover"
                  src={item.image}
                />
              </div>
              <div>
                <h1 className="text-lg   font-bold">{item.title}</h1>
                <p className="text-red-500 text-sm">BBC News</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" bg-lightBackground p-12 rounded-lg mt-8 flex justify-between">
        <div className=" text-start  space-y-2 w-5/12">
          <h1 className="text-sm text-mutedText">Get First Update</h1>
          <p className="text-2xl font-semibold">
            Get the news in front line by{" "}
            <span className="text-primaryColor">Subscribe</span>💡, our latest
            updates
          </p>
        </div>
        <div className="flex space-x-2 items-center w-7/12 justify-end">
          <div>
            <input
              placeholder="Enter your email"
              className="py-2 border-slate-100 rounded-lg"
            />
          </div>
          <div>
            <button className="text-white bg-primaryColor  py-2 px-6 rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
