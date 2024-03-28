import Image from 'next/image'
import { GetServerSideProps, InferGetServerSidePropsType, NextPageContext } from 'next'

import ProductCard from '@/components/web/product/ProductCard'
import { getDictionary } from '@/lang/dictionaries'
import { cookie } from '@/utils/helper'
import { getGrays } from '@/services/GrayServices'
import { IGray } from '@/common/interfaces/IGray'
import { cookies } from 'next/headers'

// "getServerSideProps" is not supported in app/. Read more: https://nextjs.org/docs/app/building-your-application/data-fetching
// export const getServerSideProps = async () => {}

export default async function WebHome(props: any) {
  let grays: any, error: any
  const dict = await getDictionary(cookie.get('NEXT_LANG') || 'en')
  try {
    const { data } = await getGrays()
    grays = data
  } catch (err) {
    error = err
  }

  return (
    <div>
      <section className="bg-white p-4">
        {error && <div className="err text-red-600">Error: {error.message || 'Network error'}</div>}
        <div className="section-title my-3 p-2 text-2xl font-semibold uppercase border-b border-amber-700">
          {dict.section.hot}
        </div>
        <div className="section-content">
          <div className="product-list flex flex-wrap">
            {Array.isArray(grays?.data?.grays) &&
              grays.data.grays.length > 0 &&
              grays.data.grays.map((gray: IGray) => <ProductCard key={gray._id} gray={gray} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
