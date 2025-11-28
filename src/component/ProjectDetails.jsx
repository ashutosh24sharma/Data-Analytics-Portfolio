import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Import or keep your allProjects object above this component

const allProjects = {
  "sql-python-powerbi-excel": [
   {
  id: "powerbi-sql-coffeeshop-sales",
  title: "Advanced Coffee Shop Sales Analytics Dashboard (Power BI + SQL)",
  image: "/images/Coffee.png",
  about:
    "Developed a highly advanced and fully interactive sales analytics dashboard using a combination of Power BI and SQL. This end-to-end project involved extensive data cleaning, transformation, and KPI engineering using SQL scripts, followed by sophisticated report development in Power BI using over 60+ DAX measures. I automated data preparation with Power Query, built a robust star-schema data model, and created visually rich, storytelling-based insights using advanced charts, custom tooltips, conditional formatting, calendar heat maps, and dynamic slicers. The solution helps stakeholders analyze sales performance across months, store locations, products, weekdays/weekends, hours, and much more, enabling deep business insights and data-driven decisions.",
  functionalities: [
    "Performed advanced data cleaning, standardization, and transformation using SQL (20+ optimized scripts)",
    "Engineered various business KPIs such as Total Sales, Orders, Quantity, MoM Growth, and Category Performance",
    "Designed analytical tables, views, and date dimensions for structured reporting",
    "Used Power Query for ETL operations including merging, appending, column extraction, and data normalization",
    "Built a complete relational data model with proper cardinality and cross-filtering rules",
    "Created 60+ DAX measures for dynamic calculations, MoM comparison, YoY trends, averages, and ranking logic",
    "Developed interactive and visually appealing dashboards with bookmarks, tooltips, drill-through pages, and slicers",
    "Implemented advanced visuals such as calendar heat maps, day-hour heat maps, top 10 product analysis, category-wise performance charts, and sales trend lines",
    "Designed custom KPI cards with conditional formatting to highlight month-over-month increases or decreases",
    "Segmented performance by store locations, weekdays vs. weekends, and product categories for deeper insights",
    "Added dynamic filtering capabilities for month, store location, category, and product-level exploration",
    "Delivered a fully responsive dashboard optimized for stakeholder presentations and business decision-making"
  ],
  github: "https://github.com/ashutosh24sharma/Coffee_shop_project_sql",
  deployed: "https://app.powerbi.com/view?r=eyJrIjoiMjA3ZWI5MDUtNDlmZi00ZGJkLWJiOTAtNzhjZTIyZGY3MmVkIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9",
  video: "/",
  embedUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiMjA3ZWI5MDUtNDlmZi00ZGJkLWJiOTAtNzhjZTIyZGY3MmVkIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9"
},
{
  id: "india-loksabha-2024-sql-powerbi",
  title: "India Lok Sabha Election 2024 Analytics (SQL + Power BI)",
  image: "/images/Election.png",
  about:
    "Built a large-scale end-to-end analytics solution for the India Lok Sabha Election 2024 using SQL for data engineering and Power BI for interactive reporting. In SQL, I designed a snowflake schema with 6 related tables, performed extensive data cleaning and transformation, and created reusable views to calculate key election KPIs such as alliance-wise seat share, state-wise performance, and constituency-level results. In Power BI, I replicated the snowflake model, created more than 60 DAX measures and 20+ calculated columns, and designed a suite of high-level dashboards covering national overview, state demographics, political landscape by state, constituency analysis, and detailed grid views, along with a landing page for smooth navigation. These dashboards provide deep insights into NDA, I.N.D.I.A., and other parties’ performance across seats, states, alliances, and candidates, helping users explore results from macro (national) to micro (constituency) level in an intuitive, story-driven experience. :contentReference[oaicite:0]{index=0}",
  functionalities: [
    "Designed a snowflake schema in SQL with 6 dimension and fact tables for parties, alliances, states, constituencies, and results",
    "Performed data cleaning, standardization, type corrections, and relationship checks during SQL data preparation",
    "Created SQL views and scripts to pre-calculate key KPIs such as total seats, alliance-wise seats, vote margins, and vote shares",
    "Implemented a matching snowflake data model in Power BI with correctly defined relationships and cardinalities",
    "Developed 60+ advanced DAX measures for KPIs like total seats by alliance, percentage seat share, vote share, margins, and rankings",
    "Created 20+ calculated columns for model enrichment (classification fields, alliance tagging, seat categories, etc.)",
    "Built an Overview Analysis dashboard to compare NDA, I.N.D.I.A., and Other/Independent performance with KPIs and party-wise breakdown",
    "Designed a State Demographics dashboard with state maps, tooltips, and drill-through for state-wise and constituency-wise analysis",
    "Developed a Political Landscape by State page to analyze alliance and party performance within any selected state",
    "Created a detailed Constituency Analysis dashboard showing turnout, EVM vs Postal votes, winners, runners-up, and vote margins",
    "Implemented a Details Grid page with drill-through and export to Excel for constituency-level tabular analysis",
    "Built an interactive Landing Page with navigation buttons to jump between all dashboards and return home quickly",
    "Used bookmarks, drill-through actions, and tooltips to create a high-level yet user-friendly exploration journey for analysts and viewers",
    "Optimized the report for performance and readability using consistent color coding for alliances, custom KPIs cards, and responsive layout"
  ],
  github: "https://github.com/ashutosh24sharma/Election_2024_sql-project",
  deployed: "https://app.powerbi.com/view?r=eyJrIjoiM2Y4MzBhYTUtZGFjOC00YjllLWJjMmEtZmY5MzEzYWViZDljIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9&pageName=afe7fd05a5f63db7365e",
  video: "/",
  embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiM2Y4MzBhYTUtZGFjOC00YjllLWJjMmEtZmY5MzEzYWViZDljIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9&pageName=afe7fd05a5f63db7365e"
},{
  id: "ipl-analytics-2008-2025-powerbi",
  title: "IPL Analytics Dashboard (2008–2025)",
  image: "/images/ipl.png",
  about:
    "Developed a fully interactive and visually rich IPL Analytics Dashboard covering the complete tournament history from 2008 to 2025. This project focuses entirely on Power BI, where I integrated multiple datasets of teams, players, matches, venues, awards, and season-wise results. Users can select any tournament year (2008–2025) and instantly view season-specific outcomes such as the champion team, runner-up team, Orange Cap holder, Purple Cap holder, and top-performing batsmen and bowlers. The dashboard includes dynamic KPIs, card insights, team logos, player images, and multiple leaderboard panels which automatically update based on the selected year. It provides a complete analytical view of total sixes, fours, match counts, venues, teams, players, and season performance, making it a highly engaging and data-rich visualization tool for cricket fans and analysts.",
  functionalities: [
    "Designed a fully interactive year-based dashboard for IPL seasons from 2008–2025",
    "Created dynamic KPIs such as total matches, total sixes, total fours, total venues, and total players for each selected season",
    "Implemented leaderboard visuals for highest six hitters, highest four hitters, Orange Cap (most runs), and Purple Cap (most wickets)",
    "Added logic to automatically identify winner, runner-up, playoff teams, and finals outcome for any selected year",
    "Used dynamic measure switching to update visuals based on slicer selections (team performance, batting stats, bowling stats)",
    "Built season-specific points table with Net Run Rate, wins, losses, ties, and qualification status",
    "Integrated team logos and player images with live lookup for accurate visual branding",
    "Designed match-wise and venue-wise analysis including match results, toss decisions, and venue usage frequency",
    "Created interactive bar charts, ranking tables, donut charts, and player performance summaries",
    "Ensured consistent color formatting based on teams for better readability and storytelling",
    "Implemented bookmarks and buttons for smooth navigation across dashboard pages",
    "Optimized data model and applied DAX formulas for run aggregation, wickets, boundaries count, match outcomes, and rankings"
  ],

  deployed: "https://app.powerbi.com/view?r=eyJrIjoiNzhmMWNkMjktZWJjNS00MzVkLTg3ZTQtZjEwY2UzNDBjZjQyIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9",
  video: "/",
  embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzhmMWNkMjktZWJjNS00MzVkLTg3ZTQtZjEwY2UzNDBjZjQyIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9"
}



  ],

  "power-bi": [
    ,{
  id: "ipl-analytics-2008-2025-powerbi",
  title: "IPL Analytics Dashboard (2008–2025)",
  image: "/images/ipl.png",
  about:
    "Developed a fully interactive and visually rich IPL Analytics Dashboard covering the complete tournament history from 2008 to 2025. This project focuses entirely on Power BI, where I integrated multiple datasets of teams, players, matches, venues, awards, and season-wise results. Users can select any tournament year (2008–2025) and instantly view season-specific outcomes such as the champion team, runner-up team, Orange Cap holder, Purple Cap holder, and top-performing batsmen and bowlers. The dashboard includes dynamic KPIs, card insights, team logos, player images, and multiple leaderboard panels which automatically update based on the selected year. It provides a complete analytical view of total sixes, fours, match counts, venues, teams, players, and season performance, making it a highly engaging and data-rich visualization tool for cricket fans and analysts.",
  functionalities: [
    "Designed a fully interactive year-based dashboard for IPL seasons from 2008–2025",
    "Created dynamic KPIs such as total matches, total sixes, total fours, total venues, and total players for each selected season",
    "Implemented leaderboard visuals for highest six hitters, highest four hitters, Orange Cap (most runs), and Purple Cap (most wickets)",
    "Added logic to automatically identify winner, runner-up, playoff teams, and finals outcome for any selected year",
    "Used dynamic measure switching to update visuals based on slicer selections (team performance, batting stats, bowling stats)",
    "Built season-specific points table with Net Run Rate, wins, losses, ties, and qualification status",
    "Integrated team logos and player images with live lookup for accurate visual branding",
    "Designed match-wise and venue-wise analysis including match results, toss decisions, and venue usage frequency",
    "Created interactive bar charts, ranking tables, donut charts, and player performance summaries",
    "Ensured consistent color formatting based on teams for better readability and storytelling",
    "Implemented bookmarks and buttons for smooth navigation across dashboard pages",
    "Optimized data model and applied DAX formulas for run aggregation, wickets, boundaries count, match outcomes, and rankings"
  ],

  deployed: "https://app.powerbi.com/view?r=eyJrIjoiNzhmMWNkMjktZWJjNS00MzVkLTg3ZTQtZjEwY2UzNDBjZjQyIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9",
  video: "/",
  embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzhmMWNkMjktZWJjNS00MzVkLTg3ZTQtZjEwY2UzNDBjZjQyIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9"
},
{
  id: "india-loksabha-2024-sql-powerbi",
  title: "India Lok Sabha Election 2024 Analytics (SQL + Power BI)",
  image: "/images/Election.png",
  about:
    "Built a large-scale end-to-end analytics solution for the India Lok Sabha Election 2024 using SQL for data engineering and Power BI for interactive reporting. In SQL, I designed a snowflake schema with 6 related tables, performed extensive data cleaning and transformation, and created reusable views to calculate key election KPIs such as alliance-wise seat share, state-wise performance, and constituency-level results. In Power BI, I replicated the snowflake model, created more than 60 DAX measures and 20+ calculated columns, and designed a suite of high-level dashboards covering national overview, state demographics, political landscape by state, constituency analysis, and detailed grid views, along with a landing page for smooth navigation. These dashboards provide deep insights into NDA, I.N.D.I.A., and other parties’ performance across seats, states, alliances, and candidates, helping users explore results from macro (national) to micro (constituency) level in an intuitive, story-driven experience. :contentReference[oaicite:0]{index=0}",
  functionalities: [
    "Designed a snowflake schema in SQL with 6 dimension and fact tables for parties, alliances, states, constituencies, and results",
    "Performed data cleaning, standardization, type corrections, and relationship checks during SQL data preparation",
    "Created SQL views and scripts to pre-calculate key KPIs such as total seats, alliance-wise seats, vote margins, and vote shares",
    "Implemented a matching snowflake data model in Power BI with correctly defined relationships and cardinalities",
    "Developed 60+ advanced DAX measures for KPIs like total seats by alliance, percentage seat share, vote share, margins, and rankings",
    "Created 20+ calculated columns for model enrichment (classification fields, alliance tagging, seat categories, etc.)",
    "Built an Overview Analysis dashboard to compare NDA, I.N.D.I.A., and Other/Independent performance with KPIs and party-wise breakdown",
    "Designed a State Demographics dashboard with state maps, tooltips, and drill-through for state-wise and constituency-wise analysis",
    "Developed a Political Landscape by State page to analyze alliance and party performance within any selected state",
    "Created a detailed Constituency Analysis dashboard showing turnout, EVM vs Postal votes, winners, runners-up, and vote margins",
    "Implemented a Details Grid page with drill-through and export to Excel for constituency-level tabular analysis",
    "Built an interactive Landing Page with navigation buttons to jump between all dashboards and return home quickly",
    "Used bookmarks, drill-through actions, and tooltips to create a high-level yet user-friendly exploration journey for analysts and viewers",
    "Optimized the report for performance and readability using consistent color coding for alliances, custom KPIs cards, and responsive layout"
  ],
  github: "https://github.com/ashutosh24sharma/Election_2024_sql-project",
  deployed: "https://app.powerbi.com/view?r=eyJrIjoiM2Y4MzBhYTUtZGFjOC00YjllLWJjMmEtZmY5MzEzYWViZDljIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9&pageName=afe7fd05a5f63db7365e",
  video: "/",
  embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiM2Y4MzBhYTUtZGFjOC00YjllLWJjMmEtZmY5MzEzYWViZDljIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9&pageName=afe7fd05a5f63db7365e"
},

    {
  id: "powerbi-sql-coffeeshop-sales",
  title: "Advanced Coffee Shop Sales Analytics Dashboard (Power BI + SQL)",
  image: "/images/Coffee.png",
  about:
    "Developed a highly advanced and fully interactive sales analytics dashboard using a combination of Power BI and SQL. This end-to-end project involved extensive data cleaning, transformation, and KPI engineering using SQL scripts, followed by sophisticated report development in Power BI using over 60+ DAX measures. I automated data preparation with Power Query, built a robust star-schema data model, and created visually rich, storytelling-based insights using advanced charts, custom tooltips, conditional formatting, calendar heat maps, and dynamic slicers. The solution helps stakeholders analyze sales performance across months, store locations, products, weekdays/weekends, hours, and much more, enabling deep business insights and data-driven decisions.",
  functionalities: [
    "Performed advanced data cleaning, standardization, and transformation using SQL (20+ optimized scripts)",
    "Engineered various business KPIs such as Total Sales, Orders, Quantity, MoM Growth, and Category Performance",
    "Designed analytical tables, views, and date dimensions for structured reporting",
    "Used Power Query for ETL operations including merging, appending, column extraction, and data normalization",
    "Built a complete relational data model with proper cardinality and cross-filtering rules",
    "Created 60+ DAX measures for dynamic calculations, MoM comparison, YoY trends, averages, and ranking logic",
    "Developed interactive and visually appealing dashboards with bookmarks, tooltips, drill-through pages, and slicers",
    "Implemented advanced visuals such as calendar heat maps, day-hour heat maps, top 10 product analysis, category-wise performance charts, and sales trend lines",
    "Designed custom KPI cards with conditional formatting to highlight month-over-month increases or decreases",
    "Segmented performance by store locations, weekdays vs. weekends, and product categories for deeper insights",
    "Added dynamic filtering capabilities for month, store location, category, and product-level exploration",
    "Delivered a fully responsive dashboard optimized for stakeholder presentations and business decision-making"
  ],
  github: "https://github.com/ashutosh24sharma/Coffee_shop_project_sql",
  deployed: "https://app.powerbi.com/view?r=eyJrIjoiMjA3ZWI5MDUtNDlmZi00ZGJkLWJiOTAtNzhjZTIyZGY3MmVkIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9",
  video: "/",
  embedUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiMjA3ZWI5MDUtNDlmZi00ZGJkLWJiOTAtNzhjZTIyZGY3MmVkIiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9"
},
{
  id: "sales-analysis-dashboard",
  title: "E-Commerce Sales Analysis Dashboard",
  image: "/images/sales.png",
  about:
    "Created an interactive Sales Analysis Dashboard using Power BI to help users understand product performance, customer trends, and overall business growth. The dashboard provides a clear visual breakdown of sales across time periods, categories, and regions, allowing decision-makers to quickly identify patterns and performance gaps. It includes KPIs such as total sales, total orders, top-selling products, top customers, and month-wise trends. Designed with clean visuals, slicers, and dynamic charts, the dashboard makes sales insights easy to explore and interpret.",
  functionalities: [
    "Designed an interactive and clean Power BI dashboard for sales performance",
    "Created KPIs such as total sales, total quantity sold, total orders, and top products",
    "Implemented slicers for filtering by category, customer, region, and time period",
    "Built month-wise and year-wise trend charts for sales insights",
    "Developed dynamic visuals like bar charts, pie charts, and line charts for deeper analysis",
    "Analyzed product performance to highlight top-selling and low-performing products",
    "Enhanced readability with consistent formatting, color themes, and tooltips",
    "Optimized the report layout for professional presentations and quick decision-making"
  ],
  
  deployed: "https://app.powerbi.com/view?r=eyJrIjoiYjI4NDczMWItODRhMC00Nzk4LWI2M2QtNTQwNjAxYTQ5Y2U1IiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9&pageName=a1b75a0611287004c180",
  video: "/",
  embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYjI4NDczMWItODRhMC00Nzk4LWI2M2QtNTQwNjAxYTQ5Y2U1IiwidCI6IjZhZGJmNzg1LThiNmUtNDhhNy05ZmI3LWMwNjZkM2E3ZjllOSJ9&pageName=a1b75a0611287004c180"
}


  ],

  sql: [
   {
  id: "sql-data-warehouse-project",
  title: "SQL Data Warehouse Project (Bronze–Silver–Gold Architecture)",
  image: "/images/data_architecture.png",
  about:
    "Designed and implemented a multi-layered SQL data warehouse using the Bronze–Silver–Gold architecture. Built robust ETL pipelines, cleaned and standardized data, and modeled business-ready datasets using star schema for analytics and reporting.",
  functionalities: [
    "Ingested raw CSV data into SQL Server Bronze Layer",
    "Performed data cleaning, standardization, and normalization in the Silver Layer",
    "Designed business-ready star schema (Fact & Dimension tables) in the Gold Layer",
    "Implemented CTEs, subqueries, window functions, and joins for complex transformations",
    "Created stored procedures to automate ETL processes",
    "Used SQL triggers for audit logging and maintaining data integrity",
    "Optimized query performance across all layers"
  ],
  github: "https://github.com/ashutosh24sharma/SQL_DATAWAREHOUSE",

},
{
  id: "coffee-shop-sales-sql",
  title: "Coffee Shop Sales Data Analysis (SQL Server)",
  image: "/images/Coffee.png",
  about:
    "Performed end-to-end sales analysis for a coffee shop chain using SQL Server. The project involved ingesting raw CSV sales data, cleaning and transforming it, creating analytical views, and calculating key business KPIs. The analysis covers total sales, orders, product performance, store-wise trends, weekday/weekend behavior, and time-series sales insights to support decision-making and dashboard creation.",
  functionalities: [
    "Cleaned and transformed raw CSV sales data using advanced SQL queries",
    "Calculated key KPIs including Total Sales, Total Orders, Total Quantity Sold, and MoM Growth metrics",
    "Created a Calendar Table for daily sales, orders, and quantity analytics",
    "Analyzed monthly sales trends and daily performance for selected periods",
    "Identified above-average and below-average sales days using statistical comparisons",
    "Performed store-wise, category-wise, and product-wise sales analysis",
    "Generated Top 10 best-selling products using ranking and window functions",
    "Analyzed sales by day and hour, including weekday vs weekend performance"
  ],
  github: "https://github.com/ashutosh24sharma/Coffee_shop_project_sql",
 
},

{
  id: "loksabha-2024-sql-analysis",
  title: "India Lok Sabha Elections 2024 — SQL Data Analysis",
  image: "/images/Election.png",
  about:
    "Analyzed the India Lok Sabha Elections 2024 dataset using advanced T-SQL to derive constituency-, state-, and alliance-level KPIs. Implemented transformations, added alliance classifications, calculated winners, margins, top-EVM votes, and produced state-wise and alliance-wise summaries to support reporting and dashboards.",
  functionalities: [
    "Classified parties into alliances (NDA, I.N.D.I.A, OTHER) and added an alliance column using CASE logic",
    "Computed total seats, seats available, and seats won overall and by alliance",
    "Produced party-level and alliance-level seat breakdowns per state (pivot-ready results)",
    "Identified winners, runners-up, margins of victory, and Top-N EVM vote getters per constituency using window functions",
    "Derived state summaries (e.g., Uttar Pradesh): seats, candidates, parties, total votes, EVM vs postal breakdown",
    "Automated analytics with CTEs, window functions (ROW_NUMBER, RANK), aggregation (SUM, COUNT), and views/stored procedures for repeatable reporting"
  ],
  github: "https://github.com/ashutosh24sharma/Election_2024_sql-project",

},

{
  id: "sql-exploratory-advanced-analytics",
  title: "SQL Exploratory & Advanced Data Analytics Project",
  image: "/images/ETL Process.png",
  about:
    "Performed end-to-end Exploratory Data Analysis (EDA) and Advanced Analytics using SQL Server to uncover trends, rankings, performance metrics, cumulative patterns, and proportional insights using advanced SQL queries and statistical techniques.",
  functionalities: [
    "Analyzed database structure, dimensions, dates, and key measures using EDA techniques",
    "Performed ranking, magnitude analysis, and proportional (part-to-whole) insights",
    "Conducted time-based trend analysis, cumulative analysis, and performance comparisons",
    "Used CTEs, subqueries, and window functions (SUM OVER, RANK, LAG/LEAD) for deep analytics",
    "Applied statistical formulas like mean, variance, correlation, and percentage change",
    "Created analytical SQL views and automated workflows using stored procedures and triggers",
    "Derived actionable insights for reporting and decision-making"
  ],
  github: "https://github.com/ashutosh24sharma/data_Analytics_project_sql",
 
}, 


  ],

  python: [
   {
  id: "python-sales-dashboard",
  title: "Super-Store Sales Analysis Dashboard",
  image: "/images/Superstore.png",
  about:
    "Developed an interactive web-based sales analysis dashboard using Python libraries like Streamlit, Pandas, Matplotlib, Seaborn, Plotly, and NumPy. The project helps users explore sales trends across regions, states, and cities through dynamic filters and visualizations.",
  functionalities: [
    "Cleaned and transformed raw sales data using Pandas and NumPy",
    "Built an interactive dashboard using Streamlit",
    "Enabled region, state, and city-level filtering for deep sales insights",
    "Visualized trends using Matplotlib, Seaborn, and Plotly",
    "Deployed the dashboard online for real-time access"
  ],
  github: "https://github.com/ashutosh24sharma/Python_dashboard-1",
  deployed: "https://pythondashboard-1-ipjtaz4hj5m7qfct45oydg.streamlit.app/",
},
{
  id: "us-population-dashboard",
  title: "US Population Analysis Dashboard",
  image: "/images/us.png",
  about:
    "Built an interactive US population analysis dashboard using Python libraries like Streamlit, Pandas, NumPy, Matplotlib, Seaborn, and Plotly. The dashboard allows users to explore population trends across states and cities with dynamic filters and visual insights.",
  functionalities: [
    "Cleaned and prepared US population datasets using Pandas and NumPy",
    "Created an interactive dashboard interface with Streamlit",
    "Enabled state-wise and city-wise population filtering",
    "Visualized demographic patterns using Matplotlib, Seaborn, and Plotly",
    "Deployed the dashboard online for public access"
  ],
  github: "https://github.com/ashutosh24sharma/us_population_dashboard",
  deployed: "https://ashutosh24sharma-us-population-dashboard-streamlit-app-zrih9s.streamlit.app/",
},
{
  id: "python-blikit-analysis",
  title: "Blinkit Sales Data Analysis Project",
  image: "/images/Blinkit.png",
  about:
    "Performed end-to-end data analysis on the Blinkit dataset using Python. The project includes data cleaning, KPI computation, and multiple data visualizations created using Pandas, NumPy, Matplotlib, Seaborn, and Plotly. The analysis focuses on measuring overall sales performance, understanding customer ratings, and identifying item-level insights.",
  functionalities: [
    "Cleaned and prepared raw Blinkit sales data using Pandas and NumPy",
    "Calculated key performance indicators (KPIs): Total Sales, Average Sales, Number of Items, and Average Rating",
    "Performed in-depth exploratory data analysis (EDA)",
    "Created visualizations using Matplotlib, Seaborn, and Plotly",
    "Explored sales trends and rating patterns for decision-making insights"
  ],
  github: "https://github.com/ashutosh24sharma/Blinkitdata-analysis_python",

},
{
  id: "python-data-cleaning-project",
  title: "Comprehensive Data Cleaning & Preprocessing Project",
  image: "/images/datacleanning.png",
  about:
    "Developed a complete data cleaning and preprocessing pipeline in Python. The project focuses on improving data quality before analysis by handling missing values, fixing inconsistent formats, removing outliers, correcting datatypes, and preparing the dataset for further analysis or model building. This project demonstrates strong understanding of real-world data issues and Python-based cleaning techniques.",
  functionalities: [
    "Handled missing values using techniques like imputation and removal",
    "Standardized data formats across columns for consistency",
    "Filtered out unwanted outliers using statistical rules",
    "Detected and removed duplicate entries",
    "Cleaned and standardized column names",
    "Split combined fields into separate columns when needed",
    "Verified primary key uniqueness and removed conflicts",
    "Checked and corrected incorrect datatypes",
    "Performed additional cleaning tasks such as trimming whitespace, fixing typos, normalizing text, and validating data ranges"
  ],
  github: "https://github.com/ashutosh24sharma/Python-data-analysis/blob/main/DataCleaning.ipynb",

},
{
  id: "imdb-movie-analysis",
  title: "IMDB Movie Dataset Analysis",
  image: "/images/moviedata.png",
  about:
    "Performed comprehensive analysis on the IMDB movie dataset using Python. The project includes data cleaning, KPI calculations, exploratory data analysis, and detailed visualizations. It uncovers insights about movie ratings, genres, budgets, revenues, and audience preferences using Python data analysis libraries.",
  functionalities: [
    "Cleaned and prepared raw IMDB movie data (handled missing values, corrected datatypes, fixed inconsistencies)",
    "Calculated key KPIs such as Average Rating, Top Genres, Highest Revenue Movies, and Rating Distribution",
    "Performed Exploratory Data Analysis (EDA) to understand patterns in ratings, budgets, revenues, and release trends",
    "Created visualizations using Matplotlib, Seaborn, and Plotly",
    "Analyzed correlations between movie rating, runtime, votes, and revenue",
    "Identified top-performing movies and genre-wise performance insights"
  ],
  github: "https://github.com/ashutosh24sharma/Python-data-analysis/blob/main/Pandas%20Project-2.ipynb",
 
}

  ],

  excel: [
    {
  id: "excel-household-mis-dashboard",
  title: "Household Survey & MIS Data Dashboard ",
  image: "/images/mis.png",
  about:
    "Built an interactive Excel dashboard combining Household Survey data and MIS data. Used Power Query for data cleaning, data merging, and transformation. Designed dynamic PivotTables, slicers, and advanced Excel formulas to analyze potential learners, enrolled learners, and demographic trends. The dashboard supports multi-level filtering at Block, Gram Panchayat (GP), and Village levels for detailed insights.",
  functionalities: [
    "Cleaned and merged Household Survey data & MIS data using Power Query",
    "Standardized village, GP, and block names to ensure accurate mapping",
    "Created dynamic slicers for Block, Gram Panchayat, and Village-level filtering",
    "Analyzed Village-wise Total Household Survey Members",
    "Calculated Village-wise Total Potential Learners",
    "Identified Block-wise Total Potential Learners with Gender distribution",
    "Prepared Village and Gender-wise Household Survey Members distribution",
    "Prepared Village and Gender-wise Total Potential Learners",
    "Calculated Block-wise Total Enrolled Learners from MIS data",
    "Measured Block-level Difference between Potential and Enrolled Learners",
    "Measured GP-level Difference between Potential and Enrolled Learners",
    "Designed interactive charts including bar charts, donut charts, and KPI cards",
    "Used conditional formatting to highlight blocks/villages with low enrollment",
    "Developed a clean and user-friendly dashboard for decision-making"
  ],
  github: "https://github.com/ashutosh24sharma/excel-projects/blob/main/Household%20and%20mis%20data%20analysis.pdf",
  deployed: "/"
}
,
  {
  id: "excel-household-survey-analysis",
  title: "Household Survey Data Analysis (Excel + Power Query)",
  image: "/images/Household.png",
  about:
    "Analyzed household survey data in Excel using advanced formulas, pivot tables, and Power Query for data cleaning and transformation. Built interactive charts and dashboards to understand member distribution, education interest, and literacy patterns across blocks, age groups, and gender.",
  functionalities: [
    "Cleaned and transformed raw household survey data using Power Query (removed duplicates, handled missing values, standardized formats)",
    "Used advanced Excel formulas and pivot tables to aggregate and summarize member information",
    "Analyzed Block-Wise Total Members to compare population size across different blocks",
    "Calculated Age-Wise Members who would like to further study to identify learning interest by age group",
    "Prepared Block and Gender-Wise Total Members distribution for demographic insights",
    "Analyzed Age and Gender-Wise Members who would like to further study to find key target learner segments",
    "Calculated Total Potential Learners Age-group Wise for planning education programs",
    "Compared Block-Wise Literate and Illiterate Members to highlight literacy gaps",
    "Designed interactive charts and visuals to present all KPIs in a clear and decision-oriented dashboard"
  ],
  github: "https://github.com/ashutosh24sharma/excel-projects/blob/main/household%20survey%20Report-ppt.pdf",

},
{
  id: "excel-batch-categorization-project",
  title: "Batch Categorization & Monitoring  (Excel + Power Query)",
  image: "/images/categorization.png",
  about:
    "Developed an Excel-based monitoring and performance evaluation system to categorize batches into Aspirant, Performer, and Front Runner groups. Used Power Query for data cleaning and advanced Excel formulas to score batches based on multiple monitoring parameters. Designed an interactive dashboard to visualize performance trends and identify improvement areas.",
  functionalities: [
    "Cleaned and standardized monitoring data using Power Query (duplicates removal, missing value treatment, format normalization)",
    "Created automated scoring logic for batch categorization into Aspirant, Performer, and Front Runner",
    "Evaluated batches based on key monitoring parameters",
    "Observation – Classroom Setup quality tracking",
    "Observation – Center Management performance assessment",
    "Observation – Beneficiary / Learner’s Kit distribution status",
    "Learner’s Attendance monitoring and trend analysis",
    "Learner’s Assessment performance score calculation",
    "Content Running Status evaluation based on actual usage",
    "Center Operating Days compliance tracking",
    "Retention of LOs (Learning Officers) monitoring",
    "Designed interactive Excel charts and conditional formatting to highlight low-performing and high-performing batches",
    "Created a complete dashboard showing batch categories, parameter-wise performance, and improvement insights"
  ],
  github: "https://github.com/ashutosh24sharma/excel-projects/blob/main/cateorization%20presentation.pdf",
 
}

  ],
};

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const projects = allProjects[projectId] || [];

  const [selectedProject, setSelectedProject] = useState(null);
  const [fullScreenDashboard, setFullScreenDashboard] = useState(null);

  // Lock body scroll when modal or fullscreen is open
  useEffect(() => {
    const shouldLock = selectedProject || fullScreenDashboard;
    document.body.style.overflow = shouldLock ? "hidden" : "auto";
  }, [selectedProject, fullScreenDashboard]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white p-6">
      <h1 className="text-4xl text-center font-extrabold mb-10 uppercase text-green-400 tracking-wide">
        {projectId.replace(/-/g, " ")} Projects
      </h1>

      <h3 className="m-7 text-green-400 text-2xl md:text-3xl font-semibold">
        Click on a project to view full details
      </h3>

      {/* Project Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900/70 rounded-2xl shadow-xl p-4 border border-gray-800 hover:border-green-500/70 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1 transition duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover bg-white p-2 rounded-xl mb-4"
            />

            <h2 className="text-2xl font-bold text-green-400 mb-2">
              {project.title}
            </h2>

            <p className="text-gray-300 line-clamp-3 text-sm">
              {project.about}
            </p>

            <h3 className="font-semibold text-gray-200 mt-4 mb-2 text-sm">
              Key Functionalities:
            </h3>

            <ul className="text-xs text-gray-400 list-disc list-inside space-y-1">
              {project.functionalities.slice(0, 4).map((f, i) => (
                <li key={i} className="truncate">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black max-w-6xl w-full rounded-3xl shadow-2xl border border-gray-800/80 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
                  Project Detail
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-green-400">
                  {selectedProject.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6 lg:p-8 max-h-[80vh] overflow-y-auto">
              {/* LEFT COLUMN – dashboard + buttons */}
           {/* LEFT COLUMN – dashboard or image depending on project */}
<div className="lg:col-span-2 flex flex-col space-y-5">

  {/* SHOW DASHBOARD ONLY IF embedUrl EXISTS */}
  {selectedProject.embedUrl ? (
    <div className="bg-gray-900/80 border border-gray-800 rounded-2xl shadow-inner p-3">
      <h3 className="text-sm font-semibold mb-3 text-gray-200">
        Dashboard Preview
      </h3>

      <div className="relative rounded-xl overflow-hidden bg-black mx-auto w-full max-w-md">
        {/* Dashboard Iframe */}
        <div className="w-full aspect-[4/3]">
          <iframe
            title={selectedProject.title}
            src={selectedProject.embedUrl}
            className="w-full h-full border-0 pointer-events-none"
          />
        </div>

        {/* Overlay Button */}
        <button
          onClick={() => setFullScreenDashboard(selectedProject.embedUrl)}
          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition"
        >
          <span className="px-3 py-1 rounded-lg bg-black/80 text-xs text-gray-100 border border-gray-600">
            View in fullscreen
          </span>
        </button>
      </div>
    </div>
  ) : (
    /* IF NO DASHBOARD → SHOW IMAGE */
    <div className="bg-gray-900/80 border border-gray-800 rounded-2xl shadow-inner p-3">
      <h3 className="text-sm font-semibold mb-3 text-gray-200">Project Image</h3>
      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full h-72 object-cover rounded-xl bg-white p-2"
      />
    </div>
  )}

  {/* Links */}
  <div className="space-y-2">
    <a
      href={selectedProject.github}
      target="_blank"
      rel="noreferrer"
      className="block px-4 py-2.5 text-center bg-blue-600 hover:bg-blue-700 rounded-xl text-sm font-semibold shadow-md shadow-blue-500/20"
    >
      View Code on GitHub
    </a>

    {selectedProject.deployed && (
      <a
        href={selectedProject.deployed}
        target="_blank"
        rel="noreferrer"
        className="block px-4 py-2.5 text-center bg-green-600 hover:bg-green-700 rounded-xl text-sm font-semibold shadow-md shadow-green-500/20"
      >
        View Live Dashboard
      </a>
    )}
  </div>

</div>

              {/* RIGHT COLUMN – about + functionalities */}
              <div className="lg:col-span-3 space-y-5">
                {/* About card */}
                <div className="bg-gray-900/80 rounded-2xl border border-gray-800 p-4 md:p-5">
                  <h3 className="text-lg font-semibold mb-2 text-gray-100">
                    About the Project
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedProject.about}
                  </p>
                </div>

                {/* Functionalities card */}
                <div className="bg-gray-900/80 rounded-2xl border border-gray-800 p-4 md:p-5">
                  <h3 className="text-lg font-semibold mb-3 text-gray-100">
                    Key Functionalities
                  </h3>

                  <ul className="text-gray-300 text-sm list-disc list-inside space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                    {selectedProject.functionalities.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm font-medium text-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN DASHBOARD MODAL */}
      {fullScreenDashboard && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setFullScreenDashboard(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ✕
          </button>

          <div className="w-full h-full max-w-6xl max-h-[90vh]">
            <iframe
              src={fullScreenDashboard}
              title="Fullscreen Dashboard"
              className="w-full h-full border-0 rounded-2xl shadow-2xl"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}