const API_KEY = "Q35iaWFL6fdUQki2YoyTbrQ02My1";

export const getMatches=()=>{

//const url='https://cricapi.com/api/matches?apikey=${API_KEY}';
const url ='https://cricapi.com/api/matches?apikey=Q35iaWFL6fdUQki2YoyTbrQ02My1';

return fetch(url)
.then((response)=>response.json())
.catch((error)=>console.log("ERROR: ",error));

};

export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };