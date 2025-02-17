"use client"
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SLIDER_ICONS_LIST, SLIDER_LIST } from '@/utils/helper'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const AiSlider = () => {
    useEffect(() => {
        gsap.fromTo(
            '.slider-container',
            { x: 0 },
            {
                x: '-78%',
                scrollTrigger: {
                    trigger: '.slider-container',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                    pin: true,
                    markers: false,
                }
            })
    }, [])

    return (
        <div className='pt-[156px] bg-custom-black overflow-hidden relative '>
            <Image className='absolute top-0 right-0 pointer-events-none' src="/assets/images/slider-side-shadow.webp" alt="img" height={427} width={614} />
            <div className="container mx-auto">
                <h1 className='max-w-[830px] mx-auto text-center text-5xl font-medium leading-[57.6px] text-custom-white pb-[60px]'>Transforming Secure, Modern
                    <span className='bg-gradient-to-l to-light-pink from-light-blue bg-clip-text text-transparent'> Development </span> with AdaptsAI
                </h1>
            </div>
            <div className="flex items-center justify-between py-[60px] max-w-[1140px] mx-auto ">
                {SLIDER_ICONS_LIST.map((obj, i) => (
                    <div key={i} className="size-[58px] border border-lightBlue rounded-md flex items-center justify-center ">
                        {obj}
                    </div>
                ))}
            </div>
            <div className="slider-container flex flex-nowrap w-[5760px]">
                {SLIDER_LIST.map((obj, i) => (
                    <div key={i} className="flex gap-[65px] items-center justify-center mx-auto max-w-[1440px] w-[1440px] pt-40">
                        <div className="max-w-[461px]">
                            <Image src={obj.number} alt="number" width={297} height={182} className="object-cover max-w-[297px] max-md:max-w-[100px] pointer-events-none"/>
                            <p className='text-[32px] font-bold pb-4 text-white'>
                                {obj.title} <span className='bg-gradient-to-l to-light-pink from-light-blue bg-clip-text text-transparent'>{obj.gradientText}</span>
                            </p>
                            <p className='font-poppins text-white'>{obj.description}</p>
                            <p className='font-poppins text-white pt-4'>{obj.secondDescription} </p>
                        </div>
                        <div>
                            <Image src={obj.image} alt={obj.imageAlt} height={427} width={614} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AiSlider
