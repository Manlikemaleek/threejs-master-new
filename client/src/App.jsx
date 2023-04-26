import Canvas from "./canvas"
import Design from "./pages/Design"
import Home from "./pages/Home"
function App() {
  return (
    <main className="app transition-all ease-in"> 
      <Home/>
      <Canvas />
      <Design />
    </main>
  )
}

export default App
