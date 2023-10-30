import React from 'react'
import Link from 'next/link'

const blog = () => {
  return (
    <div className='blog-page'>
        <div className="w-screen text absolute top-0 left-0 front-gradient"></div>

        <nav className="nav-left">
                <Link href={"/"}>Home</Link>
        </nav>
        
        <nav className="navbar">
              <ul>
                <li>Blog</li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>

            </nav>
        <p className='text-center relative top-48 wide-letters font-extralight text-2xl'>Nothing here yet, sorry.</p>
    </div>
  )
}

export default blog