import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import gallery from "../../constants/gallery"

const HomeEvents = () => {
    const photos = gallery.find(item => item.title === 'School Visit').photos
    const [totalStds, setTotalStds] = useState(1)
    const [totalSchools, setTotalSchools] = useState(1)
    const divContainer = useRef(null)
    const divRef = useRef(null)
    const divImage = useRef(null)

    const incrementor = () => {
        const incrementStds = setInterval(() => {
            setTotalStds((prev) => {
                if (prev === 273) {
                    clearInterval(incrementStds)
                    return prev
                }
                return prev + 1
            })
        }, 10) // increment after each 10ms
        const incrementSchools = setInterval(() => {
            setTotalSchools((prev) => {
                if (prev === 2) { clearInterval(incrementSchools); return prev }
                return prev + 1
            })
        }, 1000) // increment after each 1s 
    }

    useEffect(() => {
        let width = divContainer.current.offsetWidth
        let temp = width // to store the original width of the image
        let numberOfImages = photos.length
        let count = 1
        let increasingOrder = true // for pendulum effect (Left->Right, Right->Left)
        setInterval(() => { // this is for sliding effect of images every 3 sec
            if (divContainer.current) { divImage.current.style.transform = `translateX(-${width}px)` }
            if (increasingOrder){ width += temp;count++ } 
            else {width -= temp;count--}
            if (count === numberOfImages) { increasingOrder = false; width -= 2*temp}
            if (count === 1) { increasingOrder = true; width += 2*temp}
        }, 3000)
        // this is for number increment effect
        const target = divRef.current
        if (!target) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    incrementor()
                }
            },
            { threshold: 0.75 } // trigger after 75% visibility of div
        )
        observer.observe(target)
        return () => {
            observer.unobserve(target)
        }
    }, [photos.length])

    return (
        <>
            <h1 className="text-4xl font-extrabold text-center">RECENT EVENTS</h1>
            <div className="w-[90vw] xl:w-width mx-auto flex items-center justify-center gap-10 max-lg:flex-col">
                <div ref={divContainer} className="max-sm:w-[310px] sm:w-[450px] xl:w-[510px] rounded-lg overflow-hidden">
                    <div ref={divImage} className="flex items-center duration-1000">
                        {photos.map((photo, index) => {
                            return (
                                <img key={index} className="aspect-[4/3]" src={photo} alt="" />
                            )
                        })}
                    </div>
                </div>
                <div className="w-[75vw] lg:w-1/2 flex flex-col items-center justify-center gap-3">
                    <h1 className="text-4xl text-blue-900 font-bold">
                        SCHOOL VISIT
                    </h1>
                    <div className="max-sm:text-sm text-justify text-base xl:text-lg">
                        Tensor recently conducted insightful and engaging session on <b>“Discovering the World of AI and ML”</b> at one of the prestigious school <b>Durbar High School</b> and <b>Kathmandu Global School</b> specifically designed for <b>Grade 9 and 10 studnets</b>, aimed at introducing the basics of Artificial Intelligence and Machine Learning to students in a fun, interactive, and approachable way. <br />
                        So far, Tensor has successfully conducted workshops in two schools, receiving positive feedback from both students and teachers. The team is now actively working to reach many more schools in the near future, aiming to build a more informed and AI-ready generation.
                    </div>
                    <NavLink
                        className='w-[110px] p-2 text-white text-center bg-[#2176c0] rounded-lg shadow-[5px_5px_0_black] duration-75 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_black]'
                        to={'/events'}>
                        Other Events
                    </NavLink>
                </div>
            </div>
            <div className='w-full h-[175px] bg-[#E0EDFA] mb-10'>
                <div ref={divRef} className="w-auto xl:w-width mx-auto h-full flex items-center justify-around">
                    <div className="flex items-center justify-center flex-col">
                        <div className="text-2xl sm:text-4xl font-extrabold text-blue-900">{totalSchools}</div>
                        <div className="text-base sm:text-2xl">SCHOOLS VISITED</div>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <div className="text-2xl sm:text-4xl font-extrabold text-blue-900">{totalStds}</div>
                        <div className="text-base sm:text-2xl">STUDENTS INSPIRED</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeEvents