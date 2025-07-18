import { createContext, useState } from "react"

export const CenarioContext = createContext()

export const CenarioProvider = ({ children }) => {
    const [mensagem, setMensagem] = useState("")

    const [cenarios, setCenarios] = useState([])

    const [sistemas, setSistemas] = useState([])

    const salvarCenario = (cenario) => {
        setCenarios((prev) => [...prev, cenario])
        adicionarSistema(cenario.sistema)
        setMensagem("Novo cenário adicionado!")
        setTimeout(() => setMensagem(""), 5000)
    }

    const removerCenario = (uuid) => {
        setCenarios((prev) => prev.filter((cenario) => cenario.uuid !== uuid))
    }

    const atualizarCenario = (cenario) => {
        // setCenarios((prev) => {
        //     prev.map((c) => (c.uuid === cenario[0].uuid ? { ...c, ...cenario } : c))
        // })

        const cenariosFiltrados = cenarios.filter((cenario) => cenario.uuid !== cenario.uuid)
        // console.log(cenariosFiltrados)
        setCenarios(cenariosFiltrados)

        setCenarios((prev) => [...prev, cenario])
        adicionarSistema(cenario.sistema)
        setMensagem("Cenário atualizado com sucesso!")
        setTimeout(() => setMensagem(""), 5000)
    }

    const adicionarSistema = (sistema) => {
        if (!sistemas.find((s) => s.toLowerCase().trim() === sistema.toLowerCase().trim())) {
            setSistemas((prev) => [...prev, sistema])
        }
    }

    const buscarCenario = (uuid) => {
        return cenarios.filter((cenario) => (cenario.uuid = uuid))
    }

    return <CenarioContext.Provider value={{ cenarios, sistemas, mensagem, salvarCenario, atualizarCenario, removerCenario, buscarCenario }}>{children}</CenarioContext.Provider>
}
