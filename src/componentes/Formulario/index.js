import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem,  setImagem] = useState("")
    const [time, setTime] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha para criar um Card Minecraft</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}/>

                <CampoTexto 
                obrigatorio={true} 
                label="Função" 
                placeholder="Digite a Função" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}/>

                <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Digite endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa obrigatorio={true} 
                label='Time' 
                itens = {props.times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario