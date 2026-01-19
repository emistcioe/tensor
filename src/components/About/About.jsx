import React from 'react'
import { useEffect } from 'react'
import AboutImage from '../../images/assets/AboutImage.png'
import AboutImage2 from '../../images/assets/AboutImage.jpg'
import Team from './Team'
import TeamAlumni from './TeamAlumni'
// import FrequentQuestion from './FrequentQuestion'

//These are the comtents of heading and paragraphs
const whatistensor = 'Tensor is the official Data Science and Artificial Intelligence club of IOE Thapathali Campus, dedicated to fostering innovation, research, and continuous learning in AI, machine learning, and data-driven technologies. Our mission is to create a dynamic platform where students can explore the latest advancements, collaborate on real-world projects, and develop practical skills through hands-on experience. We strive to build a strong community of tech enthusiasts by organizing workshops, competitions, and mentorship programs, empowering members to drive technological progress and make meaningful contributions to the field of AI and data science.';
const titlehead = 'Tensor is the official Data Science and Artificial Intelligence club of IOE Thapathali Campus, dedicated to fostering innovation, research, and continuous learning in AI, machine learning, and data-driven technologies. We aim to bridge the gap between academia and industry by providing students with hands-on experience, real-world projects, and a collaborative learning environment. Tensor serves as a hub for aspiring AI enthusiasts, researchers, and developers who are passionate about solving complex problems using data and computational intelligence. Through workshops, competitions, mentorship programs, and research initiatives, we empower our members to develop practical skills, stay updated with emerging technologies, and contribute meaningfully to the ever-evolving field of AI and data science.';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="overflow-hidden relative">
        <div className="w-[100vw] px-5 xl:px-0 xl:w-width xl:mx-auto pt-10 mb-10 relative z-0">
          {/* blob-1 */}
          <div className="max-sm:w-[300px] max-sm:h-[300px] w-[400px] h-[400px] bg-[#90C3F6] absolute top-10 left-[-20%] max-md:left-[-15%] rounded-customborder animate-change"></div>
          {/* blob-2 */}
          <div className="max-sm:w-[300px] max-sm:h-[300px] w-[400px] h-[400px] bg-[#90C3F6] absolute lg:-bottom-[10px] bottom-[-10px] right-[-15%] rounded-customborder animate-change"></div>
          {/* Begining of About us page  */}
          <h1 className='text-4xl font-extrabold text-center mb-10 relative'>ABOUT US</h1>
          <div className='w-full relative flex items-center max-md:px-5 max-md:flex-col gap-10 mb-12'>
            <img className='max-md:w-full w-1/3 md:hidden lg:block lg:h-[264px] rounded-2xl' src={AboutImage} alt="" />
            <div className='w-auto flex flex-col gap-5'>
              <h1 className='text-4xl max-md:text-center md:text-5xl font-medium'>What is <span className='text-[#1360A5]' >Tensor</span>?</h1>
              <p className='leading-7 text-justify'>{whatistensor}</p>
            </div>
          </div>
          <h1 className='text-4xl relative max-md:text-center md:text-5xl font-medium mb-5'>OUR MISSION</h1>
          <div className='w-full relative flex flex-row-reverse items-center max-md:flex-col gap-10 mb-12'>
            <img className='w-1/3 max-lg:hidden h-[230px] rounded-2xl' src={AboutImage2} alt="" />
            <div className='w-auto flex flex-col gap-5'>
              <p className='leading-7 max-md:px-5 text-justify'>{titlehead}</p>
            </div>
          </div>
          <Team />
          <TeamAlumni />
        </div>
        {/* <h1 className=' z-0 text-6xl text-center font-AboutTeamFontWeight mb-10'>FREQUENT ASKED QUESTION</h1> */}
        {/* <FrequentQuestion></FrequentQuestion>  */}
      </div>
    </>
  )
}

export default About