import styled from "styled-components"

const BotaoStyled = styled.button`
    background-color: var(--cor-botao-sucesso);
    border: 1px solid #CCC;
    color: #FFF;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 1em;
    height: 50px;
    flex: 1;

`

const ShowButton = ({ children }) => {
    return <BotaoStyled>{children}</BotaoStyled>
}

export default ShowButton
