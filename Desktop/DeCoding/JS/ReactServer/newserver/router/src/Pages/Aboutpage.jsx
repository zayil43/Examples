import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Aboutpage = () => {
  return (
    <div>
        <h1>About us</h1>
        <p> This is a demo website about React-router-dom library</p>
        <ul>
        <li><Link to='contacts'>Our contacts</Link> </li>
        <li><Link to='team' >Our team</Link></li>
        </ul>
        {/* <Routes>
        <Route path='contacts' element={<p> Our contacts  </p>} />
        <Route path='team' element={<p> Our team </p>} />
        </Routes> */}
        <Outlet/>
    </div>
  )
}

export default Aboutpage