import Card from "../Layout/Card"
import { useCurrentUserDetail } from "../Store/currentUser.tsx"

interface Props {
  buttonAction: string | undefined
}

export default function Answer({ buttonAction }: Props) {
  const { username, imagePng } = useCurrentUserDetail()
  return (
    <Card>
      <div className="h-12 w-12 rounded-full ">
        <img src={imagePng} alt={username} />
      </div>
      <textarea
        placeholder="Add a comment..."
        rows={4}
        className="w-full resize-none rounded-md border p-2 focus:outline-none"
      ></textarea>
      <button className="w-20 self-start rounded-md bg-ModerateBlue px-4 py-3 text-sm font-bold text-white ">
        {buttonAction}
      </button>
    </Card>
  )
}
