"use client"

import { UseQueryString } from "@/hooks/use-querystring"
import { ChangeEvent, useState } from "react"

export function ProductListFilter() {
  const queryString = UseQueryString()
  const [filterOpened, setFilterOpend] = useState(false)

  const order = queryString.get("order") ?? "views"

  const handleSelectChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    queryString.set("order", e.target.value)
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="text-3xl"><strong>99</strong> Produtos</div>
        <div className="w-full md:max-w-70 flex flex-row gap-5">
          <select 
          onChange={handleSelectChanged}
          defaultValue={order} 
          className="flex-1 px-6 h-14 flex items-center bg-white border border-gray-200 rounded-sm tetx-gray-500">
            <option value="views">Popularidade</option>
            <option value="price">Pro preço</option>
            <option value="selling">Mais vendido</option>
          </select>

          <div
            onClick={() => setFilterOpend(!filterOpened)}
            className="flex-1 px-6 h-14 flex md:hidden items-center bg-white border border-gray-200 rounded-sm tetx-gray-500">
            Filtrar por
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className={`flex-1 md:max-w-70 ${filterOpened ? "block" : "hidden"} md:block`}>Filtro</div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          <div className="">...</div>
          <div className="">...</div>
          <div className="">...</div>
          <div className="">...</div>
          <div className="">...</div>
        </div>
      </div>
    </div>
  )
}