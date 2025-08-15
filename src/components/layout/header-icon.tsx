import Image from "next/image";

type Props = {
  src: string
  alt: string
  selected?: boolean
  srcSelected?: string
}

export function HeaderIcon({ src, alt, selected, srcSelected }: Props) {
  return (
    <div className={`size-12 border border-gray-200 hover:bg-gray-100 rounded-sm flex items-center justify-center ${selected ? "bg-blue-600 border-blue-600 hover:!bg-blue-500" : ""}`}>
      {selected && srcSelected && (
        <Image
          src={srcSelected}
          alt={alt}
          width={24}
          height={24}
          className="size-6"
        />
      )}
      {!selected && (
        <Image
          src={src}
          alt={alt}
          width={24}
          height={24}
          className="size-6"
        />
      )}
    </div>
  )
}