import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";


const PopupComponent = ({ value, stylesV }) => {
  console.log(value, stylesV)
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className=''>
      <button onClick={openPopup}>Open Popup</button>

      {isPopupOpen && (
        <div className={'overlay text-black '} onClick={closePopup}>
          <div className={'popup text-start  text-white relative flex flex-col bg-neutral-950 p-3 rounded-xl border border-neutral-800 '} onClick={(e) => e.stopPropagation()}>
            <div onClick={closePopup} className='absolute rounded hover:border top-2 right-2'>
              <IoMdClose />
            </div>
            <div className='gap-4 flex flex-col items-start text-start max-w-sm'>
              <h1 className='t text-body-bold'>Edit Profile</h1>
              <p className='t text-small-semibold text-neutral-400'>This is a simple popup! This is a simple popup! This is a simple popup! This is a simple popup!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
