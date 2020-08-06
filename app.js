const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', getData);  
const country = document.getElementById('country').value;
const API_URL = 'https://api.covid19api.com/total/dayone/country/' + country;





async function getData(e){
    e.preventDefault(); 
    try { 
        fetch(API_URL) 
        .then((res) => res.json()) 
        .then((res) => { 
            console.log(res); 
            const length = res.length; 
            const index = length -1 ; 
            const confirmed = document.getElementById('confirmed'); 
            const recovered = document.getElementById('recovered'); 
            const deaths = document.getElementById('deaths'); 
            confirmed.append('Confirmed Cases: ' + res[index].Confirmed); 
            recovered.append('Confirmed Recovered: ' + res[index].Recovered); 
            deaths.append('Confirmed Deaths: ' + res[index].Deaths);  
        });  
    } catch {  
        console.log(error)
    }
}