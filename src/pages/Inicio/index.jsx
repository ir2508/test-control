const Inicio = () => {
    return (
        <>
            <h2>Bem vindo ao controle de testes automatizados.</h2>
            {/* <p>Aqui você pode realizar algumas tarefas, como:</p>
            <ul>
                <li>Cadastrar novos cenários</li>
                <li>Adicionar histórico semanal</li>
                <li>Visualizar últimos históricos</li>
                <li>Gerenciar cenários cadastrados</li>
                <li>(Em breve) Substituir massa de dados</li>
            </ul>
            <h3>Sobre a frente Qualidade e Testes Automatizados</h3> */}
            <p>Hoje a frente de Qualidade e Testes Automatizados atua principalmente nos seguintes testes:</p>
            
            <h4>Testes de Regressão</h4>
            <p>Verifica se novas mudanças no sistema (como correções ou novas funcionalidades) não quebraram funcionalidades que já estavam funcionando antes.</p>
            
            <h4>Testes de Confirmação</h4>
            <p> Confirma que um defeito reportado anteriormente foi realmente corrigido e que o erro não está mais ocorrendo.</p>
            
            <h4>Testes de Carga/Performance</h4>
            <p>Avalia como o sistema se comporta sob determinada carga de uso, como número de usuários simultâneos, tempo de resposta e estabilidade sob estresse.</p>
            
            <h4>Testes de Concorrência</h4>
            <p>Verifica se o sistema lida corretamente com múltiplos usuários ou processos acessando os mesmos dados ou funcionalidades ao mesmo tempo, sem gerar conflitos ou inconsistências.</p>

            <hr />
            <h3>Principais Repositórios</h3>
            <ul>
                <li>Testes de Regressão: <a href="https://git.sp.senac.br/automacao-testes-se/testes-automatizados-regressao" target="_blank">Ir para o repositório</a></li>
                <li>Testes de Carga/Performance: <a href="https://git.sp.senac.br/automacao-testes-se/performance-k6" target="_blank">Ir para o repositório</a></li>
            </ul>
        </>
    )
}

export default Inicio
