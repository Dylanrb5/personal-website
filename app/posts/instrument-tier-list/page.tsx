import React from 'react'
import Link from 'next/link'
import styles from './instrument-tier-list.module.css';
import hassan from '../../../public/images/hassaan.jpg'
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';
import TierlistItem from '@/app/components/tierlistItem/TierlistItem';


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
            <h1 className={styles.header}>Instrument tier list</h1>
            <h6 className={styles.date}>2024.08.03</h6>
            <div className={styles.body}>

                <div className='bg-[#1a1a17] tierlist'>
                  <div className='tier'>
                    <div className='bg-[#fe7f7f] tier-letter'>S</div>
                    <TierlistItem name={"drum"} sc={'https://rvb-img.reverb.com/image/upload/s--4WU8jImH--/a_0/f_auto,t_large/v1697460582/vxi4qp0v2csvwnifuxkp.jpg'}/>
                    <TierlistItem name={"piano"} sc={'https://millersmusic.co.uk/cdn/shop/articles/Millers-Blog-Thumbnail-7.png?v=1645456361'}/>
                    <TierlistItem name={"acoustic guitar"} sc={'https://m.media-amazon.com/images/I/714kO41XjDL.jpg'}/>
                    <TierlistItem name={"electric guitar"} sc={'https://r2.gear4music.com/media/23/232378/600/preview.jpg'}/>
                    <TierlistItem name={"voice"} sc={'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/speaking-head.png'}/>
                  </div>
                  <div className='tier'>
                    <div className='bg-[#febf7e] tier-letter'>A</div>
                    <TierlistItem name={"trombone"} sc={'https://www.edwards-instruments.com/wp-content/uploads/2018/06/t302-thumb.jpg'}/>
                    <TierlistItem name={"french horn"} sc={'https://jpmusicalinstruments.com/cdn/shop/products/JP162-INSTRUMENT-SHOT-2.jpg?v=1686737044'}/>
                    {/* <TierlistItem name={""} sc={''}/>
                    <TierlistItem name={""} sc={''}/>
                    <TierlistItem name={""} sc={''}/> */}
                  </div>
                  <div className='tier'>
                    <div className='bg-[#ffdf7e] tier-letter'>B</div>
                    <TierlistItem name={"tumpet"} sc={'https://clipart.com/thumbs.php?f=/1500/batch_30/001500-0030-000022_tnb.png'}/>
                    {/* <img  className='tier-item' src=''/>
                    <img  className='tier-item' src=''/>
                    <img  className='tier-item' src=''/>
                    <img  className='tier-item' src=''/>
                    <img  className='tier-item' src=''/> */}
                  </div>
                  <div className='tier'>
                    <div className='bg-[#bffe7f] tier-letter'>C</div>
                    {/* <img  className='tier-item' src=''/>
                    <img  className='tier-item' src=''/>
                    <img  className='tier-item' src=''/>
                    <img  className='tier-item' src=''/> */}
                  </div>
                  <div className='tier'>
                    <div className='bg-[#7ffefe] tier-letter'>F</div>
                    {/* <img  className='tier-item' src=''/>
                    <img  className='tier-item' src=''/>
                    <img  className='tier-item' src=''/> */}
                  </div>

                </div>
                <p className={styles.header2}>
                    S TIER
                </p>

                <div className='mb-5'>
                  <p className={styles.header3}>
                      Voice
                  </p>
                  <p className={styles.body}>
                      duh
                  </p>
                </div>
                
                <div className='mb-5'>
                  <p className={styles.header3}>
                      Piano
                  </p>
                  <p className={styles.body}>
                      legendary. beautiful sound
                  </p>
                </div>
                
                <div className='mb-5'>
                  <p className={styles.header3}>
                      Drumset
                  </p>
                  <p className={styles.body}>
                      Many things sound dull without a drumset. 
                      Always adds/controls energy and so much more. Maybe the coolest-sounding
                  </p>
                </div>
                
                <div className='mb-5'>
                  <p className={styles.header3}>
                      Acoustic Guitar
                  </p>
                  <p className={styles.body}>
                      Calming sound. Can also be powerful and scary
                  </p>
                </div>
                
                <div className='mb-5'>
                  <p className={styles.header3}>
                      Electric Guitar
                  </p>
                  <p className={styles.body}>
                      Can add so much nice texture to music. 
                      Has too many different sounds though. Similar to synth. I guess synths are also S tier.
                      Just don't play rock and roll/blues on it. I really do NOT like the sound of 
                      old e-guitar rock with bluesy obnoxious guitar solos.
                  </p>
                </div>



                <p className={styles.header2}>
                    A TIER
                </p>
                

                <div className='mb-5'>
                  <p className={styles.header3}>
                      Trombone
                  </p>
                  <p className={styles.body}>
                      I play trombone. Since 6th grade.
                  </p>
                </div>

                <div className='mb-5'>
                  <p className={styles.header3}>
                      French Horn
                  </p>
                  <p className={styles.body}>
                      I thought it was a cool instrument when I was a kid. Sounds cool and looks cool.
                  </p>
                </div>
                
                <div className='mb-5'>
                  <p className={styles.header3}>
                      Low Strings
                  </p>
                  <p className={styles.body}>
                      in general
                  </p>
                </div>
                
                <div className='mb-5'>
                  <p className={styles.header3}>
                      I'll review more instruments later...
                  </p>
                  <p className={styles.body}>

                  </p>
                </div>

                <p className={styles.footer}>
                  <Footer/>
                </p>

            </div>
        </div>
        
    </div>
  )
}

export default page