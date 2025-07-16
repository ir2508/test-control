import styled from "styled-components"

const BotaoStyled = styled.button`
    background-color: var(--cor-botao-sucesso);
    border: 1px solid #CCC;
    color: #FFF;
    padding: 15px 25px;
    border-radius: 5px;
    font-size: 16px;
`

const DeleteButton = ({ children, idToDelete, onDeletarCenario}) => {
    return (
        <BotaoStyled 
            onClick={
                (event) => {
                    event.preventDefault()
                    onDeletarCenario(idToDelete)
                }
            }
        >
                {children}
        </BotaoStyled>
    )
}

export default DeleteButton