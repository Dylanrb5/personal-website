import React from 'react'
import Link from 'next/link'
import styles from './first-post.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';

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
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>
        </nav>

        <div className={styles.container}>
            <h1 className={styles.header}>First post</h1>
            <h6 className={styles.date}>2024.07.25</h6>
            <div className={styles.body}>
                {/* <p className='mb-3'>
                    Yeah so I finally made a blog... and on my own website ?? Isn't that cool. Everyone should have one of these. And why pay for a nasty website builder when you can have full control over everything? 
                    And oh man I love having control. Jk. Anyway, I won't use this blog to be pretentious or talk about super-serious things, cause that's honestly boring, and the chances of some lurker reading posts like that is guaranteed to be 0%. 
                    I am unserious most of the time anyway.
                </p> */}

                <p className='mb-3'>
                Yeah so I finally made a blog... and on my own website ?? Isn't that cool. Everyone should have one of these. 
                And why pay for a website builder every month when you can have full control over everything, for free? 
                Yeah I know those can be a good solution for a lot of people, but it’s more fun this way. 
                Anyway, I won't use this blog to be pretentious or talk about super-serious things, cause that's not really fun, 
                and the chances of some lurker reading posts like that is probably 0%. Only gonna make posts of cool, 
                fun things, or other stuff I like. We’ll see. 
                </p>
                <p className='mb-3'>
                Well, since you're here, I hope you like the way I designed my website. I'm not a graphic designer, 
                but I don't really know at what point someone would call themselves a graphic designer. I just do whatever 
                feels right, or whatever pops up in my head. Graphic designer or not, I do think most people would be able 
                to tell when something looks ugly, and you can't possibly call this ugly, can you? Or maybe you will, 
                but I don’t care. Maybe it's a little edgy, but I've always loved dark themes, lack of sun (I hate the sun), 
                and cold temperatures. No better season than winter. But I mean, it's not like hot sunny weather will kill me. 
                If I have to move to a hot place for work, I'll deal with it, ahaha.
                </p>

                <p>
                  I started building this website around the time when I began working on web app development for my school's 
                  solar car team (<a href='https://www.mitsolar.com/' target='_blank' className='link-style'>MIT SEVT</a>), 
                  tasked with creating the brand new infotainment system's interface and the race strategy planner. It wasn't a 
                  very rewarding experience, but oh well. At least I learned plenty about web development (because I had to figure everything out by myself). 
                  I guess it was somewhat rewarding after all?
                </p>
                

                <p className='mb-72'>
                  Anyway, I guess that’s it for the first post. See you in the next one.
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