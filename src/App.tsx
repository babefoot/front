import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.page'
import Statistics from './pages/statistics/Statistics.page'
import Admin from './pages/admin/Admin.page'

import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/admin" element={<Admin />} />*
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
