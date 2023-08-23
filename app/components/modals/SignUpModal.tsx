'use client'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import useSignUpModal from '@/app/hooks/useSignUpModal'
import useSignInModal from '@/app/hooks/useSignInModal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import Button from '../Button'
import { signIn } from 'next-auth/react'

const SignUpModal = () => {
  const signInModal = useSignInModal()
  const signUpModal = useSignUpModal()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true)

    axios
      .post('/api/signup', data)
      .then(() => {
        signUpModal.onClose()
        signInModal.onOpen()
      })
      .catch((err) => toast.error('Something Went Wrong'))
      .finally(() => setLoading(false))
  }

  const bodyContent = (
    <div className='flex flex-col gap-3'>
      <Heading
        title='Welcome to Cozy Stay'
        subtitle='Sign Up to start Travelling'
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
        id='name'
        label='Name'
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

  const toggle = useCallback(() => {
    signUpModal.onClose()
    signInModal.onOpen()
  }, [])

  const footerContent = (
    <div className='flex flex-col gap-2 mt-2'>
      <hr />
      <div className='flex gap-1 mt-1'>
        <Button
          outline
          label='Sign Up Google'
          icon={FcGoogle}
          onClick={() => signIn('google')}
        />
        <Button
          outline
          label='Sign Up Github'
          icon={AiFillGithub}
          onClick={() => signIn('github')}
        />
      </div>
      <div className='justify-center flex flex-row items-center gap-1'>
        <div>Already have an account?</div>
        <div
          onClick={toggle}
          className='text-accent-700 cursor-pointer hover:underline font-semibold'
        >
          Sign In
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={loading}
      isOpen={signUpModal.isOpen}
      title='Sign Up'
      actionLabel='Continue'
      onClose={signUpModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default SignUpModal
