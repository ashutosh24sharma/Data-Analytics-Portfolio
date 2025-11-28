// ProjectsPage.jsx
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "sql-python-powerbi-excel",
    title: "SQL + Python + Power BI + Excel Projects",
    description:
      "End-to-end analytics solutions integrating SQL data extraction, Python analysis, Excel dashboards, and Power BI visualization.",
    image: "/combine.jpeg",
    link: "/projects/sql-python-powerbi-excel"
  },
 
  {
    id: "sql",
    title: "SQL Projects",
    description:
      "Efficient data retrieval, transformation, and insights generation using advanced SQL queries and stored procedures.",
    image: "/Sql.png",
    link: "/projects/sql"
  },
  {
    id: "python",
    title: "Python Projects",
    description:
      "Data cleaning, visualization, and predictive modeling with Python libraries such as Pandas, Matplotlib, Seaborn, and Scikit-learn.",
    image: "/images/Python.jpeg",
    link: "/projects/python"
  },
   {
    id: "power-bi",
    title: "Power BI Projects",
    description:
      "Interactive business intelligence dashboards with DAX, Power Query, and storytelling visuals for decision-making.",
    image: "/images/powerbi.jpeg",
    link: "/projects/power-bi"
  },
  {
    id: "excel",
    title: "Excel Projects",
    description:
      "Advanced Excel dashboards with pivot tables, VLOOKUP, conditional formatting, and KPI visualization for analytics.",
    image: "/images/Excel.jpeg",
    link: "/projects/excel"
  }
];

const ProjectsPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      const element = document.getElementById(projectId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [projectId]);

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="border-b border-neutral-900 pb-4  lg:mb-35 min-h-screen text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 drop-shadow-lg"
      >
        DATA ANALYTICS PROJECTS
      </motion.h1>

      <motion.div
        className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            id={project.id}
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(project.link)}
            className="cursor-pointer backdrop-blur-md bg-gray-800/60 border border-gray-700 hover:border-green-400 rounded-2xl shadow-lg hover:shadow-green-400/30 transition-all duration-300"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-28 h-28 object-contain mb-4 bg-white rounded-xl p-4 shadow-md"
              />
              <h2 className="text-2xl font-bold text-green-400 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      
    </div>
  );
};

export default ProjectsPage;
