'use client'

import Image from 'next/image'
import { authStore } from '../../mobx/store/AuthStore'
import { observer } from 'mobx-react-lite'
import ProductCard from '@/components/web-layout/ProductCard'

export default observer(function WebHome() {
  return (
    <div>
      <section>
        <div className="section-title my-3 p-2 text-2xl font-semibold border-b border-amber-700">
          HOT
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
})
