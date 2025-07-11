import { Outlet } from "react-router-dom"
import MenuLateral from "../components/MenuLateral"
import styled from "styled-components"

const ContainerStyled = styled.div`
    display: flex;
    height: 100vh;

    .conteudo-principal {
        flex-grow: 1;
        padding: 50px;
        overflow-y: auto;
    }
`

const LayoutPrincipal = () => {
    return (
        <ContainerStyled>
            <MenuLateral />

            <main className="conteudo-principal">
                <Outlet />
            </main>
        </ContainerStyled>
    )
}

export default LayoutPrincipal
