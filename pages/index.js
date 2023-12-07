import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ProjectsBtn from "../components/ProjectsBtn"
import { motion } from 'framer-motion'
import { fadeIn } from "../variants"

const Home = () => {


  return <div className=" mt-24">
    <div className=" w-1/3 mx-auto h-full">
      <motion.h1
        variants={fadeIn('down', '0.8')}
        initial="hidden"
        animate="show"
        exit='hidden'
        className=" text-gray-900">Hello, my name is <br />  <span className=" text-xl xl:text-3xl text-black font-bold">Biddut Chandro Roy</span></motion.h1>
      <motion.p
        variants={fadeIn('down', '0.6')}
        initial="hidden"
        animate="show"
        exit='hidden'
        className=" text-white">
        I'm a full-stack develomotion.per specialised in frontend and backend development for scalable web apps.I have made a variety of Mern Stack Applications. Want to know how I may help your project? Check out my projects from my GitHub<Link href={'https://github.com/Biddut-Roy'}><span className="text-2xl flex items-center text-black"><FaGithub /> Profile</span></Link>
      </motion.p>
      <motion.div
        variants={fadeIn('down', '0.4')}
        initial="hidden"
        animate="show"
        exit='hidden'
      >
        <ProjectsBtn />
      </motion.div>
    </div>
  </div>;
};

export default Home;
