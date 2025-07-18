import styled from "styled-components"
import { useContext } from "react"
import { CenarioContext } from "../../contexts/CenarioContext"
import DeleteButton from "../DeleteButton"
import ShowButton from "../ShowButton"
import BadgeSistema from "../BadgeSistema"

const CenarioCardStyled = styled.div`
    border: 1px solid #ccc;
    width: 300px;
    border-radius: 12px;

    .card-header {
        width: 100%;
        height: 180px;
        border-radius: 10px 10px 0 0;
        background-color: #fff;
        background-image: url("src/images/logo-cypress.png");
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: flex-end;
        padding: 20px;
        box-sizing: border-box;
        gap: 10px;
    }

    .card-body {
        padding: 20px;
        height: 100px;
    }

    .card-body div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .card-body h4 {
        margin: 0;
    }

    .card-footer {
        height: 50px;
        position: 0;
        text-align: center;
        padding: 30px 20px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
`

const CenarioCard = ({ dados }) => {
    const { removerCenario } = useContext(CenarioContext)

    const handleDeletarCenario = (uuid) => {
        removerCenario(uuid)
    }
    return (
        <CenarioCardStyled>
            <div className="card-header">
                <BadgeSistema>{dados.sistema}</BadgeSistema>
                <BadgeSistema>{dados.spec}</BadgeSistema>
            </div>
            <div className="card-body">
                <div>
                    <h4>Código:</h4> <span>{dados.codigo}</span>
                </div>

                <div>
                    <h4>Descrição:</h4> <span>{dados.descricao}</span>
                </div>
            </div>
            <div className="card-footer">
                <ShowButton idToShow={dados.uuid}>
                    Visualizar
                </ShowButton>
                <DeleteButton idToDelete={dados.uuid} onDeletarCenario={handleDeletarCenario}>
                    Excluir
                </DeleteButton>
            </div>
        </CenarioCardStyled>
    )
}

export default CenarioCard
