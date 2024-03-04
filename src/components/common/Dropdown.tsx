'use client'

import React from 'react'

export default function Dropdown({ children, menu }: { children: React.ReactNode; menu: any }) {
  const style: React.CSSProperties = {
    position: 'relative',
  }
  const style2: React.CSSProperties = {}
  const style3: React.CSSProperties = {}

  const dropdownClick = () => {
    console.log('111 dropdownClick')

    document.getElementById('dropdown')?.setAttribute('style', 'display: none;')
  }

  return (
    <div style={style}>
      <div style={style2} onClick={dropdownClick}>
        {children}
      </div>
      <div id="dropdown">
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
  )
}
