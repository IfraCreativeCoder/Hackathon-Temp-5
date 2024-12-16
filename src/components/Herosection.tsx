import React from 'react'
import Image from 'next/image'

function Herosection() {
  const images: string[] = ["img1.png", "img2.png", "img3.png", "img4.png", "product-cover-5.png", "img12.png", "img13.png", "img14.png"];
  return (
    <>
      <div>
        <Image src="/image1.png" alt="Image" width="1350" height="1000" className='object-cover' />
      </div>

      <div>
        {/* Editors Pick Section */}
        <div className="flex items-center justify-center mt-10">
          <h1 className="font-bold text-4xl">EDITOR&apos;S PICK</h1>
        </div>

        {/* Subtitle */}
        <div className="flex items-center justify-center mt-4">
          <h3 className="font-bold text-gray-400">
            Problems trying to resolve the conflict between
          </h3>
        </div>
      </div>

      <div className="flex justify-center space-x-7 mt-10">
        <Image src="/men.png.png" alt="Image" width={510} height={500} />
        <Image src="/image.png" alt="Image" width={240} height={500} />
        <Image src="/girl.img.png" alt="Image" width={240} height={500} />
      </div>


      {/* Featured Products Section */}
      <div className="mt-10 flex items-center justify-center">
        <h3 className="font-bold text-gray-400">
          Featured Products
        </h3>
      </div>

      {/* Bestseller Products Title */}
      <div className="flex items-center justify-center mt-4">
        <h1 className="font-bold text-4xl">BESTSELLER PRODUCTS</h1>
      </div>

      {/* Subtitle */}
      <div className="flex items-center justify-center mt-4">
        <h3 className="font-bold text-gray-400">
          Problems trying to resolve the conflict between
        </h3>
      </div>

      <div className='bg-white p-5 flex flex-wrap space-x-7 justify-center w-[90%] mx-auto'>
        {images.map(item => <div key={item} className='w-[22%]'>
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





      <div className='flex gap-10 bg-green-700'>
        <div className="bg-green-700 w-screen h-[100] text-white p-10 rounded-lg flex justify-center flex-col gap-4  md:w-1/2">

          {/* Summer Section */}
          <div className="flex items-center justify-center">
            <h3 className="font-bold text-2xl">Summer 2020</h3>
          </div>

          {/* Vita Classic Products Title */}
          <div className="flex items-center justify-center mt-2">
            <h1 className="font-bold text-4xl">Vita Classic Products</h1>
          </div>

          {/* Subtitle */}
          <div className="flex items-center justify-center mt-2">
            <h3 className="font-semibold text-lg text-center">
              We know how large objects will act, we know how are objects will act, we know
            </h3>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-center mt-4">
            <h3 className="font-bold text-2xl">$16.8</h3>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center mt-4">
            <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>
        <div>
          {/*  Image */}
          <div className=" justify-center">
            <Image src="/green page image.png" alt="Product Image" width={443} height={600} />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between p-5 ml-20">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image src="/whitepg.png" alt="Product Image" width={430} height={600} />
        </div>

        {/* Text Section */}
        <div className="ml-0"> {/* Add margin-left for spacing */}
          {/* Summer Section */}
          <div className="flex items-center justify-center">
            <h3 className="font-bold text-1xl text-gray-300">Summer 2020</h3>
          </div>

          {/* Vita Classic Products Title */}
          <div className="flex items-center justify-center mt-2">
            <h1 className="font-bold text-4xl">Part of the Neural</h1>

            <h1 className="font-bold text-4xl">Universe</h1>
          </div>

          {/* Subtitle */}
          <div className="flex items-center justify-center mt-2 text-gray-500">
            <h3 className="font-semibold text-lg text-center ">
              We know how large objects will act,
            </h3>
            <h3 className="font-semibold text-lg text-center">
              but things on a small scale.
            </h3>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center mt-4 gap-5">
            <button className="bg-green-500 text-white py-2 px-6  hover:bg-green-600 rounded-md transition duration-300">
              BYE NOW
            </button>
            <button className='bg-white text-green-500 py-2 px-6 hover:bg-green-200 rounded-md border-2 border-green-500 transition duration-300 '>read more</button>
          </div>
        </div>
      </div>






      {/* Practis Advise */}
      <div className="mt-10 flex items-center justify-center">
        <h3 className="font-bold text-blue-400">
          Practice Advise
        </h3>
      </div>

      {/* Bestseller Products Title */}
      <div className="flex items-center justify-center mt-4">
        <h1 className="font-bold text-4xl">Featured Posts</h1>
      </div>

      {/* Subtitle */}
      <div className=" items-center justify-center mt-4">
        <h3 className="font-bold text-gray-500 flex items-center justify-center mt-4">
          Problem trying to resolve the conflict between
        </h3>

        <h3 className=" font-bold text-gray-500 flex items-center justify-center ">
          the two major realms of Classic physics: Newtonian mechanics
        </h3>
      </div>
      <div className='flex justify-center gap-4 items-center pt-10 pb-10'>
        {/*Product Cards */}
        <div className=''>
          <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg overflow-hidden'>
            <Image src="/road.png" alt="road" width={348} height={300} />
            {/*Text area */}
            <div className=' gap-2 flex p-5'>
              <span className='text-blue-500'>Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <div className='text-2xl p-2'>
              <h1>Loudest a` la Madison #1</h1>
              <h1>(Lintegral)</h1>
            </div>
            <div className=' p-2'>
              <p>We focus on ergonomics and meeting </p>
              <p>you where you work its only a keystroke away.</p>
            </div>

            <div className='flex p-3 justify-between'>
              <div className='flex'>
                <Image src="/alarm.png" alt="clock" width={18} height={14} />
                <p>22 April 2021</p>
              </div>
              <div className='flex'>
                <Image src="/green-icon.png" alt="Mountains" width={16} height={14.60} />
                <p>10 comments</p>
              </div>
            </div>

            <div className='font-bold text-gray-500 flex p-3 gap-3'>
              <p >Learn More</p>
              <Image src="/arrow.png" alt="next-arrow" width={9} height={15} />
            </div>

          </div>
        </div>

        {/*Product Cards */}
        <div className=''>
          <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg overflow-hidden'>
            <Image src="/car.png" alt="road" width={348} height={300} />
            {/*Text area */}
            <div className=' gap-2 flex p-5'>
              <span className='text-blue-500'>Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <div className='text-2xl p-2'>
              <h1>Loudest a` la Madison #1</h1>
              <h1>(Lintegral)</h1>
            </div>
            <div className=' p-2'>
              <p>We focus on ergonomics and meeting </p>
              <p>you where you work its only a keystroke away.</p>
            </div>

            <div className='flex p-3 justify-between'>
              <div className='flex'>
                <Image src="/alarm.png" alt="clock" width={18} height={14} />
                <p>22 April 2021</p>
              </div>
              <div className='flex'>
                <Image src="/green-icon.png" alt="Mountains" width={16} height={14.60} />
                <p>10 comments</p>
              </div>
            </div>

            <div className='font-bold text-gray-500 flex p-3 gap-3'>
              <p >Learn More</p>
              <Image src="/arrow.png" alt="next-arrow" width={9} height={15} />
            </div>

          </div>
        </div>

        {/*Product Cards */}
        <div className=''>
          <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg overflow-hidden'>
            <Image src="/umbrella.png" alt="road" width={348} height={300} />
            {/*Text area */}
            <div className=' gap-2 flex p-5'>
              <span className='text-blue-500'>Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <div className='text-2xl p-2'>
              <h1>Loudest a` la Madison #1</h1>
              <h1>(Lintegral)</h1>
            </div>
            <div className=' p-2'>
              <p>We focus on ergonomics and meeting </p>
              <p>you where you work its only a keystroke away.</p>
            </div>

            <div className='flex p-3 justify-between'>
              <div className='flex'>
                <Image src="/alarm.png" alt="clock" width={18} height={14} />
                <p>22 April 2021</p>
              </div>
              <div className='flex'>
                <Image src="/green-icon.png" alt="Mountains" width={16} height={14.60} />
                <p>10 comments</p>
              </div>
            </div>

            <div className='font-bold text-gray-500 flex p-3 gap-3'>
              <p >Learn More</p>
              <Image src="/arrow.png" alt="next-arrow" width={9} height={15} />
            </div>

          </div>
        </div>
      </div>

    </>
  )
};

export default Herosection
