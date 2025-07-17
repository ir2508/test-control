import styled from "styled-components"

const BotaoStyled = styled.button`
    background-color: var(--cor-botao-sucesso);
    border: 1px solid #ccc;
    color: #fff;
    border-radius: 5px;
    font-size: 1em;
    width: 400px;
    padding: 15px 25px;
    margin-top: 20px;
    box-sizing: border-box;
`

const AddButton = ({ children, cenario, onSalvarCenario }) => {
    return (
        <BotaoStyled
            onClick={(event) => {
                event.preventDefault()
                onSalvarCenario(cenario)
            }}>
            {children}
        </BotaoStyled>
    )
}

export default AddButton
