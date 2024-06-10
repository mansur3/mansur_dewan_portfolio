"use client";
import style from "@/components/HomePage/Article.module.css";
import { useRouter } from "next/navigation";
const Article = () => {
  const router = useRouter();

  const handleRouterRedbus = () => {
    router.push("https://github.com/RaniKamna/Redbus_clone?tab=readme-ov-file");
  };

  return (
    <div id="article" className={`container px-4 xl:px-10 m-auto mt-10 `}>
      <div className={`flex justify-end ${style.header}`}>Articles</div>
      <div className={`flex flex-row mt-16`}>
        <div className={`flex flex-col ${style.flex_button}`}>
          <button className={`${style.button_item_one}`}>1</button>
          <button className={`${style.button_item}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
              />
            </svg>
          </button>
        </div>
        <div className={`grid grid-cols-2 ${style.item_container} gap-8`}>
          <div className={`flex flex-col ${style.card_item}`}>
            <h2>Cloning of Redbus website</h2>
            <p>
              redBus is India’s largest online bus ticketing platform that has
              transformed bus travel in the country by bringing ease and
              convenience to millions of Indians who travel using buses. In this
              project we tried to make perfect clone of redbus.We had builded up
              all our efforts to do best in this project.At redbus users can
              book buses,tempo and car according to their requirements.
            </p>
            <div className={`flex flex-row justify-start`}>
              <button
                onClick={() => {
                  handleRouterRedbus();
                }}
                className={`${style.read_more}`}
              >
                Read More
              </button>
              <button
                onClick={() => {
                  router.push("https://front-end-mansur3.vercel.app/");
                }}
                className={`${style.button}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`flex flex-col ${style.card_item}`}>
            <h2>Cloning of cult fit</h2>
            <p>
              At Cult, we make fitness fun and easy. We have best-in-class
              trainers & offer group workouts ranging from yoga to Boxing.
              Cult.fiuses the best in technology to give you a world-class
              experience. You can book classes, follow workout videos, order
              cult mens and women gear, order healthy food.
            </p>
            <div className={`flex flex-row justify-start`}>
              <button
                onClick={() => {
                  router.push(
                    "https://github.com/sheetalsindhu/cult-fit-project"
                  );
                }}
                className={`${style.read_more}`}
              >
                Read More
              </button>
              {/* <button className={`${style.button}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
