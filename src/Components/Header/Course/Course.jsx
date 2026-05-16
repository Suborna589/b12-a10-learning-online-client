
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaUsers,FaBookOpen,FaChalkboardTeacher,} from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    image:"https://i.ibb.co.com/HpHjTQxS/Web.jpg",
    instructor: "John Carter",
    students: 1200,
    rating: 4.9,
    price: "$49",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    image:"https://i.ibb.co.com/h1TSX7Hz/Ui.jpg",   
    instructor: "Sarah Lee",
    students: 980,
    rating: 4.8,
    price: "$59",
  },
  {
    id: 3,
    title: "Python for Beginners",
    image:"https://i.ibb.co.com/4RgcPm54/python-B.jpg",
    instructor: "David Miller",
    students: 1450,
    rating: 4.7,
    price: "$39",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    image:"https://i.ibb.co.com/WvygcnhG/Marketing.webp",
    instructor: "Emma Watson",
    students: 870,
    rating: 4.9,
    price: "$44",
  },
  {
    id: 5,
    title: "Machine Learning Basics",
    image:"https://i.ibb.co.com/DgkxK1XG/machine.jpg",
    instructor: "Michael Smith",
    students: 1120,
    rating: 4.8,
    price: "$69",
  },
  {
    id: 6,
    title: "Graphic Design Essentials",
    image:"https://i.ibb.co.com/JwxVcvpb/graphics.jpg",
    instructor: "Sophia Brown",
    students: 760,
    rating: 4.6,
    price: "$35",
  },
];

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

const PopularCourses = () => {
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
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.04 }}
              className=" rounded-3xl overflow-hidden border border-slate-800 shadow-lg"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">
                  {course.title}
                </h3>

                <p className="text-amber-500 mb-4">
                  Instructor: {course.instructor}
                </p>

                <div className="flex justify-between text-sm text-green-600 mb-5">
                  <span className="flex items-center gap-2">
                    <FaUsers />
                    {course.students}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {course.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-cyan-400">
                    {course.price}
                  </h4>

                  <button className="px-5 py-2 rounded-full bg-linear-to-r from-lime-500 via-green-500 to-emerald-500 hover:bg-cyan-600 transition-all duration-300 font-semibold">
                    Enroll Now
                  </button>
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

              <button className="mt-6 px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularCourses;