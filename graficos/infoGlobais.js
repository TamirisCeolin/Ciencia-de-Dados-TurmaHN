const url = 'https://raw.githubusercontent.com/TamirisCeolin/Ciencia-de-Dados-TurmaHN/refs/heads/main/transpostes-dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9);
    const trabalhadoresNoMundo = (dados.total_trabalhadores_mundo / 1e9);
    const pessoasNecessitamTransporte = (dados.total_pessoas_que_necessitam_transporte_para_trabalho / 1e9);
   
    const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho);
    const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - horas) * 100);
    const porcentagemTrabalhadores = ((trabalhadoresNoMundo / pessoasNoMundo) * 100).toFixed(2);



    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `No mundo com <span>${dados.total_pessoas_mundo} bilhões </span>  de pessoas, 
    cerca de <span>${dados.total_trabalhadores_mundo} bilhões </span> fazem parte da força de trabalho global, 
    e <span>${dados.total_pessoas_que_necessitam_transporte_para_trabalho} bilhões </span>  
    delas dependem de transporte para chegar ao trabalho. Isso significa que, apenas 38% (=3/7,888) no mundo tem 
    trabalho. Do total de pessoas no mundo 25% utilizam transporte e dos que 
    trabalham 67% precisam de transporte. E dos que utilizam transporte, estes 
    gastam <span>${dados.tempo_medio_deslocamento_para_trabalho} horas </span> e <span> ${minutos} minutos </span> do tempo do dia para deslocamento. Esse tempo, embora
    pareça curto, simboliza a resiliência e busca por melhores oportunidades.`


    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();