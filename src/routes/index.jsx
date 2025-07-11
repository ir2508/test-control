import { createBrowserRouter } from "react-router-dom";
import LayoutPrincipal from "../layouts/LayoutPrincipal";
import Inicio from "../pages/Inicio";
import CadastrarCenario from "../pages/CadastrarCenario";
import CadastrarHistorico from "../pages/CadastrarHistorico";
import ListarCenarios from "../pages/ListarCEnarios";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPrincipal />,
        children: [
            { index: true, element: <Inicio />},
            { path: 'novo-cenario', element: <CadastrarCenario />},
            { path: 'cenarios', element: <ListarCenarios />},
            { path: 'registrar-teste', element: <CadastrarHistorico />},
        ]
    }
])