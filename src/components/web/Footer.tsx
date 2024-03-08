import React from 'react'
import Image from 'next/image'

import FacebookIcon from '../../assets/icon/facebook.svg'
import YoutubeIcon from '../../assets/icon/youtube.svg'
import MoMoIcon from '../../assets/icon/momo.svg'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-blue-100 text-center text-surface dark:bg-neutral-700 dark:text-white lg:text-left">
      <div className="container p-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">About us</h5>
            <div className="mb-4">
              <div className="mb-1">Hotline: 0911.888.391</div>
              <div className="mb-2">Email: sharechatxam@gmail.com</div>
              <div className="flex justify-center lg:justify-start">
                <span className="mr-3">
                  <Image width={18} src={FacebookIcon} alt="FacebookIcon" />
                </span>
                <span>
                  <Image width={18} src={YoutubeIcon} alt="YoutubeIcon" />
                </span>
              </div>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">THANH TOÁN ĐẢM BẢO</h5>
            <div className="mb-4 flex justify-center lg:justify-start">
              <span>
                <Image width={24} src={MoMoIcon} alt="MoMoIcon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black/5 p-4 text-center">
        © 2024 Copyright:
        <a href="https://sharechatxam.com/"> ShareChatXam.Com</a>
      </div>
    </footer>
  )
}
