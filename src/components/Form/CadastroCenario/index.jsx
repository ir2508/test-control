import styled from "styled-components"
import InputText from "../../InputText"
import Button from "../../Button"
import { useContext, useState } from "react"
import { CenarioContext } from "../../../contexts/CenarioContext"

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .msg {
        background-color: var(--cor-botao-sucesso);
        padding: 5px 10px;
        border-radius: 3px;
        border: 1px solid #ccc;
    }
`

const CadastroCenario = () => {
    const { mensagem, salvarCenario } = useContext(CenarioContext)

    const [cenario, setCenario] = useState({
        sistema: "",
        codigo: "",
        descricao: "",
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
            sistema: "",
            codigo: "",
            descricao: "",
        })
    }

    return (
        <FormStyled>
            {mensagem !== "" ? <div className="msg">{mensagem}</div> : ""}
            <InputText onCenarioChange={handleCenario} id="sistema" key="sistema" label="Sistema" value={cenario.sistema}/>
            <InputText onCenarioChange={handleCenario} id="codigo" key="codigo" label="Código"  value={cenario.codigo}/>
            <InputText onCenarioChange={handleCenario} id="descricao" key="descricao" label="Descritivo do Teste"  value={cenario.descricao}/>
            <Button cenario={cenario} onSalvarCenario={handleBotaoCadastrar}>
                Cadastrar Cenário
            </Button>
        </FormStyled>
    )
}

export default CadastroCenario
