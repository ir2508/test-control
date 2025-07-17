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

    const adicionarSistema = (sistema) => {
        if (!sistemas.find((s) => s.toLowerCase().trim() === sistema.toLowerCase().trim())) {
            setSistemas((prev) => [...prev, sistema])
        }
    }

    return <CenarioContext.Provider value={{ cenarios, sistemas, mensagem, salvarCenario, removerCenario }}>{children}</CenarioContext.Provider>
}
