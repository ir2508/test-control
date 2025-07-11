import styled from "styled-components"
import Button from "../Button"

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
    }

    .card-body {
        padding: 20px;
        height: 100px;
    }

    .card-body div{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .card-body h4 {
        margin: 0;
    }

    .card-footer {
        position: 0 ;
        text-align: center;
        padding: 30px;
    }

    .card-footer button{
        background-color: var(--cor-botao-perigo);
    }
`

const CenarioCard = ({ dados }) => {
    return (
        <CenarioCardStyled>
            <div className="card-header"></div>
            <div className="card-body">
                <div>
                    <h4>Código:</h4> <span>{dados.codigo}</span>
                </div>
                <div>
                    <h4>Sistema:</h4> <span>{dados.sistema}</span>
                </div>
                <div>
                    <h4>Descrição:</h4> <span>{dados.descricao}</span>
                </div>
            </div>
            <div className="card-footer">
                <Button>Excluir Cenário</Button>
            </div>
        </CenarioCardStyled>
    )
}

export default CenarioCard
