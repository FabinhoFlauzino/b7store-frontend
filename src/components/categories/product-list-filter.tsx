"use client"

import { UseQueryString } from "@/hooks/use-querystring"
import { ChangeEvent, useState } from "react"
import { FilterGroup } from "./filter-group"
import { data } from "@/data"
import ProductItem from "../product-item"

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
        <div className="text-3xl"><strong>{data.products.length}</strong> {data.products.length > 0 ? "Produtos" : "Produto"}</div>
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
        <div className={`flex-1 md:max-w-70 ${filterOpened ? "block" : "hidden"} md:block`}>
          <FilterGroup id="tech" name="Tecnologias" />
          <FilterGroup id="color" name="Cores" />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.products.map((item) => (
            <ProductItem
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}