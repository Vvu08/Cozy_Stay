'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import useSignInModal from '@/app/hooks/useSignInModal'
import useSignUpModal from '@/app/hooks/useSignUpModal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import Button from '../Button'

const SignInModal = () => {
  const router = useRouter()
  const signInModal = useSignInModal()
  const signUpModal = useSignUpModal()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setLoading(false)
      if (callback?.ok) {
        toast.success('Signed In Successfully')
        router.refresh()
        signInModal.onClose()
      }
      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  const toggle = useCallback(() => {
    signInModal.onClose()
    signUpModal.onOpen()
  }, [])

  const bodyContent = (
    <div className='flex flex-col gap-3'>
      <Heading
        title='Welcome back to Cozy Stay'
        subtitle='Sign In to continue Travelling'
      />
      <Input
        id='email'
        label='Email'
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        disabled={loading}
        register={register}
        errors={errors}
        type='password'
        required
      />
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-2 mt-2'>
      <hr />
      <div className='flex gap-1 mt-1'>
        <Button
          outline
          label='Sign In Google'
          icon={FcGoogle}
          onClick={() => signIn('google')}
        />
        <Button
          outline
          label='Sign In Github'
          icon={AiFillGithub}
          onClick={() => signIn('github')}
        />
      </div>
      <div className='justify-center flex flex-row items-center gap-1'>
        <div>Don&apos;t have an account?</div>
        <div
          onClick={toggle}
          className='text-accent-700 cursor-pointer hover:underline font-semibold'
        >
          Sign Up
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={loading}
      isOpen={signInModal.isOpen}
      title='Sign In'
      actionLabel='Login'
      onClose={signInModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default SignInModal
