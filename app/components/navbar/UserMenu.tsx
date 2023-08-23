'use client'
import { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'
import useSignUpModal from '@/app/hooks/useSignUpModal'
import useSignInModal from '@/app/hooks/useSignInModal'
import useRentModal from '@/app/hooks/useRentModal'
import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types'
import { useRouter } from 'next/navigation'

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const signUpModal = useSignUpModal()
  const signInModal = useSignInModal()
  const rentModal = useRentModal()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const onRent = useCallback(() => {
    if (!currentUser) return signInModal.onOpen()
    rentModal.onOpen()
  }, [currentUser, signInModal, rentModal])

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={onRent}
          className='uppercase hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-primary-100 transition cursor-pointer'
        >
          + your rent
        </div>
        <div
          onClick={toggleOpen}
          className='p-3 md:py-1 md:px-2 border-[1px] border-primary-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vm] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push('/trips')}
                  label='My trips'
                />
                <MenuItem
                  onClick={() => router.push('/favorites')}
                  label='Favorites'
                />
                <MenuItem
                  onClick={() => router.push('/reservations')}
                  label='Reservations'
                />
                <MenuItem
                  onClick={() => router.push('/properties')}
                  label='My properties'
                />
                <MenuItem onClick={rentModal.onOpen} label='Add my house' />
                <MenuItem onClick={() => signOut()} label='Logout' />
              </>
            ) : (
              <>
                <MenuItem onClick={signInModal.onOpen} label='Sign In' />
                <MenuItem onClick={signUpModal.onOpen} label='Sign Up' />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
