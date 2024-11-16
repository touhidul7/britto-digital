import Link from 'next/link';
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Button({ link, text }) {
    return (
        <Link href={link}>
            <div className=" text-center flex justify-center">
                <button className="button">{text} <FaArrowAltCircleRight /></button>
            </div>
        </Link>
    )
}
