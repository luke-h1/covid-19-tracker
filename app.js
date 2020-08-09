const input = document.getElementById('text-input');
const API_URL = `https://covid19-stats-api.herokuapp.com/api/v1/cases?country=${input}`;

async function getResults(e) {
  e.preventDefault();
  const start = new Date().getTime();
  await fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      document.querySelector('.results').innerHTML = ` 
        <ul> 
          <li>Cases: ${res.cases}</li>
          <li>Today's cases: ${res.todayCases}</li>
          <li>Recovered: ${res.recovered}</li>
          <li>Cases per 1 million: ${res.casesPerOneMillion}</li>
        </ul> 
          `;
    });
  const end = new Date().getTime();
  const time = end - start;
  console.log(`API RES TIME: ${time} Milliseconds`);
}

document.querySelector('.btn').addEventListener('click', getResults);
