const url='https://raw.githubusercontent.com/TamirisCeolin/Ciencia-de-Dados-TurmaHN/refs/heads/main/transpostes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No mundo com 7,88 bilhões de pessoas, cerca de 3 bilhões fazem parte da 
                força de trabalho global, e 2 bilhões delas dependem de transporte para 
                chegar ao trabalho. Isso significa que, apenas 38% (=3/7,888) no mundo tem 
                trabalho. Do total de pessoas no mundo 25% utilizam transporte e dos que 
                trabalham 67% precisam de transporte. E dos que utilizam transporte, estes 
                gastam 3,75% (0,9/24) do tempo do dia para deslocamento. Esse tempo, embora
                 pareça curto, simboliza a resiliência e busca por melhores oportunidades.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()