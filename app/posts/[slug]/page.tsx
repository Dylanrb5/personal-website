import React from 'react'
import Link from 'next/link'
import styles from './singlePage.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import Image from 'next/image';

const page = () => {
  return (
    <div >
        <Image src={hassan} alt='background of cubes' className={styles.bg}/>
        <div className="w-screen text absolute top-0 left-0 front-gradient-2"></div>
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

        <div className={styles.container}>
            <h1 className={styles.header}>Fruit tier list</h1>
            <h6 className={styles.date}>2024.07.24</h6>
            <p className={styles.body}>
                You already know the best fruit is ... well I don't even know myself what my favorite fruit is, but mango is up there. 
                Sour mango, to be precise. It's not too good when it's too mature and soft and fibrous and not sour at all.
            </p>
        </div>
    </div>
  )
}

export default page