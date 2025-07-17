import styled from "styled-components"

const SistemaStyled = styled.span`
    box-sizing: border-box;
    height: 2em;
    padding: 5px 10px;
    background-color: #646cff;
    border-radius: 5px;
`

const BadgeSistema = ({children}) => {
    return <SistemaStyled>{children}</SistemaStyled>
}

export default BadgeSistema
