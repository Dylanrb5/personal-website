import React from 'react'
import Link from 'next/link'
import styles from './2024-music-highlights.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';

const page = () => {
  return (
    <div >
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
            <h1 className={styles.header}>My 2024 Music Highlights</h1>
            <h6 className={styles.date}>2025.02.12</h6>
            <div className={styles.body}>
                {/* <p className='mb-3'>
                    Yeah so I finally made a blog... and on my own website ?? Isn't that cool. Everyone should have one of these. And why pay for a nasty website builder when you can have full control over everything? 
                    And oh man I love having control. Jk. Anyway, I won't use this blog to be pretentious or talk about super-serious things, cause that's honestly boring, and the chances of some lurker reading posts like that is guaranteed to be 0%. 
                    I am unserious most of the time anyway.
                </p> */}

                <p className='mb-8'>
                I'm back after a long time, for no particular reason. I simply remembered that I have this website 
                but also that I haven't pushed any of the changes to github 🤡 
                Anyway, contrary to what the title might imply, I'm just going to mention some songs 
                I really liked and discovered in 2024 but that weren't necessarily released in 2024. 
                I won't reveal my actual favorite song of 2024 for fear of being judged, so instead—ah just kidding, 
                I have strong confidence in my music taste. In fact, I don't know anyone with a better taste in music than me. \hj
                But really though, if you ask me why I like a song, I'd be able to tell you exactly why if you give me like 
                10 or 30 minutes and if I'm willing to talk to you for that long.
                </p>

                <div className={styles.trackHeader}>
                <a href="https://www.youtube.com/watch?v=2ZE9xvmFzyk" target="_blank">
                  <img src="https://m.media-amazon.com/images/I/61Glb1I76hL._UF1000,1000_QL80_.jpg" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      Who Would Leave Their Son out in the Sun?
                    </h2>
                    <h3 className={styles.artistName}>
                      Have A Nice Life
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  I'm going to start with the gloomiest, most hopeless-sounding song I've ever heard:
                  Who Would Leave Their Son out in the Sun?, by the duo Have A Nice Life.
                  I discovered this song during my month-long metalcore phase back in February, 
                  and a whole year later, I haven't found a track nearly as gloomy. I think WWLTSoitS succeeds 
                  at this because of its instrumentation:
                  acoustic guitar was the perfect instrument for the job, and the vocals are perfectly distant, cold, haunting, all of that (thanks to the reverb). Not sure how best to 
                  describe the guitar on this, but I'd say it sounds like a death sentence. 
                  Like you're about to be executed, or something like that. Executed sonically. Or as if it's saying: "it's over." (a phrase I use quite often).

                  This song was not my favorite of the year but it's definitely top 10. You won't find another song like it. If you do, let me know.
                  Edit: I found <a href="https://www.youtube.com/watch?v=zfmlaATBjA0" target="_blank" className='text-[#b80000]'> a somewhat similar song</a> recently (February 2025). 
                  Not quite the same aesthetic, but similar feeling. I love it. And I just now found out that DAN BARRETT (from HANL) is featured on the song. 
                  Quite the coincidence.
                </p>



                <div className={styles.trackHeader}>
                <a href="https://www.youtube.com/watch?v=6ro1aHvhGec" target="_blank">
                  <img src="https://upload.wikimedia.org/wikipedia/en/f/f0/Drukqs_%28Front_Cover%29.png" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      Vordhosbn
                    </h2>
                    <h3 className={styles.artistName}>
                      Aphex Twin
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Yeah so this guy is a genius. I never truly listened to Aphex Twin until I listened to this album in November. Truly perplexing music. Blew my mind.
                  So many tracks on this album (Druqks) are insane, although, ironically, I never liked Avril 14th, which is the most popular by A LOT. 
                  That one blows my mind for how boring and simultaneously popular it is. WHO is listening to this???? Some things just don't make any sense. 
                  QKThr (next up in popularity), on the other hand, is actually interesting and has emotion. But it's definitely not in my top 10 in the album.
                  Next two favorites from this album are probably Ziggomatic 17, Mt Saint Michel + Saint Michaels Mount, and 54 Cymru Beats. 
                  Craziest drum programming you'll ever hear. Next closest thing I've found is Ruby My Dear, but it's not the same, 
                  and I don't know if anyone will ever make anything quite like this. Though I should say that if you don't have 
                  a taste for drums, you probably won't like this.
                </p>



                <div className={styles.trackHeader}>
                <a href="https://www.youtube.com/watch?v=6ro1aHvhGec" target="_blank">
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/f8/bb/c4/f8bbc4ff-e789-3a59-4f18-63c231770f07/ANTCD-A0000001044.jpg/1200x1200bf-60.jpg" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      JUSTadICE
                    </h2>
                    <h3 className={styles.artistName}>
                      Seiko Oomori (大森靖子)
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>
                  Favorite song of the year? Perhaps. I found this one in late December as I was looking through the recommended 
                  tracks Spotify gives you when you scroll to the bottom of a playlist. I don't know if it's the fact that it was 
                  winter break (BEST SEASON) and I was relaxing at home (childhood home) but it just sounded so amazing to me when I heard it. And it still does. 
                  It's like a drug to me. Though maybe it just is a really amazing song. I mean, the vocals are excellent, the chords are excellent,
                  the production is excellent, the band is excellent... The fact that it was made as an opening for an anime (that I had never watched) 
                  doesn't take away from how great this song is. The rap section might be a <em>little</em> corny, but it's still good. And even after a hundred listens, 
                  I would hear new things, like the guitar panned to the right at around 0:31 which sounds so good.
                </p>
                
                <div className={styles.trackHeader}>
                <a href="" target="_blank">
                  <img src="https://www.cdunity.com/wp-content/uploads/2023/03/Donda-Album-Cover.png" className='w-60 h-60'/>
                  </a>
                  <div className={styles.trackTitle}>
                    <h2>
                      I'll do more
                    </h2>
                    <h3 className={styles.artistName}>
                      Later
                    </h3>
                  </div>
                </div>
                <p className={styles.body}>

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