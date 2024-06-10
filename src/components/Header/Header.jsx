import Link from "next/link";

const Header = () => {
  return (
    <div className={`flex pt-6 pb-6 container px-4 xl:px-8 m-auto`}>
      <div className={`flex-none w-14 text-xl pl-4 font-serif`}>
        Mansur{"\n"}
        Dewan
      </div>
      <div className={`grow w-64 items-center bg-transparent text-center`}>
        <Link className={`pt-6 pr-4 pb-6 pl-4`} href="#about">
          About
        </Link>
        <Link className={`pt-6 pr-4 pb-6 pl-4`} href="#project">
          Projects
        </Link>
        <Link className={`pt-6 pr-4 pb-6 pl-4`} href="#article">
          Articles
        </Link>
        <Link className={`pt-6 pr-4 pb-6 pl-4`} href="#contact">
          Contacts
        </Link>
      </div>
      <div className={`flex-none w-32`}>EN</div>
    </div>
  );
};
export default Header;
