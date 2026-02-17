'use client'

import React from 'react'
import Link from 'next/link'
import styles from './2025-music-highlights.module.css';
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
            <h1 className={styles.header}>My 2025 Music Highlights</h1>
            <h6 className={styles.date}>2026.02.16</h6>
            <div className={styles.body}>

                <p className='mb-8'>
                Hello again. I'm a bit late to this one, but I've got some exceptional music here. Truly. 
                Unless you mostly only listen to popular music. 
                Nothing wrong with that, but you probably wouldn't like this stuff, unless you're really open minded and can appreciate a good melody. 
                I remember casually strolling through the top charts and finding some pretty good music with pretty good mixing. 
                I think it was some Dua Lipa, Chappell Roan, and some northern Mexican band. The rest of it was probably somewhat uninteresting to me. Would I listen again? 
                No, there's a ton of music that I would much rather listen to. 
                But taste is a fascinating thing. I might have the best taste in music, and I might also think that you have the worst taste in music ever. 
                But you might think the complete opposite, and we might both be correct. But neither of us are. Doesn't even matter one bit.
                Anyway, if you assume that I am procrastinating on schoolwork by writing here, you would be correct. Slightly cliche, but that is always the case. 
                <br></br>However, I'm writing about some excellent music here, which makes for an amazing excuse. The most perfect excuse, perchance.
                </p>




                <div className={styles.trackHeader}>
                <a href="https://www.youtube.com/watch?v=Ia1xDKiI06I" target="_blank">
                  <img src="https://i.scdn.co/image/ab67616d0000b2734431077193a6da00e998e9b5" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      Zensekai
                    </h2>
                    <h3 className={styles.artistName}>
                      siraph
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Starting off with my absolute favorite. Translates to "The Previous World". Whatever that means. But it's my favorite song of all time, currently. 
                  Reminds me of a super-chill spring break full of discovering new, tasty food and not worrying about anything at all.
                  But it also has what is probably the most perfect melody to ever exist, in my opinion. Plus, the whole band is "locked in". 
                  Everybody is playing their part perfectly. The vocals have the perfect intonation, perfect formant, perfect timbre, perfect whatever-you-can-think-of. 
                  I don't know what most of the lyrics mean, but I can almost recite them perfectly. It's all about the sound of the words and instruments, not the meaning.
                  The bass is the most interesting bass part I've ever heard. The drums are perfectly in the pocket. 
                  The E-Guitar by Yoshimasa Terui is perfect and brings all the energy, along with the drums.
                  You can pay attention to only a single instrument for the entire song, and it's a transcendental experience no matter what.
                  It's serotonin on command with this song. I listen to it on repeat, but I don't listen to it too often so as to not ruin the immensely pleasurable effect.

                </p>

                <div className={styles.trackHeader}>
                <a href="https://www.youtube.com/watch?v=5sq3I2c6jG8" target="_blank">
                  <img src="https://i1.sndcdn.com/artworks-000002911095-62da3r-t500x500.jpg" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      light prayer
                    </h2>
                    <h3 className={styles.artistName}>
                      School Food Punishment
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Another Japanese track, and, once again, it's about the sounds, not the meaning. Band name meaning? Who knows. It's kind of funny.
                  But it's pure, exciting energy. Perfect for hyping up for some sporting event. 
                  In my case, pistol, but it doesn't go well with crooked, uneven floors. 
                  Maybe I'm just making excuses, but I swear the room (fitted with electronic targets, for competition)
                  next to the one where we always practice (with manual, paper targets) has a floor that is NOT FLAT. I was not even slightly comfortable for even a second.
                  That or I just didn't get enough sleep. But anyway, this song brings sooooo much energy. No matter the situation, 3:22 will bring the hype.
                </p>

                <div className={styles.trackHeader}>
                <a href="https://www.youtube.com/watch?v=2rbHPahdbsc" target="_blank">
                  <img src="https://i.scdn.co/image/ab67616d00001e02a98e67810aa6df434963e53c" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      Stem
                    </h2>
                    <h3 className={styles.artistName}>
                      Sheena Ringo
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Ah, it's just so beautiful. I don't like summer, but it reminds me of a beautiful West Coast summer. Sort of a Lady Gaga sound, although I don't quite remember what she sounds like.
                  Similar raspy voice, I think. But you have to listen to it, at least once. Crying tears, confusing fears, they are no longer. 
                  The entire album is a great listen. One of my favorites.
                  Also, unrelated but touching my usb-c charger with my arm burns it. Probably because of my silver bracelet. 
                  If I keep my arm there, will it burn up? I don't want to find out because it hurts a lot to keep touching it for more than 12 seconds.
                  Feels like a fire ant is biting my arm.
                </p>

                <div className={styles.trackHeader}>
                <a href="https://www.youtube.com/watch?v=Km966YIqITg" target="_blank">
                  <img src="https://www.classicalsource.com/wp-content/uploads/12933_1.jpg" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      Piano Concerto, Op. 38: 2. Moderato
                    </h2>
                    <h3 className={styles.artistName}>
                      Samuel Barber, Elizabeth Joy Roe
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Melody so beautiful I could cry. I'm serious. I feel like 4:21 and everything that comes after (especially 5:25 [my two favorite numbers], and 6:51) tells the story of a love that is so deep, tragic, beautiful, painful, depressing... beyond comprehension...
                  <br></br>
                  It's impossible to describe accurately. 
                  <br></br>But then, of course, it has its moments of what I call "cinematic filler". 
                  This is the chromatic, unemotional BS, which distracts from the pain but doesn't make me feel much of anything. 
                  This is anything after the beautiful moments I mentioned, such as at exactly 5:47 and 7:09 (click on the image to view the youtube video).
                  I wish Sam had continued those gorgeous melodies in a way that is satisfying, but it is certainly hard enough to write those melodies in the first place.
                  Thus, I will forgive him and simply imagine the piece ending just after those most-satisfying spots.
                </p>

                <div className={styles.trackHeader}>
                <a href="https://www.youtube.com/watch?v=LhUWJ6JGUrg" target="_blank">
                  <img src="https://i.scdn.co/image/ab67616d0000b273cf0d212625819f28a06bb8b7" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      And Birds Are Still...
                    </h2>
                    <h3 className={styles.artistName}>
                      Takashi Yoshimatsu
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Once again, something I could cry to. It's just so beautiful, and there's absolutely no filler here.
                  <br></br>Pure emotion. Essentially perfect. Perhaps one of the most beautiful pieces of music that has ever existed.
                </p>


                <div className={styles.trackHeader}>
                <a href="https://www.youtube.com/watch?v=I1NKEXwdF5c" target="_blank">
                  <img src="https://i.scdn.co/image/ab67616d0000b273cf0d212625819f28a06bb8b7" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      Dream Colored Mobile II
                    </h2>
                    <h3 className={styles.artistName}>
                      Takashi Yoshimatsu
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  No clue what the title means, but it's absolutely gorgeous music. 
                  You can only expect the most beautiful music from this Takashi guy.
                  Wow. If this isn't the most beautiful oboe music I've ever heard, I don't know what is... 
                  <br></br>
                  Play me a more beautiful oboe solo and I'll pay you hundreds. But it would be impossible.
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