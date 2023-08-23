'use client'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  formatPrice?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className='w-full relative'>
      {formatPrice && (
        <BiDollar
          size={24}
          className='text-primary-600 absolute top-[1.2rem] left-2'
        />
      )}
      <input
        id={id}
        disabled={disabled}
        type={type}
        placeholder=' '
        {...register(id, { required })}
        className={`peer w-full p-2 pt-5 font-light bg-white border-[1.8px] rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          formatPrice ? 'pl-9' : 'pl-4'
        } ${
          errors[id]
            ? 'border-red-500 focus:border-red-500'
            : 'border-primary-600 focus:border-primary-600'
        } `}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-5 top-5 z-10 origin-[0] ${
          formatPrice ? 'left-9' : 'left-4'
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4
        ${errors[id] ? 'text-red-500' : 'text-primary-600'}`}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
