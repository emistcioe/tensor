import {NavLink} from 'react-router-dom'
import { useEffect } from 'react'
import Lottie from 'lottie-react'; //needed for applicationClosedGIF to run
import machineLearning from '../../images/assets/machinelearning.json'
import placeHolderImage from "../../images/assets/PlaceHolderImage.png"
import HomeEvents from "./HomeEvents"
import HomeTestimonialsTemplate from "./HomeTestimonialsTemplate"
// import HomeSponsor from './HomeSponsor'

const Home = () => {
  useEffect(() => { // to scroll to the top of the page when this component is mounted
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden flex flex-col gap-7">
      <div className="homeinfo">
        <div className="w-full h-nonavbarheight flex items-center justify-center">
          <div className="w-full px-6 xl:px-0 md xl:w-width flex max-lg:flex-col-reverse max-lg:items-center">
            <div className="max-sm:w-[80vw] max-lg:w-[65vw] w-1/2 flex flex-col gap-4 justify-center">
              <h1 className="max-sm:text-3xl text-5xl font-extrabold">Tensor <span className="text-blue-900"> - Headline</span></h1>
              <div className="max-sm:text-sm text-justify text-base xl:text-lg">
                Welcome to Tensor IOE Thapathali, a community where innovation meets passion. Here, we are dedicated to empowering students with the skills and knowledge to excel in the dynamic field of data engineering. Our club brings together like-minded individuals who are eager to learn, explore and create.
              </div>
              <NavLink className='w-[100px] p-2 text-white text-center bg-[#2176c0] rounded-lg shadow-[5px_5px_0_black] duration-75 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_black]' to={'/about'}>Learn More</NavLink>
            </div>
            <div className="max-sm:w-[75vw] max-lg:w-[65vw] w-1/2 flex items-center justify-center relative">
              <Lottie className='w-full aspect-square' animationData={machineLearning} loop={true} autoplay={true} />
              {/* blob */}
              <div className="w-[450px] max-md:w-[400px] max-sm:w-[250px] aspect-square bg-[#90C3F6] absolute left-49 z-[-1] rounded-customborder animate-change"></div>
            </div>
          </div>
        </div>
        <div className='w-full h-[300px] bg-[#E0EDFA] flex items-center justify-center gap-12 max-md:gap-5 px-7 '>
          <img className='max-sm:hidden sm:w-[280px] md:w-[300px] xl:w-[320px] aspect-video rounded-xl opacity-100' src={placeHolderImage} alt="placeholderimg" />
          <div>
            <h1 className='text-3xl font-bold'>What is <span className='text-blue-900'>Tensor?</span></h1>
            <div className="w-full text-justify text-base md:w-[400px]">Tensor is the official data science and artificial intelligence club of IOE Thapathali Campus, dedicated to fostering innovation, research, and learning in AI, machine learning, and data-driven technologies.</div>
          </div>
        </div>
      </div>
      <HomeEvents />
      <HomeTestimonialsTemplate />
      {/* <HomeSponsor /> */}
    </div>
  )
}

export default Home