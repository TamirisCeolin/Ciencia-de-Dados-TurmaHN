import { getCSS, tickConfig } from "./common.js";

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
        color: getCSS('--secundary-color')
      }
    }
  ]

  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: "Utilização dos meios de transporte no mundo",
      font: {
        color: getCSS('--primary-color'),
        family: getCSS('--font'),
        size: 30,
      }
    },
    xaxis: {
      tickfont: tickConfig,
         title: {
         text: "Meios de transporte",
         font: {
            color: getCSS('--secundary-color'),
            size: 20,
        }
     }
   },

   yaxis: {
    tickfont: tickConfig,
    title: {
       text: "Quantidade de pessoas",
       font: {
          color: getCSS('--secundary-color'),
          size: 20,
      }
   }
 }


  }

  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)
}

qntDepessoas();