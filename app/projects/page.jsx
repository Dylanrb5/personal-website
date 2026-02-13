'use client'

import React from 'react'
import Link from 'next/link'
import styles from './projects.module.css';
import Image from 'next/image';
import background from '../../public/images/tatiana-lapina.jpg'
import HamburgerMenu from '@/app/components/HamburgerMenu'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
})

const projects = () => {
  const PostCard = ({title, desc, image, postName}) => {
    return (
      <Link href={`/projects/${postName}`} className={styles.post}>
      <div className='max-h-max'>
        <div >
          <div>
            <h1 className={styles.header}>{title}</h1>
            {/* <div className={styles.line}>&nbsp;</div> */}
            <p className={styles.body}>{desc}</p>
          </div>
          {/* <Image width={100} height={100} src={image} alt="post image" className={styles.image}/> */}
        </div>
      </div>
      </Link>
    )
  }

  return (
    <div className={`projects-page ${lato.className}`}>
        <HamburgerMenu />
        <Image src={background} alt='background of cubes' className={styles.bg}/>
        <div className="w-screen text absolute top-0 left-0 front-gradient-3"></div>
        
        <nav className="nav-left">
                <Link href={"/"}>Home</Link>
        </nav>

        <nav className="navbar">
              <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li>Projects</li>
                <li><Link href={"/about"}>About</Link></li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>

        </nav>
        
        <div className={styles.pageTitle}>PROJECTS</div>

        <div className={styles.content}>

          {/* <PostCard title={"Learning a 3rd Language??"} desc={"Click to find out what I'm learning..."} image={"https://png.pngtree.com/background/20230531/original/pngtree-money-foreign-language-money-word-translated-to-the-languages-of-the-picture-image_2828217.jpg"} postName={"learning-3rd-language"}/> */}
          <PostCard title={"3D Horror Action-Exploration-RPG"} desc={"A soulslike, basically"} image={"https://www.shutterstock.com/image-photo/scary-ghost-on-dark-background-600nw-2025647777.jpg"} postName={"soulslike"}/>
          <PostCard title={"Learning a 3rd Language??"} desc={"Click to find out what I'm learning..."} image={""} postName={"learning-3rd-language"}/>
          <PostCard title={"Horror Video Game"} desc={"So many things to do..."} image={"https://www.shutterstock.com/image-photo/scary-ghost-on-dark-background-600nw-2025647777.jpg"} postName={"horror-video-game"}/>
          <PostCard title={"Music"} desc={"Some of my music"} image={"https://drumconnexions.com/wp-content/uploads/makingbeats.jpg"} postName={"music"}/>
          <PostCard title={"This website"} desc={"I think it looks pretty good"} image={""} postName={"../"}/>
          {/* <p>And some other stuff</p> */}

        </div>
    </div>
  )
}

export default projects