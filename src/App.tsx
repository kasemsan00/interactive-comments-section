import "./App.css"
import dataJSON from "../data.json"
import Answer from "./Commment/Answer"
import Comment from "./Commment/Comment.tsx"

function App() {
  const { currentUser, comments } = dataJSON

  return (
    <div className="flex h-screen  justify-center bg-LightGray">
      <div className="flex h-fit w-fit flex-col gap-2">
        {comments.map((comment, index: number) => (
          <div key={index}>
            <Comment {...comment} />
          </div>
        ))}
        <Answer {...currentUser} />
      </div>
    </div>
  )
}

export default App
