import { motion, AnimatePresence } from "framer-motion";
import {MoveLeft, MoveRight  } from "lucide-react";
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const slides = [
  {
    id: 1,
    title: "Master New Skills Advance Your Future",
    description:
      "Master modern skills with premium online courses and interactive learning experiences.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Upgrade Your Future Skills",
    description:
      "Explore advanced technology, business, and creative courses designed by experts.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Build Your Dream Career",
    description:
      "Join thousands of students learning modern web development and AI technologies.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
   <div>
     <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
     className="relative w-full h-[700px] overflow-hidden bg-black " >

     
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt=""
            className="w-full h-full object-cover"
          />

          
          <div className="absolute inset-0 bg-black/60"></div>

          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-black/20 to-blue-900/40"></div>
        </motion.div>
      </AnimatePresence>

      
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-6">

        <motion.div
          key={slides[current].title}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
           Learn Grow Success
          </motion.div>

          
          <motion.h1 className="text-5xl md:text-6xl font-black leading-tight  text-left pl-32">
            {slides[current].title}
          </motion.h1>

          < motion.p 
           initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
           className="mt-6 text-lg text-gray-300 ml-24">
            {slides[current].description}
          </motion.p >

         
          <div className="flex gap-5 mt-8">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className=" lg:px-8 lg:py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-2xl ml-15  lg:ml-28"
            >
              Explore Courses
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="  lg:px-8 lg:py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white"
            >
              Become an Instructor
            </motion.button>

          </div>
        </motion.div>
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute z-30 left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-full text-white transition "
      >
        <MoveLeft className="w-7 h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-30 right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-full text-white transition"
      >
        <MoveRight className="w-7 h-7" />
      </button>

     
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-white"
                : "w-3 h-3 bg-white/50"
            }`}
          ></button>
        ))}
      </div>

   
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 blur-[120px] rounded-full "></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/30 blur-[120px] rounded-full"></div>
    </motion.div> 
    <Course></Course>
   </div>
  );
};

export default Banner;