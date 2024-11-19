async function qntDepessoas() {
    const url = 'https://raw.githubusercontent.com/TamirisCeolin/Ciencia-de-Dados-TurmaHN/refs/heads/main/transportes-tipos-locomoao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDoTransporte = Object.keys(dados)
    const qntDepessoas = Object.values(dados)

    const data = [
        {
          x: nomeDoTransporte,
          y: qntDepessoas,
          type: 'bar',
          marker: {
            color: getComputedStyle(document.body).getPropertyValue('--primary-color')
          }
        }
      ]
      
      const grafico = document.createElement('div')
      grafico.className = 'grafico'
      document.getElementById('graficos-container').appendChild(grafico)
      Plotly.newPlot(grafico, data)
}

qntDepessoas();