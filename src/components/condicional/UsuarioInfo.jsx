import React from 'react'
import If, {Else} from './If'

export default props => {
    // const usuario = props.usuario || {}
    // return (
    //     <div>
    //         <If test={ usuario && usuario.nome }>
    //         Seja bem-vindo(a) <strong>{ usuario.nome }</strong>!
    //         </If>

    //         <If test={ !usuario || !usuario.nome }>
    //         Seja bem-vindo(a) <strong> Amigão</strong>!
    //         </If>
    //     </div>
    // )

    const usuario = props.usuario || {}
    return (
        <div>
            <If test={ usuario && usuario.nome}>
                Seja bem-vindo(a) <strong>{ usuario.nome }</strong>!
                <Else>
                Seja bem-vindo(a) <strong>Amigão</strong>!
                </Else>
            </If>
        </div>
    )

}