import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    const listaAlunos = alunos.map((aluno) => { {/* map serve para transformar array normal em array de .JSX */}
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {listaAlunos}
            </ul>
        </div>
    )
}