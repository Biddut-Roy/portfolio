import Link from "next/link";
import Socials from "./Socials";

const Header = () => {

  return <div className=" bg-[#0608EC]">
    <div className=" pt-2 items-center w-11/12 xl:w-10/12 mx-auto flex flex-col xl:flex-row gap-2 justify-between bg-[]">
          <Link href={'/'}>Biddut Roy</Link>
          <div><Socials /></div>
      </div>
    <header className=" absolute  w-full h-full bg-explosion xl:bg-no-repeat bg-cover mix-blend-overlay"></header>
      
  </div>
};

export default Header;
