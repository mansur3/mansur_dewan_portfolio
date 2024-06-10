"use client";
import style from "@/components/HomePage/Project.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Project = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("https://mf.whiteoakamc.com/");
  };

  const handleUpcapita = () => {
    router.push("https://www.upcapita.com/home");
  };

  const handleIbl = () => {
    router.push("https://www.indusind.com/in/en/personal.html");
  };

  const handleChqbook = () => {
    router.push("https://www.chqbook.com/");
  };
  return (
    <section
      id="project"
      className={`${style.component_work} container px-4 xl:px-10 m-auto mt-10`}
    >
      <div className={`flex justify-center mt-10`}>
        <h2 className={`tracking-wider ${style.header}`}>
          <strong>... / Projects ...</strong>
        </h2>
      </div>
      <div className={`flex flex-row`}>
        <div className={`flex flex-col`}>
          <div className={`text-2xl ${style.head}`}>
            <h2
              className={`${style.title_project} underline`}
              onClick={() => {
                handleClick();
              }}
            >
              Whiteoak AMC
            </h2>
          </div>
          <div className={` flex flex-wrap ${style.skills}`}>
            <p>
              <i>Node.js</i>
            </p>
            <p>
              <i>Express.js</i>
            </p>
            <p>
              <i>Next.js</i>
            </p>
            <p>
              <i>Strapi</i>
            </p>
            <p>
              <i>GraphQL</i>
            </p>
            <p>
              <i>MySql</i>
            </p>
            <p>
              <i>React Testing Library</i>
            </p>
            <p>
              <i>Jest</i>
            </p>
            <p>
              <i>Docker</i>
            </p>
            <p>
              <i>AWS</i>
            </p>
            <p>
              <i>Jenkins</i>
            </p>
            <p>
              <i>SEO</i>
            </p>
          </div>
          <div className={`flex flex-col ${style.details}`}>
            <p>
              <i>Whiteoak AMC </i> - a cutting-edge static side generation based
              application designed to handle <i>HTTP request with graphQL</i>
              and statistics with finesse.
            </p>
            <p>
              This project <i>comprises several key feature, </i> each
              contributing to its overall functionality and prowess.
            </p>
          </div>
          {/* <div
            className={` flex flex-row ${style.icon} w-full justify-left m-auto`}
          >
            <Image src="/icons8-github-white.svg" width="90" height="60" />
            <button className={`${style.git_button}`}>
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <div className={`ml-8`}>
          <div className={`${style.project_image}`}>
            <Image src={`/whiteoak-amc.png`} width="800" height="800" />
          </div>
          <span className={`${style.left_bottom} flex flex-row justify-center`}>
            <button
              onClick={() => {
                handleClick();
              }}
              className={`${style.git_button_item}`}
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                handleClick();
              }}
              className={`${style.git_button_item_bottom}`}
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </span>
          <span className={`${style.right_top}`}></span>
        </div>
      </div>
      <div className={`${style.component_work_right} flex flex-row`}>
        <div className={`mr-8`}>
          <div className={`${style.project_image}`}>
            <Image src={`/upcapita-home.png`} width="800" height="800" />
          </div>
          <span className={`${style.left_bottom} flex flex-row justify-center`}>
            <button
              onClick={() => {
                handleUpcapita();
              }}
              className={`${style.git_button_item}`}
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                handleUpcapita();
              }}
              className={`${style.git_button_item_bottom}`}
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </span>
          <span className={`${style.right_top}`}></span>
        </div>

        <div className={`flex flex-col`}>
          <div className={`text-2xl ${style.head}`}>
            <h2
              onClick={() => {
                handleUpcapita();
              }}
              className={`underline ${style.title_project}`}
            >
              Upcapita
            </h2>
          </div>
          <div className={` flex flex-wrap ${style.skills}`}>
            <p>
              <i>Node.js</i>
            </p>

            <p>
              <i>React.js</i>
            </p>
            <p>
              <i>Redux</i>
            </p>
            <p>
              <i>Redux Toolkit</i>
            </p>
            <p>
              <i>Video SDK</i>
            </p>
            <p>
              <i>Jest</i>
            </p>
            <p>
              <i>React Testing Library</i>
            </p>
          </div>
          <div className={`flex flex-col ${style.details}`}>
            <p>
              <i>Upcapita </i> - a cutting-edge microservice-based application
              designed to handle <i>HTTP request authentication</i>
              and statistics with finesse.
            </p>
            <p>
              This project <i>comprises several key features, </i> each
              contributing to its overall functionality and prowess.
            </p>
            <p>
              Developed te main flow of the <i>UpCapita project,</i> focusing on
              enhancing user experience.
            </p>
            <p>
              Implemented features allowing advisors and customers to
              communicate via video calls, voice calls, and chat.
            </p>
          </div>
          {/* <div
            className={` flex flex-row ${style.icon} w-full justify-left m-auto`}
          >
            <Image src="/icons8-github-white.svg" width="90" height="60" />
            <button className={`${style.git_button}`}>
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
      <div className={`flex flex-row`}>
        <div className={`flex flex-col`}>
          <div className={`text-2xl ${style.head}`}>
            <h2
              onClick={() => {
                handleIbl();
              }}
              className={`underline ${style.title_project}`}
            >
              IBL
            </h2>
          </div>
          <div className={` flex flex-wrap ${style.skills}`}>
            <p>
              <i>React.js</i>
            </p>
            <p>
              <i>Redux</i>
            </p>
            <p>
              <i>Redux Toolkit</i>
            </p>
          </div>
          <div className={`flex flex-col ${style.details}`}>
            <p>
              <i>IBL </i> - a cutting-edge microservice-based application
              designed to handle <i>HTTP request authentication</i>
              and statistics with finesse.
            </p>
            <p>
              This project <i>comprises several key microservices, </i> each
              contributing to its overall functionality and prowess.
            </p>
          </div>
          {/* <div
            className={` flex flex-row ${style.icon} w-full justify-left m-auto`}
          >
            <Image src="/icons8-github-white.svg" width="90" height="60" />
            <button className={`${style.git_button}`}>
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <div className={`ml-8`}>
          <div className={`${style.project_image}`}>
            <Image src={`/ibl_home.png`} width="800" height="800" />
          </div>
          <span className={`${style.left_bottom} flex flex-row justify-center`}>
            <button
              onClick={() => {
                handleIbl();
              }}
              className={`${style.git_button_item}`}
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                handleIbl();
              }}
              className={`${style.git_button_item_bottom}`}
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </span>
          <span className={`${style.right_top}`}></span>
        </div>
      </div>
      <div className={`${style.component_work_left} flex flex-row`}>
        <div className={`mr-8`}>
          <div className={`${style.project_image}`}>
            <Image src={`/chqbook-banner.png`} width="800" height="800" />
          </div>
          <span className={`${style.left_bottom} flex flex-row justify-center`}>
            <button
              onClick={() => {
                handleChqbook();
              }}
              className={`${style.git_button_item}`}
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                handleChqbook();
              }}
              className={`${style.git_button_item_bottom}`}
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </span>
          <span className={`${style.right_top}`}></span>
        </div>
        <div className={`flex flex-col`}>
          <div className={`text-2xl ${style.head}`}>
            <h2
              onClick={() => {
                handleChqbook();
              }}
              className={`underline ${style.title_project}`}
            >
              Chqbook
            </h2>
          </div>
          <div className={` flex flex-wrap ${style.skills}`}>
            <p>
              <i>Full-stack</i>
            </p>
            <p>
              <i>Node.js</i>
            </p>
            <p>
              <i>Express.js</i>
            </p>
            <p>
              <i>Redis</i>
            </p>
            <p>
              <i>React.js</i>
            </p>
            <p>
              <i>Redux</i>
            </p>
            <p>
              <i>MySql</i>
            </p>
          </div>
          <div className={`flex flex-col ${style.details}`}>
            <p>
              <i>Chqbook </i> - a cutting-edge microservice-based application
              designed to handle <i>HTTP request authentication</i>
              and statistics with finesse.
            </p>
            <p>
              This project <i>comprises several key microservices, </i> each
              contributing to its overall functionality and prowess.
            </p>
          </div>
          {/* <div
            className={` flex flex-row ${style.icon} w-full justify-left m-auto`}
          >
            <Image src="/icons8-github-white.svg" width="90" height="60" />
            <button className={`${style.git_button}`}>
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Project;
