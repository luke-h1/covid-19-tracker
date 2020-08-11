const form = document.getElementById('myForm');
form.addEventListener('submit', getData);

async function getData(e) {
    e.preventDefault();
    const country = document.getElementById('country').value;
    const API_URL = `https://api.covid19api.com/total/dayone/country/${country}`;

    await fetch(API_URL)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            const { length } = res;
            const index = length - 1;
            const location = document.getElementById('location');
            const date = document.getElementById('date');
            const confirmed = document.getElementById('confirmed');
            const recovered = document.getElementById('recovered');
            const deaths = document.getElementById('deaths');
            location.append(`Country:  ${res[index].Country}`);
            date.append(`Date: ${res[index].Date}`);
            confirmed.append(`Confirmed Cases: ${res[index].Confirmed}`);
            recovered.append(`Confirmed Recovered: ${res[index].Recovered}`);
            deaths.append(`Confirmed Deaths: ${res[index].Deaths}`);
        });
}
