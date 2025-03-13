import React from 'react'
import Link from 'next/link'
import styles from './learning-3rd-language.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import abstract from '../../../public/images/abstract2-6.png'
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';

const page = () => {
  return (
    <div>
        <Image src={abstract} alt='background of cubes' className={styles.bg}/>
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
            <h1 className={styles.header}>Learning a 3rd Language</h1>
            <h6 className={styles.date}>2024.07.25</h6>
            <div className={styles.body}>
                {/* <p className='mb-3'>
                    Yeah so I finally made a blog... and on my own website ?? Isn't that cool. Everyone should have one of these. And why pay for a nasty website builder when you can have full control over everything? 
                    And oh man I love having control. Jk. Anyway, I won't use this blog to be pretentious or talk about super-serious things, cause that's honestly boring, and the chances of some lurker reading posts like that is guaranteed to be 0%. 
                    I am unserious most of the time anyway.
                </p> */}
                

                <p className='mb-3'>
                Alright, it's Japanese. I know what you might be thinking, but hear me out. I really just wanted
                to learn one of the hardest languages for English speakers to learn, i.e., Mandarin, Korean, Arabic, and of course, Japanese, AKA Nihongo, AKA 日本語.
                It just happens to be that there's plenty of great material (TV Shows & Music) for immersing yourself in the language. 
                Japanese also happens to have pronounciation very similar to Spanish (my true first language). Maybe I don't have a really great practical reason for learning Japanese,
                but I've stuck with it for nearly a year now, (since April 2024), mostly thanks to Anki, the flash card app. Vocabulary is probably the biggest issue when learning new languages, but 
                I've been able to learn 2,000 words in less than a year thanks to this app. And once you're at this point, it's hard to just drop the language for good, so I really do think I could be 
                fluent in a few years.
                </p>

                <p className='mb-8'>
                Tldr, I stuck with it just because I felt like it and because it's difficult.
                

                </p>
                <p className='mb-3 text-5xl'>
                Fun Facts:
                </p>
                <p className='mb-8'>
                    天井 (Tenjō) is "ceiling" in English, which is "techo" in Spanish. Very similar right?
                    Pan (bread) (パン) is literally the same in both Spanish and Japanese. It even sounds the same.
                </p>
                
                <p className='mb-3 text-5xl'>
                I also tried to learn Portuguese
                </p>
                <p className='mb-8'>
                    because I was going on a school trip to Manaus in Brazil (2023) (was it really that long ago? Freshman Spring ..??) and it's super similar to Spanish after all. 
                    Like drunk Spanish maybe. Cursive Spanish.
                    The problem was that I only used Duolingo, which doesn't really teach you much. You learn very very slowly... And now that the trip is in the past, 
                    I don't think I have much of a reason to to hurry up and learn it other than the fact that it would probably take less than a year to become fluent.
                    Yeah, I'll learn it some day.
                </p>

                <Image width={500} height={500} src={"https://us.123rf.com/450wm/wirestock/wirestock2311/wirestock231111795/218864902-a-person-presenting-the-virtual-projection-of-the-flags-of-different-countries.jpg?ver=6"} alt="post image" className={styles.image}/>

                <p className='mb-3 mt-8 text-5xl'>
                What's the point
                </p>
                <p className='mb-8'>
                    in learning foreign languages? I don't know, I'm just pretty nosy. I want to know what people are talking about. 
                    I never actually put much effort in learning new languages because I'm already bilingual, but I wanted to feel the struggle. 
                    And of course, it would be cool wouldn't it? Like a new ability. Like unlocking a new country. Not that I get to travel internationally much.
                </p>


                <p className='mb-3 text-5xl'>
                I'm also learning Mandarin (Chinese)
                </p>
                <p>
                  because a good number of words are pronounced similarly to Japanese and some characters are the same. But also for the same reason as 
                  Japanese—simply because it's difficult—although Mandarin will probably be easier since its grammar is easy peasy in comparison. 
                  Pronounciation is hard to grasp quickly, but I'm starting to get the hang of it. I only know about 100 words so far, but I'm sure one day, within the next 365, I'll 
                  be able to eavesdrop on all the conversations I hear in Mandarin at this school (quite often). Oh, and I guess I could talk. To people. In Mandarin. Hypothetically.
                </p>
                <Image width={300} height={300} src={"https://preview.redd.it/sorry-i-dont-speak-mandarin-v0-o3l11facixba1.jpg?auto=webp&s=ba5b075b7edbfe6fe0cc00572d18024c05c9ea57"} alt="post image" className={styles.image}/>

                <p className='mb-72'>

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