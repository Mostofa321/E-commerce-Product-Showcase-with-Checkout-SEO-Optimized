import OrderTable from '../../components/OrderTable'

export default function OrdersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Orders</h1>
      <OrderTable />
    </main>
  )
}
