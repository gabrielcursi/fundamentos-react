import React from 'react'

export default function Fragmento(props){
    return (
        <> {/* React.Fragment: usar para retornar + de um elemento adjacente
        que não queira se envolver com uma div */}
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )
}