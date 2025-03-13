import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <div className='about-page'>
      <div className="w-screen text absolute top-0 left-0 front-gradient-2"></div>
      <nav className="navbar">
              <ul>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
                <li>About</li>
                <li><a href="mailto:dylan1@mit.edu">Contact</a></li>
              </ul>

      </nav>

      <nav className="nav-left">
                <Link href={"/"}>Home</Link>
      </nav>

      <div className='text-center relative top-36 wide-letters font-extralight text-2xl'>
        <h1 className='pb-5 text-4xl'>About Me</h1>
        <div className='pgph-image'>

            <img src='../images/me.jpg' className='pfp' alt='a photo of me'/>
            <div className='text-left'>
              <p>Hi, I'm Dylan Rodriguez Barrera, a junior at MIT, AKA Massachusetts Institute of Technology. 
              My major is "Course 6–4: Artificial Intelligence and Decision Making." I recently 
              (October 2023) realized that it would be pretty cool to have my own website. 
              Just for documenting stuff, writing thoughts down, etc. I made one years ago, but I've 
              changed quite a bit since then. I wouldn't call myself a 
              graphic designer, and I never have been, but I try to make things not so ugly.
              I don't want to take the aesthetic of this website too seriously, though. Some stock images can be pretty funny. 
              There can be humor in anything, and everything. Also, the photo of me here is very old. It's of me near the the start of my 
              Sophomore year at this school, so I don't look exactly the same as I do now, I think.
              {/* I say "brand new" because
              our new status as an MOV-class team requires us to have an infotainment system, and that's where I come in. Oh, also, 
              I wanted to mention that I'm aware there's an awkward screen size where this paragraph will have a huge blank area—it might be fixed with
              a "float" property or something. I'm not sure, but I'll fix it soon enough. Might show if you're on an iPad or if you use skinny windows. */}
              </p>
              <p className='text-left'></p>
            </div>
        </div>
        <h1 className='p-7 text-left m-7 font-light'>Here are some more things about me:</h1>
        <p className='text-left mx-5'>So as you can see, this website isn't finished. You can look at <a href='https://github.com/Dylanrb5/personal-website' target='_blank' className='link-style'>the repo</a> to 
        see when the most recent changes were. My free time is pretty limited, and I like to do a lot of things, so, you know. It is what it is.</p>
      </div>

    </div>
  )
}

export default about