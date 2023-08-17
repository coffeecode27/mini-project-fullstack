import React from 'react'
import { Badge } from 'flowbite-react';
import { Card } from 'flowbite-react';
const CardSkill = () => {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Skills
        </h5>
        <a
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          href="#"
        >
          <p>
          <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
          </p>
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm  text-gray-900 dark:text-gray-400">
                  Javascript
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm  text-gray-900 dark:text-gray-400">
                  C++
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
              </div>
            </div>
          </li>
       
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm  text-gray-900 dark:text-gray-400">
                  Java
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
              </div>
            </div>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm  text-gray-900 dark:text-gray-400">
                  Golang
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  //   <Card className='ml-3'>
  //   <div className="flex flex-col">
  //   <div className="mb-4 mt-0">
  //     <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
  //       Skills
  //     </h1>
  //   </div>
  //     <div className="flex  mb-4 items-center justify-space">
  //     <ul className=" divide-gray-200 dark:divide-gray-700">
        
  //       <li className="py-3 sm:py-4">
  //         <div className="flex items-center space-x-4">
  //         <div className="flex flex-wrap">
  //         <Badge color="info" className='mr-2 mb-2'>
  //          ReactJs
  //        </Badge>
  //         <Badge color="failure" className='mr-2 mb-2'>
  //          Angular
  //        </Badge>
  //         <Badge color="gray" className='mr-2 mb-2'>
  //          PostgreSQL
  //        </Badge>
  //         <Badge color="success" className='mr-2 mb-2'>
  //          NodeJs
  //        </Badge>
  //         <Badge color="warning" className='mr-2 mb-2'>
  //          Javasrcipt
  //        </Badge>
  //         <Badge color="info" className='mr-2 mb-2'>
  //          Default
  //        </Badge>
  //         </div>
  //       </div>
  //     </li>
  //     </ul>
  //   </div>
  //   </div>
  // </Card>
  )
}

export default CardSkill