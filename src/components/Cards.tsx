"use client";
import Image from 'next/image'
import { redirect } from 'next/navigation';
import React from 'react'

function Cards() {
    const images: string[] = ["img1.png", "img2.png", "img3.png", "img4.png", "product-cover-5.png", "img12.png", "img13.png", "img14.png", "pro-9.png", "pro-10.png", "pro-11.png", "pro-12.png"];
    return (
        <div className='bg-white p-5 flex flex-wrap space-x-7 justify-center w-[90%] mx-auto'>
            {images.map(item => <div key={item} className='w-[22%] active:scale-90' onClick={() => redirect("/shop/id")}>
                <Image src={`/${item}`} alt="Image" width={239} height={427} />
                <div className='flex flex-col gap-2'>
                    <div className='mt-3'>
                        <h2 className='font-bold text-black text-center'>Graphic Design</h2>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <h3 className="font-bold text-gray-400 text-center">
                            English Department
                        </h3>
                    </div>
                    <div className='flex gap-4 justify-center'>
                        <h3 className='font-bold text-gray-400'>$16.48</h3>
                        <h3 className='font-bold text-green-700 '>$16.48</h3>
                    </div>
                    <div className='space-x-1 flex justify-center mb-5'>
                        <span className='w-2 h-2 bg-blue-500 rounded-full inline-block'></span>
                        <span className='w-2 h-2 bg-green-700 rounded-full inline-block'></span>
                        <span className='w-2 h-2 bg-orange-500 rounded-full inline-block'></span>
                        <span className='w-2 h-2 bg-black rounded-full inline-block'></span>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Cards
