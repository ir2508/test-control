import { NavLink } from "react-router-dom"
import styled from "styled-components"

const BotaoStyled = styled.button`
    background-color: var(--cor-botao-sucesso);
    border: 1px solid #ccc;
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 1em;
    height: 50px;
    width: 100%; 
`

const ShowButton = ({ children, idToShow }) => {
    return (
        <NavLink style={{flex: 1}} to={`/cenarios/${idToShow}`}>
            <BotaoStyled>{children}</BotaoStyled>
        </NavLink>
    )
}

export default ShowButton
