import React from 'react'
import { Badge } from 'flowbite-react';
import { Card } from 'flowbite-react';
const CardLogin = () => {
  return (
    <Card className='ml-3 h-30'>
    <div className="flex flex-col">
    <div className="mb-4 mt-0">
      <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Login
      </h1>
    </div>
      <div className="flex text-gray-900 mb-4 items-center justify-space">
        <p>Change Password</p>
    </div>
    </div>
  </Card>
  )
}

export default CardLogin