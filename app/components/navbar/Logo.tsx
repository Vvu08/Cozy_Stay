'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <div>
      <Image
        onClick={() => router.push('/')}
        alt='Logo'
        src='/images/logo.svg'
        className='hidden md:block cursor-pointer'
        height='65'
        width='65'
      />
      <h1 className='text-primary-600 uppercase text-sm'>Cozy Stay</h1>
    </div>
  )
}

export default Logo
