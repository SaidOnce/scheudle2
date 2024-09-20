import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  let navigate = useNavigate();

  const toIndex = () => {
    navigate("/");
  }

  return (
    <div className='flex justify-center items-center'>
        <div>
          <div>
            <h1 className='text-red-600 text-3xl font-bold'>
              <span className='select-none'>
                Вы не авторизированны!
              </span>
            </h1>
          </div>
          <div className='flex justify-center mt-10'>
            <button onClick={toIndex} class="select-none py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">Назад</button>
          </div>
        </div>
    </div>
  );
};

export default Unauthorized;
