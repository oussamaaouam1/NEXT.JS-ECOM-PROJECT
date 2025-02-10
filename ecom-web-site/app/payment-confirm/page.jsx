import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PaymentContent = () => {
  return (
    <div className='flex flex-col items-center justify-center px-5 mt-4 bg-slate-300 pt-14'>
      <Image
      src={'/done.gif'}
      width={200}
      height={200}
      alt='check'
      />
      <h2 className='text-xl text-black font-bold'>Payment Successful !</h2>
      <h2 className=' font-bold text-xl text-center mt-6 text-secondary'>We sent an email with your order infos</h2>
      <Link
      href='/'
      className='px-5 mb-5 py-3 mt-6 text-white rounded-md bg-primary hover:bg-light hover:text-black transition duration-300'
      >
        Back to Home
      </Link>

      
    </div>
  )
}

export default PaymentContent
