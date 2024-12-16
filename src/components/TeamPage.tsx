import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function TeamPage() {

  const images: string[] = ["sp2.png", "sp3.png", "sp4.png", "sp5.png", "sp6.png", "sp7.png", "sp8.png", "sp9.png", "sp10.png"]
  return (
    <>
      <div>
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
      </div>
      <div className='h-287 w-screen bg-white flex items-center justify-center p-6 mb-10'>
        <div className='text-center'>
          <p className='text-gray-500 font-bold text-lg mb-4'>What we do</p> {/* Added margin bottom */}
          <h1 className='font-bold text-4xl text-zinc-900 mb-6'>Innovation tailored for you</h1> {/* Added margin bottom */}
          <div className='flex items-center justify-center mt-4'>
            <p className='font-bold text-sm mr-2'>Home</p> {/* Added margin right to space it from the image */}
            <Image src="/Vector.png" alt="vector" width={8} height={16} /> {/* Adjusted the image width/height to a more realistic size */}
            <p className='font-bold tex-sm text-gray-400 ml-2'>Team</p> {/* Added margin left to space it from the image */}
          </div>
        </div>
      </div>

      <div className='w-screen'>
        <Image src={"/sp1.png"} alt='none' width={1000} height={1000} className='w-full h-full object-cover' />
      </div>

      <h1 className='text-center text-3xl my-20 font-bold'>Meet Our team</h1>

      <div className='w- flex justify-center'>
        <div className='w-[80%] flex gap-16 flex-wrap justify-center'>
          {images.map(item => <div key={item} className='w-[300px] h-[400px]'>
            <div className='w-full h-[220px]'>
              <Image src={`/${item}`} alt='None' width={500} height={500} className='w-full h-full' />
            </div>
            <div className='mt-6 space-y-3'>
              <h1 className='text-2xl font-bold text-center'>Username</h1>
              <p className='text-center text-gray-700'>Profession</p>
              <div className='flex w-full justify-center gap-8'>
                <Image src={"/i1.png"} alt='icon' width={25} height={25} />
                <Image src={"/i2.png"} alt='icon' width={25} height={25} />
                <Image src={"/i3.png"} alt='icon' width={25} height={25} />
              </div>
            </div>
          </div>)}
        </div>
      </div>
        <div className='space-y-3 p-10 text-center mb-10'>
          <h1 className='text-gray-700 text-4xl tracking-tight font-bold'>Start your 14 days free trial</h1>
          <p className='text-gray-500 text-sm '>Met minim Mollie non desert Alamo est sit cliquey dolor </p>
          <p className='text-gray-500 '> do met sent. RELIT official consequent.</p>
          <button className='font-bold text-white px-4 py-3 rounded-md bg-blue-500'>Try it free now</button>
          <Image src="/sm.png" alt="none" width={242} height={50} className='mx-auto mt-10'></Image>
        </div>
    </>
  )
}

export default TeamPage;
