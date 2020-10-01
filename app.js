const BASE_URL = `https://covid2019-api.herokuapp.com/`;
const outputEl = document.getElementById("output");
const form = document.getElementById("form");
const query = document.getElementById("query");

function showError(message) {
  const h1 = document.createElement("h1");
  h1.className = "error";
  const region = document.querySelector(".region");
  h1.innerHTML = message;
  region.appendChild(h1);
  setTimeout(() => {
    region.removeChild(h1);
  }, 2000);
}

async function getWorldwideData() {
  try {
    const WORLD_URL = `https://covid2019-api.herokuapp.com/v2/total`;
    const res = await fetch(`${WORLD_URL}`);
    const data = await res.json();
    showWorldWideData(data);
  } catch (err) {
    showError("error occured with API");
    console.error(err);
  }
}

function showWorldWideData(data) {
  let output = "";
  output += `
    <div class="card card-primary">
    <h2 class="card-title">Active</h2>
    <span class="number">${
      data.data.active
        ? data.data.active.toLocaleString(2)
        : "Country Not Found"
    }
    </span>
  </div>
  <div class="card card-primary">
  <h2 class="card-title">Confirmed</h2>
  <span class="number">
  ${
    data.data.active
      ? data.data.confirmed.toLocaleString(2)
      : "Country Not Found"
  }
  </span>
</div>

<div class="card card-primary">
<h2 class="card-title">Deaths</h2>
<span class="number">
${data.data.active ? data.data.deaths.toLocaleString(2) : "Country Not Found"}
</span>
</div>

<div class="card card-primary">
<h2 class="card-title">Recovered</h2>
<span class="number">
${
  data.data.active ? data.data.recovered.toLocaleString(2) : "Country Not Found"
}
</span>
</div>
    `;
  outputEl.innerHTML = output;
}

async function fetchCountryData(e) {
  e.preventDefault();
  const queryValue = query.value;
  const COUNTRY_URL = `https://covid2019-api.herokuapp.com/v2/country/${queryValue}`;
  if (queryValue === "") {
    showError("enter a country");
  } else if (queryValue !== "") {
    const response = await fetch(`${COUNTRY_URL}`);
    const json = await response.json();
    showWorldWideData(json);
  } else {
    showError("Problem with API");
  }
}
// event listeners
document.addEventListener("DOMContentLoaded", getWorldwideData);
form.addEventListener("submit", fetchCountryData);
