import React from 'react'
import Img from '../Assets/img.jpg'
import '../Components/About.css'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return ( <
        section id = "about" >
        <
        h5 > Get To Know < /h5> <
        h2 > About Me < /h2> <
        div className = 'container about_container' >
        <
        div className = 'about_me' >
        <
        div className = 'about_me_img' >
        <
        img src = { Img }
        alt = 'img' / >
        <
        /div>

        <
        /div> <
        div className = 'about_content' >
        <
        div className = 'about_cards' >
        <
        article className = 'about_card' >
        <
        FaAward className = 'about_icon' / >
        <
        h5 > Experience < /h5> <
        small > Fresher < /small> <
        /article>

        <
        article className = 'about_card' >
        <
        VscFolderLibrary className = 'about_icon' / >
        <
        h5 > Projects < /h5>

        <
        div >
        <
        small > JOB PORTAL < /small> <
        /div> <
        div >
        <
        small > WEATHER APP < /small> <
        /div> <
        div >
        <
        small > BMI CALCULATOR < /small> <
        /div> <
        div >
        <
        small > GREEN LEASE PLATFORM < /small> <
        /div> <
        div >
        <
        small > ONLINE COURSE BOOKER < /small> <
        /div>


        <
        /article> <
        /div> <
        p className = "about-me-text" >
        As an aspiring UI / UX designer, I am exploring the world of user - centered design and discovering how to craft intuitive digital experiences.I am familiar with tools such as Figma,
        Canva, and Adobe XD, and I am developing basic skills in
        wireframing, prototyping, and layout planning.I enjoy analyzing user interactions, experimenting with design ideas, and shaping interfaces that are clear, engaging, and accessible. <
        /p> <
        a href = '#contact'
        className = 'btn btn-primary' > Let 's Talk</a> <
        /div> <
        /div>

        <
        /section>
    )
}

export default About