import React from 'react';
import {Button} from '@material-ui/core';

import '../index.css';

const CustomButton = ({icon, text}) => {
    return (
        <div>
            <Button className="custom_btn" endIcon={icon? <div className="button_icon_container">{icon}</div>: null}>
                <span className="btn_text">{text}</span>
            </Button>
        </div>
    )
}


const Hireme = () => {
    window.open("mailto:himanjan.pati@outlook.com");
  };

const HiremeBtn = ({icon, text}) => {
    return (
        <div>
            <Button className="custom_btn" endIcon={icon? <div className="button_icon_container">{icon}</div>: null} onClick={Hireme}>
                <span className="btn_text">{text}</span>
            </Button>
        </div>
    )
}

export default CustomButton;
export {HiremeBtn};
