
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaUsers,FaBookOpen,FaChalkboardTeacher,} from "react-icons/fa";
import { Link} from "react-router";



const instructors = [
  {
    name: "Alex Johnson",
    category: "Full Stack Developer",
    image:  "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Davis",
    category: "UI/UX Designer",
    image:  "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Chris Martin",
    role: "Marketing Expert",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const PopularCourses = ({course}) => {

  
  return (
    <div className=" text-white">
      <section className="max-w-7xl mx-auto px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Popular Courses
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our most demanded courses and upgrade your skills with
            industry experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {course.map((cour, index) => (
            <motion.div
              key={cour._id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.04 }}
              className=" relative  rounded-3xl overflow-hidden border border-slate-800 shadow-lg"
            >
              <img
                src={cour.thumbnail}
                alt={cour.title}
                className="h-56 w-full object-cover "
              /> 
               

              <div className="p-6">
                 <span className="absolute  left-4 bg-[#00FF00]  px-4 py-1 rounded-full text-sm font-semibold">{cour.category}</span>
                <h3 className="text-2xl font-bold mb-3 text-blue-600 mt-10 ">
                  {cour.title}
                </h3>
                <h3 className="text-base font-bold mb-2 text-green-300">
                  {cour.created_by}
                </h3>


                <p className="text-[#000080]/50 font-medium text-left">{cour.description.slice(0, 60)}...</p>

                <div className="flex justify-between text-sm text-green-600 mb-5">
                  <span className="flex items-center gap-2">
                    <FaUsers />
                    {cour.students}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {cour.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-cyan-400">
                    {cour.price}
                  </h4>
                  <Link to={`/courseDeatils/${cour._id}`} className="px-5 py-2 rounded-full bg-linear-to-r from-lime-500 via-green-500 to-emerald-500 hover:bg-cyan-600 transition-all duration-300 font-semibold">
                   View Deatils
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#F2D2BD] py-20 rounded-2xl">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold ">
              Why Choose Us
            </h2>
            <p className="text-gray-600 mt-4">
              We provide the best learning experience for students worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gradient-to-r from-violet-500 to-purple-500 p-8 rounded-3xl text-center border border-slate-800"
            >
              <FaBookOpen className="text-5xl mx-auto text-cyan-400 mb-5" />
              <h3 className="text-2xl font-bold mb-3">
                Expert Courses
              </h3>
              <p className="text-gray-300">
                Learn from top-quality premium courses designed by industry
                professionals.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gradient-to-r from-violet-500 to-purple-500 p-8 rounded-3xl text-center border border-slate-800"
            >
              <FaUsers className="text-5xl mx-auto text-cyan-400 mb-5" />
              <h3 className="text-2xl font-bold mb-3">
                Community Support
              </h3>
              <p className="text-gray-300">
                Join a large student community and grow together with peers.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gradient-to-r from-violet-500 to-purple-500 p-8 rounded-3xl text-center border border-slate-800"
            >
              <FaChalkboardTeacher className="text-5xl mx-auto text-cyan-400 mb-5" />
              <h3 className="text-2xl font-bold mb-3">
                Professional Mentors
              </h3>
              <p className="text-gray-300">
                Get mentorship and guidance from experienced instructors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Top Instructors
          </h2>

          <p className="text-gray-400 mt-4">
            Meet our world-class instructors and mentors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {instructors.map((teacher, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-red-500/50 to-orange-500/50 rounded-3xl p-8 text-center border border-slate-800"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-cyan-400"
              />

              <h3 className="text-2xl font-bold mt-5">
                {teacher.name}
              </h3>

              <p className="text-cyan-400 mt-2">
                {teacher.role}
              </p>

              <Link  className="mt-6 px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300">
                View Profile
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularCourses;