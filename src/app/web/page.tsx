import Image from 'next/image'
import ProductCard from '@/components/web/product/ProductCard'
import { getDictionary } from '@/lang/dictionaries'
import { cookie } from '@/utils/helper'

export default async function WebHome() {
  const dict = await getDictionary(cookie.get('NEXT_LANG') || 'en')

  return (
    <div>
      <section className="bg-white p-4">
        <div className="section-title my-3 p-2 text-2xl font-semibold uppercase border-b border-amber-700">
          {dict.section.hot}
        </div>
        <div className="section-content">
          <div className="product-list flex flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  )
}
