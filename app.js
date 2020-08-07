/* eslint-disable no-console */
const buttton = document.getElementById('button-addon1');
const input = document.querySelector('.form-control').value;
const API_URL = `https://corona.lmao.ninja/v2/all?${input}`;


async function getResults() {
  if (input === '') {
    // eslint-disable-next-line no-alert
    alert('ADD A COUNTRY!'); // turn into dynamic div element
  } else {
      const start = new Date().getTime();
      await fetch(API_URL)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          const divRow = document.createElement('div');
          divRow.className = 'row';
          const colCard = document.createElement('div');
          colCard.className = 'col-sm-6';
          const divCard = document.createElement('div');
          divCard.className = 'card';
          const divBody = document.createElement('div');
          divBody.className = 'card-body';
          const h5 = document.createElement('h5');
          h5.className = 'card-title';
          const paraText = document.createElement('p');
          paraText.className = 'card-text';
          const end = new Date().getTime();
          const time = end - start;
          console.log(`execution time${time}miliseconds`); 
           
  }} 

buttton.addEventListener('click', getResults);

// API RESPONSE
// {
//   "updated": 1596743394219,
//   "cases": 19139739,
//   "todayCases": 173977,
//   "deaths": 714235,
//   "todayDeaths": 3948,
//   "recovered": 12279122,
//   "todayRecovered": 122737,
//   "active": 6146382,
//   "critical": 65327,
//   "casesPerOneMillion": 2455,
//   "deathsPerOneMillion": 91.6,
//   "tests": 357848486,
//   "testsPerOneMillion": 46081.23,
//   "population": 7765601299,
//   "oneCasePerPeople": 0,
//   "oneDeathPerPeople": 0,
//   "oneTestPerPeople": 0,
//   "activePerOneMillion": 791.49,
//   "recoveredPerOneMillion": 1581.22,
//   "criticalPerOneMillion": 8.41,
//   "affectedCountries": 215
// }
