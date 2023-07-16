import Card from "../Layout/Card"

export default function Answer() {
  return (
    <Card>
      <div>Display</div>
      <textarea rows={4} className="resize-none rounded-md border p-4 focus:outline-none"></textarea>
      <button className="w-20 self-start rounded-md bg-ModerateBlue px-4 py-2 text-white ">SEND</button>
    </Card>
  )
}
