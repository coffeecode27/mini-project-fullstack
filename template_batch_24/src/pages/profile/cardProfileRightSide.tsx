'use client';
import { Card } from 'flowbite-react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import CardInformation from './settings/cardInformation';
import CardSkill from './cardSkill';
import { useState } from 'react';
import { CardExperiences } from './cardExperiences';

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      delete: 'hover:bg-red-400',
      edit: 'hover:bg-yellow-300  ',
      add: 'hover:bg-emerald-300'
    },
  },
};

export const CardProfileRightSide = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
  return (
    <div className='flex w-full flex-col mr-4'>
    <Card>
    <div className="flex justify-between items-center">
    <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
      Education
    </h1>
    <span className="flex items-center">
    <Flowbite theme={{ theme: customTheme }}>
    <Button color="edit" className="w-5 h-5" onClick={() => props.setOpenModal('form-elements')}>
    <svg className="w-3 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"/>
    </svg>
    </Button>
    <Modal show={props.openModal === 'form-elements'} size="lg" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
        <CardInformation/>
        </Modal.Body>
      </Modal>
    </Flowbite>
    </span>
    </div>
   

      
      <div className="flex  mb-4 items-center justify-space">
        <ul className=" divide-gray-200 dark:divide-gray-700">
          
          <li className="py-3 sm:py-4">
            <div className="flex justify-around space-x-7">

            <div className="w-full mr-20 flex-1">
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400 break-all">
                School
                </p>
                <p className="text-sm font-medium  text-gray-900 dark:text-white break-words">
                Universitas Komputer Indonesia Bandung
                </p>
            </div>

            <div className="w-full flex-1">
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400 break-all">
                Degree
                </p>
                <p className="text-sm font-medium  text-gray-900 dark:text-white break-all">
                Bachelor
                </p>
            </div>

          </div>
        </li>

          <li className="py-3 sm:py-4">
            <div className="flex  items-center space-x-4">

            <div className="w-full mr-20 flex-1">
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400 break-all">
                Field Study
                </p>
                <p className="text-sm font-medium  text-gray-900 dark:text-white break-all">
                Informatic Engineering
                </p>
            </div>

            <div className="w-full flex-1">
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400 break-all">
                Grade(IPK)
                </p>
                <p className="text-sm font-medium  text-gray-900 dark:text-white break-all">
                3,5
                </p>
            </div>

          </div>
        </li>

          <li className="py-3 sm:py-4">
            <div className="flex  items-center space-x-4">

            <div className="w-1/2 mr-20 flex-1">
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400 break-all">
                Year
                </p>
                <p className="text-sm font-medium  text-gray-900 dark:text-white break-all">
                2018 until 2021
                </p>
            </div>

            <div className="w-full flex-1">
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400 break-all">
                Activity
                </p>
                <p className="text-sm font-medium  text-gray-900 dark:text-white break-all">
                Sekretaris HMJ
                </p>
            </div>
          </div>
        </li>
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="text-sm mb-2 font-semibold leading-none text-gray-900 dark:text-white">
          Description
        </h5>
        <p className='text-xs text-gray-900 dark:text-white'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis nisi ornare mi faucibus, 
        vitae tristique orci rutrum. Sed semper, nulla ac maximus aliquet, ligula mi pretium nibh, 
        sed suscipit sem nulla vitae risus. Donec sem ligula, congue ut arcu sed, vulputate viverra mauris.
         Morbi semper nisl risus, ac imperdiet tellus lacinia vitae. Quisque tortor eros, 
         maximus hendrerit maximus ac, ullamcorper id purus. Mauris vitae velit eu ligula convallis auctor vitae rutrum metus.
        </p>
      </div>
    </Card>
    <CardSkill/>
    <CardExperiences/>
    </div>
  )
}
