import React from "react"

function Profileobj(props)
{
    return (
        <div className="Profileobj">
            <img src={props.profile.imgURL} height = {150} width = {150}/>
            <h3>{props.profile.name}</h3>
            <h4>{props.profile.user}</h4>
            <button>Add!</button>
            <hr/>   
        </div>
    )
}

export default Profileobj