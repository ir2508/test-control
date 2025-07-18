import { useContext } from "react"
import { NavLink, useParams } from "react-router-dom"
import { CenarioContext } from "../../contexts/CenarioContext"
import { FaEdit } from "react-icons/fa"
import styled from "styled-components"

const SectionTitleStyled = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

const ContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;

    h2 {
        flex: 1;
    }
`

const InfoSectionStyled = styled.section`
    min-width: 300px;
`

const JSONSectionStyled = styled.section`
    background-color: var(--cor-secundaria);
    min-width: 300px;
    max-width: 400px;
    border-radius: 10px;

    h5 {
        margin: 0;
        padding: 10px 20px;
        background-color: var(--cor-menu);
        border-radius: 10px 10px 0 0;
    }

    pre {
        margin: 20px;
        white-space: pre-wrap
    }
`

const Cenario = () => {
    const { id } = useParams()
    const { cenarios } = useContext(CenarioContext)
    const cenarioFiltrado = cenarios.filter((cenario) => cenario.uuid === id)
    const conteudoJSON = {
        codigo: 1,
        cenario: "01",
        descricao: "PF Logado=Aluno(BR;Maior) | ALUNO=RF | Desconto de 50% | Boleto 1x",
        emplid: "1142691430",
        ticket: "57BEE57CBDC3175AEC80894F31E29DE4",
        oferta: "9900320851",
        executarTeste: "Sim",
    }

    return (
        <>
            <SectionTitleStyled>
                <h2>{cenarioFiltrado[0].descricao}</h2>
                <NavLink to={`/editar-cenario/${id}`}>
                    <FaEdit size={"1.5em"} style={{color: "#FFF"}}/>
                </NavLink>
            </SectionTitleStyled>
            <ContainerStyled>
                <JSONSectionStyled>
                    <h5>Nome do arquivo: NBAS.json</h5>
                    <pre>{JSON.stringify(JSON.parse(cenarioFiltrado[0].fixture), null, 2)}</pre>
                </JSONSectionStyled>
                <InfoSectionStyled>
                    <h3>Sistema</h3>
                    <p>{cenarioFiltrado[0].sistema}</p>
                    <h3>Spec</h3>
                    <p>{cenarioFiltrado[0].spec}</p>
                    <h3>Código</h3>
                    <p>{cenarioFiltrado[0].codigo}</p>
                    <h3>Descrição</h3>
                    <p>{cenarioFiltrado[0].descricao}</p>
                </InfoSectionStyled>
            </ContainerStyled>
        </>
    )
}

export default Cenario
