import React from 'react'
import Link from 'next/link'

const projects = () => {
  return (
    <div className='projects-page'>
        <div className="w-screen text absolute top-0 left-0 front-gradient-3"></div>
        
        <nav className="nav-left">
                <Link href={"/"}>Home</Link>
        </nav>

        <nav className="navbar">
              <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li>Projects</li>
                <li><Link href={"/about"}>About</Link></li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>

        </nav>
        

        <p className='text-center relative top-48 wide-letters font-extralight text-2xl'>Nothing here yet, sorry.</p>
    </div>
  )
}

export default projects