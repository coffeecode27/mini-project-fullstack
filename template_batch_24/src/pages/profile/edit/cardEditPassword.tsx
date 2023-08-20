import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
const CardEditPassword = () => {
    return (
      <>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Change Password</h2>
        <div className='w-full  bg-white p-3 rounded-md mt-3 mb-3'>
          <form>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="sm:col-span-4">
                <div className="flex items-center">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 w-30">
                  <span style={{ display: "inline-block", width: "8rem" }}>Current Password</span>
                  </label>
                  <div className="mt-2 flex-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center mt-3">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 w-30">
                  <span style={{ display: "inline-block", width: "8rem" }}>New Password</span>
                  </label>
                  <div className="mt-2 flex-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-3">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 w-30">
                  <span style={{ display: "inline-block", width: "8rem" }}>Re-type Password</span>
                  </label>
                  <div className="mt-2 flex-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* ...other input fields */}
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
  

export default CardEditPassword