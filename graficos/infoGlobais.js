const url = 'https://raw.githubusercontent.com/TamirisCeolin/Ciencia-de-Dados-TurmaHN/refs/heads/main/transpostes-dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9);
    const trabalhadoresNoMundo = (dados.total_trabalhadores_mundo / 1e9);
    const pessoasNecessitamTransporte = (dados.total_pessoas_que_necessitam_transporte_para_trabalho / 1e9);
   
    const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho);
    const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - horas) * 60);
    const porcentagemTrabalhadores = ((trabalhadoresNoMundo / pessoasNoMundo) * 100).toFixed(2);



    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `No mundo com <span>${pessoasNoMundo} bilhões </span>  de pessoas, 
    cerca de <span>${trabalhadoresNoMundo} bilhões </span> fazem parte da força de trabalho global, 
    e <span>${pessoasNecessitamTransporte} bilhões </span> delas dependem de transporte para chegar ao 
    trabalho. <br> Do total de pessoas no mundo <span>${porcentagemTrabalhadores}% </span>25% utilizam 
    transporte e estes gastam em média <span>${horas} horas </span> e <span> ${minutos} minutos </span> 
    do tempo do dia para deslocamento. <br> Esse tempo, embora pareça curto, simboliza a resiliência e 
    busca por melhores oportunidades.`


    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();