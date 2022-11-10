import './App.css'

function App({text, link}) {

  return (
    <div className="App">
      <img src={link}></img>
      <p>{text}</p>
    </div>
  )
}

export default App
