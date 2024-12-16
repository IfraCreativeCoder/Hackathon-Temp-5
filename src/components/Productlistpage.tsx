import Image from 'next/image'
import Header from './Header'
import Navbar from './Navbar'
import Cards from './Cards'

function Productlistpage() {

  return (
    <>
      {/*Product Navbar */}

      <Header bgColor='green' />
      <Navbar />

      <div className='h-20 w-screen bg-white items-center pl-40 pr-40 flex '>
        <div className='h-10 w-screen bg-white flex items-center gap-2 p-4 justify-between'>
          <div className='flex'>
            <h1 className='font-bold text-2xl'>Shop</h1>
          </div>
          <div className='flex'>
            <p className='font-bold'>Home</p>
            <Image src="/Vector.png" alt="vector" width={8.62} height={16} />
            <p className='font-bold text-gray-400'>Shop</p>
          </div>
        </div>
      </div>



      <div className='items-center flex justify-center py-10'>
        <div className='flex gap-3'>
          <Image src="/card-item1.png" alt="card" width={205} height={223} />
          <Image src="/card-item2.png" alt="card" width={205} height={223} />
          <Image src="/card-item3.png" alt="card" width={205} height={223} />
          <Image src="/card-item4.png" alt="card" width={205} height={223} />
          <Image src="/card-item5.png" alt="card" width={205} height={223} />
        </div>
      </div>


      <div className='h-12 w-screen bg-white pl-40 pr-40 flex items-center justify-between pt-10 pb-10'>
        <div>
          <p className='text-gray-400 font-bold '>Show all 12 results</p>

        </div>
        <div className='flex gap-2'>
          <p className='text-gray-400 font-bold pt-1'>views:</p>
          <Image src="/window.png" alt="Twitter" width={90} height={40} />
        </div>
        <div className='flex gap-3'>
          <button className=' bg-white px-4 py-2 text-gray-400 rounded-md'>Popularity</button>
          <button className=' bg-blue-500 px-4 py-2 text-white rounded-md'>Filter</button>
        </div>
      </div>


      <div className='h-20 w-screen bg-white items-center pl-40 pr-40   flex'>
        <div className='h-10 w-screen  bg-white flex justify-between'>
          <Image src="/brand1.png" alt="brands" width={70} height={30} />
          <Image src="/brand2.png" alt="brands" width={70} height={30} />
          <Image src="/brand3.png" alt="brands" width={70} height={30} />
          <Image src="/brand4.png" alt="brands" width={70} height={30} />
          <Image src="/brand5.png" alt="brands" width={70} height={30} />
          <Image src="/brand6.png" alt="brands" width={70} height={30} />
        </div>
      </div>

      <Cards />

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




      <div className='h-20 w-screen bg-white  flex items-center justify-center'>
        <button className='text-gray-300 font-bold bg-white p-3 text-sm border-2 border-gray-300 '> First</button>
        <button className='text-blue-400 font-bold bg-white pt-3 pb-3 pr-3  pl-3 border-2 border-gray-300'>1</button>
        <button className='text-white font-bold bg-blue-400 pt-3 pb-3 pr-3  pl-3 border-2 border-gray-300'>2</button>
        <button className='text-blue-400 font-bold bg-white pt-3 pb-3 pr-3  pl-3 border-2 border-gray-300'>3</button>
        <button className='text-blue-400 font-bold bg-white p-3 text-sm border-2 border-gray-300'>Next</button>
      </div>

    </>
  )
}

export default Productlistpage


