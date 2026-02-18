'use client'

import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useState } from "react"
import ContextBox from "./components/contextbox/ContextBox";
// import { CSSTransition } from 'react-transition-group'
import { useRouter } from "next/navigation";
import { track } from '@vercel/analytics';
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import {getUserSession} from "@/app/utils/session";
import { Lateef, Lato } from 'next/font/google'
import HamburgerMenu from "./components/HamburgerMenu"

// const lateef = Lateef({ subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"] });

// const lato = Lato({ subsets: ["latin"],
//   weight: ["100", "300", "400", "700"],
//   variable: "--font-inter" })


export default function Home() {
  return (
    <div className="">
      <HamburgerMenu />
      <div className="landing">

        {/* <CSSTransition in={context1} 
            unmountOnExit 
            timeout={300}
            classNames="context-1">
          <ContextBox>This is the context box.</ContextBox>
        </CSSTransition> */}

        {/* <Parallax pages={4}> */}
          {/* <ParallaxLayer speed={0.5}> */}
            <div className="page-1">
            <div className="text absolute top-0 left-0 front-gradient-4 w-full h-full"> &nbsp;</div>
            {/* <img src="../images/blocks.jpg" alt="blocks" className="bg-1" /> */}
            </div>
          {/* </ParallaxLayer> */}

          {/* <ParallexLayer speed={1}> */}
            {/* Desktop Navbar */}
            <nav className={`navbar`}>
              <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>
            </nav>

            <div>hello world</div>
            <div className='z-20 name-header text-white leading-none'>
              <p>Dylan</p>
              <p className="">Rodriguez Barrera</p>
              <p className="sub-header">Senior @ MIT</p>
              <div>
                <ul className="front-links">
                  <li>
                    <a className="" target="_blank" href="https://www.instagram.com/dylanrb.camera.roll" onClick={() => track('Instagram link clicked')}>
                      <img src="../icons/ig-logo-white.png" className="icon-link"/>
                    </a>
                  </li>
                  <li>
                    <a className="" target="_blank" href="https://www.github.com/dylanrb5" onClick={() => track('Github profile clicked')}>
                      <img src="../icons/github-icon-white.png" className="icon-link"/>
                    </a>
                  </li>
                  <li>
                    <a className="" target="_blank" href="https://www.linkedin.com/in/dylan-rb-0/" onClick={() => track('Linkedin link clicked')}>
                      <img src="../icons/linkedin-white.png" className="icon-link"/>
                    </a>
                  </li>
                  {/* <li className="font-extralight contact-link">
                    <a href="mailto:dylan1@mit.edu">Text</a>
                  </li> */}
                </ul>
                
              </div>
            </div>
          {/* </ParallaxLayer> */}


          {/* <ParallaxLayer offset={1} speed={1}> */}
            {/* <div className="">
              <div className="z-10">
                <img src="../images/abstract1.jpg" alt="blocks" />
              </div>
            </div> */}
          {/* </ParallaxLayer> */}
          
          {/* <ParallaxLayer offset={2} speed={1}> */}
            {/* <div className="h-96 bg-zinc-700"></div> */}
            {/* <div className="page-3"></div> */}
          {/* </ParallaxLayer> */}
      
        {/* </Parallax> */}
      </div>

    </div>
  )
}
