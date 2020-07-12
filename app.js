const myForm = document.getElementById('myForm') ; 
myForm.addEventListener('submit', function(e) {  
	e.preventDefault() ;  // prevent form being submitted 
	
	


	const country = document.getElementById('country').value   
	// fetch get request for data 
	const url = "https://api.covid19api.com/total/dayone/country/"+country  ; 

	fetch(url).then((res) => res.json()).then((res => {   
		console.log(res) ; 
		let length = res.length ; 
		let index = length -1 ;  
		let confirmed = document.getElementById('confirmed') ; 
		let recovered = document.getElementById('recovered') ; 
		let deaths = document.getElementById('deaths') ; 
		confirmed.append(res[index].Confirmed) 
		recovered.append(res[index].Recovered)
		deaths.append(+res[index].Deaths) 
		

	})); 	
});




// confirmed.innerHTML = '' 
// recovered.innerHTML = ''  
// deaths.innerHTML = '' 