import Link from 'next/link'
import styles from './soulslikenew.module.css';
import background from '../../../public/images/lh01.jpg'
import Image from 'next/image';
import HamburgerMenu from '@/app/components/HamburgerMenu';

const page = () => {
  return (
    <>
        <HamburgerMenu />
        <Image src={background} alt="" sizes="100vw" preload className={styles.bg}/>
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

                <h1 className={styles.bodyHeader}>
                  Videos
                </h1>
                <iframe loading="lazy" className={`${styles.video} mx-auto my-10`} src="https://www.youtube.com/embed/TEbXV-KlGZg?si=GMn9xvyZ9hhZC3Re" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className='mb-10'>
                    I needed poolrooms, so I added a water shader + caustics. Ripples only affect normals, but it looks kinda weird, so I plan to make it actually displace the vertices. 
                    <br/>
                    Also started working on sound design. Dynamic Reverb and stuff. I know some of the current sounds suck, but I'll find good ones once I reactivate my Splice subscription.
                    <br/>
                    Song: Allusive by Matt Christensen
                </p>
                <iframe loading="lazy" className={`${styles.video} mx-auto my-10`} src="https://www.youtube.com/embed/9q3ccf7xgQI?si=KqRvn55RVJFMId4a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className='mb-3'>
                    Made quite a bit of progress I think. And yes I made everything in the video except the music. Still a lot more to do.
                </p>

            </div>
        </div>
        
    </>
  )
}

export default page
