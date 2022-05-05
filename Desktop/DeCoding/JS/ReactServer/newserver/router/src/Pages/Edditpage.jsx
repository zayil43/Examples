import React from 'react'
import {useParams} from 'react-router-dom'

const Edditpage = () => {
    const {id} = useParams(); 
    
    
    return (
    <div>
        <h1>Eddit post {id}</h1>
    </div>
)
}

export default Edditpage