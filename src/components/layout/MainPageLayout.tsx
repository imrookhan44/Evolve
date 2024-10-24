import React from 'react'
import Sidebar from '../ui/Sidebar'

interface MainPageLayoutType {
  children: React.ReactNode
}
function MainPageLayout({ children }: MainPageLayoutType) {
  return (
    <>
      <div className='flex gap-10'>
        <Sidebar />
        {children}
      </div>

    </>
  )
}

export default MainPageLayout
