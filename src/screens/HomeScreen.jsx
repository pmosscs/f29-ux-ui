import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function HomeScreen () {
    const searchRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/detail/${searchRef.current.value}`)
    }
    return (
        <div className="main-screen">
            <h1>Home</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={searchRef} />
                <button>Search</button>
            </form>

        </div>
    )
}

export default HomeScreen