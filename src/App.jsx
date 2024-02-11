import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import '../src/App.css'

export const App = () => {
  return (
    <main className='bg-slate-300/20'>
        {/* <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router> */}
        <Home />
    </main>
  )
}
