'use client'

import { Product } from '../types'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { toast } from 'react-toastify'

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    toast.success(`${product.title} added to cart!`)
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300 cursor-pointer"
    >
      Add to Cart
    </button>
  )
}