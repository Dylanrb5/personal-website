'use client'

import React from 'react'
import Link from 'next/link'
import styles from './er-parody.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import background from '../../../public/images/chmyphoto.jpg'
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';
import HamburgerMenu from '@/app/components/HamburgerMenu';
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
})

const page = () => {
  return (
    <>
        <HamburgerMenu />
        <Image src={background} alt='background of cubes' className={styles.bg}/>
        <div className="w-screen text absolute top-0 left-0 front-gradient-2"></div>
        <nav className="nav-left">
                <Link href={"/"}>Home</Link>
        </nav>
        
        <nav className="navbar">
              <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>
        </nav>

        <div className={styles.container}>
            <h1 className={styles.header}>Elden Ring Parody</h1>
            <h6 className={styles.date}>2026.02.18</h6>
            <div className={styles.body}>
                {/* <p className='mb-3'>
                    Yeah so I finally made a blog... and on my own website ?? Isn't that cool. Everyone should have one of these. And why pay for a nasty website builder when you can have full control over everything? 
                    And oh man I love having control. Jk. Anyway, I won't use this blog to be pretentious or talk about super-serious things, cause that's honestly boring, and the chances of some lurker reading posts like that is guaranteed to be 0%. 
                    I am unserious most of the time anyway.
                </p> */}

                <p className='mb-3'>
                  Just had the brilliant idea of adding "Avoid getting a cease and desist" to my game dev to-do list. 
                  No but I'm sure if I change everything just enough, I'll be in the clear. 
                  Besides, I saw a youtube video of a $30 Elden Ring clone that copies the UI almost perfectly, and the game's still up on Steam with 100% positive reviews.
                </p>

                <p className='mb-20'>
                  Right now my parody game only lives in my head, apart from my very refined player movement+action code and other reusable code/miscellaneous stuff.
                  Actually, I've got quite a lot of the story, cutscenes, flow, characters, etc., written down in my notes app already. 
                  More than I have for my own original game. As a matter of fact, I've never done this much creative writing in such a short amount of time before. 
                  It's just so much easier for creativity to flow when the vibe is 100% unserious.
                  I can make the story as absurd as I want (I can't really think of a title that would go well with a story close to ER's, so I'm taking a different route with the plot). Nothing in the world needs to make perfect sense. 
                  Plus, I suspect the comedy/parody aspect will be good for sales, clout, and whatnot. 
                  I wish I had 48 hours in a day so that I could work on this more.
                </p>


                {/* <h1 className={styles.bodyHeader}>
                  header
                </h1> */}

                <div className={styles.footer}>
                  <Footer/>
                </div>

            </div>
        </div>
        
    </>
  )
}

export default page