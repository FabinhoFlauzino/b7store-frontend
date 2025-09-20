"use client"

import Image from "next/image"
import { useState } from "react"

type Props = {
  images: string[]
}

export function ImageSlider({ images }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  return (
    <div className="max-w-sm mx-auto md:mx-0">
      <div className="border border-gray-300 bg-white p-14">
        <Image
          src={images[selectedImageIndex]}
          alt=""
          width={380}
          height={380}
          className="max-w-full"
        />
      </div>
      <div className="mt-8 grid grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 bg-white border  ${index === selectedImageIndex ? "border-blue-500" : "border-gray-300"}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image}
              alt=""
              width={120}
              height={120}
            />
          </div>
        ))}
      </div>
    </div>
  )
}