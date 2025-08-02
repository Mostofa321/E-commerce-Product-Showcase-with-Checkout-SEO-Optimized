// app/product/[id]/page.tsx
import { Product } from '../../../types'
import { Metadata } from 'next'
import AddToCartButton from '../../../components/AddToCartButton'
import { Star } from "lucide-react";
import Image from 'next/image';

// Fetch all products for SSG
async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'force-cache' })
  return res.json()
}

// Fetch single product for details
async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'force-cache' })
  return res.json()
}

// Generate static params for SSG
export async function generateStaticParams() {
  const products = await getProducts()
  return products.map(product => ({ id: product.id.toString() }))
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)
  return {
    title: `${product.title} | E-commerce SEO`,
    description: product.description.slice(0, 150),
  }
}

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Product Image */}
        <div className="relative rounded-3xl p-8 shadow-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="object-contain max-h-[500px] mx-auto"
          />
          {/* Category Badge */}
          <span className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
            {product.category}
          </span>
        </div>

        {/* Product Details */}
        <div>
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(product.rating.rate) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">
              {product.rating.rate} / 5 • {product.rating.count} reviews
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          {/* Price */}
          <div className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ${product.price}
          </div>

          {/* Add to Cart Button */}
          <div className="max-w-sm">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  )
}