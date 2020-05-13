import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    //useState = é um Hook que te permite adicionar o state do React a um componente de função 
    //exemplo de useState: const [a, b] = [1, 2]
    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    // nome idade nerd
    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span> { nome }</span>
                <span> { idade }</span>
                <span> { nerd ? "É nerd" : "Não é nerd"}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}