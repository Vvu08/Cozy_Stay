'use client'

interface MenuItemProps {
  onClick: () => void
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className='uppercase text-xs px-4 py-3 hover:bg-primary-100 transition font-semibold'
    >
      {label}
    </div>
  )
}

export default MenuItem
