import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components"

const BotaoStyled = styled.button`
    background-color: var(--cor-botao-perigo);
    border: 1px solid #CCC;
    color: #FFF;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 1em;
    height: 50px;
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
                <FaTrashAlt />
        </BotaoStyled>
    )
}

export default DeleteButton