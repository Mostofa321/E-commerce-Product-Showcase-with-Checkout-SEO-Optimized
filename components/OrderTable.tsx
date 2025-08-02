'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Order } from '../redux/orderSlice'

export default function OrderTable() {
  const orders = useSelector((state: RootState) => state.orders.orders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  return (
    <div className="overflow-x-auto border border-gray-100 rounded-2xl shadow-lg bg-white">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">Order ID</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">Customer</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">Total Items</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">Total Amount</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-6 text-center text-gray-400 text-lg">
                No orders placed yet.
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                onClick={() => setSelectedOrder(order)}
              >
                <td className="p-4 text-gray-800 font-medium">{order.id}</td>
                <td className="p-4 text-gray-600">{order.customerName}</td>
                <td className="p-4 text-gray-600">
                  {order.items.reduce((sum, item) => sum + item.quantity, 0)}
                </td>
                <td className="p-4 font-semibold text-blue-600">${order.totalAmount.toFixed(2)}</td>
                <td className="p-4 text-gray-500">{order.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-2xl relative animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-100 pb-3">Order Details</h2>

            <div className="space-y-3 text-gray-700">
              <p><strong className="text-gray-900">Order ID:</strong> {selectedOrder.id}</p>
              <p><strong className="text-gray-900">Customer:</strong> {selectedOrder.customerName}</p>
              <p><strong className="text-gray-900">Address:</strong> {selectedOrder.shippingAddress}</p>
              <p><strong className="text-gray-900">Phone:</strong> {selectedOrder.phoneNumber}</p>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-gray-900 mb-2">Items:</p>
              <ul className="divide-y divide-gray-100 border rounded-lg overflow-hidden">
                {selectedOrder.items.map((item) => (
                  <li key={item.id} className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 transition">
                    <span className="text-gray-700">
                      {item.title} × {item.quantity}
                    </span>
                    <span className="font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 font-bold text-right text-xl text-blue-600">
              Total: ${selectedOrder.totalAmount.toFixed(2)}
            </p>

            <button
              onClick={() => setSelectedOrder(null)}
              className="mt-8 w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md
            hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

  )
}
