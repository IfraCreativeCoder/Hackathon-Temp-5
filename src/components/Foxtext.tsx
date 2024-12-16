import React from 'react'
import Image from 'next/image'

export default function Foxtext() {
    return (
        <div className='relative'>
            <div className=''>
                <div className='flex '>
                    <div>
                        <div className='pt-3 absolute -left-5 -top-2'>
                            <Image src="/Vector.png" alt="vector" width={11} height={14} />
                        </div>
                    </div>
                    <h1 className='font-bold text-xl text-black'>the quick fox jumps over</h1>
                </div>
            </div>
            <div className=''>
                <p> Met minim Mollie non desert Alamo est sit cliquey  </p>
                <p> dolor do met sent. RELIT official consequent door ENIM  </p>
                <p> Excitation venial consequent sent nostrum met.</p>
            </div>
        </div>


    )
}
