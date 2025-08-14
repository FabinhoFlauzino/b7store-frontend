import Image from "next/image";

type Props = {
  src: string
  alt: string
}

export function HeaderIcon({src, alt}: Props) {
  return (
    <div className="size-12 border border-gray-200 hover:bg-gray-100 rounded-sm flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        className="size-6"
      />
    </div>
  )
}