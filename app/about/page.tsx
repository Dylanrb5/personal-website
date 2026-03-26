'use client'

import React from 'react'
import Link from 'next/link'
import HamburgerMenu from '@/app/components/HamburgerMenu'
import styles from './about.module.css'

const about = () => {
  return (
    <div className='about-page'>
      <HamburgerMenu />
      <div className="w-screen text absolute top-0 left-0 front-gradient-3"></div>
      <nav className="navbar">
              <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li>About</li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>

      </nav>

      <nav className="nav-left">
                <Link href={"/"}>Home</Link>
      </nav>

      <div className='text-center relative top-36 wide-letters font-extralight text-2xl'>
        <h1 className='pb-5 text-4xl'>About Me</h1>
        <div className='pgph-image'>

            {/* <img src='../images/me.jpg' className='pfp' alt='a photo of me'/> */}
            <div className={`text-left ${styles.pgph}`}>
              <p>Hi, I'm Dylan Rodriguez Barrera, a senior at MIT, AKA Massachusetts Institute of Technology. 
              My major is "Course 6–4: Artificial Intelligence and Decision Making." 
              I enjoy learning new skills, creating/exploring claustrophobic liminal spaces, 
              writing, etc.
              I also like bad weather, dark humor (or anything that is funny), and an uncountable number of other miscellaneous things. 
              Oh and of course I love technology and whatnot. Data, algorithms, design.
              "Ever since I was young I wanted to transform unstructured data into actionable business insights."
              {/* I say "brand new" because
              our new status as an MOV-class team requires us to have an infotainment system, and that's where I come in. Oh, also, 
              I wanted to mention that I'm aware there's an awkward screen size where this paragraph will have a huge blank area—it might be fixed with
              a "float" property or something. I'm not sure, but I'll fix it soon enough. Might show if you're on an iPad or if you use skinny windows. */}
              </p>
              <p className='text-left'></p>
            </div>
        </div>
        <h1 className='p-7 text-left m-7 font-light text-base'>Here are some more things about me:</h1>

        <ul className={`text-left mx-56 text-sm list-disc list-inside ${styles.facts}`}>
          <li>Favorite animal: orangutan, but I also like all apes/monkeys (gibbon etc) and almost any animal you could think of. They're all interesting.</li>
          <li>Favorite beverages: coffee, beer, kombucha</li>
          <li>Favorite food: idk. But lately I think pizza makes me feel relaxed the most.</li>
          <li>Favorite song: <a href="https://www.youtube.com/watch?v=Ia1xDKiI06I" target="_blank" className='underline'>Zensekai</a> by siraph</li>
          <li>Favorite music genre right now: mallsoft, vaporwave, that kind of stuff</li>
          <li>Favorite news source: The Onion</li>
          <li>Favorite herb: basil</li>
          <li>I greatly enjoy spicy food but also sweet treats. I might even like sweet treats more.</li>
          <li>I never eat savory snacks, except maybe cheese, occasionally</li>
          <li>Sports I've done: football, swimming, air pistol + .22 cal, air rifle</li>
          <li>I suppose I should replace large background images with creative polygons, or something artsy. For the sake of optimization.</li>
          <li>Upgrading next.js ruined my HTML. I have to fix it soon.</li>
          {/* <li>I'm </li> */}
        </ul>
      </div>

    </div>
  )
}

export default about