"use client";

import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

function HeroSection() {
    const imageRef = useRef()

    useEffect(() => {
        const imageElement = imageRef.current;


        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add('scrolled')
            } else {
                imageElement.classList.remove('scrolled')
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return (
        <div className='pb-20 px-4'>
            <div className='container mx-auto text-center'>
                <h1 className='text-5xl md:text-7xl lg:text-[90px] pb-6 gradient-title'>
                    Empower Your Finances <br />with Intelligent Tools
                </h1>
                <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>Smart AI financial tools that let you track, analyze,
                    and improve spending with real-time insights for your wealth. </p>

                <div className='flex justify-center space-x-4'>


                    {/* <Button size="lg" className="px-8">Get Started</Button> */}
                    {/* <div className="px-12 py-4  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"> */}
                    {/* <div className="px-12 py-4  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:bg-black hover:text-white"> */}
                    <Link href="/dashboard">
                        <button className="p-[3px] relative cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-12 py-4  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-gradient-to-r from-indigo-300 to-purple-300 hover:text-black hover:font-semibold">
                                Get Started
                            </div>
                        </button>
                    </Link>
                </div>

            </div>
            <div className='hero-image-wrapper'>
                <div className='hero-image' ref={imageRef}>

                    <Image src="/banner.png" width={1280} height={720} alt='Banner Pciture or Dashboard Preview'
                        className='rounded-lg shadow-2xl border mx-auto'
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
