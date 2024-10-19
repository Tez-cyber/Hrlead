"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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
                <div>
                    <button
                        onClick={() => setOpenNav(!openNav)}
                        className={openNav ? "fixed flex h-8 flex-col gap-2 z-[70] right-10" : "flex h-8 flex-col gap-2 z-[70]"}>
                        <motion.div variants={topVariants} animate={openNav ? "opened" : "closed"} className="w-9 h-1 bg-blue rounded origin-left"></motion.div>
                        <motion.div variants={centerVariants} animate={openNav ? "opened" : "closed"} className="w-9 h-1 bg-blue rounded"></motion.div>
                        <motion.div variants={bottomVariants} animate={openNav ? "opened" : "closed"} className="w-9 h-1 bg-blue rounded origin-left"></motion.div>
                    </button>
                </div>
                {
                    openNav &&
                    <motion.div
                        variants={listVariants}
                        initial={"closed"}
                        animate={"opened"}
                        className="fixed z-30 top-0 left-0 bg-blue text-white flex 
                            flex-col items-center justify-center gap-16 text-3xl h-full w-full"
                    >
                        {
                            navlinks.map(link => (
                                <div className="" key={link.title}>
                                    <Link href={link.url} onClick={() => setOpenNav(!openNav)}>
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
