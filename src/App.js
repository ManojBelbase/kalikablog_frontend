import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Component/Navbar'
import About from './Component/Navbar/About'
import Layout from './Hoc/Layout/Layout'
import Signleblog from './Component/PageComponents/Blogs/Signleblog'
import Categories from './Component/pages/Categories'
import Travel from './Component/pages/Travel'
import Food from './Component/pages/Food'
const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/categories' element={<Categories />} />
            <Route exact path='/travel' element={<Travel />} />
            <Route exact path='/food' element={<Food />} />
            <Route exact path='/singleblog/:id' element={<Signleblog />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
