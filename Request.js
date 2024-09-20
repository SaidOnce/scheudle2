async function fetchData(text, method) {
    if (method === "POST"){
      try {
        const response = await fetch('http://127.0.0.1:5000/data', {
          method: 'POST',
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key1: text
          })
        })
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return await response.json();
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
      }
    }
    else if (method === "GET"){
      try {
        const response = await fetch('http://127.0.0.1:5000/data', {
          method: 'GET',
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
          }
        })
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json()
        return data;
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
      }
    }
    else{
      throw new Error('Forgive to give a needed argument {method} in fetch function');
    }
  };


export default fetchData;