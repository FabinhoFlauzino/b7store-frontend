import Image from "next/image";

export function HeaderSearch() {
  return (
    <input
      type="search"
      placeholder="O que você procura?"
      className="border border-gray-200 w-full rounded-sm pl-13 py-3 outline-0 bg-[url('/assets/ui/search.png')] bg-no-repeat bg-[16px_50%] bg-[size:24px]"
    />
  )
}