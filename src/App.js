import './App.css'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")

  function handleSearch(){
    var cep = input.replace("-", "")
    cep = cep.replace(".", "")
    cep = cep.replace("/", "")
    
    fetch("https://viacep.com.br/ws/"+cep+"/json/")
      .then(response =>{
        response.json()
          .then(data => {
            document.querySelector(".main h2").innerText = `CEP: ${data.cep}`
            document.querySelector(".main :nth-child(2)").innerText = `Logradouro: ${data.logradouro}`
            document.querySelector(".main :nth-child(3)").innerText = `Complemento: ${data.complemento}`
            document.querySelector(".main :nth-child(4)").innerText = `Bairro: ${data.bairro}`
            document.querySelector(".main :nth-child(5)").innerText = `Localidade: ${data.localidade}`
            document.querySelector(".main").style.display = "flex"
          })
      })
      .catch(error => {
        console.error(error)
        document.querySelector(".main").style.display = "none"
      })

  }
  return (
    <div className="App">
      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e)=>{
          setInput(e.target.value)
        }}/>

      <button className="btnSearch" onClick={handleSearch}>🔍</button>
      </div>

      <main className="main">
        <h2></h2>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </main>

    </div>
  );
}

export default App;
