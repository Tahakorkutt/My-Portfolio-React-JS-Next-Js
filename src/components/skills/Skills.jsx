import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Skills.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Skills = () => {
    return (
        <section id='skills' className='skills-wrapper '>
            <div className="skills-container p-5">
                <h1 className='text-center text-white'>Skills</h1>
                <h6 className='skills-subTitle text-center mb-5'>Backend Developer and Graphic Design skills
                                            </h6>
                <Carousel responsive={responsive}>
                    
                                    
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Html
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Css
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        TailwindCss
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Bootstrap
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        SASS
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        React JS
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Next JS
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        JavaScript
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Node JS
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Express JS
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Redux
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        MangoDb
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        SQL
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Postman
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Figma 
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Adobe XD 
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Adobe XD 
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        My graphic designer skills
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Adobe Illustrator
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Adobe Photoshop
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Adobe Photoshop
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Adobe Indesign
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Adobe Premire Pro
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Adobe After Effects
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Blender
                    </div>
                    <div className='corousel-item d-flex flex-column align-items-center '>
                        <img src="/images/meter1.svg" alt="" />
                        Cinema 4d

                    </div>
                    



                </Carousel>
            </div>
        </section>
        
    )
}

export default Skills
