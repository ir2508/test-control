import { NavLink } from "react-router-dom"
import styled from "styled-components"

const BarraLateralStyled = styled.aside`
    position: relative;
    padding: 50px 20px;
    height: 100vh;
    width: 320px;
    background-color: var(--cor-secundaria);
    box-shadow: 1px 0px 3px #CCC;
    box-sizing: border-box;

    h1 {
        font-size: 24px;
        border-bottom: 1px solid #CCC;
        padding-bottom: 20px;
    }
`

const MenuNavegacaoStyled = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .menu-item {
        background-color: var(--cor-menu);
        padding: 10px 15px;
        border-radius: 5px;
        color: #FFF;
    }

    .menu-item:hover {
        box-shadow: 0px 0px 8px #CCC;
    }
`

const MenuLateral = () => {
    return (
        <BarraLateralStyled>
            <h1>Controle de testes automatizados</h1>
            <MenuNavegacaoStyled>
                <NavLink className="menu-item" to="/">Inicio</NavLink>
                <NavLink className="menu-item" to="/novo-cenario">Cadastrar cenário</NavLink>
                <NavLink className="menu-item" to="/cenarios">Todos os cenários</NavLink>
                <NavLink className="menu-item" to="/registrar-teste">Adicionar histórico</NavLink>
            </MenuNavegacaoStyled>
        </BarraLateralStyled>
    )
}

export default MenuLateral
