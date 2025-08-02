import Link from 'next/link'
import { Product } from '../types'
import Image from 'next/image'
import LinkButton from './LinkButton'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden 
  transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

      {/* Product Image */}
      <div className="relative w-full h-60 p-[12px] flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Product Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-base font-semibold text-gray-900 truncate  
      group-hover:text-blue-600 transition-colors duration-300">
          <Link
            href={`/product/${product.id}`}>
            {product.title}
          </Link>
        </h2>

        <p className="mt-2 mb-5 text-xl font-bold text-blue-600">${product.price}</p>

        {/* View Details Button */}
        <LinkButton href={`/product/${product.id}`}>
          View Details
        </LinkButton>
      </div>
    </div>
  )
}
