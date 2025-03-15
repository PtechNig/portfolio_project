import React, { useState } from 'react'

const About = () => {

  const [visible, setVisible] = useState(false)

  return (
    <div className='container mx-auto px-10 md:justify-center grid mb-20 lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 justify-between items-center h-screen '>
      <div className='lg:w-3/5 md:w-full sm:w-full relative'>
        <div>
        <img src="/assets/about-music.svg" alt="about" className='absolute -top-28'/>

        <h1 className='text-white text-5xl font-bold mb-5'>About <span className='text-[#00ADB5]'>me</span></h1>
        <img src="/assets/about-lightbulb.svg" alt="about" className='absolute right-20 h-14 top-0' />
        </div>
        <p className='text-white'>
        I am a passionate Full-Stack MERN Developer with expertise in building scalable and dynamic web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I create seamless user experiences and efficient backend systems. Additionally, I have experience with Next.js, enhancing performance and SEO for web applications.....{!visible && <span className='font-bold cursor-pointer text-[#00ADB5]' onClick={() => setVisible(true)}> Read more </span>}
        </p>
        { 
          visible && (<p className='text-white'>
        I thrive on solving complex problems, optimizing performance, and continuously learning new technologies. Whether developing RESTful APIs, implementing state management, or deploying full-stack applications, I bring a detail-oriented and innovative approach to every project.
        <br />
        Let's build something amazing together!
        <span className='font-bold cursor-pointer text-[#00ADB5]' onClick={() => setVisible(false)}> Read less </span>
        </p>) }
        <img src="/assets/about-arrow.svg" alt="about" className='absolute right-20 h-20 -bottom-28' />

      </div>
      <div className='relative box-border'>
        <img src="/assets/about-bg.svg" alt="about" />
        <img src="/assets/about-image.svg" alt="about" className='absolute -bottom-0 ' />
      </div>
    </div>
  )
}

export default About
