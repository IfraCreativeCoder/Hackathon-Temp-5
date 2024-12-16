import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Desktopproduct1() {
  return (
    <>


      {/*Product Navbar */}

      <div className='h-12 w-screen bg-green-700 flex text-white items-center gap-6 p-8 justify-center '>
        <div className='flex items-center'>
          <div className='pt-1'>
            <Image src="/call.png" alt="call" width={16} height={10} ></Image>
          </div>

          <div>
            <p>(225) 555-0118</p>
          </div>
        </div>


        <div className='flex items-center'>
          <div className='pt-1'>
            <Image src="/msg.png" alt="call" width={16} height={10} ></Image>
          </div>
          <div>
            <p>Michelle.rivera@example.com</p>
          </div>
        </div>

        <div></div>
        <div className='flex items-center ml-5 p-6 gap-5'>
          <div className='text-white font-bold'>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div />


          <div className='flex mt-1 gap-2'>
            <p className='text-white font-bold mr-2'>Follow Us:</p>
            <Image src="/insta.png" alt="Instagram" width={16} height={16} />
            <Image src="/yt.png" alt="YouTube" width={16} height={16} />
            <Image src="/fb5.png" alt="Facebook" width={16} height={16} />
            <Image src="/tw.png" alt="Twitter" width={16} height={16} />
          </div>
        </div>

      </div>

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

        <div className='text-blue-400 font-bold flex items-center justify-center'>
          <Image src="/log.png" alt="Twitter" width={16} height={16} />
          <Link href="#">Login / Register</Link>
          <div className='text-blue-600 flex '>
            <Image src="/search.png" alt="search" width={56} height={46} />
            <Image src="/cart.png" alt="cart" width={56} height={46} />
            <Image src="/heart.png" alt="heart" width={56} height={46} />
          </div>
        </div>
      </div>

      <div className='h-20 w-screen bg-white  pl-40 pr-40 flex '>
        <div className='h-10 w-screen bg-white flex  items-center  p-4'>
          <div className='flex gap-8'>
            <p className='font-bold'>Home</p>
            <Image src="/Vector.png" alt="vector" width={11} height={14} />
            <p className='font-bold text-gray-400'>Shop</p>
          </div>
        </div>
      </div>

      <div className='h-598 w-screen bg-white py-10 flex gap-10 p-10'>
        {/*image area */}
        <div>
          <Image src="/sofa.png" alt="sofa" width={506} height={546} />
        </div>

        <div>
          {/*text area */}
          <div>
            <h1 className='text-3xl p-2'>Floating Phone</h1>
            <div className='flex gap-3 p-3'>
              <Image src="/stars.png" alt="stars" width={130.07} height={22.01} />
              <p className='font-bold text-gray-500'> 10 Reviews</p>

            </div>
          </div>

          <div className='p-3'>
            <p className='font-bold text-black text-4xl'>$1,139.33</p>
          </div>

          <div>
            <p className='text-gray-500 font-bold p-1'>Availabity : <span className='text-blue-400'>In stock</span></p>
          </div>

          <div className='p-3'>
            <p className='font-bold text-gray-400'>Met minim Mollie non desert Alamo est sit cliquey dolor</p>
            <p className='font-bold text-gray-400'>do met sent.RELIT official consequent door ENIM RELIT Mollie.</p>
            <p className='font-bold text-gray-400'>Excitation venial consequent sent nostrum met.</p>
          </div>
          <hr className='' />

          {/*Product colour */}
          <div className='space-x-1 p-4'>
            <span className='w-5 h-5 bg-blue-500 rounded-full inline-block'></span>
            <span className='w-5 h-5 bg-green-700 rounded-full inline-block'></span>
            <span className='w-5 h-5 bg-orange-500 rounded-full inline-block'></span>
            <span className='w-5 h-5 bg-black rounded-full inline-block'></span>
          </div>

          <div className='flex gap-3 '>
            <button className=' bg-blue-500 rounded-md px-4 py-2 font-bold text-white mt-5'>Select Option</button>

            <Image src="/like.png" alt="icons" width={40} height={30} />
            <Image src="/basket.png" alt="icons" width={40} height={30} />
            <Image src="/more (1).png" alt="icons" width={40} height={30} />

          </div>

        </div>

      </div>

      <div className='h-10 w-screen bg-white p-10 items-center justify-center flex'>
        <div className='text-gray-500 font-bold flex gap-10'>
          <p>Description</p>
          <p>Additional Information</p>
          <p>Reviews <span className='text-green-600'>(0)</span></p>
        </div>
      </div>




      <div className='flex gap-10  justify-center'>
        {/**image section */}
        <div className='bg-white text-gray-700 w-75 min-h-[10rem]  object-cover overflow-hidden'>
          <Image src="/chair.png" alt="chair" width={316} height={375} />
        </div>

        {/*text section */}
        <div className='bg-white text-gray-700 w-75 min-h-[10rem]  overflow-hidden p-2'>
          <h1 className='font-bold text-2xl text-black'>the quick fox jumps over</h1>
          <div className='pt-4 '>
            <p className='text-gray-500 '>Met minim Mollie non desert Alamo est sit</p>
            <p className='text-gray-500 '>cliquey dolor do met sent.RELIT official</p>
            <p className='text-gray-500 '>consequent door ENIM RELIT Mollie.</p>
            <p className='text-gray-500 '>Excitation venial consequent sent nostrum</p>
            <p className='text-gray-500 '>met.</p>

            <p className='text-gray-500 '>Met minim Mollie non desert Alamo est sit</p>
            <p className='text-gray-500 '>cliquey dolor do met sent.RELIT official</p>
            <p className='text-gray-500 '>consequent door ENIM RELIT Mollie.</p>
            <p className='text-gray-500 '>Excitation venial consequent sent nostrum</p>
            <p className='text-gray-500'>met.</p>

            <p className='text-gray-500 '>Met minim Mollie non desert Alamo est sit</p>
            <p className='text-gray-500 '>cliquey dolor do met sent.RELIT official</p>
            <p className='text-gray-500 '>consequent door ENIM RELIT Mollie.</p>
            <p className='text-gray-500 '>Excitation venial consequent sent nostrum</p>
            <p className='text-gray-500 '>met.</p>
          </div>

        </div>


        <div className='bg-white text-gray-700 w-75 min-h-[10rem]  overflow-hidden p-2 '>
          <h1 className='font-bold text-2xl text-black p-2'>the quick fox jumps over</h1>

          <div className='flex '>
            <div className='p-2 '>
              <Image src="/Vector.png" alt="vector" width={11} height={14} />
            </div>

            <div className='flex pt-1 '>
              <p className='text-gray-400 font-bold'>the quick fox jumps over the lazy dog</p>
            </div>
          </div>
          <div className='flex '>
            <div className='p-2 '>
              <Image src="/Vector.png" alt="vector" width={11} height={14} />
            </div>


            <div className='flex pt-1 '>
              <p className='text-gray-400 font-bold'>the quick fox jumps over the lazy dog</p>
            </div>
          </div>

          <div className='flex '>
            <div className='p-2 '>
              <Image src="/Vector.png" alt="vector" width={11} height={14} />
            </div>
            <div className='flex pt-1 '>
              <p className='text-gray-400 font-bold'>the quick fox jumps over the lazy dog</p>
            </div>
          </div>

          <div className='flex '>
            <div className='p-2 '>
              <Image src="/Vector.png" alt="vector" width={11} height={14} />
            </div>
            <div className='flex pt-1'>
              <p className='text-gray-400 font-bold'>the quick fox jumps over the lazy dog</p>
            </div>
          </div>

          <div className='flex '>
            <div className='p-2 '>
              <Image src="/Vector.png" alt="vector" width={11} height={14} />
            </div>
            <div className='flex pt-1 '>
              <p className='text-gray-400 font-bold'>the quick fox jumps over the lazy dog</p>
            </div>
          </div>


          <h1 className='font-bold text-2xl text-black p-2'>the quick fox jumps over</h1>

          <div className='flex '>
            <div className='p-2 '>
              <Image src="/Vector.png" alt="vector" width={11} height={14} />
            </div>
            <div className='flex pt-1 '>
              <p className='text-gray-400 font-bold'>the quick fox jumps over the lazy dog</p>
            </div>
          </div>
          <div className='flex '>
            <div className='p-2'>
              <Image src="/Vector.png" alt="vector" width={11} height={14} />
            </div>
            <div className='flex pt-1'>
              <p className='text-gray-400 font-bold'>the quick fox jumps over the lazy dog</p>
            </div>
          </div>

          <div className='flex '>
            <div className='p-2 '>
              <Image src="/Vector.png" alt="vector" width={11} height={14} />
            </div>
            <div className='flex pt-1 '>
              <p className='text-gray-400 font-bold'>the quick fox jumps over the lazy dog</p>
            </div>
          </div>



        </div>

      </div>



      <div className='h-20 w-screen bg-white p-6'>
        <h1 className='font-bold text-black text-3xl'>BESTSELLER PRODUCTS</h1>
      </div>



      <div className='flex gap-5 p-4 justify-center'>
        <div>
          <Image src="/spoon1.png" alt="Image" width={239} height={280} />


          {/*text-area*/}
          <div>
            <h2 className='font-bold text-black'>Graphic Design</h2>
          </div>
          <div className="flex items-center  mt-4">
            <h3 className="font-bold text-gray-400">
              English Department
            </h3>
          </div>
          <div className='flex space-x-2'>
            <h3 className='font-bold text-gray-400'>$16.48</h3>
            <h3 className='font-bold text-green-700 '>$16.48</h3>
          </div>
        </div>

        <div>
          <Image src="/spoon2.png" alt="Image" width={239} height={280} />
          {/*text-area*/}
          <div>
            <h2 className='font-bold text-black'>Graphic Design</h2>
          </div>
          <div className="flex items-center  mt-4">
            <h3 className="font-bold text-gray-400">
              English Department
            </h3>
          </div>
          <div className='flex space-x-2'>
            <h3 className='font-bold text-gray-400'>$16.48</h3>
            <h3 className='font-bold text-green-700 '>$16.48</h3>
          </div>
        </div>

        <div>
          <Image src="/spoon3.png" alt="Image" width={239} height={280} />
          {/*text-area*/}
          <div>
            <h2 className='font-bold text-black'>Graphic Design</h2>
          </div>
          <div className="flex items-center  mt-4">
            <h3 className="font-bold text-gray-400">
              English Department
            </h3>
          </div>
          <div className='flex space-x-2'>
            <h3 className='font-bold text-gray-400'>$16.48</h3>
            <h3 className='font-bold text-green-700 '>$16.48</h3>
          </div>
        </div>

        <div>
          <Image src="/spoon4.png" alt="Image" width={239} height={280} />
          {/*text-area*/}
          <div>
            <h2 className='font-bold text-black'>Graphic Design</h2>
          </div>
          <div className="flex items-center  mt-4">
            <h3 className="font-bold text-gray-400">
              English Department
            </h3>
          </div>
          <div className='flex space-x-2'>
            <h3 className='font-bold text-gray-400'>$16.48</h3>
            <h3 className='font-bold  text-green-700 '>$16.48</h3>
          </div>
        </div>

      </div>



      <div className='flex gap-5 p-4 justify-center'>
        <div>
          <Image src="/spoon5.png" alt="Image" width={239} height={280} />


          {/*text-area*/}
          <div>
            <h2 className='font-bold text-black'>Graphic Design</h2>
          </div>
          <div className="flex items-center  mt-4">
            <h3 className="font-bold text-gray-400">
              English Department
            </h3>
          </div>
          <div className='flex space-x-2'>
            <h3 className='font-bold text-gray-400'>$16.48</h3>
            <h3 className='font-bold  text-green-700 '>$16.48</h3>
          </div>
        </div>

        <div>
          <Image src="/spoon6.png" alt="Image" width={239} height={280} />
          {/*text-area*/}
          <div>
            <h2 className='font-bold text-black'>Graphic Design</h2>
          </div>
          <div className="flex items-center  mt-4">
            <h3 className="font-bold text-gray-400">
              English Department
            </h3>
          </div>
          <div className='flex space-x-2'>
            <h3 className='font-bold text-gray-400'>$16.48</h3>
            <h3 className='font-bold  text-green-700 '>$16.48</h3>
          </div>
        </div>

        <div>
          <Image src="/spoon1.png" alt="Image" width={239} height={280} />
          {/*text-area*/}
          <div>
            <h2 className='font-bold text-black'>Graphic Design</h2>
          </div>
          <div className="flex items-center  mt-4">
            <h3 className="font-bold text-gray-400">
              English Department
            </h3>
          </div>
          <div className='flex space-x-2'>
            <h3 className='font-bold text-gray-400'>$16.48</h3>
            <h3 className='font-bold  text-green-700 '>$16.48</h3>
          </div>
        </div>

        <div>
          <Image src="/spoon2.png" alt="Image" width={239} height={280} />
          {/*text-area*/}
          <div>
            <h2 className='font-bold text-black'>Graphic Design</h2>
          </div>
          <div className="flex items-center  mt-4">
            <h3 className="font-bold text-gray-400">
              English Department
            </h3>
          </div>
          <div className='flex space-x-2'>
            <h3 className='font-bold text-gray-400'>$16.48</h3>
            <h3 className='font-bold text-green-700 '>$16.48</h3>
          </div>
        </div>

      </div>

      <div className='h-20 w-screen bg-white items-center pl-40 pr-40   flex'>
        <div className='h-10 w-screen  bg-white flex justify-between'>
          <Image src="/brand1.png" alt="brands" width={80} height={30} />
          <Image src="/brand2.png" alt="brands" width={80} height={30} />
          <Image src="/brand3.png" alt="brands" width={80} height={30} />
          <Image src="/brand4.png" alt="brands" width={80} height={30} />
          <Image src="/brand5.png" alt="brands" width={80} height={30} />
          <Image src="/brand6.png" alt="brands" width={80} height={30} />
        </div>
      </div>



      <div className='flex w-screen h-20  p-10 bg-gray-100'>
        <h1 className='font-bold text-2xl'>Bandage</h1>


      </div>

      <div className='bg-white p-10 w-screen h-227 flex gap-20'>
        <div className='font-bold text-gray-500'>
          <h1 className='font-bold text-black'>Company Info</h1>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>

        <div className='font-bold text-gray-500'>
          <h1 className='font-bold text-black'>Legal</h1>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>

        <div className='font-bold text-gray-500'>
          <h1 className='font-bold text-black'>Features</h1>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>

        <div className='font-bold text-gray-500'>
          <h1 className='font-bold text-black'>Resources</h1>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>


        <div className='font-bold text-gray-500'>
          <h1 className='font-bold text-black'>Get in Touch</h1>
          <input type="text" placeholder='Your Email ' className='px-4 py-2 text-gray-900 border-2 border-gray-200' />
          <button className=' bg-blue-500 px-4 py-2 text-white '>Subscribe</button>
          <p className='text-gray-400'>Lore imp sum dolor Amit</p>
        </div>
      </div>

      <div className='h-12 w-screen bg-gray-100 p-10'>
        <h2 className='font-bold text-gray-600'>Made With Love BY Finland All Right Reserved</h2>
      </div>




    </>
  )
}

export default Desktopproduct1

