'use client'

import React from 'react'
import Link from 'next/link'
import styles from './backroom.module.css';
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
            <h1 className={styles.header}>Two Backrooms Games</h1>
            <div className={styles.dateLabel}>Last Updated:</div>
            <h6 className={styles.date}>2026.06.30</h6>
            <div className={styles.body}>
                {/* <p className='mb-3'>
                    Yeah so I finally made a blog... and on my own website ?? Isn't that cool. Everyone should have one of these. And why pay for a nasty website builder when you can have full control over everything? 
                    And oh man I love having control. Jk. Anyway, I won't use this blog to be pretentious or talk about super-serious things, cause that's honestly boring, and the chances of some lurker reading posts like that is guaranteed to be 0%. 
                    I am unserious most of the time anyway.
                </p> */}

                <p className='mb-3'>
                  I was into the backrooms/liminal stuff before the backrooms movie trailer even came out btw. But the hype might be helpful for sales.
                  Anyway, I'm not exactly talking about making something like one of the more popular games like 
                  <em>Escape The Backrooms</em> and <em>Backrooms: Escape Together</em> since 
                  I think those have very boring and annoying gameplay. I want to make something like <em>POOLS</em>, <em>Dreamcore</em>, and <em>The Complex: Expedition</em>. 
                  They're the best in the genre and they don't even have gameplay. 
                  It's all about creating atmosphere and liminal spaces that are ACTUALLY visually interesting.
                  You literally just walk around and explore these cursed, eerie spaces you've been trapped in,
                  which is honestly so much more fitting for liminal space games. 
                  All the annoying "gameplay" (goofy-looking monsters chasing you + lame tasks) makes the experience feel cheaper. 
                  I don't really understand how anyone finds those games fun. 
                  I think they could be good games in theory, but they're all just executed so cheaply/poorly, and thousands of people just eat them up. I don't get it.
                  They sell very well unfortunately, so I think I will make two games: an atmospheric walking simulator with light platforming and puzzles,
                  and a more traditional horror game with monsters, which are called "entities" in these games. Except I'll try to make something of actual good quality. 
                  Can I do it by myself? I think yes, absolutely. It would just take a lot of time. 
                  Especially with brainstorming. 
                  I think a lot of games end up as low-quality trash because there wasn't enough time put into the idea-generation phase. 
                  
                </p>
                <p className='mb-3'>
                  Personally, I imagine every room in my mind and then I model it in Blender. And then I might build more on top of it as it starts to take shape.
                  The most complicated part is getting the lighting right, but I mess around with it until I like the vibe.
                  I find that listening to certain kinds of music helps me visualize certain kinds of vibes. Might share the playlist later.
                </p>
                <h1 className={styles.bodyHeader}>
                  Tools I'm using
                </h1>
                <p className='mb-3'>
                  Well, you know, just the usual. Blender and Unity. 
                  Not using Unreal because I do have mobile release in mind, and Lumen (basically ray tracing) is NOT going to work on mobile.
                  Also, I'm using FMOD and Steam Audio. 
                  I was actually going to use Wwise instead of FMOD, but I literally only chose the latter because I didn't have enough storage space for Wwise.
                  But I think FMOD is actually enough for very high quality sound work. 
                  Speaking of sound design, I think it might be one of the things I can do much better at than ALL of the other games I mentioned. 
                  It's a very neglected but extremely important part of these games. Kind of hard to believe how nobody has done anything really exceptional in that regard.
                </p>
                <h1 className={styles.bodyHeader}>
                  Some WIP screenshots from Blender
                </h1>
                <div className={styles.imageGallery}>
                  <Image width={500} src={background} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh00} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh02} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh03} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh04} alt="post image" className={styles.image}/>
                  <Image width={500} height={300} src={lh05} alt="post image" className={styles.image}/>
                </div>

                <p className='mb-20'>
                  Oh right, I totally forgot to mention: I'm trying to make completely original spaces. 
                  Liminal spaces nobody has seen before. No AI "concept art" used anywhere. 
                  Purely original spaces that I created in my mind. 
                  Though I still do want to make more traditional "Backrooms" type rooms. 
                  You know, yellow walls, carpet, etc. Lots of untapped potential with liminal spaces, though. People keep making the same stuff.
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