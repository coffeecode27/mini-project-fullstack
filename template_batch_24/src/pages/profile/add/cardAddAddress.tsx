import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAddAddressReq } from '@/redux-saga/action/addAddressUserAction';
import {Button, Modal, Spinner } from 'flowbite-react';
import { useRouter } from 'next/router';

import { HiCheck } from 'react-icons/hi';

const CardAddAddress = ({dataProfile}:any) => {
  const addAddressState = useSelector((state:any)=> state.addAddress)
  const router = useRouter(); 
  const id = dataProfile.userid
  const dispatch = useDispatch();
  
  const [openModal, setOpenModal] = useState(false); // modalbox pop-up

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [search_city, setSearch_city] = useState('');
  const [type, setType] = useState('');

  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddAddressSuccess, setIsAddAddressSuccess] = useState(false);

 
  useEffect(()=>{
    if(addAddressState.addAddressLoading){
      setIsLoading(true)
    } 
    if(addAddressState.addAddressSuccess){
      setIsLoading(false)
      setIsAddAddressSuccess(true)
      setOpenModal(true)
      console.log("DATA ADDRESS",addAddressState.usersAddressData)
    }
  },[addAddressState,router])

  const handleModalClick= () => {
    setOpenModal(false)
    router.reload()
  }

  const handleSave = async () => {
    setIsSaving(true);
    // Lakukan pemanggilan action untuk menambah data user
   const payload = {
    id : dataProfile.userid,
    address1,
    address2,
    postalCode,
    search_city,
    type,
  };
  // console.log(payload)
    try {
      // Lakukan dispatch ke saga dan tunggu hingga selesai
       await dispatch(userAddAddressReq(payload));

      // Setelah selesai, hentikan animasi loading
      setIsSaving(false);
    } catch (error) {
      console.error(error);
      setIsSaving(false);
    }
  };


  console.log(id)
    return (
      <>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Add Address</h2>
        <div className='w-full bg-white p-3 rounded-md mt-3 mb-3'>
          <form>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="sm:col-span-4">
                <div className="flex items-center">
                  <label htmlFor="address-1" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                    Address 1
                  </label>
                  <div className="mt-2.5 flex-1">
                    <textarea
                      name="address-1"
                      id="address-1"
                      rows={4}
                      onChange={(e) => setAddress1(e.target.value)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4 mt-3">
                <div className="flex items-center">
                  <label htmlFor="address-2" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                    Address 2
                  </label>
                  <div className="flex-1">
                    <textarea
                      name="address-2"
                      id="address-2"
                      rows={4}
                      onChange={(e) => setAddress2(e.target.value)}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <div className="flex items-center">
                  {/* POSTAL CODE */}
                  <div className="flex items-center space-x-1">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                  <span style={{ display: "inline-block", width: "7rem" }}>Postal Code</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      onChange={(e) => setPostalCode(e.target.value)}
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  </div>
                {/* CITY */}
                <div className="flex items-center ml-3 space-x-1">
                  <label htmlFor="search_city" className="block text-sm font-medium leading-6 text-gray-900 w-10">
                     City
                  </label>
                  <div className="mb-3 xl:w-90">
                    <div className="relative mt-4 flex w-full flex-wrap items-stretch">
                    <input
                    type="search"
                    name="search_city"
                    id="search_city"
                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => setSearch_city(e.target.value)}
                    aria-describedby="button-addon2" />

              {/* <!--Search icon--> */}
                    <span
                      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                        </svg>
                    </span>
                     </div>
                 </div>
                </div>
                </div>
              </div>

              {/* ADDRESS TYPE */}
              <div className="sm:col-span-3">
                <div className="flex items-center space-x-2">
                <label htmlFor="address-type" className="block text-sm font-medium leading-6 text-gray-900">
                    Address Type
                  </label>
                <div className="mt-2 w-1/4">
                <select
                onChange={(e) => setType(e.target.value)}
                id="address-type"
                name="address-type"
                autoComplete="address-type"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" placeholder="Code Telp.">
                <option value="Home">Home</option>
                <option value="Primary">Primary</option>
                <option value="Archive">Archive</option>
                <option value="Billing">Billing</option>
                <option value="Shipping">Shipping</option>
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
          type="button"
          onClick={handleSave}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isSaving ? 'Saving...' : 'Save'}
            </button>
            {isLoading && (
              <div className="mt-3">
                <Spinner aria-label="Saving..." size="sm" />
              </div>
            )}
            </div>
          </form>
        </div>

        { isAddAddressSuccess && (
        <div className="mt-3">
        <Modal show={openModal} size="md" popup>
        <Modal.Header />
        <Modal.Body>
        <div className="text-center">
            <HiCheck className="mx-auto mb-4 h-14 w-14 text-green-500 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Add address success!
            </h3>
            <div className="flex justify-center">
              <Button color="success" onClick={() => handleModalClick()}>
                Oke!
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </div>
      )}


      </>
    )
  }
  
  export default CardAddAddress;
  