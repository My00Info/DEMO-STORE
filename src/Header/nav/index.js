'use client';
import styles from './style.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from 'next/image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "/home.jpg" // Added leading slash for public folder
  },
  {
    title: "Shop",
    href: "/shop",
    src: "/shop.png"
  },
  {
    title: "About Us",
    href: "/about",
    src: "/home.png"
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "/lookbook.png"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "/contact.png"
  }
]

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src={links[selectedLink.index].src}
            alt={links[selectedLink.index].title}
            width={500} // Required property
            height={300} // Required property
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}