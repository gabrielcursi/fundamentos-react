import React from 'react'
import "./Card.css"

export default props => {
    
    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00"
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">
                {props.titulo}
            </div>
            <div className="Content">
                {props.children} {/* props.children: consegue acessar os elementos dentro do outro */}
            </div>
        </div>
    )
}