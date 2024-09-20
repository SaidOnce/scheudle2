import React, { useState } from 'react';
import fetchData from "./Request";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [data, setData] = useState({key: []});
  
  let varible = "";

  const getData = async () => {
    let answer = await fetchData(".", "GET");
    console.log(answer);
    setData(answer);
  }

  const clearData = async () => {
    setData({key: []})
  }

  let width = "min-w-[150px] w-[150px]"
  
  return (
    <>
      <div className="p-5 flex gap-10" style={{height: "5rem"}}>
        <div>
          <button onClick={getData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Получить расписание
          </button>
        </div>
        <div>
          <button onClick={clearData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Очистить расписание
          </button>
        </div>
      </div>
      <table className="mt-10 mx-auto" style={{width:"100%"}}>
        <thead>
          <tr className="">
            <th className={`text-white bg-black ${width}`}>Понедельник</th>
            <th className={`text-white bg-black ${width}`}>Вторник</th>
            <th className={`text-white bg-black ${width}`}>Среда</th>
            <th className={`text-white bg-black ${width}`}>Четверг</th>
            <th className={`text-white bg-black ${width}`}>Пятница</th>
            <th className={`text-white bg-black ${width}`}>Суббота</th>
            <th className={`text-white bg-black ${width}`}>Воскресенье</th>
          </tr>
        </thead>
        <tbody className="">
            {Object.entries(data).map(([key, value]) => (
                <tr className=''>
                    {value.map((item, index) => (
                        <td className='align-top text-center'>
                            {item.map((item1, index1) => (
                                <div>
                                  {index1 === 0 ? (
                                    <div key={index1} id={index1} className={`hover:cursor-pointer p-1 bg-blue-500 text-white`}>
                                      {item1}
                                      <p className='hidden'>{varible = item1}</p>
                                    </div>
                                  ) : (
                                    <div key={index1} id={varible} onClick={toggleMenu} className={`hover:cursor-pointer p-1 bg-gray-100 border-2 border-black my-0.5`}>
                                      {item1}
                                    </div>
                                  )}
                                </div>
                            ))}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
      </table>
      {isMenuOpen && (
        <>
          <div className="absolute inset-0 backdrop-blur-sm "></div>
            <div className="absolute left-20 right-20 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded shadow z-20 p-4 h-[80%] items-center align-top flex flex-col">
              <h2 className="text-xl">Меню</h2>
              <button onClick={toggleMenu} className="mt-4 p-2 bg-red-500 text-white rounded">
                Закрыть
              </button>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
