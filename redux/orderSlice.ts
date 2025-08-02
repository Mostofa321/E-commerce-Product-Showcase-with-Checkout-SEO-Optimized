// redux/orderSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from './cartSlice'

export interface Order {
  id: string
  customerName: string
  shippingAddress: string
  phoneNumber: string
  items: CartItem[]
  totalAmount: number
  date: string
}

interface OrderState {
  orders: Order[]
}

// Load from localStorage if available
const initialState: OrderState = {
  orders:
    typeof window !== 'undefined' && localStorage.getItem('orders')
      ? JSON.parse(localStorage.getItem('orders') as string)
      : [],
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<Omit<Order, 'id' | 'date'>>) => {
      const newOrder: Order = {
        ...action.payload,
        id: `ORD-${Date.now()}`,
        date: new Date().toLocaleString(),
      }
      state.orders.push(newOrder)

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('orders', JSON.stringify(state.orders))
      }
    },
  },
})

export const { placeOrder } = orderSlice.actions
export default orderSlice.reducer
