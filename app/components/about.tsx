import React from 'react'
import { Container } from './container'

export const About = () => {
    return (
        <div className='my-[64px] mx-10' id='about'>
            <Container>
                <section>
                    <p className='text-4xl font-agdasima mb-3'>Get to <span className='text-blue'>Know us</span></p>
                    <div className='w-full h-1 bg-gray-200 rounded-md'></div>
                </section>
                <main className='my-5'>
                    <p className='text-xl font-agdasima'>
                        At <span className="font-agdasima">
                            <span className="text-blue font-[700] text-2xl pr-[1px]">HRLead</span>
                            <span className="h-2 w-2 bg-blue inline-block rounded-full"></span>
                        </span>, we are committed to delivering exceptional HR services that drive business success.
                        Our team of seasoned professionals offers a comprehensive range of solutions,
                        from talent acquisition and employee development to HR strategy and compliance.
                        We are dedicated to helping you build a high-performing workforce and create a positive workplace culture.
                    </p>
                </main>
                <section className='flex my-5 flex-col font-agdasima md:flex-row'>
                    <div className="">
                        <h2 className='text-3xl font-agdasima font-bold text-blue'>Our mission:</h2>
                        <p className='text-lg'>
                            To provide innovative and comprehensive HR solutions that help
                            businesses achieve their goals while fostering a positive and inclusive workplace.
                        </p>
                    </div>
                    <div className="">
                        <h2 className='text-3xl font-agdasima font-bold text-blue mt-5 md:mt-0'>Our Vision:</h2>
                        <p className='text-lg'>
                            To provide innovative and comprehensive HR solutions that help
                            businesses achieve their goals while fostering a positive and inclusive workplace.
                        </p>
                    </div>
                </section>
                <section>
                    <div className=" bg-blue about_cardWrapper mt-5">
                        <div className="about_card">
                            <h2>20</h2>
                            <p>
                                Expert <br />
                                Professional
                            </p>
                        </div>
                        <div className="about_card">
                            <h2>10</h2>
                            <p>
                                Glorious <br />
                                Years
                            </p>
                        </div>
                        <div className="about_card">
                            <h2>200+</h2>
                            <p>
                                Successful <br />
                                Projects
                            </p>
                        </div>
                        <div className="about_card">
                            <h2>100%</h2>
                            <p>
                                Customer <br />
                                Satisfaction
                            </p>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}
