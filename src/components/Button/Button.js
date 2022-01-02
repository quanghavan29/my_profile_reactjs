import { Button } from '@material-ui/core'
import React from 'react'

import './Button.css'

const CustomButton = ({text, icon, onClick}) => {
    return (
        <Button className="custom_btn" 
            endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
            onClick={onClick}>
            <span className="btn_text">{text}</span>
        </Button>
    )
}

export default CustomButton
