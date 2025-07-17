import { useContext } from "react"
import { CenarioContext } from "../../contexts/CenarioContext"
import styled from "styled-components"

const DivSistemasStyled = styled.div``

const SelectSistemasStyled = styled.select`
    padding: 15px 25px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    width: 320px;
    background-color: var(--cor-secundaria);
    color: #fff;
    cursor: pointer;
`

const SelectSistema = ({ onFiltroChange }) => {
    const { sistemas } = useContext(CenarioContext)


    return (
        <DivSistemasStyled>
            <label htmlFor="filtroSistemas"></label>
            <SelectSistemasStyled onChange={(e) => onFiltroChange(e.target.value)} id="filtroSistemas">
                <option value="todos" selected>Todos os sistemas</option>
                {sistemas.map((sistema) => (
                    <option key={sistema} value={sistema}>{String(sistema).charAt(0).toUpperCase() + String(sistema).slice(1).toLowerCase()}</option>
                ))}
            </SelectSistemasStyled>
        </DivSistemasStyled>
    )
}

export default SelectSistema
