'use client'

import React from 'react'
import Link from 'next/link'
import styles from './kubrick-ranked.module.css';
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
        <nav className="nav-left text-[#b80000]">
                <Link href={"/"}>Home</Link>
        </nav>
        
        <nav className="navbar text-[#b80000]">
              <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>
        </nav>

        <div className={styles.container}>
            <h1 className={styles.header}>Kubrick Ranked</h1>
            <h6 className={styles.date}>2025.02.17</h6>
            <div className={styles.body}>
                <p className='mb-8'>
                I used to think it was Kyoo-brick. Everything here is A-tier at least. Everything almost tied for the same spot.
                </p>

                <div className={styles.trackHeader}>
                  <img src="https://fourstarfilmfan.com/wp-content/uploads/2015/07/dr-_strangelove.png" className='w-60 h-60'/>
                  <div className={styles.trackTitle}>
                    <h2>
                      #6
                    </h2>
                    <h3 className={styles.artistName}>
                      Dr. Strangelove
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Haven't watched more than 18 minutes so far but I know it's good. The opening theme (Try A Little Tenderness) is stuck in my head right now. 
                  It will probably go up in this list once I finish watching. Or maybe not, because they're all too close for me to rank.
                </p>



                <div className={styles.trackHeader}>
                  <img src="https://londoncelticpunks.wordpress.com/wp-content/uploads/2024/08/barry-lydon.jpg?w=1024" className='w-60 h-60'/>
                  <div className={styles.trackTitle}>
                    <h2>
                      #5
                    </h2>
                    <h3 className={styles.artistName}>
                      Barry Lyndon
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Great story, great music, great colors, beautiful visuals, as usual. Story didn't quite hit me as much, though. 
                  Never felt too invested, even though it was entertaining.
                </p>



                <div className={styles.trackHeader}>
                  <img src="https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog3193288/EyesWideShut.jpg" className='w-60 h-60'/>
                  <div className={styles.trackTitle}>
                    <h2>
                      #4
                    </h2>
                    <h3 className={styles.artistName}>
                      Eyes Wide Shut
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Maybe his best use of color ever. Beautiful blue light. 
                  Plus every other color of light. Just utterly beautiful. 
                  Not sure if it was under his command or that of his director of photography Larry Smith, but it's excellent regardless. 
                  Creepy, unsettling vibe. I enjoyed every second of it. 
                  Did Kubrick die of natural causes? Lol, who knows. The timing is too strange, but it's pointless to make any theories.
                </p>

                <div className={styles.trackHeader}>
                  <img src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2018/07/IMG_6077.jpg" className='w-60 h-60'/>
                  <div className={styles.trackTitle}>
                    <h2>
                      #3
                    </h2>
                    <h3 className={styles.artistName}>
                      2001: A Space Odyssey
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  My first Kubrick movie. I love the directing. It was a great cosmic horror film. Wasn't expecting it.
                </p>


                <div className={styles.trackHeader}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/75/A-clockwork-orange.jpg" className='w-60 h-60'/>
                  <div className={styles.trackTitle}>
                    <h2>
                      #2
                    </h2>
                    <h3 className={styles.artistName}>
                      A Clockwork Orange
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  A rather disturbing movie, but the vibe, colors, music, acting... everything is perfect. Facial expressions are everything in Kubrick movies.
                </p>




                <div className={styles.trackHeader}>
                  <img src="https://admin.itsnicethat.com/images/BlQzbIsVQj9egHHTQp1x9PaB-_k=/52925/format-webp%7Cwidth-1440/556de6817e74a92a52e45c88.jpg" className='w-60 h-60'/>
                  <div className={styles.trackTitle}>
                    <h2>
                      #1
                    </h2>
                    <h3 className={styles.artistName}>
                      The Shining
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Strangely cozy hotel vibe, plus it was partially filmed in Oregon, my home state. Perfect acting from everybody involved: Jack Nicholson, Shelley Duvall, Scatman Crothers, etc., etc., ...
                </p>


                <div className={styles.footer}>
                  <Footer/>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default page