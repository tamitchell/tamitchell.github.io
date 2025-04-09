import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidePanel from './components/SidePanel';
import Footer from './components/Footer';
import BulkResumeContent from './components/BulkResumeContent';
import ProjectDetail from './components/ProjectDetail';
import clsx from 'clsx';
import HeroSection from './components/HeroSection';

/**
 * Main layout component for the home page
 */
function MainLayout() {
  return (
    <>
      <div className={clsx("min-h-screen w-full",
      "flex flex-col sm:flex-row")}>        
        <div className={clsx("bg-cloud-light", "w-full min-w-[320px]",
          "sm:w-1/2 md:w-1/3",
          "sm:max-w-[425px]",
          "md:max-w-[30vw]",
          "md:min-h-screen")}>
          <SidePanel />
        </div>

        <div className={clsx("flex-1 bg-white", "w-full",
          "sm:flex-1",
          "md:min-h-screen", 
          "overflow-y-auto")}>
          <BulkResumeContent />
        </div>
      </div>

      <div className="w-full bg-gray-200">
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
