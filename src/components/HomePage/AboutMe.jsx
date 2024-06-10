import style from "@/components/HomePage/AboutMe.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      id="about"
      className={`${style.top_corner} container px-4 xl:px-10 m-auto`}
    >
      <div className={`flex justify-between`}>
        <h2 className={`tracking-wider`}>
          <strong>... / About me ...</strong>
        </h2>
        <div className={`${style.alignment}`}>
          <p>
            Hello! I'm Mansur, I'm a <i>full-stack developer.</i>
          </p>
          <p>
            More than <i>2 years</i> experience.
          </p>
        </div>
      </div>
      <div className={`flex justify-between ${style.container}`}>
        <div className={`${style.skills_cotainer}`}>
          <div className={`${style.skills}`}>
            <h2>Front-end</h2>
            <p className={`${style.item}`}>
              Javascript / TypeScript / React / Redux / Redux Toolkit / Next.JS
              / Puppeter / Jest / React Testing Library / Cypress / GraphQL
            </p>
          </div>
          <div className={`flex flex-row justify-between`}>
            <div
              className={`flex flex-col w-full justify-between ${style.skills_other}`}
            >
              <h2>Styles</h2>
              <p className={`${style.item_black} break-normal`}>
                HTML / CSS / Material UI / BootStrap / Tailwind CSS
              </p>
            </div>
            <div
              className={` flex flex-row${style.icon} w-full justify-center m-auto`}
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
            </div>
          </div>
          <div className={`${style.skills_other}`}>
            <h2>Back-end</h2>
            <p className={`${style.item_black}`}>
              Node.JS / Express.JS / Strapi / PostgreSQL / MySQL / MongoDB /
              Redis / Prisma / mongoose / PYthon
            </p>
          </div>
          <div className={`flex justify-between flex-row`}>
            <div className={`m-auto w-50 ${style.text}`}>
              Some of my <i>favorite technologies, topics, or tools </i>that I
              worked with
            </div>
            <div className={` w-50 ${style.skills_other}`}>
              <h2>DevOps</h2>
              <p className={`${style.item_black}`}>
                Git / GitHub / AWS / Docker / Jenkins / Jira / SonarQube /
                (CI/CD) / Bash
              </p>
            </div>
          </div>
        </div>
        <div className={`${style.image_container}`}>
          <Image src="/mansur_dewan.jpeg" width="400" height="250" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
