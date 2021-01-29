import { Typography } from '@material-ui/core'
import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <div className="footer">
          <div className="footer_left">
            <Typography className="footer_name"></Typography>
          </div>
          <div className="footer_right">
            <Typography className="footer_copyright">
                Designed and Developed by <a href="/" target="_blank"> Himanjan Pati </a>
            </Typography>
          </div>
        </div>
       
    )
}

export default Footer
