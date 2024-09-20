import Delete from "./icon/delete.svg";
import React, {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserPanel = () => {
    const [userList, setUserList] = useState("");

    const navigate = useNavigate();

    const handleList = async () => {
      try {
        const response = await axios.get('http://localhost:5000/userList');
        setUserList(response.data.list); 
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        alert(error);
      }
    };

    const idHelper = async (key) => {
        try {
            const response = await axios.post('http://localhost:5000/removeUser', {
              key: key
            });
            handleList();
          } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            alert(error);
          }
    }


    return (
        <>
            <button onClick={handleList} className="border-4 border-red-500 m-auto w-full">
                Get list in console
            </button>
            <table className="mt-10 mx-auto" style={{width:"100%"}}>
                <thead>
                    <tr className="">
                        <th className={`text-white bg-black`}>Имя пользователя</th>
                        <th className={`text-white bg-black`}>Почта пользователя</th>
                        <th className={`text-white bg-black`}>Группа</th>
                        <th className={`text-white bg-black`}>X</th>
                    </tr>
                </thead>
            <tbody className="">
                    {Object.entries(userList).map(([key, value]) => (
                        <tr className="border-b-2 border-gray-500">
                            {value.map((item, index) => (
                                <td id={item} className="align-top text-center">
                                    {item}
                                </td>
                            ))}
                            <td className="align-top text-center">
                                Т22-3Б
                            </td>
                            <td className="flex justify-center">
                                <img className="h-5 hover:cursor-pointer" onClick={() => idHelper(key)} src={Delete}></img>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </>
    );
}

export default UserPanel;