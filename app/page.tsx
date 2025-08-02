import ProductGrid from '../components/ProductGrid'
import { Product } from '../types'

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'force-cache' })
  return res.json()
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <main className="max-w-7xl mx-auto px-4 py-[40px] md:py-[60px] lg:py-[80px]">
      <h1 className="text-4xl font-bold text-center mb-[20px] md:mb-[40px] lg:mb-[60px]">Our Products</h1>
      <ProductGrid products={products} />
    </main>
  )
}
