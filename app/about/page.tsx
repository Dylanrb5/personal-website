import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <div className='about-page'>
      <div className="w-screen text absolute top-0 left-0 front-gradient"></div>
      <nav className="navbar">
              <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
              </ul>

      </nav>

      <nav className="nav-left">
                <Link href={"/"}>Home</Link>

      </nav>
    </div>
  )
}

export default about