import { CartItem } from "@/types/cart-item"
import { create } from "zustand"

type CartState = {
  cart: CartItem[]
  shippingZipcode: string
  shippingCost: number
  shippingDays: number
  selectedAddressId: number | null
  addItem: (cartItem: CartItem) => void
  removeItem: (productId: string | number) => void
  updateQuantity: (productId: string | number, quantity: number) => void
  setShippingZipcode: (zipcode: string) => void
  setShippingCost: (cost: number) => void
  setShippingDays: (days: number) => void
  setSelectedAddressId: (id: number | null) => void
  clearCart: () => void
  clearShipping: () => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  shippingZipcode: "",
  shippingCost: 0,
  shippingDays: 0,
  selectedAddressId: null,
  addItem: ({productId, quantity}) => {},
  removeItem: (productId) => {},
  updateQuantity: (productId, quantity) => {},
  setShippingZipcode: (zipcode) => {},
  setShippingCost: (cost) => {},
  setShippingDays: (days) => {},
  setSelectedAddressId: (id) => {},
  clearCart: () => {},
  clearShipping: () => {},
}))