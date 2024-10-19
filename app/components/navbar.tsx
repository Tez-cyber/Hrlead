"use client"
import { Dispatch, SetStateAction, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Container } from "./container"
import { MobileNav } from "./mobileNav"
import Link from "next/link"


export const Navbar = () => {
    return (
        <>
            <motion.div className="bg-neutral-100 sticky top-0 z-20">
                <Container className=" flex justify-between items-center h-[4.8rem] px-10 z-30">
                    <motion.section
                        className="font-agdasima">
                        <span className="text-blue font-[700] text-3xl agdasima">HRLead</span>
                        <span className="h-2 w-2 bg-blue inline-block rounded-full"></span>
                    </motion.section>
                    {/* ============== Medium screen =============== */}
                    <section className="hidden md:block">
                        <SlideTabs />
                    </section>
                    {/* ============ Mobile ================= */}
                    <MobileNav />
                </Container>
            </motion.div>
        </>
    )
}
// ==========================
type Position = {
    left: number;
    width: number;
    opacity: number;
};
const SlideTabs = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0
    })
    return (
        <ul
            onMouseLeave={() => {
                setPosition(pv => ({
                    ...pv,
                    opacity: 0
                }))
            }}
            className="relative mx-auto flex w-fit rounded-full border-2 
             bg-white p-1"
        >
            <Tab href="#" setPosition={setPosition}>Home</Tab>
            <Tab href="#about" setPosition={setPosition}>About</Tab>
            <Tab href="#discover" setPosition={setPosition}>Discover</Tab>
            <Tab href="#services" setPosition={setPosition}>Services</Tab>
            <Cursor position={position} />
        </ul>
    )
}


// ==================
type TabProps = {
    children: React.ReactNode;
    href: string
    setPosition: Dispatch<SetStateAction<Position>>
}
const Tab = (
    { children, href, setPosition }: TabProps
) => {
    const ref = useRef<null | HTMLLIElement>(null)
    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft
                })
            }}
            className="relative z-10 block cursor-pointer px-3
            py-1.5 text-xs uppercase text-white mix-blend-difference
            md:px-5 md:py-3 md:text-base
        ">
            <Link href={href}>
                {children}
            </Link>
        </li>
    )
}

const Cursor = ({ position }: { position: Position }) => {
    return <motion.li
        animate={position}
        className="absolute z-0 h-7 rounded-full bg-[#2e4e78] md:h-12"
    />
}