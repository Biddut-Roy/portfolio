import {motion } from "framer-motion"

const Transition = () => {
const motionSet = {
  initial:{
    x:'100%',
    width:'100%',
  },
  animate:{
    x:'0%',
    width:'0%',
  },
  exit:{
    x:['0%' , '100%'],
    width:['0%' , '100%']
  }
}
  return (
    <>
      <motion.div
       variants={motionSet} className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-slate-800"  initial='initial' animate='animate' exit='exit' transition={{delay:0.2 , duration: 0.6 , ease:'easeInOut'}}></motion.div>
      <motion.div
       variants={motionSet} className="fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-blue-400"  initial='initial' animate='animate' exit='exit' transition={{delay:0.4 , duration: 0.6 , ease:'easeInOut'}}></motion.div>
      <motion.div
       variants={motionSet} className="fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-blue-300"  initial='initial' animate='animate' exit='exit' transition={{delay:0.6 , duration: 0.8 , ease:'easeInOut'}}></motion.div>
    </>
  );
};

export default Transition;
