import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            {/* 
                ou pode ser usado assim >
                <button onClick = {
                    function(e){
                        props.quandoClicar('João', 53, true)
                    }
                }
                Fornecer Informações
                </button>
            */}
            <button onClick= { _ => cb('João', gerarIdade(), gerarNerd()) }>
                Fornecer Informações
            </button>
        </div>
    )
}