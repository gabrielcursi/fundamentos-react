import React, { Component } from 'react'
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1,
    }

    //Forma Mais Chata de ler o setState
    // constructor(props) {
    //     super(props)
        
    //     this.inc = this.inc.bind(this) //bind sempre para 'cravar' que o this sera a instancia de um contador 
    // }

    //Forma Fácil, colocar = =>, vai ficar "inc = () => ..."" 
    inc = () => { //componente baseado em classe sempre chama this
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }



    render(){
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
               <Botoes setInc ={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }

} export default Contador