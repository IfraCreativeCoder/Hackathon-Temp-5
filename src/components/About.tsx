import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function About() {
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

      <div className='w-screen h-598 bg-white flex  justify-center p-10 items-center space-2xl '>
        {/*text-area */}
        <div className=''>
          <p className='font-bold text-black text-2xl'>About</p>
          <h1 className='font-bold text-6xl text-black mt-5'>About Us</h1>
          <p className='font-bold text-gray-400 mt-5 text-2xl'>We know how large object will act,</p>
          <p className='font-bold text-gray-400 text-2xl'>but things on a small scale</p>
          <button className='font-bold text-white  p-4 rounded-md bg-blue-400 mt-8'>Get Quote New</button>
        </div>
        {/*Image */}
        <div className=''>
          <Image src="/none.png" alt="image" width={387} height={440} />
        </div>
      </div>

      <div className='h-236 w-screen bg-white flex p-20'>
        <div >
          <p className='text-red-600 text-1xl'>Problems trying</p>
          <h1 className='font-bold text-black text-2xl mt-4'>Met minim Mollie non desert </h1>
          <h1 className='font-bold text-black text-2xl'>Alamo est sit cliquey dolor do </h1>
          <h1 className='font-bold text-black text-2xl'>met sent. </h1>
        </div>
        <div className='ml-40 mt-9 text-1xl'>
          <p className='text-gray-500 '>Problems trying to resolve the conflict between the two major realms of </p>
          <p className='text-gray-500'>Classic physics: Newtonian mechanics. </p>
        </div>
      </div>


      <div className='h-264 w-screen bg-white p-10 flex gap-20 items-center justify-center'>
        {/*text-number */}
        <div>
          <h1 className='font-bold text-black text-4xl ml-6'>15K</h1>
          <p className='text-gray-400 font-bold'>Happy Customers</p>
        </div>

        <div>
          <h1 className='font-bold text-black text-4xl ml-7'>150K</h1>
          <p className='text-gray-400 font-bold'>Monthly Visitors</p>
        </div>

        <div>
          <h1 className='font-bold text-black text-4xl ml-12'>15</h1>
          <p className='text-gray-400 font-bold'>Countries Worldwide</p>
        </div>

        <div>
          <h1 className='font-bold text-black text-4xl ml-3'>100+</h1>
          <p className='text-gray-400 font-bold'>Top Partners</p>
        </div>
      </div>


      <div className='w-screen h-764 bg-white p-10 flex items-center justify-center'>
        <Image src="/video card.png" alt="image" width={980} height={540} />
      </div>

      <div className='h-287 w-screen bg-white flex items-center justify-center p-6'>
        <div className='text-center'>
          <h1 className='font-bold text-3xl text-black'>Meet Our Team</h1>
          <p className='text-gray-500 text-xl'>Problems trying to resolve the conflict between</p>
          <p className='text-gray-500 text-xl '>the two major realms of Classic physics: Newtonian mechanics.</p>
        </div>
      </div>

      <div className='flex gap-5 p-10 justify-center items-center'>
        {/*Image-card */}
        <div className='bg-white text-gray-700 w-75 min-h-[10rem]  object-cover overflow-hidden'>
          <Image src="/media1.png" alt="image" width={329} height={321} className='' />
          <div className='p-4 ml-20'>
            <h1 className='font-bold text-2xl text-black'>Username</h1>
            <p className='text-gray-400 font-bold text-1xl p-4'>Profession</p>
            <Image src="/sm-2.png" alt="image" width={112} height={24} className='' />
          </div>
        </div>

        {/*Image-card */}
        <div className='bg-white text-gray-700 w-75 min-h-[10rem]  object-cover overflow-hidden'>
          <Image src="/media2.png" alt="image" width={329} height={321} className='' />
          <div className='p-4 ml-20'>
            <h1 className='font-bold text-2xl text-black'>Username</h1>
            <p className='text-gray-400 font-bold text-1xl p-4'>Profession</p>
            <Image src="/sm-2.png" alt="image" width={112} height={24} className='' />
          </div>
        </div>

        {/*Image-card */}
        <div className='bg-white text-gray-700 w-75 min-h-[10rem]  object-cover overflow-hidden'>
          <Image src="/media3.png" alt="image" width={329} height={321} className='' />
          <div className='p-4 ml-20'>
            <h1 className='font-bold text-2xl text-black'>Username</h1>
            <p className='text-gray-400 font-bold text-1xl p-4'>Profession</p>
            <div className='justify-center items-center'>
              <Image src="/sm-2.png" alt="image" width={112} height={24} className='' />
            </div>
          </div>
        </div>

      </div>

      <div className='h-287 w-screen bg-white flex items-center justify-center p-6'>
        <div className='text-center'>
          <h1 className='font-bold text-3xl text-black'>Big Companies Are Here</h1>
          <p className='text-gray-500 mt-4'>Problems trying to resolve the conflict between</p>
          <p className='text-gray-500 '>the two major realms of Classic physics: Newtonian mechanics.</p>
        </div>
      </div>

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



      <div className='w-screen h-598 bg-blue-700 flex  justify-center  items-center space-2xl '>
        {/*text-area */}
        <div className='m-40'>
          <p className='font-bold text-white text-xl'>WORK WITH US</p>
          <h1 className='font-bold text-4xl text-white mt-5'>NOW LETS GROW YOURS</h1>
          <p className=' text-white mt-5 '>The gradual accumulation of information about atomic and</p>
          <p className=' text-white '>small-scale behavior during the first quarter of the 20th</p>
          <button className='font-bold text-white  p-4 pl-4 pr-4 rounded-md bg-transparent border-2 border-white mt-8'>Button</button>
        </div>
        {/*Image */}
        <div className=''>
          <Image src="/blue-pg-img.png" alt="image" width={590} height={640} />
        </div>
      </div>



    </>
  )
}

export default About
