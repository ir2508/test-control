import { createContext, useState } from "react"

export const CenarioContext = createContext()

export const CenarioProvider = ({ children }) => {
    const [mensagem, setMensagem] = useState("")

    const [cenarios, setCenarios] = useState([])

    const salvarCenario = (cenario) => {
        setCenarios((prev) => [...prev, cenario])
        setMensagem("Novo cenário adicionado!")
        setTimeout(() => setMensagem(""), 5000)
    }

    const removerCenario = (uuid) => {
        setCenarios((prev) => prev.filter((cenario) => cenario.uuid !== uuid))
    }

    return <CenarioContext.Provider value={{ cenarios, mensagem, salvarCenario, removerCenario }}>{children}</CenarioContext.Provider>
}
