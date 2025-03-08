import React from 'react'
import { Button } from '@/components/ui/button'
import Loader from '../loader'
import { BotIcon } from 'lucide-react'

type Props = {}

const CreateAutomation = (props : Props) => {
  return (
    <Button className='lg:px-10, py-6 bg-gradient-to-br hover:opacity-80 text-while rounded-full from-[#3352cc] font-medium to-[#1c2d70]'>
        <Loader state={false} >
            <BotIcon />
            <p className="lg:inline hidden">
                Create an Automation
            </p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation
