import { Default } from "components/MainContent/Default"

export function MainContent() {
  return (
    <div className="overflow-y-scroll h-[calc(100vh-91px-64px)]">
      <div className="px-8 pt-6 pb-8">
        <Default />
      </div>
    </div>
  )
}
