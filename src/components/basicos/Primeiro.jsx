import React from 'react'

export default function Primeiro(){
    const msg = "Seja bem vindo(a)!!"
    return ( // () serve para identar melhor como no HTML, se não tiver, da erro.
    <div>
        <h2>Primeiro componente</h2>
        <p>{ msg } </p>
    </div> 
    )
}