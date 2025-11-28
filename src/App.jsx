import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/navbar";
import Exprience from "./component/exprience";
import Hero from "./component/Hero";
import About from "./component/about";
import ProfileLinks from "./component/Profiles.jsx";


import ProjectsPage from "./component/Projects";
import ProjectDetailPage from "./component/ProjectDetails";
import SkillsTechnologies from "./component/tech";
import TechnologyDetails from "./component/technologiesdetails";
import Education from "./component/education.jsx";
import CertificationPage from "./component/certificates.jsx";
import ContactPage from "./component/contacts.jsx";
import MultiResumeViewer from "./component/resumes.jsx";

function HomeSections() {
  return (
    <>
      <Hero />
      <About />
     
      <SkillsTechnologies />
      <ProjectsPage />
      <Exprience />
       <CertificationPage/>
       <ProfileLinks />
      <ContactPage/>
     
   
    </>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Routes location={location}>
          <Route path="/" element={<HomeSections />} />
          <Route path="/tech/:techId" element={<TechnologyDetails />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
           <Route path="/education" element={<Education />} />
            <Route path="/profiles" element={<ProfileLinks />} /> 
            <Route path="/resumes" element={<MultiResumeViewer />} />
         
        </Routes>
      </div>
    </div>
  );
}

export default App;
