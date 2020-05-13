import React from 'react'
import './App.css'
import Card from './components/layout/Card'
import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ => /* arrow function: => */
    

    <div className="App">
        <h1>Fundamentos React </h1>

        <div className="Cards">

            <Card titulo="#13 - Mega" color="#ECDFBD">
                <Mega qtde={8}/>
            </Card>

            <Card titulo="#12 - Contador" color="#3B3A35">
                <Contador numeroInicial={10} />
            </Card>

            <Card titulo="#11 - Componente Controlado(Input)" color="#260126">
                <Input />
            </Card>
            
            <Card titulo="#10 - Comunicação Indireta" color="#E1D041">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#F0A830">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#6E9ECF">
                <ParOuImpar number={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: "Fernando" }} />
            </Card>

            <Card titulo="#07 - Repetição de Lista de Produtos" color="#DA4624">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>


            <Card titulo="#05 - Componente com Filhos" color="#5E412F">
                <Familia lastname="Silva">
                    <FamiliaMembro name="Pedro" />
                    <FamiliaMembro name="José" />
                    <FamiliaMembro name="Arthur" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#69D2E7">
                <Aleatorio min={1} max={60}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#1FDA9A">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#D96459">
                <ComParametro //propriedades são somente leitura
                    titulo="Situação do Aluno"
                    nome="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#FFC33C">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
