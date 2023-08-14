import "./App.css"
import dataJSON from "../data.json"
import Answer from "./Commment/Answer"
import Comment from "./Commment/Comment.tsx"
import { useCurrentUserDetail } from "./Store/currentUser.tsx"
import { useEffect } from "react"
import React from "react"

export default function App() {
  const { username, imagePng, imageWebp, setImagePng, setImageWebp, setUserName } =
    useCurrentUserDetail()
  const { currentUser, comments } = dataJSON
  useEffect(() => {
    if (username === "") {
      setUserName(currentUser.username)
    }
    if (imagePng === "") {
      setImagePng(currentUser.image.png)
    }
    if (imageWebp === "") {
      setImageWebp(currentUser.image.png)
    }
  }, [
    currentUser.username,
    username,
    setUserName,
    imagePng,
    currentUser.image.png,
    setImagePng,
    imageWebp,
    setImageWebp,
  ])

  return (
    <div className="flex h-screen  justify-center bg-LightGray">
      <div className="flex h-fit w-fit flex-col gap-2">
        {comments.map((comment, index: number) => (
          <React.Fragment key={index}>
            <Comment index={index} isSubItem={false} {...comment} />
          </React.Fragment>
        ))}
        <Answer {...currentUser} buttonAction="SEND" />
      </div>
    </div>
  )
}
