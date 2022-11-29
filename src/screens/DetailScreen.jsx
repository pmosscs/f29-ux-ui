import axios from "axios";
import Reactx, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function DetailScreen () {
    const {id} = useParams();
    const [data, setData] = useState({})

    useEffect (() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
    },[])
    return (
        <div className="main-screen">
            <h1>detail</h1>
            <h2>{data.name}</h2>
        </div>
    )
}

export default DetailScreen;