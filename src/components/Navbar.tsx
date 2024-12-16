import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <div className='w-screen flex justify-center'>
      <div className='w-[90%] h-[60px] bg-white flex items-center justify-between '>
        <div className='flex items-center gap-28'>
          <h3 className='font-brandName text-dark-50 font-[700] text-2xl'>Bandage</h3>
          <ul className='flex items-center gap-[20px] h-[25px] mt-1'>
            {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map(link => <Link key={link} className="font-brandName text-sm text-[700] text-gray-500 font-bold hover:text-gray-800 flex gap-2 items-center"
              href="#">{link} {link === "Shop" && <Image src={"/drop.png"} alt='none' width={10} height={10} className='w-3 h-2 relative top-[1px]' />}</Link>)}
          </ul>
        </div>
        <Image src="/navbar-nav.png" alt='navbar icons' width="324" height="54" className='pt'></Image>
      </div>
    </div>
  )
};

export default Navbar
