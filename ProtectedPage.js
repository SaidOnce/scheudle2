// src/ProtectedPage.js
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
  let navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('authenticated');

  if (!isAuthenticated) {
    return <Navigate to="/unauthorized" />;
  }

  const toIndex = () => {
    navigate("/");
  }

  const Logout = () => {
    localStorage.removeItem('authenticated');
    navigate("/");
  }

  return (
    <div className='flex justify-center items-center'>
        <div>
          <div>
            <h1 className='text-green-600 text-3xl font-bold'>
              <span className='select-none'>
                Вы авторизированны!
              </span>
            </h1>
          </div>
          <div className='flex justify-center mt-10'>
            <button onClick={toIndex} class="select-none py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">Назад</button>
          </div>
          <div className='flex justify-center mt-5'>
            <button onClick={Logout} class="select-none py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">Выйти</button>
          </div>
        </div>
    </div>
  );
};

export default ProtectedPage;
