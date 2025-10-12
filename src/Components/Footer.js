import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

import { IoLogoTwitter } from 'react-icons/io'
import '../Components/Footer.css'

const Footer = () => {
    return ( <
        footer >
        <
        a href = '#'
        className = 'footer_logo' > CHARUMATHI < /a> <
        ul className = 'permalinks' >
        <
        li > < a href = '#' > Home < /a></li >
        <
        li > < a href = '#about' > About < /a></li >
        <
        li > < a href = '#expeirence' > Expeirence < /a></li >
        <
        li > < a href = '#services' > Services < /a></li >

        <
        li > < a href = '#contact' > Contact < /a></li >

        <
        /ul> <
        div className = 'footer_socials' >
        <
        a href = 'mailto:charumathir44@gmail.com'
        target = '_blank' > < MdOutlineEmail / > < /a> <
        a href = 'https://www.linkedin.com/in/charumathi-r-aa10b7298'
        target = "_blank" > < BsLinkedin / > < /a>

        <
        /div> <
        div className = 'footer_copyright' >
        <
        small > & copy; CHARUMATHI < /small> <
        /div> <
        /footer>
    )
}

export default Footer