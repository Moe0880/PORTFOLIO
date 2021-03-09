import React from 'react'
import image from "../Wood.jpg"
import Animate from "react-smooth"

function Home() {
    return (
        <main>
            <img src={image} alt="Wood" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                    <Animate to="1" from="0" attributeName="opacity">
                        <div /><em> Got Wood ?</em>
                    </Animate>
                </h1>
            </section >
        </main>
    )
}

export default Home
