'use client'

import Image from 'next/image'
import React, { RefObject } from 'react'
import { useRouter } from 'next/navigation'
import RatingStar from '@/components/common/RatingStar'
import { IGray } from '@/common/interfaces/IGray'
import NoPhotoAvailable from '@/assets/img/no-photo-available.png'

interface IProps {
  gray: IGray
}

export default function ProductCard({ gray }: IProps) {
  const refProductCardFloatView: RefObject<HTMLDivElement> = React.createRef()
  const router = useRouter()

  const onMouseOverTopProductCard = (event: React.MouseEvent) => {
    refProductCardFloatView.current?.classList.remove('hidden')
    refProductCardFloatView.current?.classList.add('flex')
  }

  const onMouseLeaveTopProductCard = (event: React.MouseEvent) => {
    refProductCardFloatView.current?.classList.add('hidden')
    refProductCardFloatView.current?.classList.remove('flex')
  }

  return (
    <div className="product max-sm:w-full max-lg:w-1/2 w-1/4 p-3">
      <div
        className="flex flex-col justify-between shadow-md border border-stone-300 pb-3 h-full relative"
        onMouseOver={onMouseOverTopProductCard}
        onMouseLeave={onMouseLeaveTopProductCard}
      >
        <div className="top-product-card">
          <div
            className="h-36 cursor-pointer bg-gray-200"
            onClick={() => router.push(`/web/share-code/${gray?._id}`)}
          >
            {gray?.profileImg ? (
              <Image width={150} height={150} src={gray?.profileImg} alt="profile-image" />
            ) : (
              <Image height={150} className="mx-auto" src={NoPhotoAvailable} alt="profile-image" />
            )}
          </div>
          <div className="static-view px-3 pb-3 pt-1">
            <div className="view-status flex rounded-md overflow-hidden mb-3">
              <div className="view-count flex justify-around w-1/2 p-1 bg-yellow-200 border-r-2 border-white">
                <div className="icon">
                  <i className="fa-regular fa-eye"></i>
                </div>
                <div className="value">{gray?.viewCount}</div>
              </div>
              <div className="download-count flex justify-around w-1/2 p-1 bg-yellow-200">
                <div className="icon">
                  <i className="fa-solid fa-download"></i>
                </div>
                <div className="value">{gray?.downloadCount}</div>
              </div>
            </div>
            <RatingStar rating={gray?.rating} />
          </div>
          <div
            className="float-view absolute top-0 right-0 hidden flex-col text-2xl text-center p-3"
            ref={refProductCardFloatView}
          >
            <div
              className="download rounded-full h-10 w-10 bg-green-400 pt-0.5 mb-3 cursor-pointer"
              onClick={() => router.push(`/web/share-code/${gray?._id}`)}
            >
              <i className="fa-solid fa-download text-white"></i>
            </div>
            <div className="like rounded-full h-10 w-10 bg-rose-400 pt-1 cursor-pointer">
              <i className="fa-solid fa-heart text-white"></i>
            </div>
          </div>
        </div>
        <div
          className="category px-3 line-clamp-2 text-amber-800 flex-grow cursor-pointer hover:underline transition-all"
          onClick={() => router.push('/web/share-code')}
        >
          <i className="fa-solid fa-bookmark"></i>
          <span className="ml-2">React js</span>
        </div>
        <div
          className="title px-3 mt-2 font-semibold line-clamp-2 cursor-pointer hover:text-blue-600 hover:drop-shadow-md transition-colors"
          onClick={() => router.push(`/web/share-code/${gray?._id}`)}
        >
          {gray?.name}
        </div>
      </div>
    </div>
  )
}
