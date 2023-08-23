'use client'

import { PuffLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='h-[60vh] flex flex-col justify-center items-center'>
      <PuffLoader size={100} color={'#BF9270'} />
    </div>
  )
}

export default Loader
