const myForm = document.getElementById('myForm') ; 
myForm.addEventListener('submit', function(e) {  

	e.preventDefault() ; 
	const country = document.getElementById('country').value   
	// fetch get request for data 
	const url = "https://api.covid19api.com/total/dayone/country/"+country  ; 

	fetch(url).then((res) => res.json()).then((res => { 
		console.log(res) ; 
	}))

	
})

