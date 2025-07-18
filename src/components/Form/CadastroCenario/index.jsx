import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';
import InputText from "../../InputText"
import AddButton from "../../AddButton"
import { useContext, useState } from "react"
import { CenarioContext } from "../../../contexts/CenarioContext"
import TextArea from "../../TextArea";

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
        width: 450px;
    }
`

const CadastroCenario = () => {
    const { mensagem, salvarCenario } = useContext(CenarioContext)

    const [cenario, setCenario] = useState({
        uuid: uuidv4(),
        sistema: "",
        spec: "",
        codigo: "",
        descricao: "",
        fixture: "",
    })

    const handleCenario = (campo, valor) => {
        setCenario((prev) => ({
            ...prev,
            [campo]: valor,
        }))
    }

    const handleBotaoCadastrar = (cenario) => {
        salvarCenario(cenario)
        setCenario({
            uuid: uuidv4(),
            sistema: "",
            spec: "",
            codigo: "",
            descricao: "",
            fixture: "",
        })
    }

    return (
        <FormStyled>
            {mensagem !== "" ? <div className="msg">{mensagem}</div> : ""}
            <InputText onCenarioChange={handleCenario} id="sistema" key="sistema" label="Sistema" value={cenario.sistema}/>
            <InputText onCenarioChange={handleCenario} id="spec" key="spec" label="Arquivo/Spec" value={cenario.spec}/>
            <InputText onCenarioChange={handleCenario} id="codigo" key="codigo" label="Código"  value={cenario.codigo}/>
            <TextArea onCenarioChange={handleCenario} id="descricao" key="descricao" label="Descritivo do Teste"  value={cenario.descricao}/>
            <TextArea onCenarioChange={handleCenario} id="fixture" key="fixture" label="Fixture/JSON do cenário"  value={cenario.fixture}/>
            <AddButton cenario={cenario} onSalvarCenario={handleBotaoCadastrar}>
                Cadastrar Cenário
            </AddButton>
        </FormStyled>
    )
}

export default CadastroCenario
