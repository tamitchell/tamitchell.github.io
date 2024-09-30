import { BrowserRouter as Router } from 'react-router-dom';
import SidePanel from './components/SidePanel';
import Footer from './components/Footer';
import BulkResumeContent from './components/BulkResumeContent';


function App() {

  return (
<Router>
      {/* Tailwind equivalent for Container fluid */}
      <div className="w-full min-h-screen flex flex-col">
        
        {/* Tailwind equivalent for Row */}
        <div className="flex flex-row flex-1 bg-cloud-light">
          
          {/* Tailwind equivalent for Col lg={'auto'} (side panel) */}
          <div className="w-auto md:w-1/4 h-full bg-cloud-light">
            <SidePanel />
          </div>
          
          {/* Tailwind equivalent for Col (resume content) */}
          <div className="flex-1 bg-white">
            <BulkResumeContent />
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-gray-200">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
