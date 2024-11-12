async function qntDepessoas() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-numero-tipos-locomocao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDoTransporte = Object.keys(dados)
    const qntDepessoas = Object.values(dados)

    const data = [
        {
          x: nomeDoTransporte,
          y: qntDepessoas,
          type: 'bar'
        }
      ]
      
      const grafico = document.createElement('div')
      grafico.className = 'grafico'
      document.getElementById('graficos-container').appendChild(grafico)
      Plotly.newPlot(grafico, data)
}

qntDepessoas();