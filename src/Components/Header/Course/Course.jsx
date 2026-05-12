import { motion } from "framer-motion";
import { Star, Users, Clock, Code2, BriefcaseBusiness, ChartColumn, Megaphone, UserRound } from "lucide-react"; 
import  uiImg from '../../../assets/Ui_img.avif'
import alexImg from '../../../assets/AlexImg.jpeg'
import { AiOutlineFile, AiOutlineUser } from "react-icons/ai";
import { BsBarChartLineFill } from "react-icons/bs";



const Course= () => {
  return (
    <section className="relative py-28 ">

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
       <motion.div
        initial={{opacity:0, y:80}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.7}}
        viewport={{once:true}}
        className="text-left mb-14"

       >
        <h1 className="text-3xl md:text-4xl font-medium">Top Categories</h1>


       </motion.div>
      <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-6 sm:gap-62 gap-4  ">
        <div className=" space-y-2 rounded-3xl p-6 shadow-sm hover:shadow-xl duration-300 bg-indigo-50 h-44 lg:w-58">
         <Code2 className=" w-14 h-10  text-indigo-600 rounded-2xl text-center flex justify-center ml-44 lg:ml-16 "></Code2>
          <h1 className="mt-3 text-lg font-bold text-gray-800">Development</h1>
          
          <p>2,458 Courses</p>
        </div>
        <div className=" space-y-2 rounded-3xl p-6 shadow-sm hover:shadow-xl duration-300 bg-orange-100  h-44 lg:w-58">
         <BriefcaseBusiness className=" w-14 h-10  text-orange-500 rounded-2xl text-center flex justify-center ml-44 lg:ml-16 "></BriefcaseBusiness>
          <h1 className="mt-3 text-lg font-bold text-gray-800">Business</h1>
          
          <p>1,654 Courses</p>
        </div>
        <div className=" space-y-2 rounded-3xl p-6 shadow-sm hover:shadow-xl duration-300 bg-indigo-50 h-44 lg:w-58">
         <ChartColumn className="  w-14 h-10  text-blue-500 rounded-2xl text-center flex justify-center ml-44 lg:ml-16 "></ChartColumn>
          <h1 className="mt-3 text-lg font-bold text-gray-800">Data Science</h1>
          
          <p>1,076 Courses</p>
        </div>
        <div className=" space-y-2 rounded-3xl p-6 shadow-sm hover:shadow-xl duration-300 bg-yellow-100 h-44 lg:w-58">
         <UserRound className="  w-14 h-10  text-yellow-500 rounded-2xl text-center flex justify-center ml-44 lg:ml-16 "></UserRound>
          <h1 className="mt-3 text-lg font-bold text-gray-800">Personal Growth</h1>
          
          <p>858 Courses</p>
        </div>
         <div className=" space-y-2 rounded-3xl p-6 shadow-sm hover:shadow-xl duration-300 bg-cyan-100 h-44 lg:w-58">
         <Megaphone className="  w-14 h-10  text-cyan-600 rounded-2xl text-center flex justify-center ml-44 lg:ml-16 "></Megaphone>
          <h1 className="mt-3 text-lg font-bold text-gray-800">Marketing</h1>
          
          <p>1,234 Courses</p>
        </div>
        
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

       
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-black mb-6">
         
          </div>

          <h2 className="text-5xl md:text-6xl font-black black">
            Popular Courses
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Discover industry-leading courses designed to help you build modern skills and boost your career.
          </p>
        </motion.div>

       

        
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
          className="card bg-base-100 w-96 shadow-sm bg-gradient-to-r from-purple-900/20  via-black/20 to-blue-900/30">
  <figure>
    <img
      src={uiImg}
      alt="Shoes" />
  </figure>
  <div className="space-y-3 mt-5">
    <h2 className="card-title">Learn Figma - UI/UX Design Essential Training</h2>
    <div  className="flex justify-around text-sm  text-[#000080]">
      <span className="flex items-center gap-1"><AiOutlineFile />Lesson</span>
      <span className="flex items-center gap-1"> <AiOutlineUser />Student</span>
      <span className="flex items-center gap-1"><BsBarChartLineFill />Beginner</span>
    </div>
     <div className="divider"></div>
     <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img className="w-9 h-9 rounded-full" src={alexImg} alt="" />
        <span className="text-md font-semibold">Kevin Perry</span>
      </div> 
      <span className="text-red-600 font-semibold">Free</span>

     </div>
   
  </div>
  
</motion.div>
          <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} className="card bg-base-100 w-96 shadow-sm bg-gradient-to-r from-purple-900/20  via-black/20 to-blue-900/30">
  <figure>
    <img
      src={uiImg}
      alt="Shoes" />
  </figure>
  <div className="space-y-3 mt-5">
    <h2 className="card-title">Learn Figma - UI/UX Design Essential Training</h2>
    <div  className="flex justify-around text-sm  text-[#000080]">
      <span className="flex items-center gap-1"><AiOutlineFile />Lesson</span>
      <span className="flex items-center gap-1"> <AiOutlineUser />Student</span>
      <span className="flex items-center gap-1"><BsBarChartLineFill />Beginner</span>
    </div>
     <div className="divider"></div>
     <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img className="w-9 h-9 rounded-full" src={alexImg} alt="" />
        <span className="text-md font-semibold">Max Alexix</span>
      </div> 
      <span className="text-red-600 font-semibold">Free</span>

     </div>
   
  </div>
  
