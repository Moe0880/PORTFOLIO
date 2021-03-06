import React from 'react'
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"

function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-600 text-4xl font-bold cursive tracking-widest">
                        MOE 
                    </NavLink>
                    <NavLink to="/post"
                    activeClassName="text-red-100 bg-red-700"
                    className="inflex-flex py-3 px-3 my-6 rounded text-red-200 hover:text-blue-400 text">
                        Blog Posts 
                    </NavLink>
                    <NavLink to="/project"
                    activeClassName="text-red-100 bg-red-700" 
                    className="inflex-flex py-3 px-3 my-6 rounded text-red-200 hover:text-blue-400 text">
                        Project 
                    </NavLink>
                    <NavLink to="/about"
                    activeClassName="text-red-100 bg-red-700"
                    className="inflex-flex py-3 px-3 my-6 rounded text-red-200 hover:text-blue-400 text">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://github.com/Moe0880" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35,width: 35}}/>
                <SocialIcon url="https://www.linkedin.com/in/moe-soliman/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35,width: 35}}/>
                <SocialIcon url="https://www.facebook.com/moe.soliman" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35,width: 35}}/>
                </div>
            </div>
        </header>
    )
}

export default NavBar
