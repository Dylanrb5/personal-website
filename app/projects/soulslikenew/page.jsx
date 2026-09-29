'use client'

import React from 'react'
import Link from 'next/link'
import styles from './soulslikenew.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import background from '../../../public/images/lh01.jpg'
import lh00 from '../../../public/images/lh00.jpg'
import lh02 from '../../../public/images/lh02.jpg'
import lh03 from '../../../public/images/lh03.jpg'
import lh04 from '../../../public/images/lh04.jpg'
import lh05 from '../../../public/images/lh05.jpg'
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
        <div className="w-screen text absolute top-0 left-0 front-gradient-5"></div>
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
            <h1 className={styles.header}>Soulslike</h1>
            {/* <div className={styles.dateLabel}>Last Updated:</div> */}
            {/* <h6 className={styles.date}>2026.09.28</h6> */}
            <div className={styles.body}>
                {/* <p className='mb-3'>
                    Yeah so I finally made a blog... and on my own website ?? Isn't that cool. Everyone should have one of these. And why pay for a nasty website builder when you can have full control over everything? 
                    And oh man I love having control. Jk. Anyway, I won't use this blog to be pretentious or talk about super-serious things, cause that's honestly boring, and the chances of some lurker reading posts like that is guaranteed to be 0%. 
                    I am unserious most of the time anyway.
                </p> */}

                <p className='mb-3'>

                </p>
                <p className='mb-3'>

                </p>

                <h1 className={styles.bodyHeader}>

                </h1>

                <h1 className={styles.bodyHeader}>
                  Video
                </h1>
                <iframe className={`${styles.video} mx-auto my-10`} src="https://www.youtube.com/embed/9q3ccf7xgQI?si=KqRvn55RVJFMId4a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className='mb-3'>
                    Made quite a bit of progress I think. And yes I made everything in the video except the music. Still a lot more to do.
                </p>

                <h1 className={styles.bodyHeader}>
                
                </h1>
                <div className={styles.imageGallery}>
                  {/* <Image width={500} src={background} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh00} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh02} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh03} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh04} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh05} alt="post image" className={styles.image}/> */}
                </div>

                <p className='mb-20'>
                  
                </p>


                {/* <h1 className={styles.bodyHeader}>
                  header
                </h1> */}

                {/* <div className={styles.footer}>
                  <Footer/>
                </div> */}

            </div>
        </div>
        
    </>
  )
}

export default page
