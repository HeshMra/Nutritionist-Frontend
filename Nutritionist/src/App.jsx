import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Team from './Pages/Team'
import Process from './Pages/Process'
import Pricing from './Pages/Pricing'
import Blog from './Pages/Blog'
import Contactus from './Pages/Contactus'

const App = () => {
  return (
    // <div className='text-3xl font-bold underline'>App</div> //for check the css
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path='/Process' element={<Process/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
    </Routes>
  )
}

export default App