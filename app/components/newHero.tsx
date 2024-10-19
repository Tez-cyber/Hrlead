
import { Container } from './container'
import Link from 'next/link'

export const NewHero = () => {
    return (
        <div className='mt-10 mx-10 md:mx-0'>
            <Container className='flex flex-col lg:flex-row'>
                {/* =============First section */}
                <section className=" flex flex-col gap-4">
                    <div>
                        <span className="font-agdasima font-semibold text-base bg-gray-200 px-3 py-1 rounded inline-flex gap-2 items-center ">
                            <span className="w-[2px] rounded h-4 bg-blue block"></span>
                            64+ Reviews
                        </span>
                    </div>
                    {/* ============ main title */}
                    <main className=''>
                        <h1 className="text-7xl font-agdasima">
                            Managerial Optimization for your companies
                        </h1>
                        <p className='text-sm w-[80%] py-5'>
                            To provide innovative and comprehensive HR solutions that help
                            businesses achieve their goals while fostering a positive and inclusive workplace.
                        </p>
                        <Link href="#" className='bg-blue text-lg px-4 py-3 text-white font-agdasima font-semibold '>
                            Get started
                        </Link>
                    </main>
                </section>
                {/* ====================Image section */}
                <section className="mt-10">
                    <div className="relative">
                        <div className="absolute bg-[#f2f2f2] border-r-[5px] p-2 border-b-[5px] border-solid border-white md:p-5">
                            <p className='text-center text-3xl mb-4 font-agdasima md:text-5xl'>99%</p>
                            <p className='text-xs'>Personalized HR solutions <br /> tailored to your needs</p>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-[#012a30] p-2 text-white border-t-[5px] border-l-[5px] border-solid border-white ,d:p-5">
                            <p className='text-center text-3xl mb-4 font-agdasima md:text-5xl'>99%</p>
                            <p className='text-xs'>Personalized HR solutions <br /> tailored to your needs</p>
                        </div>
                        <img src="/hr.jpg" alt="" />
                    </div>
                </section>
            </Container>
        </div>
    )
}
