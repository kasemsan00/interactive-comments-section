import { useCurrentUserDetail } from "../Store/currentUser.tsx"
import { useState } from "react"
import Answer from "./Answer.tsx"

type User = {
  id: number
  content: string
  createdAt: string
  score: number
  user: {
    image: {
      png: string
      webp: string
    }
    username: string
  }
}

type Props = {
  isSubItem: boolean
  index: number
  id: number
  content: string
  createdAt: string
  score: number
  user: {
    image: {
      png: string
      webp: string
    }
    username: string
  }
  replies: User[]
}

export default function Comment({
  index,
  isSubItem,
  content,
  createdAt,
  score,
  user,
  replies,
}: Props) {
  const { username } = useCurrentUserDetail()
  const [c_score, setScore] = useState<number>(score)
  const [isReply, setIsReply] = useState(false)
  const increaseScore = () => {
    setScore((state) => state + 1)
  }
  const decreaseScore = () => {
    if (c_score === 0) return
    setScore((state) => state - 1)
  }
  const onClickReply = () => {
    setIsReply(true)
  }
  return (
    <div className={`flex flex-col ${index === 0 && "pt-4"}`}>
      <div className="flex">
        {isSubItem && (
          <div className={`ml-4 mr-4 w-[10px] border-l-2 border-LightGrayishBlue`}></div>
        )}
        <div className={`${isSubItem && "w-[calc(100%-100px)] self-end"} flex `}>
          <div className="flex w-full max-w-4xl flex-row gap-4 rounded-md bg-white p-2">
            <div className="flex h-28 w-10 flex-col items-center justify-center gap-2 rounded-md bg-LightGray px-3 py-1 font-bold">
              <span
                onClick={increaseScore}
                className="cursor-pointer text-xl font-bold text-GrayishBlue"
              >
                +
              </span>
              <span className="text-md font-bold text-ModerateBlue">{c_score} </span>
              <span
                onClick={decreaseScore}
                className="cursor-pointer text-xl font-bold text-GrayishBlue"
              >
                -
              </span>
            </div>
            <div className="flex w-full flex-col gap-2 rounded-md">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                  <div className="h-10 w-10">
                    <img alt={user.username} src={"../../" + user.image.png} />
                  </div>
                  <div className="font-bold">{user.username}</div>
                  {username === user.username && (
                    <div className="flex items-center bg-ModerateBlue px-2 text-xs font-bold text-white">
                      you
                    </div>
                  )}
                  <div className="text-GrayishBlue">{createdAt}</div>
                </div>
                <div
                  onClick={onClickReply}
                  className="cursor-pointer space-x-2 text-ModerateBlue hover:opacity-40"
                >
                  <img className="inline-block" src={"../../images/icon-reply.svg"} alt="reply" />
                  <span className="inline-block font-bold ">Reply</span>
                </div>
              </div>
              <div>
                <div className="text-GrayishBlue">{content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {replies.map((item, index: number) => (
        <div key={index}>
          <Comment
            isSubItem={true}
            index={index}
            id={item.id}
            content={item.content}
            createdAt={item.createdAt}
            score={item.score}
            user={item.user}
            replies={[]}
          ></Comment>
        </div>
      ))}
      {isReply && <Answer buttonAction="REPLY" />}
    </div>
  )
}
