import { newsItems } from "../utils/constants";

const HoverPage = () => {
  const news = newsItems[2];
  return (
    <div>
      <div className=" w-7/12 2xl:w-5/12 mx-auto py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
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
            <div className=" space-y-3">
              <img
                alt=""
                className={`rounded-xl h-96 ${" w-full object-cover"}`}
                src={news.image}
              />

              <p className=" text-mutedText line-clamp-4">
                2024 is poised to be a landmark year in technological
                innovation, with rapid advancements that promise to disrupt
                multiple sectors and redefine the way we live, work, and
                interact with the world. Leading the charge is artificial
                intelligence (AI), which has evolved from a specialized tool to
                a ubiquitous force. AI is now deeply integrated into everything
                from healthcare diagnostics and autonomous vehicles to
                personalized marketing and financial forecasting. Machine
                learning models are becoming more accurate, capable of
                processing vast amounts of data to make decisions in real-time,
                enhancing productivity and creating new opportunities in various
                industries.
              </p>
              <p className=" text-mutedText line-clamp-4">
                The rise of quantum computing is another game-changer in 2024.
                With tech giants and startups alike making breakthroughs,
                quantum computers are edging closer to practical, real-world
                applications. These machines, which operate on the principles of
                quantum mechanics, have the potential to solve problems that are
                currently impossible for classical computers, such as complex
                simulations for drug discovery, cryptography, and climate
                modeling. As quantum hardware improves, so too will its impact,
                paving the way for innovations in cybersecurity, logistics, and
                even artificial intelligence itself.
              </p>
              <p className=" text-mutedText line-clamp-4">
                In the realm of connectivity, 5G networks are expanding
                globally, enabling faster data transmission and lower latency.
                This improved connectivity is fueling the growth of the Internet
                of Things (IoT), where smart devices in homes, cities, and
                industries communicate seamlessly with each other. Smart cities,
                equipped with IoT sensors, are optimizing energy consumption,
                reducing traffic congestion, and improving public safety through
                real-time monitoring and predictive analytics. Meanwhile,
                industries are adopting IoT to enhance operational efficiency,
                predictive maintenance, and supply chain management, driving the
                next wave of industrial automation.
              </p>
              <p className=" text-mutedText line-clamp-4"></p>
              <iframe
                src="https://hoverads.vercel.app"
                className="w-full h-[700px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverPage;
