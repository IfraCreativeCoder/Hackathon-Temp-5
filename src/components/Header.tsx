import React from 'react';
import Image from 'next/image';


export default function Header(props: { bgColor?: string }) {
  return (
    <div className={`w-screen flex justify-center h-[50px] ${props.bgColor === "green" ? "bg-[rgb(35,133,109)] px-28" : "bg-[#1a1a2e]"}`}>
      {/* Top bar */}
      <div style={{ color: 'white', fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='w-[90%]'>
        <div className='flex gap-3'>
          <div className='flex gap-2'>
            <Image src="/call.png" alt='call icons' width="16" height="16" className='flex' />
            <span style={{ marginRight: '15px' }}>(225) 555-0118</span>
          </div>
          <span>✉️ michelle.rivera@example.com</span>
        </div>
        <span style={{ marginRight: '20px' }} className='items-center'>Follow Us and get a chance to win 80% off</span>
        <div className='flex'>
          <span className='flex gap-4'>
            Follow Us :
            <Image src="/socialmedia.png" alt='socialmedia icons' width="120" height="26"></Image>
          </span>
        </div>
      </div>
    </div>
  )
};

