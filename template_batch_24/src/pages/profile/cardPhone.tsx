import React from 'react'
import { Badge } from 'flowbite-react';
import { Card } from 'flowbite-react';
const CardPhone = () => {
  return (
    <Card className='ml-3'>
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Phones
      </h5>
      <a className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500" href="#">
        <p>
          View all
        </p>
      </a>
    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                Neil Sims
              </p>
              <p className=" text-sm text-gray-500 dark:text-gray-400 break-words">
                email@windster.coma
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $320
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Card>
  )
}

export default CardPhone