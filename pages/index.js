import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ProjectsBtn from "../components/ProjectsBtn"
import { motion } from 'framer-motion'
import { fadeIn } from "../variants"
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {


  return <>
    <div className=" mt-8 xl:mt-24 relative">
      <div className="  w-[70%] xl:w-1/3 mx-auto h-full">
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
          <ProjectsBtn  />
        </motion.div>
      </div>
      <div className=" absolute h-full w-full top-0 bottom-0 ">
          <ParticlesContainer />
      </div>
         {/* img */}
      <div className=" w-full h-full  right-0 bottom-0">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,150 0,150 C 75.03847569955818,152.44661266568482 150.07695139911635,154.89322533136965 200,164 C 249.92304860088365,173.10677466863035 274.7306701030928,188.8737113402062 334,181 C 393.2693298969072,173.1262886597938 487.00036818851254,141.6119293078056 563,129 C 638.9996318114875,116.3880706921944 697.2678571428572,122.67857142857142 743,119 C 788.7321428571428,115.32142857142858 821.9282032400589,101.67378497790872 872,114 C 922.0717967599411,126.32621502209128 989.0193298969073,164.6262886597938 1059,168 C 1128.9806701030927,171.3737113402062 1201.9944771723121,139.82106038291607 1266,131 C 1330.0055228276879,122.17893961708393 1385.002761413844,136.08946980854196 1440,150 C 1440,150 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 54.326399116347574,279.029086892489 108.65279823269515,258.0581737849779 169,260 C 229.34720176730485,261.9418262150221 295.71520618556707,286.7963917525773 352,301 C 408.28479381443293,315.2036082474227 454.48637702503686,318.7562592047128 520,316 C 585.5136229749631,313.2437407952872 670.3392857142857,304.1785714285714 739,296 C 807.6607142857143,287.8214285714286 860.1564801178205,280.5294550810015 919,282 C 977.8435198821795,283.4705449189985 1043.0347938144328,293.70360824742266 1097,301 C 1150.9652061855672,308.29639175257734 1193.704344624448,312.65611192930777 1249,312 C 1304.295655375552,311.34388807069223 1372.147827687776,305.6719440353461 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,450 0,450 C 48.08247422680412,439.0999631811487 96.16494845360825,428.1999263622975 152,427 C 207.83505154639175,425.8000736377025 271.4226804123711,434.30025773195877 339,431 C 406.5773195876289,427.69974226804123 478.14432989690727,412.59904270986743 536,404 C 593.8556701030927,395.40095729013257 638,393.30357142857144 690,410 C 742,426.69642857142856 801.8556701030927,462.18667157584684 868,464 C 934.1443298969073,465.81332842415316 1006.5773195876288,433.9497422680413 1078,424 C 1149.4226804123712,414.0502577319587 1219.8350515463917,426.01435935198816 1280,434 C 1340.1649484536083,441.98564064801184 1390.0824742268042,445.99282032400595 1440,450 C 1440,450 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
      </div>
      {/* Avatar */}
      <motion.div
      variants={fadeIn('up', '0.4')}
      initial="hidden"
      animate="show"
      exit='hidden'
      className=" absolute md:top-10 md:right-0 xl:top-2 z-40 xl:right-20 translate-z-0">
        <Avatar />
      </motion.div>
    </div>
  </>
};

export default Home;
