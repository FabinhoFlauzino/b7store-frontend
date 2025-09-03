"use client"

import Image from "next/image";
import { FilterItem } from "./filter-item";
import { useState } from "react";

export function FilterGroup() {
  const [opened, setOpened] = useState(true)

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex-1 text-xl font-semibold">Nome do Grupo</div>
        <div onClick={() => setOpened(!opened)} className="size-8 flex justify-center items-center cursor-pointer">
          <Image
            src="/assets/ui/arrow-left-s-line.png"
            alt=""
            width={24}
            height={24}
            className={`transition-all ${opened ? "rotate-0": "-rotate-180"}`}
          />
        </div>
      </div>
      <div className={`overflow-y-hidden ${opened ? "max-h-96": "max-h-0"} transition-all`}>
        <FilterItem id={1} label={"item 1"} />
        <FilterItem id={2} label={"item 2"} />
        <FilterItem id={3} label={"item 3"} />
      </div>
    </div>
  )
}