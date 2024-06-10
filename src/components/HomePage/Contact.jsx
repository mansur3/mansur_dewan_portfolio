import style from "@/components/HomePage/Contact.module.css";
import Link from "next/link";
const Contact = () => {
  return (
    <div
      id="contact"
      className={` ${style.component} container px-4 xl:px-10 m-auto mt-10 ${style.top_margin}`}
    >
      <div className={`flex justify-end`}>
        <h2 className={`tracking-wider ${style.header}`}>
          <strong>... /Contacts ...</strong>
        </h2>
      </div>
      <div
        className={`${style.component_work_left_footer} flex justify-between`}
      >
        <div className={`flex flex-col justify-between`}>
          <div className={`${style.first_name}`}>
            <strong>Mansur</strong>
          </div>
          <div className={`flex flex-row`}>
            <div className={`w-30 m-auto ${style.title}`}>
              Full-stack developer
            </div>
            <div className={`${style.first_name}`}>
              <strong>Dewan</strong>
            </div>
          </div>
        </div>
        <div
          className={`${style.component_work_left_footer_bottom} flex flex-col mt-10 ${style.whole_contaniner}`}
        >
          <div className={`flex flex-row justify-between ${style.items}`}>
            <Link href="#">Main</Link>
            <Link href="#about">About</Link>
            <Link href="#project">Projects</Link>
            <Link href="#article">Articles</Link>
          </div>
          <div className={`${style.container} mt-12`}>
            <h2>Site</h2>
            <div className={`flex flex-col ${style.items_data}`}>
              <p>Handcrafted by ME /</p>
              {/* <p>Designed by Taisia /</p> */}
              <p>Powered by NextJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
