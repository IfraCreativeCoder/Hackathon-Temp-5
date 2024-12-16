import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Brands from './Brands'
import Foxtext from './Foxtext'

export default function Pricingpage() {
  return (
    <>
      <div className='flex w-screen h-12  p-10 bg-gray-100 items-center justify-center gap-20'>
        <h1 className='font-bold text-2xl flex gap-4'>Bandage</h1>
        <div className='font-bold text-gray-500 gap-4 flex'>
          <Link href="#">Home</Link>
          <Link href="#">Shop </Link>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Pages</Link>
        </div>
        <div className='text-blue-400 font-bold flex items-center justify-center gap-8'>
          <Link href="#">Login  </Link>
          <button className='bg-blue-400 rounded-md text-white font-bold p-4 flex gap-2'>Become a member  <Image src="/arrow-right.png" alt="image" width={12} height={10} className='pt-2' /></button>
        </div>
      </div>


      <div className='h-287 w-screen bg-white flex items-center justify-center p-6 mb-10'>
        <div className='text-center'>
          <p className='text-gray-500 font-bold text-xl mb-4'>PRICING</p> {/* Added margin bottom */}
          <h1 className='font-bold text-6xl text-black mb-6'>Simple pricing</h1> {/* Added margin bottom */}
          <div className='flex items-center justify-center mt-4'>
            <p className='font-bold mr-2'>Home</p> {/* Added margin right to space it from the image */}
            <Image src="/Vector.png" alt="vector" width={8.62} height={16} /> {/* Adjusted the image width/height to a more realistic size */}
            <p className='font-bold text-gray-400 ml-2'>Shop</p> {/* Added margin left to space it from the image */}
          </div>
        </div>
      </div>

      <div className='h-287 w-screen bg-white flex items-center justify-center p-6'>
        <div className='text-center'>
          <h1 className='font-bold text-3xl text-black'>Pricing</h1>
          <p className='text-gray-500 pt-3'>Problems trying to resolve the conflict between</p>
          <p className='text-gray-500 '>the two major realms of Classic physics: Newtonian mechanics.</p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 mt-5'>
        <h1 className='font-bold text-xl text-black'>Monthly</h1>
        <button className='border-2 border-blue-400 rounded-full pr-6 p-1 '><span className='w-6 h-6 items-center flex justify-center bg-gray-300 rounded-full'></span></button>
        <h1 className='font-bold text-xl text-black'>Yearly</h1>
        <button className='bg-blue-300 text-blue-500 rounded-full p-2 font-bold text-sm'>Save 25%</button>
      </div>

      {/*Parent div of tick mark card */}
      <div className='flex  justify-center m-10'>
        <div className=' flex'>
          <div className='w-[300px] min-h-[10rem] bg-white rounded-md border-2 border-blue-400 p-8 text-center'>
            <h1 className='font-bold text-black text-xl '>FREE</h1>
            <p className='text-gray-500 font-bold pt-3'>Organize across all</p>
            <p className='text-gray-500 font-bold'>apps by hand</p>

            {/*for numbers align */}
            <div className='flex gap-2 p-3 items-center justify-center'>
              <p className='font-bold text-blue-400 text-3xl pt-3'>0</p>
              <div>
                <p className='font-bold text-blue-400 text-xl pt-3'>$</p>
                <p className='font-bold text-blue-300 text-sm '>Per Month</p>
              </div>
            </div>

            {/*Tick Mark*/}
            <div className=' flex items-center gap-2'>
              <div className='w-[30px] h-[30px]'>
                <Image src="/tick icon.png" alt="image" width={30} height={30} />
              </div>
              <div >
                <p className=''>Unlimited product updates</p>
              </div>
            </div>

          </div>
        </div>

        <div className='flex'>
          <div className='w-72 min-h-[20rem] scale-[1.1] mx-2 bg-blue-900 rounded-md border-2 border-blue-400 p-8 text-center'>
            <h1 className='font-bold text-white text-xl '>STANDARDS</h1>
            <p className='text-gray-500 font-bold pt-3'>Organize across all</p>
            <p className='text-gray-500 font-bold'>apps by hand</p>

            {/*for numbers align */}
            <div className='flex gap-2 p-3 items-center justify-center'>
              <p className='font-bold text-blue-400 text-3xl pt-3'>9.99</p>
              <div>
                <p className='font-bold text-blue-400 text-xl pt-3'>$</p>
                <p className='font-bold text-blue-300 text-sm '>Per Month</p>
              </div>
            </div>

            {/*Tick Mark*/}
            <div className=''>
              <div className=' flex mb-3'>
                <div className='w-[30px] h-[30px]'>
                  <Image src="/tick icon.png" alt="image" width={25} height={25} />
                </div>
                <div >
                  <p className='text-white'>Unlimited product updates</p>
                </div>
              </div>

              {/*Tick Mark*/}
              <div className=' flex'>
                <div className='w-[30px] h-[30px]'>
                  <Image src="/tick icon.png" alt="image" width={25} height={25} />
                </div>
                <div >
                  <p className='text-white'>Unlimited product updates</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className='flex'>
          <div className='w-[300px] min-h-[10rem] bg-white rounded-md border-2 border-blue-400 p-8 text-center'>
            <h1 className='font-bold text-black text-xl '>PREMIUM</h1>
            <p className='text-gray-500 font-bold pt-3'>Organize across all</p>
            <p className='text-gray-500 font-bold'>apps by hand</p>

            {/*for numbers align */}
            <div className='flex gap-2 p-3 items-center justify-center'>
              <p className='font-bold text-blue-400 text-3xl pt-3'>19.99</p>
              <div>
                <p className='font-bold text-blue-400 text-xl pt-3'>$</p>
                <p className='font-bold text-blue-300 text-sm '>Per Month</p>
              </div>
            </div>

            {/*Tick Mark*/}
            <div className=' flex gap-2 items-center'>
              <div className='w-[30px] h-[30px]'>
                <Image src="/tick icon.png" alt="image" width={30} height={30} />
              </div>
              <div >
                <p className=''>Unlimited product updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='justify-center flex p-4'>
        <h1 className='text-1xl text-gray-600 font-bold'>Trusted By Over 4000 Big Companies</h1>
      </div>
      <Brands />

      <div className='h-287 w-screen bg-white flex items-center justify-center p-6'>
        <div className='text-center'>
          <h1 className='font-bold text-3xl text-black'>Pricing</h1>
          <p className='text-gray-500 font-bold pt-3'>Problems trying to resolve the conflict between</p>
          <p className='text-gray-500 font-bold '>the two major realms of Classic physics: Newtonian mechanics.</p>
        </div>
      </div>

      <div className='flex gap-40 my-28 items-center justify-center'>
        <div className='flex flex-col gap-16'>
          <Foxtext />
          <Foxtext />
          <Foxtext />
        </div>
        <div className='flex flex-col gap-16'>
          <Foxtext />
          <Foxtext />
          <Foxtext />
        </div>
      </div>

      <div className='flex justify-center p-3 mb-28'>
        <p className='text-gray-400 font-bold'>Haven&apos;t got your answer? Contact our support</p>
      </div>

      <div className='space-y-3 p-10 text-center'>
        <h1 className='text-gray-700 text-4xl tracking-tight font-bold'>Start your 14 days free trial</h1>
        <p className='text-gray-500 text-sm '>Met minim Mollie non desert Alamo est sit cliquey dolor </p>
        <p className='text-gray-500 '> do met sent. RELIT official consequent.</p>
        <button className='font-bold text-white px-4 py-3 rounded-md bg-blue-500'>Try it free now</button>
        <Image src="/sm.png" alt="none" width={242} height={50} className='mx-auto mt-10'></Image>
      </div>

    </>
  )
}

