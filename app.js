const BASE_URL = `https://covid2019-api.herokuapp.com/`;
const outputEl = document.getElementById("output");

async function getWorldwideData() {
  const WORLD_URL = `https://covid2019-api.herokuapp.com/v2/total`;
  const res = await fetch(`${WORLD_URL}`);
  const data = await res.json();
  console.log(data);
  showWorldWideData(data);
}

function showWorldWideData(data) {
  let output = "";
  output += `
    <div class="card card-primary">
    <h2 class="card-title">Active</h2>
    <span class="number">${data.data.active.toLocaleString(2)}</span>
  </div>
  <div class="card card-primary">
  <h2 class="card-title">Confirmed</h2>
  <span class="number">${data.data.confirmed.toLocaleString(2)}</span>
</div>

<div class="card card-primary">
<h2 class="card-title">Deaths</h2>
<span class="number">${data.data.deaths.toLocaleString(2)}</span>
</div>

<div class="card card-primary">
<h2 class="card-title">Recovered</h2>
<span class="number">${data.data.recovered.toLocaleString(2)}</span>
</div>
    `;
  outputEl.innerHTML = output;
}

// event listeners
document.addEventListener("DOMContentLoaded", getWorldwideData);
