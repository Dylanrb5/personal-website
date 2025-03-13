import React from 'react'
import Link from 'next/link'
import styles from './horror-video-game.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import background from '../../../public/images/chmyphoto.jpg'
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';

const page = () => {
  return (
    <div>
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
            <h1 className={styles.header}>I keep trying to make a video game</h1>
            <h6 className={styles.date}>0000.00.00</h6>
            <div className={styles.body}>
                {/* <p className='mb-3'>
                    Yeah so I finally made a blog... and on my own website ?? Isn't that cool. Everyone should have one of these. And why pay for a nasty website builder when you can have full control over everything? 
                    And oh man I love having control. Jk. Anyway, I won't use this blog to be pretentious or talk about super-serious things, cause that's honestly boring, and the chances of some lurker reading posts like that is guaranteed to be 0%. 
                    I am unserious most of the time anyway.
                </p> */}

                <p className='mb-3'>
                I wanted to make games ever since I was like 12 or something, but I always get stuck in the prototyping phase. 
                Part of it is that I have a bunch of other hobbies that I really like, especially music and pistol precision
                shooting. And of course I have to spend a few hours in the gym every week. Ok, basically, it sometimes feels like 
                I only have time for one thing (besides pistol and gym) in any given week, although I probably just need to lock in.
                Coding and creating necessary assets (art, 3D models & environments, animations) can be a headache, but it's really no problem 
                if I've figured out what I need to make. But that's the problem. What characters do I make? What story? I wish to one day come 
                up with an excellent story that I'd be happy with, but I have a feeling it won't happen for a while. Maybe I need to spend some 
                days practicing creative writing. Ohhh and character design... Should I just make whatever pops up into my head and go with it?
                Is it right to get inspiration from generative AI? I guess we'll see within the next 5 years. It'll have to take some direction 
                eventually, and preferably sooner than later.

                </p>

                <iframe className="mx-auto my-10" width="560" height="315" src="https://www.youtube.com/embed/sckCAmnpxQQ?si=raSv241eEKqL09tC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                <p className='mb-8'>
                Will make/add more videos soon (March 2025)

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