import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CenarioContext } from "../../contexts/CenarioContext"
import styled from "styled-components"

const ContainerStyled = styled.div`
    /* flex: 1; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    h2 {
        flex: 1;
    }

    pre {
        margin: 20px;
    }
`

const InfoSectionStyled = styled.section``

const JSONSectionStyled = styled.section`
    background-color: var(--cor-secundaria);
    min-width: 300px; 
    border-radius: 10px;

    h5 {
        margin: 0;
        padding: 10px 20px;
        background-color: var(--cor-menu);
        border-radius: 10px 10px 0 0;
    }
`

const Cenario = () => {
    const { id } = useParams()
    const { cenarios } = useContext(CenarioContext)
    const cenarioFiltrado = cenarios.filter((cenario) => cenario.uuid === id)
    const conteudoJSON = 
        {
            "codigo": 1,
            "cenario": "01",
            "descricao": "PF Logado=Aluno(BR;Maior) | ALUNO=RF | Desconto de 50% | Boleto 1x",
            "emplid": "1142691430",
            "ticket": "57BEE57CBDC3175AEC80894F31E29DE4",
            "oferta": "9900320851",
            "executarTeste": "Sim"
        }
    
    

    return (
        <>
            <h2>Cenário</h2>
            <ContainerStyled>
                <InfoSectionStyled>
                    <h3>Sistema</h3>
                    <p>{cenarioFiltrado[0].sistema}</p>
                    <h3>Spec</h3>
                    <p>{cenarioFiltrado[0].sistema}</p>
                    <h3>Código</h3>
                    <p>{cenarioFiltrado[0].codigo}</p>
                    <h3>Descrição</h3>
                    <p>{cenarioFiltrado[0].descricao}</p>

                </InfoSectionStyled>

                <JSONSectionStyled>
                    <h5>Nome do arquivo: NBAS.json</h5>
                    <pre>
                        {JSON.stringify(conteudoJSON, null, 2)}
                    </pre>

                </JSONSectionStyled>
            </ContainerStyled>
        </>
    )
}

export default Cenario
