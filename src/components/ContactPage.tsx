import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ContactPage() {
    return (
        <div>
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

            <div className='w-screen h-[700px] bg-white flex bg-cover bg-no-repeat bg-center p-10 items-center space-2xl' style={{
                backgroundImage: "url(/contact.png)",
            }}>
                {/*text-area */}
                <div className=''>
                    <p className='font-bold text-black text-2xl'>Contact us</p>
                    <h1 className='font-bold text-6xl text-black mt-5 leading-snug'>Get in touch <br /> today!</h1>
                    <p className='font-bold text-gray-400 mt-5 text-xl'>We know how large object will act,</p>
                    <p className='font-bold text-gray-400 text-xl'>but things on a small scale</p>
                    <p className='font-bold my-4'>Phone ; +451 215 215 </p>
                    <p className='font-bold'>Fax : +451 215 215</p>
                    <div className='flex gap-4 mt-4'>
                        <Image src={"/li.png"} alt='icon' width={25} height={25} />
                        <Image src={"/fb1.png"} alt='icon' width={25} height={25} />
                        <Image src={"/in.png"} alt='icon' width={25} height={25} />
                        <Image src={"/tw1.png"} alt='icon' width={25} height={25} />
                    </div>
                </div>
                {/*Image */}
                {/* <div className=''>
                      <Image src="/none.png" alt="image" width={387} height={440} />
                    </div> */}
            </div>

            <div className='p-4 items-center justify-center flex'>
                <div className='text-center'>
                <p className='text-zinc-800 font-bold text-xl'>visit our office</p>
                <h1 className='font-bold text-4xl text-black'>We help small businesses</h1>
                <h1 className='font-bold text-4xl text-black'>with big ideas</h1>
                </div>
            </div>


            {/*Parent div of tick mark card */}
            <div className='flex  justify-center m-10'>
                <div className=' flex'>
                    <div className='w-[300px] min-h-[10rem] bg-white rounded-md border-2 border-blue-400 p-8 text-center'>
                     <Image src="/icon-call.png" alt="none" width={72} height={72} className='ml-20'></Image>
                     <p className='text-black font-bold pt-3'>georgla.young@example.com</p>
                    <p className='text-black font-bold'>georgla.young@ple.com</p>

                     {/*for numbers align */}
                    <div className='flex gap-2 p-3 items-center justify-center'>
                            <p className='font-bold text-black text-xl pt-3'>Get Support</p>
                        </div>
                        
                    <button className='rounded-full p-3 border-2 border-blue-600 text-blue-600'>Submit Request</button>

                    </div>
                </div>

                <div className='flex'>
                    <div className='w-72 min-h-[20rem] scale-[1.1] mx-2 bg-blue-900 rounded-md border-2 border-blue-400 p-8 text-center'>
                    <Image src="/icon-map.png" alt="none" width={72} height={72} className='ml-20'></Image>
                        <p className='text-white font-bold pt-3'>georgla.young@example.com</p>
                        <p className='text-white font-bold'>georgla.young@ple.com</p>

                        {/*for numbers align */}
                        <div className='flex gap-2 p-3 items-center justify-center'>
                            <p className='font-bold text-white text-xl pt-3'>Get Support</p>

    
                        </div>
                        <button className='rounded-full p-3 border-2 border-blue-600 text-blue-600'>Submit Request</button>


                    </div>
                </div>

                <div className='flex'>
                    <div className='w-[300px] min-h-[10rem] bg-white rounded-md border-2 border-blue-400 p-8 text-center'>
                    <Image src="/icon-msg.png" alt="none" width={72} height={72} className='ml-20'></Image>
                        <p className='text-black font-bold pt-3'>georgla.young@example.com</p>
                        <p className='text-black font-bold'>georgla.young@ple.com</p>

                        {/*for numbers align */}
                        <div className='flex gap-2 p-3 items-center justify-center'>
                            <p className='font-bold text-black text-xl pt-3'>Get Support</p>
                           
                        </div>
                        <button className='rounded-full p-3 border-2 border-blue-600 text-blue-600'>Submit Request</button>
                       
                    </div>
                </div>
            </div>

            <div className='p-14 items-center justify-center flex'>
                <div className='text-center '>
            <Image src="/Arrow 2.png" alt='none' width={72.56} height={21.84} className='ml-20 '></Image>
                <p className='text-xl text-black font-bold pt-2'>we can&apos;t wait to meet you</p>
                <h1 className='text-4xl text-black font-bold p-4'>Let&apos;s Talk</h1>
                <button className='font-bold text-sm text-white bg-blue-400 p-4 rounded-md '>Try it free now</button>

                </div>
            </div>

        </div>
    )
}

export default ContactPage