</motion.div>
          <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} className="card w-96 shadow-sm bg-gradient-to-r from-purple-900/20  via-black/20 to-blue-900/30">
  <figure>
    <img
      src={uiImg}
      alt="Shoes" />
  </figure>
  <div className="space-y-3 mt-5">
    <h2 className="card-title">Learn Figma - UI/UX Design Essential Training</h2>
    <div  className="flex justify-around text-sm  text-[#000080]">
      <span className="flex items-center gap-1"><AiOutlineFile />Lesson</span>
      <span className="flex items-center gap-1"> <AiOutlineUser />Student</span>
      <span className="flex items-center gap-1"><BsBarChartLineFill />Beginner</span>
    </div>
     <div className="divider"></div>
     <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img className="w-9 h-9 rounded-full" src={alexImg} alt="" />
        <span className="text-md font-semibold">Max Alexix</span>
      </div> 
      <span className="text-red-600 font-semibold">Free</span>

     </div>
   
  </div>
  
</motion.div>
          <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} className="card w-96 shadow-sm bg-gradient-to-r from-purple-900/20  via-black/20 to-blue-900/30">
  <figure>
    <img
      src={uiImg}
      alt="Shoes" />
  </figure>
  <div className="space-y-3 mt-5">
    <h2 className="card-title">Learn Figma - UI/UX Design Essential Training</h2>
    <div  className="flex justify-around text-sm  text-[#000080]">
      <span className="flex items-center gap-1"><AiOutlineFile />Lesson</span>
      <span className="flex items-center gap-1"> <AiOutlineUser />Student</span>
      <span className="flex items-center gap-1"><BsBarChartLineFill />Beginner</span>
    </div>
     <div className="divider"></div>
     <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img className="w-9 h-9 rounded-full" src={alexImg} alt="" />
        <span className="text-md font-semibold">Max Alexix</span>
      </div> 
      <span className="text-red-600 font-semibold">Free</span>

     </div>
   
  </div>
  
</motion.div>
          <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} className="card w-96 shadow-sm bg-gradient-to-r from-purple-900/20  via-black/20 to-blue-900/30">
  <figure>
    <img
      src={uiImg}
      alt="Shoes" />
  </figure>
  <div className="space-y-3 mt-5">
    <h2 className="card-title">Learn Figma - UI/UX Design Essential Training</h2>
    <div  className="flex justify-around text-sm  text-[#000080]">
      <span className="flex items-center gap-1"><AiOutlineFile />Lesson</span>
      <span className="flex items-center gap-1"> <AiOutlineUser />Student</span>
      <span className="flex items-center gap-1"><BsBarChartLineFill />Beginner</span>
    </div>
     <div className="divider"></div>
     <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img className="w-9 h-9 rounded-full" src={alexImg} alt="" />
        <span className="text-md font-semibold">Max Alexix</span>
      </div> 
      <span className="text-red-600 font-semibold">Free</span>

     </div>
   
  </div>
  
</motion.div>
          <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} className="card w-96 shadow-sm bg-gradient-to-r from-purple-900/20  via-black/20 to-blue-900/30">
  <figure>
    <img
      src={uiImg}
      alt="Shoes" />
  </figure>
  <div className="space-y-3 mt-5">
    <h2 className="card-title">Learn Figma - UI/UX Design Essential Training</h2>
    <div  className="flex justify-around text-sm  text-[#000080]">
      <span className="flex items-center gap-1"><AiOutlineFile />Lesson</span>
      <span className="flex items-center gap-1"> <AiOutlineUser />Student</span>
      <span className="flex items-center gap-1"><BsBarChartLineFill />Beginner</span>
    </div>
     <div className="divider"></div>
     <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img className="w-9 h-9 rounded-full" src={alexImg} alt="" />
        <span className="text-md font-semibold">Max Alexix</span>
      </div> 
      <span className="text-red-600 font-semibold">Free</span>

     </div>
   
  </div>
  
</motion.div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Course;