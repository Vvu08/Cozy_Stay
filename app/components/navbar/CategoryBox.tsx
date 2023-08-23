'use client'

import { IconType } from 'react-icons'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import qs from 'query-string'

interface CategoryBoxProps {
  icon: IconType
  label: string
  selected: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  icon: Icon,
  selected,
}) => {
  const router = useRouter()
  const params = useSearchParams()

  const handleCategoryClick = useCallback(() => {
    let currentQuery = {}
    if (params) currentQuery = qs.parse(params.toString())
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    }
    if (params?.get('category') === label) delete updatedQuery.category

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    )
    router.push(url)
  }, [router, params, label])

  return (
    <div
      onClick={handleCategoryClick}
      className={`flex flex-col items-center gap-2 border-b-2 px-2 hover:text-primary-800 transition cursor-pointer ${
        selected
          ? 'border-b-primary-700 text-primary-700'
          : 'border-transparent text-neutral-500'
      }`}
    >
      <Icon size={26} />
      <div className='text-xs font-bold uppercase'>{label}</div>
    </div>
  )
}

export default CategoryBox
