import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {

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
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>

            <div className="navbar__items">
                {active !== 'About' &&
                    <Link to="/">
                        <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                    </Link>
                }
                {active !== 'Resume' ?
                    <Link to="/resume">
                        <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                    </Link> : null
                }

                {active !== 'Blog' &&
                    <Link to="/Blog">
                        <div className="navbar__item" onClick={() => setActive('Blog')}>Blog</div>
                    </Link>
                }
            </div>

        </div>
    );
};

export default Navbar;