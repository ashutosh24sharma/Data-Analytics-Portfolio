import React from "react";
import { useParams, Link } from "react-router-dom";

const techDetails = {
  python: {
    title: "Python",
    description:
      "Python is the core programming language I use for data cleaning, analysis, and automation. With its vast ecosystem of libraries, I leverage Python to turn raw data into actionable insights and powerful visualizations.",
    keyPoints: [
      "Data cleaning and manipulation using Pandas and NumPy",
      "Exploratory Data Analysis (EDA) with Matplotlib and Seaborn",
      "Data visualization dashboards with Plotly",
      "Working with CSV, Excel, and JSON data files",
      "Handling missing data and data transformation",
      "Implementing statistical and analytical techniques",
      "Automation and data pipeline creation using Python scripts",
      "Integration with SQL databases and APIs",
      "Building machine learning models using scikit-learn",
      "Data storytelling with visuals and insights",
    ],
  },

  excel: {
    title: "Microsoft Excel",
    description:
      "Excel is one of my primary tools for performing quick data analysis, reporting, and dashboard creation. I use it to visualize trends, perform calculations, and automate repetitive tasks efficiently.",
    keyPoints: [
      "Data cleaning and preparation using filters, sorting, and conditional formatting",
      "Formulas and functions (VLOOKUP, IF, INDEX-MATCH, SUMIFS, etc.)",
      "Pivot tables and pivot charts for data summarization",
      "Dashboard creation for interactive reporting",
      "Data validation and protection techniques",
      "What-if analysis, Goal Seek, and Scenario Manager",
      "Using Power Query for data transformation",
      "Chart creation and visualization best practices",
      "Automating workflows with macros (VBA basics)",
      "Importing/exporting data from external sources",
    ],
  },

  powerbi: {
    title: "Power BI",
    description:
      "Power BI is a business intelligence tool I use to transform data into visually compelling dashboards. It helps in discovering trends, patterns, and insights that guide data-driven decisions.",
    keyPoints: [
      "Connecting and transforming data from multiple sources",
      "Data modeling and relationship creation between tables",
      "Creating calculated columns and measures using DAX",
      "Designing dynamic, interactive dashboards",
      "Using slicers, filters, and drill-throughs for analysis",
      "Implementing KPIs and performance tracking visuals",
      "Optimizing data model performance",
      "Publishing reports to Power BI Service",
      "Sharing dashboards and setting user roles",
      "Automating data refresh and scheduled updates",
    ],
  },

  sql: {
    title: "SQL",
    description:
      "SQL is the backbone of my data querying and management skills. I use it to extract, filter, and manipulate data efficiently from relational databases.",
    keyPoints: [
      "Writing SELECT, INSERT, UPDATE, and DELETE queries",
      "Filtering data using WHERE, LIKE, IN, and BETWEEN operators",
      "Using aggregate functions (COUNT, SUM, AVG, MAX, MIN)",
      "Grouping data with GROUP BY and HAVING clauses",
      "Joining tables (INNER, LEFT, RIGHT, FULL joins)",
      "Subqueries and nested queries for complex data retrieval",
      "Creating and managing database tables and schemas",
      "Optimizing queries with indexes and constraints",
      "Working with stored procedures and views",
      "Integrating SQL queries with Python and Power BI",
    ],
  },

  chatgpt: {
    title: "ChatGPT",
    description:
      "ChatGPT is one of the AI tools I use to enhance productivity and analytical efficiency. It assists in data interpretation, report generation, and automating insights through natural language queries.",
    keyPoints: [
      "Generating automated summaries and reports",
      "Creating explanations for analytical insights",
      "Assisting in writing SQL and Python code",
      "Building prompt-based data exploration workflows",
      "Brainstorming data-driven strategies and storytelling ideas",
      "Automating repetitive analytical documentation",
      "Integrating AI into analytics workflows via APIs",
      "Using ChatGPT to prototype dashboards and scripts",
      "Enhancing communication of findings using AI assistance",
      "Continuous learning through AI-powered suggestions",
    ],
  },

  "ai-tools": {
    title: "AI Tools",
    description:
      "AI tools help me accelerate data analytics workflows by introducing automation, prediction, and intelligent insights. They bridge the gap between raw data and strategic decisions.",
    keyPoints: [
      "Using machine learning models for forecasting and prediction",
      "Leveraging AI-based analytics platforms (Google Colab, Copilot, etc.)",
      "Data classification and clustering using ML algorithms",
      "Natural language processing for text analytics",
      "AI-assisted dashboard generation and automation",
      "Integrating AI tools with Power BI and Excel",
      "Exploratory data insights using AutoML frameworks",
      "Building custom AI solutions for business analytics",
      "Combining AI insights with visualization for storytelling",
      "Continuous improvement using AI-driven performance analysis",
    ],
  },
};

const TechnologyDetails = () => {
  const { techId } = useParams();
  const tech = techDetails[techId];

  if (!tech)
    return (
      <div className="text-center text-white mt-20 text-xl">
        Technology Not Found
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-10">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-yellow-400">
        {tech.title}
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8 text-center leading-relaxed">
        {tech.description}
      </p>

      <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-2">
        {tech.keyPoints.map((point, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all"
          >
            <p className="text-base text-green-400">• {point}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/"
          className="text-yellow-400 hover:underline hover:text-yellow-300 transition"
        >
          ← Back to Technologies
        </Link>
      </div>
    </div>
  );
};

export default TechnologyDetails;
