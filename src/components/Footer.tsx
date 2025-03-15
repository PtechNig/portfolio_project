import React from 'react'
import NavBar from './nav'


const images = [
    '/assets/Frame-1.svg',
    '/assets/Frame-2.svg',
    '/assets/Frame-3.svg',
    '/assets/Frame-4.svg',
]
const Footer = ({ scrollToSection, heroRef, aboutRef, workRef, contactRef }) => {
    return (
        <div className='h-[50vh] flex justify-center items-center relative' >
            <div className='flex flex-col justify-center items-center text-white w-[80%] mx-auto p-20'>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-wrap gap-5'>
                             <ul className='flex flex-wrap gap-3'>
                            <li className="flex justify-center items-center gap-2 py-1 px-3 rounded-md cursor-pointer hover:text-[#00ADB5] duration-500"
                                onClick={() => scrollToSection(heroRef)}>
                                <img src="/assets/home.svg" alt="" className='w-4 h-4' />Home</li>
                            <li className="flex justify-center items-center gap-2 py-1 px-3 rounded-md cursor-pointer hover:text-[#00ADB5] duration-500"
                                onClick={() => scrollToSection(aboutRef)}>
                                <img src="/assets/user.svg" alt="" className='w-4 h-4' />About Me</li>
                            <li className="flex justify-center items-center gap-2 py-1 px-3 rounded-md cursor-pointer hover:text-[#00ADB5] duration-500"
                                onClick={() => scrollToSection(workRef)}>
                                <img src="/assets/user.svg" alt="" className='w-4 h-4' />
                                Work</li>
                            <li className="flex justify-center items-center gap-2 py-1 px-3 rounded-md cursor-pointer hover:text-[#00ADB5] duration-500"
                                onClick={() => scrollToSection(contactRef)}>
                                <img src="/assets/call.svg" alt="" className='w-4 h-4' />Contact</li>
                        </ul>
                    </div>
                    <div className='flex gap-3 justify-center items-center'>
                        {
                            images.map((image, index) => {
                                return (
                                    <img src={image} key={index} alt="icon" className='w-7 h-7  ' />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-end mt-20 text-[#EEEEEEBF] items-end absolute bottom-3 right-20'>
                    <span className='cursor-pointer duration-500 hover:text-[#acacacbf]'>Terms of Service - Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
