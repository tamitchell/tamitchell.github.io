import { BrowserRouter as Router } from 'react-router-dom';
import SidePanel from './components/SidePanel';
import Footer from './components/Footer';
import BulkResumeContent from './components/BulkResumeContent';
import clsx from 'clsx';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioGrid from './components/PortfolioGrid';
import HeroAlt from './components/HeroAlt';

/**
 * TODO
 * Add Project pages that go in depth
 * 
 */
function App() {

  return (
    <Router>
      <>


       <div className={clsx("min-h-screen w-full",
      "flex flex-col")}>
        <Header />
        <HeroAlt />
        {/* <HeroSection /> */}
        <PortfolioGrid />
{/* 
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
        "overflow-y-auto",)}>
            <BulkResumeContent />
          </div> */}
        </div> 

        <div className="w-full bg-gray-200">
          <Footer />
        </div>
      </>
    </Router>
  )
}

export default App
