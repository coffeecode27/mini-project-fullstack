import React from 'react'

const CardEditPhone = () => {
  return (
    <>
    <h2 className="text-base font-semibold leading-7 text-gray-900">Edit Phone</h2>
    <div className='w-full  bg-white p-3 rounded-md mt-3'>
      <form>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="sm:col-span-4">
            <div className="flex items-center">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 w-16">
              Number
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            <label htmlFor="phone" className="block ml-3 text-sm font-medium leading-6 text-gray-900 w-10">
           Type
            </label>
            <div className="mt-1">
            <select
            id="PontyCode"
            name="PontyCode"
            autoComplete="PontyCode"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Code Telp."
          >
            <option value="">Select type</option>
            <option value="Cell">Cell</option>
            <option value="Home">Home</option>
          </select>
            </div>
            </div>

          </div>
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

export default CardEditPhone