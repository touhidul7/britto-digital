import React from 'react'
import Button from '../Button'
import Image from 'next/image'
export default function Hero() {
    return (
        <>
            <div className="video section text-center flex items-center justify-center py-10">
                <Image src={"/public/images/Canva.png"} className='w-[40%] rounded-3xl shadow-lg' alt='hero' />
            </div>
            <Button link={"https://www.facebook.com/brittodigitalbd"} text={"Order Now"} />
        </>

    )
}
