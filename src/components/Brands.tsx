import React from 'react'
import Image from 'next/image'


export default function Brands() {
  return (
    <div>
      <div className='h-20 w-screen bg-white items-center pl-40 pr-40   flex'>
              <div className='h-10 w-screen  bg-white flex justify-between '>
                <Image src="/brand1.png" alt="brands" width={70} height={30} />
                <Image src="/brand2.png" alt="brands" width={70} height={30} />
                <Image src="/brand3.png" alt="brands" width={70} height={30} />
                <Image src="/brand4.png" alt="brands" width={70} height={30} />
                <Image src="/brand5.png" alt="brands" width={70} height={30} />
                <Image src="/brand6.png" alt="brands" width={70} height={30} />
              </div>
            </div>
    </div>

    
  )
}
