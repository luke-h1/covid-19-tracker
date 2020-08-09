const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent form being submitted

    const country = document.getElementById('country').value;
    // fetch get request for data
    const API_URL = `https://api.covid19api.com/total/dayone/country/${country}`;

    fetch(API_URL)
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
            location.append(`Country: ${res[index].Country}`);
            date.append(`Updated At: ${res[index].Date}`);
            confirmed.append(`Confirmed Cases:${res[index].Confirmed}`);
            recovered.append(`Confirmed Recovered:${res[index].Recovered}`);
            deaths.append(`Confirmed Deaths:${res[index].Deaths}`);
        });
    // fix concatenation issue
    location.innerHTML = '';
    date.innerHTML = '';
    confirmed.innerHTML = '';
    recovered.innerHTML = '';
    deaths.innerHTML = '';
});
