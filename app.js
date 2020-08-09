
const API_URL = `https://corona.lmao.ninja/v2/all?${input}`;


function showAlert() {
  const alert = ` 
    <div class="alert alert-danger" role="alert">
    Please enter a valid value! 
    </div>
  `;
  const jumbo = document.getElementById('i');
  const conatiner = document.querySelector('.container');
  conatiner.insertBefore(jumbo);
  window.setTimeout(() => {
    document.querySelector('.alert alert-danger').remove();
  }, 3000);
}

async function getResults() {
  if (input === null) {
    alert('error')
  } else {
    const start = new Date().getTime();
    await fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
       
        
        const end = new Date().getTime();
        const time = end - start;
        console.log(`API RESPONSE TIME: ${time} Milliseonds`);
      })
      .catch((error) => {
        error.json().then((body) => {
          console.log(body);
          console.log('error with API occured...😨');
        });
      });
  }
}

button.addEventListener('click', getResults);

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

// validation
