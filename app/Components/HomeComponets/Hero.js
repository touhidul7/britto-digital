import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import heroimg from '@/public/images/hero.jpg'
export default function Hero() {
    return (
        <>
            <div className="video section text-center flex items-center justify-center py-10">
                <Image src={heroimg} className='w-[40%] rounded-3xl' alt='hero' />
            </div>
            <Button link={"https://www.facebook.com/brittodigitalbd"} text={"Order Now"} />
        </>

    )
}
