import React from 'react'
import Sidebar from '../ui/Sidebar'

interface MainPageLayoutType {
  children: React.ReactNode
}
function MainPageLayout({ children }: MainPageLayoutType) {
  return (
    <>
      <div className='flex  gap-10 '>
        <Sidebar />
        <div className='w-full py-8 px-0'>
          {children}
        </div>
      </div>

    </>
  )
}

export default MainPageLayout
