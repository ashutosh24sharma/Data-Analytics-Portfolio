import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const resumes = [
  {
    id: 1,
    title: "Full-stack Developer Resume",
    image: "/images/fullstack.png",
  },
  {
    id: 2,
    title: "Frontend Developer Resume",
    image: "/images/frontend.png",
  },
  {
    id: 3,
    title: "React.js Developer Resume",
    image: "/images/React.png",
  },
];

const MultiResumeViewer = () => {
  const [selectedResume, setSelectedResume] = useState(null);

  const handleResumeClick = (resume) => {
    setSelectedResume(resume);
  };

  const closeModal = () => {
    setSelectedResume(null);
  };

  return (
    <div className=" py-12 px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-12"> Resumes</h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            onClick={() => handleResumeClick(resume)}
            className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl"
          >
            <div className="p-4 bg-gray-200 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {resume.title}
              </h2>
            </div>
            <div className="h-64 overflow-hidden">
              <img
                src={resume.image}
                alt={resume.title}
                className="w-full h-full object-top object-cover transition-transform duration-300"
              />
            </div>
            <div className="text-center py-3 bg-gray-100 text-sm text-gray-500">
              Click to view full resume
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen modal */}
      {selectedResume && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-5xl w-full bg-white rounded-xl p-6">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-red-500"
            >
              <IoMdClose />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {selectedResume.title}
            </h2>
            <div className="w-full max-h-[80vh] overflow-auto rounded-md">
              <img
                src={selectedResume.image}
                alt={selectedResume.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiResumeViewer;
