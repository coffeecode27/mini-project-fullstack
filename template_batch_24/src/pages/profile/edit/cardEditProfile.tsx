
import { useState, useRef, useEffect } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux';
import { userEditProfileReq } from '@/redux-saga/action/editUserProfileAction';
import {Button, Modal, Spinner } from 'flowbite-react';

import { HiCheck } from 'react-icons/hi';

const CardEditProfile = ({ dataProfile, dataItem } : any) => {
  const dispatch = useDispatch();
  const editProfileState = useSelector((state:any) => state.editProfile);

  const [openModal, setOpenModal] = useState(false);
  
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);

  const [showAvatar, setShowAvatar] = useState(true);
  const [selectedImage, setSelectedImage] = useState<File | Blob | null>(null);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Mengisi nilai awal input form berdasarkan dataProfile
    if (dataProfile) {
      setUsername(dataProfile.username || '');
      setFirstName(dataProfile.firstname || '');
      setLastName(dataProfile.lastname || '');
      setBirthdate(dataProfile.birthdate || '');
    }
    if (dataItem.userPhoto) {
      setShowAvatar(false);
    } else {
      setShowAvatar(true);
    }

    if(editProfileState.editProfileLoading){
      setIsLoading(true)
    }
    if(editProfileState.editProfileSuccess){
      setIsLoading(false)
      setIsEditSuccess(true)
      setOpenModal(true);
    }

    console.log(dataItem)
  }, [dataProfile, dataItem, editProfileState]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setSelectedImage(selectedFile);
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Lakukan pemanggilan action untuk mengedit data user
   const payload = {
    id : dataProfile.userid,
    username,
    firstName,
    lastName,
    birthdate,
    file : selectedImage,
  };
  console.log(payload)
    try {
      // Lakukan dispatch ke saga dan tunggu hingga selesai
       await dispatch(userEditProfileReq(payload));

      // Setelah selesai, hentikan animasi loading
      setIsSaving(false);
    } catch (error) {
      console.error(error);
      setIsSaving(false);
    }
  };

  // untuk change photo
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleModalClick= () => {
    setOpenModal(false)
    window.location.reload()
  }
  return (
    <>
    <h2 className="text-base font-semibold leading-7 text-gray-900">Edit Profile</h2>
    <div className='w-full  bg-white p-3 rounded-md mt-3 mb-3'>
        <form>
          <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="h-20 w-20 rounded-full"
                />
              ) : dataItem.userPhoto && !showAvatar ? (
                <img
                  src={`http://localhost:5000/api/photo/${dataItem.userPhoto}`}
                  alt="User Profile"
                  className="h-20 w-20 rounded-full"
                />
              ) : (
                <UserCircleIcon className="h-20 w-20 text-gray-300" aria-hidden="true" />
              )}

                <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={handleButtonClick}
              >
                Change
              </button>
              <input
                type="file"
                name="file"
               
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              </div>
          
            </div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
          <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  autoComplete="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Birthdate
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  autoComplete="bdate"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
      </div>
    </form>
    </div>

      { isLoading && (
        <div className="mt-3">
          <Spinner aria-label="Saving..." size="sm" />
        </div>
      )}

      { isEditSuccess && (
        <div className="mt-3">
        <Modal show={openModal} size="md" popup>
        <Modal.Header />
        <Modal.Body>
        <div className="text-center">
            <HiCheck className="mx-auto mb-4 h-14 w-14 text-green-500 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Updated Success!
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

export default CardEditProfile