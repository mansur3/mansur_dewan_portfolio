import Link from "next/link";
import style from "@/components/HomePage/firstSection.module.css";
import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="py-2 lg:py-16">
      <div className={`container px-4 xl:px-10 m-auto`}>
        <div className={`flex justify-between`}>
          <h1 className={`flex-none font-medium text-[125px] tracking-[20px]`}>
            Full-stack
          </h1>
          <div className={`flex flex-start ${style.position}`}>
            <Link
              className={`text-[40px] mt-4 rounded-full text-neutral-950 bg-white ${style.project}`}
              href="#"
            >
              Projects
            </Link>
            <button className={`${style.button}`}>
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
        <div className={`flex justify-between ${style.bottom}`}>
          <div className={`w-30 ${style.detail} text-slate-400`}>
            My goal is to <i>write maintainable, clean </i>and{" "}
            <i>understandable code </i>to process development was enjoyable.
            <div className={`${style.contacts}`}>
              EMAIL ID: mansurdewan26@gmail.com PHONE NUMBER: 8250248991
            </div>
          </div>
          <h1
            className={`flex-none font-medium text-[125px] tracking-[20px] ${style.developer}`}
          >
            Developer
          </h1>
        </div>
        <div className={`flex justify-evenly mt-2`}>
          <Link className={`${style.inline}`} href="https://github.com/mansur3">
            <Image
              className={`${style.image}`}
              src="/icons8-github.svg"
              width="36"
              height="36"
            />
            <i>Github</i>
          </Link>
          <Link
            className={`${style.inline}`}
            href="https://www.linkedin.com/in/mansur-dewan-989751170/"
          >
            <Image
              className={`${style.image}`}
              src="/icons8-linkedin.svg"
              width="36"
              height="36"
            />
            <i>Linkedin</i>
          </Link>
          <Link
            className={`${style.inline}`}
            href="mailto:mansurdewan26@gmail.com"
          >
            <Image
              className={`${style.image}`}
              src="/icons8-email-48.png"
              width="36"
              height="36"
            />
            <i>Email</i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
