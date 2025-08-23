"use client"

import Image from "next/image"
import Link from "next/link"
import { HeaderIcon } from "./header-icon"
import { useState } from "react"
import { HeaderSearch } from "./header-search"
import { data } from "@/data"

type MenuItem = {
  label: string;
  href: string;
}

export function Header() {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRÁTIS</strong> para todo o Nordeste nas compras acima de R$ 199,00. <strong>APROVEITA!</strong>
      </div>
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="w-32">
            <Link href="/">
              <Image
                src="/assets/ui/logo-black.png"
                alt="B7Store"
                width={120}
                height={40}
              />
            </Link>
          </div>

          <div className="flex-1">
            <div className="w-full hidden md:flex items-center px-6 gap-6">
              <div className="flex-1">
                <ul className="flex gap-10">
                  {data.menu.map(item => (
                    <li key={item.label}>
                      <Link href={item.href} className="font-medium text-gray-600">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-80">
                <HeaderSearch />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href={"/my-orders"}>
              <HeaderIcon src="/assets/ui/user-line.png" alt="Perfil" />
            </Link>
            <Link href={"/cart"}>
              <HeaderIcon src="/assets/ui/shopping-bag-4-line.png" alt="Carrinho" />
            </Link>
            <div className="md:hidden" onClick={() => setMenuOpened(!menuOpened)}>
              <HeaderIcon
                src="/assets/ui/menu-line.png"
                alt="Menu"
                selected={menuOpened}
                srcSelected="/assets/ui/menu-line-white.png"
              />
            </div>
          </div>
        </div>
      </div>

      {menuOpened && (
        <div className="md:hidden pb-6">
          {data.menu.map(item => (
            <Link key={item.label} href={item.href}>
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="font-medium text-lg text-gray-500">
                  {item.label}
                </div>
                <Image
                  src="/assets/ui/arrow-up-right.png"
                  alt="Ir para categoria"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="p-6 pt-0 md:hidden">
        <HeaderSearch />
      </div>
    </header>
  )
}