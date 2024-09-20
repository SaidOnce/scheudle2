import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/apiCheck', {
        username: username,
        password: password
      });
      if (response.data.message === 200){
        localStorage.setItem('authenticated', true);
        navigate("/protected")
      }
      else {
        alert("Не верные данные!");
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      alert(error);
    }
  };


  const toIndex = () => {
    navigate("/");
  }

  const toRegistration = () => {
    navigate("/registration");
  }

  return (
    <div>
        <div className='flex justify-center items-center w-full mt-5 select-none'>
          <form method='' action=''>
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
                <div className="space-y-4">
                    <h1 className="select-none text-center text-2xl font-semibold text-gray-600">Логин</h1>
                    <hr className='select-none' />
                    <div className="select-none flex items-center border-2 py-2 px-3 rounded-md mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="select-none h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin  ="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input
                      className='select-none border-none focus:border-none focus:outline-none'
                      type="text"
                      placeholder="Имя пользователя"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />

                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <input
                      className='select-none border-none focus:border-none focus:outline-none'
                      type="password"
                      placeholder="Пароль"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    
                </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="select-none text-xs font-semibold">Запомнить меня?</span>
                    </p>
                </div>

                <button onClick={handleLogin} type="button" className="select-none mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
                <hr />
                <div className="flex justify-center items-center mt-4">
                    <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <span className="select-none ml-2">У вас всё ещё нет аккаунта?<a onClick={toRegistration} className="cursor-pointer text-xs ml-2 text-blue-500 font-semibold">Зарегестрируйтесь &rarr;</a>
                        </span>
                    </p>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <span className="select-none ml-2"><a onClick={toRegistration} className="cursor-pointer text-xs ml-2 text-blue-500 font-semibold">Забыли пароль? &rarr;</a>
                        </span>
                    </p>
                </div>
            </div>
            <div className="pt-6 text-base font-semibold leading-7">
                <p className="font-sans text-red-500 text-md hover:text-red-800">
                <a onClick={toIndex} className="absolute cursor-pointer">&larr; Назад</a>
                </p>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Login;