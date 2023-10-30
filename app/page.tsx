"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useEffect, useState } from "react"
import ContextBox from "./components/ContextBox";
// import { CSSTransition } from 'react-transition-group'
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Home() {

  const [context1, setContext1] = useState(false);

  // const showContext = (e) => {
  //   setContext1(true);
  // }

  // const hideContext = (e) => {
  //   setContext1(false);
  // }

  return (
    <div className="">
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
            <div className="w-screen text absolute top-0 left-0 front-gradient"></div>
            {/* <img src="../images/blocks.jpg" alt="blocks" className="bg-1" /> */}
            </div>
          {/* </ParallaxLayer> */}

          {/* <ParallaxLayer speed={1}> */}
            <nav className="navbar">
              <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>

            </nav>
            <div className='z-20 name-header text-white leading-none'>
              <p>Dylan</p>
              <p className="">Rodriguez Barrera</p>
              <p className="sub-header">Undergrad @ Mass Tech</p>
              <div>
                <ul className="front-links">
                  <li>
                    <a className="" target="_blank" href="https://www.instagram.com/dylanrb.camera.roll">
                      <img src="../icons/ig-logo-white.png" className="icon-link"/>
                    </a>
                  </li>
                  <li>
                    <a className="" target="_blank" href="https://www.github.com/dylanrb5">
                      <img src="../icons/github-icon-white.png" className="icon-link"/>
                    </a>
                  </li>
                  <li>
                    <a className="" target="_blank" href="https://www.linkedin.com/in/dylan-rb-0/">
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
