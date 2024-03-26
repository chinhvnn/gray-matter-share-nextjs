import Image from 'next/image'
import { GetServerSideProps, InferGetServerSidePropsType, NextPageContext } from 'next'

import ProductCard from '@/components/web/product/ProductCard'
import { getDictionary } from '@/lang/dictionaries'
import { cookie } from '@/utils/helper'
import { getGrays } from '@/services/GrayServices'
import { IGray } from '@/common/interfaces/IGray'

// "getServerSideProps" is not supported in app/. Read more: https://nextjs.org/docs/app/building-your-application/data-fetching
// export const getServerSideProps = async () => {}

export default async function WebHome() {
  const dict = await getDictionary(cookie.get('NEXT_LANG') || 'en')
  const { data } = await getGrays()

  return (
    <div>
      <section className="bg-white p-4">
        <div className="section-title my-3 p-2 text-2xl font-semibold uppercase border-b border-amber-700">
          {dict.section.hot}
        </div>
        <div className="section-content">
          <div className="product-list flex flex-wrap">
            {Array.isArray(data?.data?.grays) &&
              data.data.grays.length > 0 &&
              data.data.grays.map((gray: IGray) => <ProductCard key={gray._id} gray={gray} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
