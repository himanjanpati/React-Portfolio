import React, { useState, useEffect }  from "react";
import {Link } from "react-router-dom";

import Resumedata from './Resumedata';


import '../index.css';


const Header = () => {

  const [active, setActive] = useState('')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('About');
        else if (currentURL.endsWith('/Blog'))
            setActive('Blog')
        else if (currentURL.endsWith('/resume'))
            setActive('Resume')

    }, [active])


  return (
    <div className="app_header">
    <div className="navbar__active">
        {active}
    </div>

    <div className="navbar__items">
        {active !== 'About' &&
            <Link to="/">
                <div className="header_link" onClick={() => setActive('About')}>About</div>
            </Link>
        }
        {active !== 'Resume' ?
            <Link to="/resume">
                <div className="header_link" onClick={() => setActive('Resume')}>Resume</div>
            </Link> : null
        }
    </div>

    <div className="header_right">
          {Object.keys(Resumedata.socials).map((key) => (
            <a href={Resumedata.socials[key].link} target="_blank">
              {Resumedata.socials[key].icon}
            </a>
          ))}
        </div>

</div>
  
    
  
  );
};

export default Header;
