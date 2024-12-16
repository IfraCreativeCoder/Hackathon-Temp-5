import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>

      <div className='flex w-screen h-20  p-10 bg-gray-100'>
        <h1 className='font-bold text-2xl'>Bandage</h1>
        <Image src="/social med.png" alt="social media" width={112} height={24}></Image>
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

export default Footer
