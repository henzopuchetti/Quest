import './Pop.css'

function App() {
  return (
    <>
    <div className="fundo">
      <h1>Questionário</h1>
      <div className="bloco">
        <h2>Nome Completo:</h2>
        <input type="text" id="nome"/>
        <h2>Idade:</h2>
        <input type="number" id="idade"/>
        <h2>Peso:</h2>
        <input type="number" id="peso"/>
        <h2>Objetivo:</h2>
        <input type="text" id="objetivo"/>
        <h2>O que gosta de comer:</h2>
        <input type="text" id="oqg"/>
        <h2>O que não gosta de comer:</h2>
        <input type="text" id="oqng"/>
        <h2>Adicione uma foto:</h2>
        <input type="file" id="foto" />
        <button>Concluir</button>
      </div>
    </div>
    </>
  )
}

export default App
