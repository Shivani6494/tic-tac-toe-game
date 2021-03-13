import React from 'react'
import "./style.css";


const Square  = ({value,onClick}) => {
    return (
        <div >
            <button className="button" onClick={onClick} >{value}</button>
        </div>
    )
}
export default Square;
