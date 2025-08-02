'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { clearCart, CartItem } from '../../redux/cartSlice'
import { placeOrder } from '../../redux/orderSlice'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Image from 'next/image'
import { ShoppingCart, MapPin, Phone, User, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface CheckoutFormData {
  fullName: string
  address: string
  phone: string
}

export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  const [submitted, setSubmitted] = useState(false)

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CheckoutFormData>()

  const onSubmit = (data: CheckoutFormData) => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!')
      return
    }

    dispatch(
      placeOrder({
        customerName: data.fullName,
        shippingAddress: data.address,
        phoneNumber: data.phone,
        items: cartItems,
        totalAmount,
      })
    )

    dispatch(clearCart())
    setSubmitted(true)
    reset()
    toast.success('Order placed successfully!')
  }

  if (submitted) {
    return (
      <main className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="flex flex-col items-center">
        {/* Success Icon */}
        <CheckCircle className="w-16 h-16 text-green-500 mb-6 animate-bounce" />

        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Thank You for Your Order!
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg mb-10">
          Your order has been placed successfully. We’ll notify you once it’s
          shipped. 🎉
        </p>

        {/* Back to Shop Button */}
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-xl
            shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900">
        Checkout
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* Cart Summary */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-blue-600" /> Your Cart
            </h2>

            <ul className="space-y-4 divide-y divide-gray-100">
              {cartItems.map((item: CartItem) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center pt-2 first:pt-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-gray-800 font-medium line-clamp-1">
                      {item.title} × {item.quantity}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-bold text-right text-xl">
              Total:{' '}
              <span className="text-blue-600">
                ${totalAmount.toFixed(2)}
              </span>
            </p>
          </div>

          {/* Shipping Info Form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg space-y-5">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>

            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Full Name"
                {...register('fullName', { required: 'Full Name is required' })}
                className="w-full border border-gray-200 pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Shipping Address"
                {...register('address', { required: 'Address is required' })}
                className="w-full border border-gray-200 pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                placeholder="Phone Number"
                {...register('phone', {
                  required: 'Phone Number is required',
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: 'Enter a valid phone number',
                  },
                })}
                className="w-full border border-gray-200 pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md
            transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            Place Order
          </button>
        </form>
      )}
    </main>
  )
}
