import Image from 'next/image'

export default function Product() {
  return (
    <div>
      <section>
        <div className="section-title my-3 p-2 text-2xl font-semibold border-b border-amber-700">
          HOT
        </div>
        <div className="section-content">
          <div className="product-list flex flex-wrap"></div>
        </div>
      </section>
    </div>
  )
}
