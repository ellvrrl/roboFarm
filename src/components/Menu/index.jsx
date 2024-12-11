"use client"

import React from 'react'
import Image from 'next/image'
import roboFarm from '../../../public/garduino.webp'
import Link from 'next/link'

const Menu = () => {
  return (
        <div>
            <div className='flex md:flex-row flex-col justify-between items-center md:px-10 px-4 md:p-8 py-4 gap-4'>
                <div className='bg-white md:w-[50%] w-full md:h-[80vh] h-[80vh] md:rounded-3xl rounded-2xl'>
                    <div className='flex flex-col gap-12 px-8 py-4'>
                            <div>
                                <div className='flex flex-row justify-between items-center md:p-2 md:gap-2 bg-white md:w-[30%] w-[42%]'>
                                    <h1 className='font-normal md:text-base text-xs'>Powered By</h1>
                                    <div className='border-black border rounded-full md:py-2 py-1 md:px-4 px-2'>
                                        <h1 className='font-semibold md:text-base text-xs'>roboFarm</h1>
                                    </div>
                                </div>
                            </div>

                            {/* headline-text */}

                            <div className='px-4'>
                                <div className='text-4xl md:text-7xl font-semibold flex flex-col gap-2'>
                                    <h1>Smart Garden,</h1>
                                    <h1>Big Harvest</h1>
                                    <div className='flex flex-row gap-4'>
                                        <h1>with</h1>
                                        <h1 className='text-primaryGreen'>roboFarm</h1>
                                    </div>
                                </div>
                            </div>

                            {/* card-data0 */}

                            <div className='flex flex-row justify-between items-center md:gap-4 gap-2'>
                                <div className='flex flex-col justify-between md:w-[50%] h-[30vh] md:h-[30vh] bg-primaryGrey rounded-xl md:rounded-2xl p-9'>
                                    <div>
                                        <h1 className='text-xl md:text-3xl font-semibold'>Persentase</h1>
                                        <h1>Kelembapan</h1>
                                    </div>
                                    {/* button */}
                                    <div>
                                        <div className='md:w-[50%] w-full h-[42px] md:text-base text-sm rounded-lg hover:bg-transparent bg-black text-white hover:text-black flex justify-center items-center border-2 hover:border-black transition-all'>
                                            <Link href="/Persentase">Check Details</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-between md:w-[50%] h-[30vh] md:h-[30vh] bg-primaryGrey rounded-xl md:rounded-2xl p-9'>
                                    <div>
                                        <h1 className='text-xl md:text-3xl font-semibold'>Pompa</h1>
                                        <h1>Air</h1>
                                    </div>
                                    {/* button */}
                                    <div>
                                        <div className='md:w-[50%] w-full h-[42px] md:text-base text-sm rounded-lg hover:bg-transparent bg-black text-white hover:text-black flex justify-center items-center border-2 hover:border-black transition-all'>
                                            <Link href="/Persentase">Check Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>


                {/* section kanan */}
                <div className='md:w-[50%] w-full h-[80vh] rounded-3xl'>
                    <div className='flex flex-col justify-between gap-4'>
                        <Image src={roboFarm} alt='roboFarm' width={4000} height={3000} className='w-full md:h-[40vh] h-[20vh] rounded-2xl object-cover'></Image>
                        <div className='flex flex-col justify-between items-center gap-4'>
                            <div className='bg-white w-[100%] h-[340px] rounded-2xl'>

                                {/* ganti source vid */}
                                    <iframe src="https://www.youtube.com/embed/19g66ezsKAg" width={'100%'} height={'100%'} allowFullScreen className='rounded-xl'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Menu