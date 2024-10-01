import { BrowserRouter as Router } from 'react-router-dom';
import SidePanel from './components/SidePanel';
import Footer from './components/Footer';
import BulkResumeContent from './components/BulkResumeContent';

/**
 * TODO
 * Add Project pages that go in depth
 * 
 */
function App() {

  return (
<Router>
      <div className="w-full min-h-screen flex flex-col">
        
        <div className="flex flex-row flex-1 bg-cloud-light">
          
          <div className="w-auto md:w-1/4 h-full bg-cloud-light">
            <SidePanel />
          </div>
          
          <div className="flex-1 bg-white">
            <BulkResumeContent />
          </div>
        </div>

        <div className="w-full bg-gray-200">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
