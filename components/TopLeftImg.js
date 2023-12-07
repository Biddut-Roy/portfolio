import Image from "next/image";


const TopLeftImg = () => {
  return <div className=" z-10 opacity-50 absolute w-[200px] xl:w-[400px]">
    <Image src="/top-left-img.png" width={100} height={100} alt="top-img"/>
  </div>;
};

export default TopLeftImg;