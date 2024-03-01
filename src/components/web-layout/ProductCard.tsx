import Image from 'next/image'
import React from 'react'

export default function ProductCard() {
  return (
    <div className="product max-sm:w-full max-lg:w-1/2 w-1/4 p-3 ">
      <div className="flex flex-col justify-between shadow-md border border-stone-300 pb-3 h-full">
        <div className="top-card">
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
        </div>
        <div className="float-view"></div>
        <div className="category px-3 line-clamp-2">React js</div>
        <div className="title px-3 line-clamp-2">Source code vip </div>
      </div>
    </div>
  )
}
