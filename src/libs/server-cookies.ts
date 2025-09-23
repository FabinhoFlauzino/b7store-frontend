import { CartItem } from "@/types/cart-item";
import { cookies } from "next/headers";

export const getServerCart = async (): Promise<CartItem[]> => {
  const cookiesStore = await cookies()
  const value = cookiesStore.get("cart")?.value

  if (!value) return []

  try {
    return JSON.parse(value)
  } catch (error) {
    return []
  }
}

export const setServerCart = async (cart: CartItem[]) => {
  const cookiesStore = await cookies()
  cookiesStore.set("cart", JSON.stringify(cart), { httpOnly: true })
}

export const clearServerCart = async () => {
  const cookiesStore = await cookies()
  cookiesStore.delete("cart")
}