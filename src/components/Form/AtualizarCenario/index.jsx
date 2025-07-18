import styled from "styled-components"
import InputText from "../../InputText"
import UpdateButton from "../../UpdateButton"
import { useContext, useEffect, useState } from "react"
import { CenarioContext } from "../../../contexts/CenarioContext"
import TextArea from "../../TextArea"
import { useParams } from "react-router-dom"

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .msg {
        box-sizing: border-box;
        background-color: var(--cor-botao-sucesso);
        padding: 5px 10px;
        border-radius: 3px;
        border: 1px solid #ccc;
        width: 400px;
    }
`

const AtualizarCenario = () => {
    const { buscarCenario, atualizarCenario, mensagem } = useContext(CenarioContext)

    const { id } = useParams()

    const [cenario, setCenario] = useState(null)

    useEffect(() => {
        const encontrado = buscarCenario(id)
        if (encontrado && encontrado[0]) {
            setCenario({
                uuid: id,
                sistema: encontrado[0].sistema,
                spec: encontrado[0].spec,
                codigo: encontrado[0].codigo,
                descricao: encontrado[0].descricao,
                fixture: encontrado[0].fixture,
            })
        }
    }, [id, buscarCenario])

    // const cenarioAtual = buscarCenario(id)

    // const [cenario, setCenario] = useState({
    //     uuid: id,
    //     sistema: cenarioAtual[0].sistema,
    //     spec: cenarioAtual[0].spec,
    //     codigo: cenarioAtual[0].codigo,
    //     descricao: cenarioAtual[0].descricao,
    //     fixture: cenarioAtual[0].fixture,
    // })

    const handleCenario = (campo, valor) => {
        setCenario((prev) => ({
            ...prev,
            [campo]: valor,
        }))
    }

    const handleBotaoAtualizar = (c) => {
        atualizarCenario(c)
    }

    if (!cenario) {
        return <p>Carregando...</p>
    }

    return (
        <FormStyled>
            {mensagem !== "" ? <div className="msg">{mensagem}</div> : ""}
            <InputText onCenarioChange={handleCenario} id="sistema" key="sistema" label="Sistema" value={cenario.sistema} />
            <InputText onCenarioChange={handleCenario} id="spec" key="spec" label="Arquivo/Spec" value={cenario.spec} />
            <InputText onCenarioChange={handleCenario} id="codigo" key="codigo" label="Código" value={cenario.codigo} />
            <TextArea onCenarioChange={handleCenario} id="descricao" key="descricao" label="Descritivo do Teste" value={cenario.descricao} />
            <TextArea onCenarioChange={handleCenario} id="fixture" key="fixture" label="Fixture/JSON do cenário" value={cenario.fixture} />
            <UpdateButton cenario={cenario} onSalvarCenario={handleBotaoAtualizar}>
                Atualizar Cenário
            </UpdateButton>
        </FormStyled>
    )
}

export default AtualizarCenario
