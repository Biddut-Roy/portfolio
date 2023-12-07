import Image from "next/image";

const Avatar = () => {
  return <div>
    <Image src={'/Avater.my.png'}  alt="avatar" width={600} height={600}/>
  </div>;
};

export default Avatar;
