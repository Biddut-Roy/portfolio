import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi"


const ProjectsBtn = () => {
  return <div className=" mx-auto mt-5">
    <Link href={'/work'} className=" relative flex justify-center items-center w-[185px] h-[185px] bg-circleStar bg-cover bg-center bg-no-repeat">
      <Image
        src="/rounded-text.png"
        height={141} width={148}
        alt="work"
        className="animate-spin-slow" />
        <HiArrowRight  className=" text-black text-4xl absolute hover:translate-x-3 duration-300"/>
    </Link>
    
  </div>;
};

export default ProjectsBtn;
