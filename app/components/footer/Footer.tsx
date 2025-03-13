import React from 'react'

const Footer = () => {
  return (
    <div>
        <ul className="footer_">
                  <li>
                    <a className="" target="_blank" href="https://www.instagram.com/dylanrb.camera.roll">
                      <img src="../icons/ig-logo-white.png" className="icon-link-sm"/>
                    </a>
                  </li>
                  <li className='mx-5'>
                    <a className="" target="_blank" href="https://www.github.com/dylanrb5">
                      <img src="../icons/github-icon-white.png" className="icon-link-sm"/>
                    </a>
                  </li>
                  <li>
                    <a className="" target="_blank" href="https://www.linkedin.com/in/dylan-rb-0/">
                      <img src="../icons/linkedin-white.png" className="icon-link-sm"/>
                    </a>
                  </li>
                  {/* <li className="font-extralight contact-link">
                    <a href="mailto:dylan1@mit.edu">Text</a>
                  </li> */}
                </ul>
    </div>
  )
}

export default Footer