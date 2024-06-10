"use client";
import style from "@/components/HomePage/LInkItem.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
const LinkItem = () => {
  const router = useRouter();

  const handleClickEmail = () => {
    window.location.href = "mailto:mansurdewan26@gmail.com";
  };

  return (
    <div className={`container px-4 xl:px-10 m-auto mt-10 ${style.top_margin}`}>
      <div className={`flex flex-row justify-between`}>
        <div
          onClick={() => {
            router.push("https://github.com/mansur3");
          }}
          className={`flex flex-row justify-between ${style.list_item}`}
        >
          <Image src="/icons8-github-48.png" width="48" height="48"></Image>
          <p>Github</p>
        </div>
        <div
          onClick={() => {
            router.push("https://www.linkedin.com/in/mansur-dewan-989751170/");
          }}
          className={`flex flex-row  justify-between ${style.list_item}`}
        >
          <Image src="/icons8-linkedin_8.svg" width="48" height="48"></Image>
          <p>Linkedin</p>
        </div>
        <div
          onClick={() => {
            handleClickEmail();
          }}
          className={`flex flex-row justify-between ${style.list_item}`}
        >
          <Image src="/icons8-email-50.png" width="48" height="48"></Image>
          <p>E-mail</p>
        </div>
        <div
          onClick={() => {
            router.push("https://www.facebook.com/mansur.dewan.35");
          }}
          className={`flex flex-row justify-between ${style.list_item}`}
        >
          <Image src="/icons8-facebook.svg" width="48" height="48"></Image>
          <p>Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
