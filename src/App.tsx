import "./App.css"
import dataJSON from "../data.json"
import Answer from "./Commment/Answer"

function App() {
  console.log(dataJSON)

  return (
    <div className=" h-screen w-screen items-start justify-center bg-LightGray">
      <div className="bg-White p-4"></div>
      <Answer />
    </div>
  )
}

export default App
