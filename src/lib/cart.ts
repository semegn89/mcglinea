"use client"

import type { CartItem, Product } from "@/types"

const CART_STORAGE_KEY = "mcglinea_cart"

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return []
  
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === "undefined") return
  
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Ignore storage errors
  }
}

export function addToCart(product: Product, quantity: number = 1): CartItem[] {
  const cart = getCart()
  const existingIndex = cart.findIndex(item => item.productId === product.id)
  
  if (existingIndex >= 0) {
    cart[existingIndex].quantity += quantity
  } else {
    cart.push({
      productId: product.id,
      product,
      quantity,
      price: product.price,
    })
  }
  
  saveCart(cart)
  return cart
}

export function removeFromCart(productId: string): CartItem[] {
  const cart = getCart().filter(item => item.productId !== productId)
  saveCart(cart)
  return cart
}

export function updateCartItemQuantity(productId: string, quantity: number): CartItem[] {
  const cart = getCart()
  const item = cart.find(item => item.productId === productId)
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId)
    }
    item.quantity = quantity
    saveCart(cart)
  }
  
  return cart
}

export function clearCart(): void {
  saveCart([])
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

