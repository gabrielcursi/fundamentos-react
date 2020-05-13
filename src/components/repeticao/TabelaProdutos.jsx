import React from 'react'
import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default props => {
    
    function getProdutos(){
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.name}</td>
                    <td>{produto.price.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }
    
    return (
    <div className="TabelaProdutos">
       <table>
           <thead>
               <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Price</th>
               </tr>
           </thead>
           <tbody>
                { getProdutos() }
           </tbody>
       </table>
    </div>
    )
}