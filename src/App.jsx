
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import NoPage from './pages/NoPage.jsx'
import Resume from './pages/Resume/Resume.jsx'


function App() {
  return (
    <>
        <Router>
            <Routes>
                {/* Home page */}
                <Route index element={<Home/>}/>

                {/* Resume page */}
                <Route caseSensitive path="/resume" element={<Resume/>} />
            
                {/* Default page */}
                <Route path='*' element={<NoPage/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
