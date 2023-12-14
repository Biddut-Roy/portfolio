import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";


const Socials = () => {
  return <div className=" flex gap-5">
    <Link href={'https://www.facebook.com/OskarboyNillYuvA'} className=" hover:text-accent translate-z-0">
      <FaFacebook />
    </Link>
    <Link href={'https://github.com/Biddut-Roy'} className=" hover:text-accent translate-z-0">
      <FaGithub  />
    </Link>
    <Link href={'https://www.linkedin.com/in/biddut-cahndro-roy'} className=" hover:text-accent translate-z-0">
      <FaLinkedin />
    </Link>
  </div>;
};

export default Socials;
