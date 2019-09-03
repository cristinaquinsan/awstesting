fetch ("http://localhost:8080/api")
.then(function(response) {
    document.getElementById("textito").innerHTML=response.json().str ;
  })
  