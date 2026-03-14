import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
    return ( <
        div className = 'header-socials' >
        <
        a href = 'https://www.linkedin.com/in/charumathi-r-aa10b7298'
        target = "_blank" > < BsLinkedin / > < /a>  <
        a href = 'mailto:charumathir44@gmail.com'
        target = '_blank' > < MdOutlineEmail / > < /a>  <
        a href = 'https://github.com/charumathi349'
        target = "_blank" > < BsGithub / > < /a>  <
        /div>
    )
}

export default HeaderSocials;