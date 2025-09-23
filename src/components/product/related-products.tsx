import { data } from "@/data"
import ProductList from "../product-list"

type Props = {
  id: number
}

export function RelatedProducts({ id }: Props) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold">Você também pode gostar</h3>

      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  )
}