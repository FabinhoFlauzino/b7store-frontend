import { FilterItem } from "./filter-item";

export function FilterGroup() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex-1 text-xl font-semibold">Nome do Grupo</div>
        <div className="">...</div>
      </div>
      <div className="pt-8 flex flex-col gap-4">
        <FilterItem id={1} label={"item 1"}/>
        <FilterItem id={2} label={"item 2"}/>
        <FilterItem id={3} label={"item 3"}/>
      </div>
    </div>
  )
}