import React from 'react'
import Button from '../Button'

export default function Hero() {
    return (
        <>
            <div className="video section text-center flex items-center justify-center py-10">
                <iframe
                    className="rounded-2xl lg:w-[40%] w-full"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SGmmiq70uk4?si=oTFRgoTO9Sntd2cu"
                    title="YouTube video player"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
            <Button link={"#"} text={"Click Here"} />
        </>

    )
}
