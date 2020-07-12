const myForm = document.getElementById('myForm') ; 
  myForm.addEventListener('submit', function(e) { 
  const country = document.getElementById('country').value 
  alert(country) ; 
})