'use client'

import Container from '../Container'
import CategoryBox from './CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'
import { TbBeach, TbPool } from 'react-icons/tb'
import {
  GiForestCamp,
  GiBarn,
  GiCruiser,
  GiFamilyHouse,
  GiIsland,
  GiBoatFishing,
} from 'react-icons/gi'
import { MdApartment } from 'react-icons/md'
import { FaHotel, FaSkiing } from 'react-icons/fa'
import { IoDiamond } from 'react-icons/io5'

export const categories = [
  {
    label: 'Apartments',
    icon: MdApartment,
    description: 'This property is an apartment',
  },
  {
    label: 'Hotel',
    icon: FaHotel,
    description: 'This property is a hotel',
  },

  {
    label: 'Cruise',
    icon: GiCruiser,
    description: 'This property is a cruise',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property has a pool',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activies',
  },
  {
    label: 'Homes',
    icon: GiFamilyHouse,
    description: 'This property is a private home, villa or cottage',
  },
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description:
      'Sites for camping with facilities like tents, RV hookups and bathrooms',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn',
  },
  {
    label: 'Luxury',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious',
  },
]

const Categories = () => {
  const params = useSearchParams()
  const currentCategory = params?.get('category')
  const pathname = usePathname()

  const isMainPage = pathname === '/'

  if (!isMainPage) return null

  return (
    <Container>
      <div className='pt-2 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            label={category.label}
            selected={currentCategory === category.label}
            icon={category.icon}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories
