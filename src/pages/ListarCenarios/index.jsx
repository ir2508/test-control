import { useContext, useState } from "react"
import { CenarioContext } from "../../contexts/CenarioContext"
import CenarioCard from "../../components/CenarioCard"
import styled from "styled-components"
import SelectSistema from "../../components/SelectSistema"

const ContainerStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const FilterSectionStyled = styled.section`
    /* margin: 50px 0; */
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
`

const CardSectionStyled = styled.section`
    margin-top: 50px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`

const ListarCenarios = () => {
    const [filtro, setFiltro] = useState("todos")
    const { cenarios } = useContext(CenarioContext)

    const handleFiltroChange = (filtro) => {
        setFiltro(filtro)
    }
    const cenariosFiltrados = filtro === "todos" ? cenarios : cenarios.filter((cadaCenario) => cadaCenario.sistema === filtro)

    return (
        <ContainerStyled>
            <FilterSectionStyled>
                <h2>Todos os cenários</h2>
                <div>
                    
                    {cenariosFiltrados.length > 0 ? <><h5>Filtrar cenários:</h5> <SelectSistema onFiltroChange={handleFiltroChange} /></>: ""}
                </div>
            </FilterSectionStyled>
            <CardSectionStyled>
                {(cenariosFiltrados.length > 0) ? cenariosFiltrados.map((cenario) => (
                    <CenarioCard key={cenario.uuid} dados={cenario} />
                )):"Nenhum cenário encontrado!"
            }
            </CardSectionStyled>
        </ContainerStyled>
    )
}

export default ListarCenarios
