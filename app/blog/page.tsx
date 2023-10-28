import React from 'react'
import Link from 'next/link'

const blog = () => {
  return (
    <div>
        <nav className="navbar">
              <ul>
                <li>Blog</li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
              </ul>

            </nav>

    </div>
  )
}

export default blog