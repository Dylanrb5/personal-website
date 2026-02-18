'use client'

import React from 'react'
import Link from 'next/link'
import styles from './the-lobster.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';
import HamburgerMenu from '@/app/components/HamburgerMenu';

const page = () => {
  return (
    <div >
        <HamburgerMenu />
        <Image src={hassan} alt='background of cubes' className={styles.bg}/>
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
            <h1 className={styles.header}>The Lobster film review</h1>
            <h6 className={styles.date}>2026.02.18</h6>
            <div className={styles.body}>

                <p className='mb-3'>
                I'm not really one to do film reviews, but I should probably start doing these. 
                This movie was full of absurdism, and I love absurdism. 8.5/10.
                </p>

                <p className={styles.footer}>
                  <Footer/>
                </p>

            </div>
        </div>
        
    </div>
  )
}

export default page