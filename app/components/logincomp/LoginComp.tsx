// import { SessionProvider, signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const LoginComp = () => {
    // const {data, status} = useSession();
    // console.log(data, status);

  return (
    <div>
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
        <button onClick={() => signIn("google")} className='text-center absolute top-48 left-1/3 rounded-md bg-amber-700 font-extralight text-2xl p-5'>Log in with Google</button>
    </div>
  )
}

export default LoginComp