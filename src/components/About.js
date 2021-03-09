import React from 'react'
import image from "../wall.jpg"

function About() {
    return(<main>
        <img src={image} alt="wall" className="absolute object-cover w-full h-full"/>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-6xl text-black-100 font-bold cursive leading-none lg:leading-snug home-name">
                 <strong>about me</strong>
            </h1>
            
        </section >
        
        
    </main>)
    
}

export default About
