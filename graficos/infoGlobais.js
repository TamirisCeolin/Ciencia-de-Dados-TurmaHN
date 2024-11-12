const url='https://raw.githubusercontent.com/TamirisCeolin/Ciencia-de-Dados-TurmaHN/refs/heads/main/transpostes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    
    const pessoasMundo = (dados.total_pessoas_mundo / 1e9)
    const totalTrabalhadoresMundo = (dados.total_trabalhadores_mundo / 1e9)
    const pessoasQueNecessitamTransporteParaTrabalho = (dados.total_pessoas_que_necessitam_transporte_para_trabalho / 1e9)
    const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho)
    const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - horas) * 60)
    
    const pessoasComEducacaoSuperior = (dados.total_pessoas_com_educacao_superior / 1e9)

    const percentual = ((pessoasComAcessoAEducacao/pessoasMundo)*100).toFixed(2)
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No mundo com <span>${dados.total_pessoas_mundo}</span> bilhões de pessoas, 
                cerca de <span>${dados.total_trabalhadores_mundo}</span> bilhões fazem parte da força de trabalho global, 
                e <span>${dados.total_pessoas_que_necessitam_transporte_para_trabalho}</span> bilhões 
                delas dependem de transporte para chegar ao trabalho. Isso significa que, apenas 38% (=3/7,888) no mundo tem 
                trabalho. Do total de pessoas no mundo 25% utilizam transporte e dos que 
                trabalham 67% precisam de transporte. E dos que utilizam transporte, estes 
                gastam <span>${dados.tempo_medio_deslocamento_para_trabalho}</span> do tempo do dia para deslocamento. Esse tempo, embora
                 pareça curto, simboliza a resiliência e busca por melhores oportunidades.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);


  
    paragrafo.innerHTML =  `Você sabia que o total total de pessoas no mundo é de <span>${pessoasMundo}</span> bilhões de pessoas e que o  total de pessoas com acesso à educação é de <span>${pessoasComAcessoAEducacao}</span> bilhões?  O tempo médio gasto por dia estudando é de <span>${horas} horas </span> e <span>${minutos} minutos</span>  e o total de pessoas com educação superior é de <span>${pessoasComEducacaoSuperior}</span> bilhões. Isso significa que aproximadamente <span>${percentual}%</span> de pessoas tem acesso à Educação. <br>Será que esses dados apontam para uma realidade de um mundo esclarecido e com facilidade de acesso à Educação?` 
  

}

vizualizarInformacoesGlobais()