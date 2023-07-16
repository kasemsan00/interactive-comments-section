interface User {
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

interface Props {
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

export default function Comment({ content, createdAt, score, user, replies }: Props) {
  return (
    <div className="flex flex-row gap-2 rounded-md bg-White p-4">
      <div className="flex h-fit cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-LightGray px-3 py-1 font-bold">
        <span className="text-GrayishBlue">+</span>
        <span className="text-ModerateBlue">{score} </span>
        <span className="text-GrayishBlue">-</span>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">ProfileImage</div>
        <div>{user.username}</div>
        <div>{createdAt}</div>
        <div>{replies.length}</div>
      </div>
      <div>
        <div className="text-GrayishBlue">{content}</div>
        <textarea rows={4} className="resize-none"></textarea>
      </div>
    </div>
  )
}
