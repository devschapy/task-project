import React from 'react';

const CustomButton = ({ className, btnType, type, children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type ? type : 'button'}
        className={`${className} ${
          btnType === 'primary' ? 'bg-primary-100' : 'bg-transparent'
        }  text-white text-xs rounded-full py-1 px-4 flex gap-3 items-center`}
      >
        {children}
      </button>
    </>
  );
};

export default CustomButton;
