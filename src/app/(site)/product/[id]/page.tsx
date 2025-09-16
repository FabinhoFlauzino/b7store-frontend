import Link from "next/link"

type Props = {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
  const { id } = await params

  // TODO: Fazer consulta do produto pelo ID

  return (
    <div>
      <div className="text-gray-500 mb-4">
        <Link href="/">Home</Link> &gt; <Link href="/">Camisas</Link> &gt; Nome do produto
      </div>
    </div>
  )
} 