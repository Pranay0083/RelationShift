'use client'
import { usePaths } from '@/hooks/use-nav'
import React from 'react'

type Props = {
    slug: string
}

const Sidebar = ({slug}: Props) => {
const { page } = usePaths()
  return (
    <div className='w-[250px] border-2 radial fixed left-0 lg:inline-block border-[#545454] 
    bg-gradient-to-b from-[#7688DD] via-[#171717] to-[#7688DD] hidden bottom-0 top-0 
    m-3 rounded-3xl overflow-hidden'>
        <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] 
        bg-opacity-90 bg-clip-padding backdrop-filter 
        backdorp-blur-safari backdrop-blur-3xl">
            
        </div>
    </div>
  )
}

export default Sidebar
