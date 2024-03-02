import Image from 'next/image'
import React, { RefObject } from 'react'

export default function ProductCard() {
  const refProductCardFloatView: RefObject<HTMLDivElement> = React.createRef()

  const onMouseOverTopProductCard = (event: React.MouseEvent) => {
    refProductCardFloatView.current?.classList.remove('hidden')
    refProductCardFloatView.current?.classList.add('flex')
  }

  const onMouseLeaveTopProductCard = (event: React.MouseEvent) => {
    refProductCardFloatView.current?.classList.add('hidden')
    refProductCardFloatView.current?.classList.remove('flex')
  }

  return (
    <div className="product max-sm:w-full max-lg:w-1/2 w-1/4 p-3 ">
      <div
        className="flex flex-col justify-between shadow-md border border-stone-300 pb-3 h-full relative"
        onMouseOver={onMouseOverTopProductCard}
        onMouseLeave={onMouseLeaveTopProductCard}
      >
        <div className="top-product-card">
          <div className="h-36">
            <Image width={150} height={150} src="/next.svg" alt={''} />
          </div>
          <div className="static-view px-3 pb-3 pt-1">
            <div className="view-status flex rounded-md overflow-hidden">
              <div className="view-count flex justify-around w-1/2 p-1 bg-yellow-200 border-r-2 border-white">
                <div className="icon">
                  <i className="fa-regular fa-eye"></i>
                </div>
                <div className="value">0</div>
              </div>
              <div className="download-count flex justify-around w-1/2 p-1 bg-yellow-200">
                <div className="icon">
                  <i className="fa-solid fa-download"></i>
                </div>
                <div className="value">0</div>
              </div>
            </div>
            <div className="star text-yellow-300">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
          <div
            className="float-view absolute top-0 right-0 hidden flex-col text-2xl text-center p-3"
            ref={refProductCardFloatView}
          >
            <div className="download rounded-full h-10 w-10 bg-green-400 pt-0.5 mb-3 cursor-pointer">
              <i className="fa-solid fa-download text-white"></i>
            </div>
            <div className="like rounded-full h-10 w-10 bg-rose-400 pt-1 cursor-pointer">
              <i className="fa-solid fa-heart text-white"></i>
            </div>
          </div>
        </div>
        <div className="category px-3 line-clamp-2 text-yellow-300 flex-grow">
          <i className="fa-solid fa-bookmark"></i>
          <span className="ml-2 font-semibold">React js</span>
        </div>
        <div className="title px-3 line-clamp-2">Source code vip </div>
      </div>
    </div>
  )
}
