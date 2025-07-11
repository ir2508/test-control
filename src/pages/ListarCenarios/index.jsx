import { useContext } from "react"
import { CenarioContext } from "../../contexts/CenarioContext"
import CenarioCard from "../../components/CenarioCard"
import styled from "styled-components"

const CardSectionStyled = styled.section`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`

const ListarCenarios = () => {
    const { cenarios } = useContext(CenarioContext)

    return (
        <>
            <h2>Todos os cenários</h2>
            <CardSectionStyled>
                {cenarios.map((cenario) => <CenarioCard dados={cenario}/>)}
            </CardSectionStyled>
        </>
    )
}

export default ListarCenarios
