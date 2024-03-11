'use client'

import Image from 'next/image'

import TickIcon from '@/assets/icon/tick.svg'
import RatingStar from '@/components/common/RatingStar'
import ProductCard from '@/components/web/product/ProductCard'
import Comment from '@/components/web/product/Comment'

export default function ShareCode() {
  return (
    <div className="product-detail">
      <section className="flex flex-wrap mt-4 p-3 border shadow-md bg-white">
        <div className="image w-full sm:w-4/12 xl:w-3/12 mb-3 bg-gray-300 overflow-hidden">
          {/* <div className="w-80 h-80 bg-gray-300"></div> */}
        </div>
        <div className="product-detail w-full sm:w-8/12 xl:w-6/12 sm:pl-8 xl:px-8 mb-3">
          <div className="product-name font-semibold text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit adipisci, molestiae
            ipsam eius modi assumenda ratione, natus voluptatibus debitis voluptates accusamus animi
            facere eum itaque praesentium dolorum. Distinctio, ea reiciendis.
          </div>
          <div className="product-detail-rating flex items-center mt-3">
            <RatingStar rating={4} />
            <div className="download-count flex px-2 py-0.5 ml-8 rounded-md bg-amber-200 font-bold">
              <div className="icon mr-3">
                <i className="fa-solid fa-download"></i>
              </div>
              <div className="value">0</div>
            </div>
          </div>
          <div className="cost bg-amber-100 flex justify-between mt-3 p-3">
            <div className="">
              <span>Cost:</span>
              <span>50000</span>
              <span>1x = 1000d</span>
            </div>
            <div className="charge">Charge</div>
          </div>
          <div className="download-product flex justify-between mt-3">
            <div className="download-info">
              <div className="flex">
                <span className="block w-24 min-w-24 truncate text-gray-400">Category</span>
                <span className="block flex-grow">123</span>
              </div>
              <div className="flex">
                <span className="block w-24 min-w-24 truncate text-gray-400">Group</span>
                <span>123</span>
              </div>
              <div className="flex">
                <span className="block w-24 min-w-24 truncate text-gray-400">Type</span>
                <span>Free</span>
              </div>
              <div className="flex">
                <span className="block w-24 min-w-24 truncate text-gray-400">Created</span>
                <span>8/3/2024</span>
              </div>
              <div className="flex">
                <span className="block w-24 min-w-24 truncate text-gray-400">Size</span>
                <span>100Mb</span>
              </div>
            </div>
            <div className="download-info flex-shrink">
              <div className="download-button mb-3 w-36 rounded-md border border-green-700 p-3 cursor-pointer bg-lime-600 text-xl font-bold text-white hover:bg-lime-700 transition-colors text-center">
                Download
              </div>
              <div className="view-demo w-36 rounded-md border border-green-700 p-3 cursor-pointer bg-white text-xl font-bol font-bold hover:bg-gray-300 hover:text-green-800 transition-colors text-center">
                View Demo
              </div>
            </div>
          </div>
        </div>
        <div className="side-info flex flex-wrap h-full w-full xl:w-3/12 xl:flex-col -ml-3 -mb-3">
          <div className="seller-group border border-amber-600 rounded-md p-3 ml-3 mb-3 xl:w-full">
            <div className="title mb-3 text-lg font-semibold">INFO</div>
            <div className="flex relative">
              <div className="seller w-20 h-20 overflow-hidden bg-slate-400 mr-2">
                {/* <img src="" alt="" /> */}
              </div>
              <div className="seller-info">
                <div className="name flex">
                  <div className="me-2">XXXX</div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                    Verified
                  </span>
                </div>
                <div className="product-count">XXX</div>
                <div className="rating">XXX</div>
              </div>
            </div>
            <div className="seller-info"></div>
          </div>
          <div className="verify-code p-8 border border-amber-600 rounded-md mb-3 ml-3 xl:w-full">
            <div className="verify flex mb-2">
              <Image height={18} src={TickIcon} alt="tick" className="mr-3" />
              <span className="text-amber-800 text-sm font-semibold">Verify</span>
            </div>
            <div className="no-virus flex mb-2">
              <Image height={18} src={TickIcon} alt="tick" className="mr-3" />
              <span className="text-amber-800 text-sm font-semibold">Virus scanned</span>
            </div>

            <div className="has-demo flex mb-2">
              <Image height={18} src={TickIcon} alt="tick" className="mr-3" />
              <span className="text-amber-800 text-sm font-semibold">Demo</span>
            </div>
          </div>
        </div>
      </section>
      <section className="more-product-detail mt-4 p-4 shadow-md border bg-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, obcaecati sit perferendis
        illo ipsam voluptate ut dignissimos, voluptas reprehenderit vel veniam voluptatum quis
        doloremque! Esse officia architecto voluptatem accusantium minima.
      </section>
      <section className="rating-group mt-4 p-4 shadow-md border bg-white">
        <Comment />
      </section>
      <section className="hot-product mt-4 p-4 shadow-md border bg-white">
        <div className="section-title my-3 p-2 text-2xl font-semibold border-b border-amber-700">
          HOT
        </div>
        <div className="product-list flex flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  )
}
