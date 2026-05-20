import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import { FiPlusSquare } from "react-icons/fi";
import CourseCard from '../CourseCard/CourseCard';




const AllCourses = () => {
  const data = useLoaderData();


  const courses = Array.isArray(data) ? data : Array.isArray(data?.courses)? data.courses : Array.isArray(data?.data)? data.data
    : [];

  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((c) => c?.category === filter);

    useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  const currentCourses = Array.isArray(filteredCourses)
    ? filteredCourses.slice(firstIndex, lastIndex)
    : [];

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCourses.length / cardsPerPage)
  );

  return (
    <div>
      <header className="w-max-8xl mx-auto">
        <Navbar />
      </header>

      <main>
        <div className="mt-42 text-left ml-8 flex items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-normal">All Courses</h1>
            {/* <img className="w-12 h-11" src={} alt="" /> */}
          </div>

          <Link
            to={"/addCourse"}
            className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50"
          >
            <FiPlusSquare className="text-2xl" />
            Create New Course
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 ml-8 mb-10">
          {["All", "Development", "Data Science", "Marketing", "Business"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-3xl border-2 border-amber-500 font-medium transition ${
                  filter === cat
                    ? "bg-orange-500 text-black"
                    : "bg-blue-500 text-white"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          {currentCourses.map((course) => (
            <CourseCard course={course} key={course._id} />
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full font-bold ${
                currentPage === i + 1
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllCourses;