"use client"

import { useEffect, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { navlinks } from "../constants"
import Link from "next/link"

export const MobileNav = () => {
    const [openNav, setOpenNav] = useState(false)

    const topVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 45,
            backgroundColor: "white"
        }
    }
    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    }
    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: "white"
        }
    }

    const listVariants = {
        closed: {
            y: "100vh"
        },
        opened: {
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: .2
            }
        }
    }


    return (
        <>
            <div className="md:hidden">
                <button
                    onClick={() => setOpenNav(!openNav)}
                    className='w-10 h-8 flex flex-col justify-between relative z-30'>
                    <motion.div variants={topVariants} animate={openNav ? "opened" : "closed"} className="w-10 h-1 bg-blue rounded origin-left"></motion.div>
                    <motion.div variants={centerVariants} animate={openNav ? "opened" : "closed"} className="w-10 h-1 bg-blue rounded"></motion.div>
                    <motion.div variants={bottomVariants} animate={openNav ? "opened" : "closed"} className="w-10 h-1 bg-blue rounded origin-left"></motion.div>
                </button>
                {
                    openNav &&
                    <motion.div 
                        variants={listVariants} 
                        initial={"closed"} 
                        animate={"opened"} 
                        className="absolute top-0 left-0 bg-blue text-white flex 
                            flex-col items-center justify-center gap-16 text-3xl h-screen w-full"
                    >
                        {
                            navlinks.map(link => (
                                <div className="" key={link.title}>
                                    <Link href={link.url}>
                                        {link.title}
                                    </Link>
                                </div>
                            ))
                        }
                    </motion.div>
                }
            </div>
        </>
    )
}
