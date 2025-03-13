import React from 'react';
import Link from 'next/link';
import styles from './blog.module.css';
import Image from 'next/image';
import abstract from '../../public/images/abstract2-6.png'
import bilal from '../../public/images/bilal.jpg'
import milan from '../../public/images/milad.jpg'

const blog = () => {
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };

  const PostCard = ({title, desc, image, postName}) => {
    return (
      <Link href={`/posts/${postName}`}>
      <div className='max-h-max'>
        <div className={styles.post}>
          <div>
            <h1 className={styles.header}>{title}</h1>
            {/* <div className={styles.line}>&nbsp;</div> */}
            <p className={styles.body}>{desc}</p>
          </div>
          {/* <Image src={image} alt="post image" className={styles.image}/> */}
        </div>
      </div>
      </Link>
    )
  }
  
  const TierList = () => {
    return (
      <div className='max-h-max'>
        <div className={styles.post}>
          
        </div>
      </div>
    )
  }

  return (
    <div className='blog-page'>
        <div className="w-screen absolute top-0 left-0 front-gradient"></div>

        
        <nav className="navbar">
              <ul>
                <li>Blog</li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
                {/* <li><Link href={"/login"}>Log in</Link></li> */}
              </ul>
        </nav>
        <nav className="nav-left">
                <Link href={"/"}>Home</Link>
        </nav>
        {/* <p className='text-center relative top-48 wide-letters font-extralight text-2xl font-Lateef'>Nothing here yet, sorry.</p> */}
        {/* <div className={styles.container}> */}
          
        <div className={styles.pageTitle}>BLOG</div>

        <div className={styles.content}>

          <PostCard title={"My 2024 Music Highlights"} desc={"No I don't mean music that came out in 2024"} image={milan} postName={"2024-music-highlights"}/>
          <PostCard title={"INSTRUMENT TIER LIST"} desc={"What I think are the best"} image={abstract} postName={"instrument-tier-list"}/>
          <PostCard title={"FIRST POST"} desc={"This is the first post of my blog. Maybe these cards are too big, but I would need something on the right..."} image={bilal} postName={"first-post"}/>

        </div>

        {/* </div> */}
    </div>
  )
}

export default blog