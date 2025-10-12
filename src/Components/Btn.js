import React from 'react'
import CV from '../Assets/Charuuiux.pdf'

const Btn = () => {
    return ( <
        div className = 'btn_main' >
        <
        a href = { CV }
        download className = 'btn btn-secondary' > Download CV < /a> <
        a href = '#contact'
        className = 'btn btn-primary' > Let 's Talk</a>

        <
        /div>
    )
}

export default Btn