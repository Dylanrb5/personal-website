'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setMenuOpen(false)
      setIsClosing(false)
    }, 300)
  }

  const handleOpen = () => {
    setMenuOpen(true)
  }

  const handleToggle = () => {
    if (menuOpen) {
      handleClose()
    } else {
      handleOpen()
    }
  }

  if (!isMounted) {
    return (
      <button 
        className="hamburger-button"
        onClick={handleToggle}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    )
  }

  return (
    <>
      {(menuOpen || isClosing) && (
        <div 
          className={`mobile-menu-overlay ${isClosing ? 'closing' : ''}`}
          onClick={handleClose}
        >
          <nav className="mobile-menu">
            <ul onClick={(e) => e.stopPropagation()}>
              <li><Link href={"/blog"} onClick={handleClose}>Blog</Link></li>
              <li><Link href={"/projects"} onClick={handleClose}>Projects</Link></li>
              <li><Link href={"/about"} onClick={handleClose}>About</Link></li>
              <li><a href="mailto:dylan1@mit.edu" onClick={handleClose}>Contact</a></li>
            </ul>
          </nav>
        </div>
      )}

      <button 
        className="hamburger-button"
        onClick={handleToggle}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${menuOpen && !isClosing ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${menuOpen && !isClosing ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${menuOpen && !isClosing ? 'open' : ''}`}></span>
      </button>
    </>
  )
}
