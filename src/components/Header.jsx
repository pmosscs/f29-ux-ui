import React from "react";
import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
            <h2>CSS</h2>
            <nav>
                <Link to="">
                    <button>Home</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;