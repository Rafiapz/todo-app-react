import React,{} from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='headerDiv' >
        <Link to='/' ><h3>Home</h3></Link>
        <Link to='/completed' ><h3>Completed</h3></Link>
        <Link to='/incomplete' ><h3>Incomplete</h3></Link>
       
       
    </div>
  )
}

export default Header