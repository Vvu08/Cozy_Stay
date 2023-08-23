'use client'

import { IconType } from 'react-icons'

interface CategoryInputProps {
  label: string
  icon: IconType
  selected: boolean
  onClick: (value: string) => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  label,
  icon: Icon,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-primary-400 hover:text-primary-800 text-neutral-800 transition cursor-pointer  font-semibold ${
        selected
          ? 'border-primary-500 text-primary-700'
          : 'border-neutral-200 text-neutral-800'
      }`}
    >
      <Icon size={30} />
      {label}
    </div>
  )
}

export default CategoryInput
