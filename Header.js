import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    const toLogin = () => {
      navigate("/login");
    }

    const toIndex = () => {
      navigate("/");
    }

    const toRegistration = () => {
      navigate("/registration");
    }

    const toPanel = () => {
        navigate("/adminpanel");
      }

  return (
    <header className='select-none bg-gray-300 max-h-[10vh] h-[10vh] flex justify-end overflow-hidden gap-[34.9vw] mb-5'>
        <div className='flex justify-start gap-3 items-center h-full px-5 w-full'>
            <button onClick={toPanel} className="select-none py-2.5 px-6 rounded-lg text-sm font-medium bg-green-500 text-white">Админ панель</button>
            <button onClick={toIndex} className="select-none py-2.5 px-6 rounded-lg text-sm font-medium bg-blue-500 text-white">Расписание</button>  
        </div>
        <div className='flex gap-3 items-center h-full px-5'>
          <button onClick={toLogin} className="select-none py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">Войти</button>
          <button onClick={toRegistration} className="select-none py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">Регистрация</button>
        </div>
    </header>
  );
};

export default Header;