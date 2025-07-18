import { createBrowserRouter } from "react-router-dom";
import LayoutPrincipal from "../layouts/LayoutPrincipal";
import Inicio from "../pages/Inicio";
import CadastrarCenario from "../pages/CadastrarCenario";
import CadastrarHistorico from "../pages/CadastrarHistorico";
import ListarCenarios from "../pages/ListarCEnarios";
import Cenario from "../pages/Cenario";
import EditarCenario from "../pages/EditarCenario";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPrincipal />,
        children: [
            { index: true, element: <Inicio />},
            { path: 'novo-cenario', element: <CadastrarCenario />},
            { path: 'editar-cenario/:id', element: <EditarCenario />},
            { path: 'cenarios', element: <ListarCenarios />},
            { path: 'cenarios/:id', element: <Cenario />},
            { path: 'registrar-teste', element: <CadastrarHistorico />},
            { path: '*', element: <h2>Ops! Página não encontrada!</h2>},
        ]
    }
])