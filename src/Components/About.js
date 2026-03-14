import React from 'react';
import Img from '../Assets/img.jpg';
import '../Components/About.css';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return ( <
        section id = "about" >
        <
        h5 > Get To Know < /h5> <
        h2 > About Me < /h2>

        <
        div className = "container about_container" >
        <
        div className = "about_me" >
        <
        div className = "about_me_img" >
        <
        img src = { Img }
        alt = "img" / >
        <
        /div> <
        /div>

        <
        div className = "about_content" >
        <
        div className = "about_cards" >
        <
        article className = "about_card" >
        <
        FaAward className = "about_icon" / >
        <
        h5 > Experience < /h5> <
        small > Entry Level Developer < /small> <
        /article>

        <
        article className = "about_card" >
        <
        VscFolderLibrary className = "about_icon" / >
        <
        h5 > Projects < /h5> <
        div > < small > JOB PORTAL < /small></div >
        <
        div > < small > POS SYSTEM < /small></div >
        <
        div > < small > WEATHER APP < /small></div >
        <
        div > < small > GREEN LEASE PLATFORM < /small></div >
        <
        div > < small > ONLINE COURSE BOOKER < /small></div >
        <
        div > < small > PERSONAL EXPENSE TRACKER < /small></div >
        <
        div > < small > EMPLOYEE LEAVE MANAGEMENT SYSTEM < /small></div >

        <
        /article> <
        /div>

        <
        p className = "about-me-text" >
        Aspiring Full Stack Developer with knowledge of modern web development technologies including HTML, CSS, JavaScript, React, Bootstrap, Java, Spring Boot, PHP, and MySQL.I enjoy building complete web applications by combining responsive user interfaces with efficient backend logic and database management.Through projects like an Employee Leave Management System, Personal Expense Tracker, and POS System, I have gained hands - on experience in developing practical web solutions and continuously improving my development skills. <
        /p>

        <
        a href = "#contact"
        className = "btn btn-primary" > Let 's Talk</a> <
        /div> <
        /div> <
        /section>
    );
};

export default About;