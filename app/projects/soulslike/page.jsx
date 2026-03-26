'use client'

import React from 'react'
import Link from 'next/link'
import styles from './soulslike.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import background from '../../../public/images/chmyphoto.jpg'
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
            <h1 className={styles.header}>3D Horror Action-Exploration-RPG</h1>
            <h6 className={styles.date}>2026.00.00</h6>
            <div className={styles.body}>
                {/* <p className='mb-3'>
                    Yeah so I finally made a blog... and on my own website ?? Isn't that cool. Everyone should have one of these. And why pay for a nasty website builder when you can have full control over everything? 
                    And oh man I love having control. Jk. Anyway, I won't use this blog to be pretentious or talk about super-serious things, cause that's honestly boring, and the chances of some lurker reading posts like that is guaranteed to be 0%. 
                    I am unserious most of the time anyway.
                </p> */}

                <p className='mb-3'>
                Ok so I sort of abandoned the horror game attempts, but not entirely. The thing that was holding me back was the question, What is the player even supposed to do? 
                The gameplay in horror games is often just chores plus exploration, so most of the work goes into writing the story and making the environment spooky.
                Unfortunately, I'm not a great writer. Fortunately, I discovered the world of Dark Souls and Elden ring in mid-2025. 
                After finishing the best game in the DS trilogy (Dark Souls 3), I was like, "Oh man, this is great. This is the kind of game I want to make. (But with a horror vibe)."
                I realized that no matter how utterly obscure and cryptic the story/plot is, people will still love these games. You can even ignore the story entirely, and it's still a great experience.
                You actually have gameplay! (I'm not hating on narrative/horror games (I love walking simulators)). 
                </p>

                <p className='mb-3'>
                Now, I'm not saying I'll neglect the story. 
                You can't even get started working on such a project without some general idea of a story, 
                (where are we? who are the enemies? why are you even fighting them?) 
                but luckily I've already come up with something that doesn't seem too bad to me. It's a secret for now, though.
                </p>

                <h1 className={styles.bodyHeader}>
                  Something I learned
                </h1>
                <p className='mb-3'>
                is that this is actually a big animation project. You might think each enemy only has its attack animations, 
                which are already hard enough to animate in a way that is fair, readable, and satisfying to dodge, 
                but no, you have to make 
                <span className='text-red-900'> idle animations, walking animations, running animations, 90-degree left + right turning animations, 
                180 degree rotations, flinch animations for multiple directions, stance break animations, knocked-to-the-ground animations, death animations, 
                and maybe even strafing, blocking, or dodging animations, depending on the enemy type. </span>
                And they're all important, because the way these games feel is completely determined by the animations. 
                But fortunately, I have faith in my ability to animate, because, most importantly, it's totally different from 2D animation, which I'm not very good at.
                3D animation is fully keyframe-based, and I feel like I have somewhat good intuition for natural-ish-looking movement. 
                The good thing is that the bar is a bit lower for a solo dev—I'm sure players will be able to 
                forgive slightly awkward animations if they know that it's one person doing everything.
                Anyway, speaking of game feel, there are lots of small things that might be hard to notice but which have a huge impact, such as: 
                <span className='text-red-900'> action queuing </span>, i.e., you can press an action button (roll, attack, jump) in the middle of your current action, 
                and it will be performed once your current action is complete; <span className='text-red-900'> a small window </span> during an attack in which you can freely rotate before the weapon is at the end of its swing;
                <span className='text-red-900'> a weapon trail </span> texture that follows behind every swing; there's probably more stuff but I can't remember it all right now.
                </p>

                <h1 className={styles.bodyHeader}>
                  World/Level Design
                </h1>
                <p className='mb-3'>
                Maybe the second or most important thing in these games is the levels/world/environment. 
                Lies of P looks great, but the whole game is almost a straight line from point A to point B, which you might not even notice until after chapter 8 or so, 
                when the game no longer looks fresh or pretty and the illusion of good level design has evaporated. 
                (Man, I have so much to complain about with that game. I should write a post).
                Dark Souls 3 (which some people label as "linear" for some reason) feels like an open-world game in comparison, thanks to all its (significant) branching paths and optional areas.
                Not that a true open world is better than this branching-path style of world 
                layout—there's not as much room for filler/connective tissue/empty land in DS3 as there is in Elden Ring, so it may often feel more action-packed. (But the views in Elden Ring can be insane).
                My point is that I absolutely must include branching paths: this will make the player go, 
                "Wwooww, I totally forgot about that other path I haven't taken yet, I can't wait to explore it" (something that never happened to me in Lies of P). 
                </p>
                <p className='mb-3'>
                But having branching paths is not enough—you need a good-looking environment, even before decorations. 
                I'm talking about, like, the structure and layout of everything. It needs to be awe-inspiring geometry, even in the blockout stage (Although colors are super important too).
                I've been trying my hardest to find places—either in games or random images on the internet—that are what I like to call "special". 
                It's something really abstract and hard to define, but I know it when I see it. It's kind of rare to find, though.
                I suppose it's like a location that you would stop to look at and admire for more than a few seconds, maybe even minutes.
                </p>

                <h1 className={styles.bodyHeader}>
                  Hyperphantasia Training
                </h1>
                <p className='mb-3'>
                  Right, so, how do I even make this very-cool 3D world? I don't have good drawing skills, so forget about concept art. 
                  Or, well, it might be possible/helpful to do concept art for enemies, armor, characters, etc., but definitely not for entire landscapes. 
                  That's where phantasia, aka the mind's eye, comes in: I can simply "see" and map out the entire world in my mind. No map sketches, none of that.
                  Hyperphantasia, then, is like phantasia, which most people have, but at a much higher level of detail and clarity and whatever else. 
                  It's impossible for me to tell how close I am to being a "Hyperphant," but I've been able to imagine some pretty neat environments so far (not in the February video).
                  Creating these environments IRL in Blender is a bit more time-consuming, but the nice thing is that you have a "blueprint" you can just follow.
                </p>

                <h1 className={styles.bodyHeader}>
                  Graphics
                </h1>
                <p className='mb-3'>
                  As you can see from the video, I'm aiming for terrible, low-res, low-poly, ps1-ish graphics. 
                  It's simply impossible for me to make the game high-res. I would never finish it.
                  Besides, it's kind of like pixel art in the way that it lets your imagination do some of the work, whereas hyper-realistic games leave zero room for it.
                </p>

                <h1 className={styles.bodyHeader}>
                  Music/Soundtrack
                </h1>
                <p className='mb-3'>
                  I'm not worried about this. I've got a lot of great chord progressions I want to use. 
                  Also, Rach Piano Concerto 2 is in the public domain, so that's something.
                </p>


                <h1 className={styles.bodyHeader}>
                  How long will it take to make this game?
                </h1>
                <p className='mb-3'>
                  There's no way for me to really know, but this time feels different from all the other times when I attempted to create and finish a game.
                  Everything is much easier when you finally have a clear sense of direction, which I mostly have now. 
                  I think I never mentioned it, but I'm trying to make something like Dark Souls III and Elden Ring, but with a darker, more depressing PNW vibe.
                </p>


                <h1 className={styles.bodyHeader}>
                  Videos: (will post more over time)
                </h1>
                {/* <iframe className="mx-auto my-10" width="560" height="315" src="https://www.youtube.com/embed/sckCAmnpxQQ?si=raSv241eEKqL09tC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
                <iframe className="mx-auto my-10" width="560" height="315" src="https://www.youtube.com/embed/Jt8ljbzosAE?si=UQHzmvTl6A_hF0VS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className='mb-3'>
                  Might not look like much, but I think the player movement is pretty good, better than a number of indie soulslikes' movement, thanks to some subtle changes I made to the Unity 3rd-person controller.
                  Plus there's action queuing.
                  I tried to make the animation transitions as smooth as possible but it still needs some work. The roll is obviously an unacceptable distance, so I need to fix that.
                  Everything in the video was made and animated by me. Well, except the player's jumping, walking and running animations.
                </p>


                <div className={styles.footer}>
                  <Footer/>
                </div>

            </div>
        </div>
        
    </>
  )
}

export default page