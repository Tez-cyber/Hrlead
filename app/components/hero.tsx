"use client"
import { IoChevronForwardCircle, IoMailOpenOutline, IoStar } from "react-icons/io5"
import { Container } from "./container"
import { IconContext } from "react-icons"
import classNames from "classnames"
import { animate, motion } from "framer-motion"
import { MdOpacity } from "react-icons/md"

let easing = [0.6, -0.05, 0.01, 0.99]


const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: {
            duration: .6,
            ease: easing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5,
            delay: .5,
            ease: easing
        }
    }
}

const transition = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9]
}

const firstName = {
    initial: {
        y: -20
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: .4,
            staggerChildren: .04,
            staggerDirection: -1
        }
    }
}
const lastName = {
    initial: {
        y: -20
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: .4,
            staggerChildren: .04,
            staggerDirection: 1
        }
    }
}

const letter = {
    initial: {
        y: 400
    },
    animate: {
        y: 0,
        transition: {
            ...transition
        }
    }
}

const btnGroup = {
    initial: {
        y: 60,
        opacity: 0,
        transition: {
            duration: .6,
            ease: easing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: .6,
            ease: easing
        }
    }
}
const star = {
    initial: {
        y: 60,
        opacity: 0,
        transition: {
            duration: .8,
            ease: easing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: .6,
            ease: easing
        }
    }
}

export const Hero = () => {
    return (
        <motion.div>
            <Container className="flex flex-col justify-between items-center mt-10 rounded-[16px] font-agdasima md:flex-row">
                <div className="">
                    <h2 className="text-6xl">
                        <span>
                            Plan,
                            manage <br />
                            and track
                        </span>
                    </h2>
                </div>
                {/* <div className="flex flex-col gap-4 md:w-[48%]">
                    <h2 className="text-6xl">
                        <span>
                            Plan, 
                            manage <br />
                            and track
                        </span>
                    </h2>
                    <p className="">
                        Transform your task list into a unique workflow
                    </p>
                    <div className={classNames(
                        "flex flex-col gap-3"
                    )}>
                        <div>
                            <span className="font-semibold bg-gray-200 px-3 py-2 rounded inline-flex gap-2 items-center ">
                                <span className="w-[2px] rounded h-4 bg-blue block"></span>
                                64+ Reviews
                            </span>
                        </div>
                        <div className={classNames(
                            "review_contain ",
                            "[&>span]:inline-flex [&>span]:items-center [&>span]:justify-center [&>span]:w-7 [&>span]:h-7 ",
                            "[&>span]:bg-blue [&>span]:rounded-[6px] [&>span]:mr-2"
                        )}>
                            <IconContext.Provider value={{ color: "#fff", size: "16px" }}>
                                <span><IoStar /></span>
                                <span><IoStar /></span>
                                <span><IoStar /></span>
                                <span><IoStar /></span>
                                <span><IoStar /></span>
                            </IconContext.Provider>
                        </div>
                        <p className="text-[#333] text-base font-semibold pb-3">More than 50+ people taking Services</p>
                    </div>
                </div> */}
                {/*  */}
                <div className="right_content w-[48%] flex justify-end">
                    <img className="w-full block" src="/hr.svg" alt="" />
                </div>
            </Container>
        </motion.div>
    )
}
