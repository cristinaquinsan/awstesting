fetch('http://localhost:3000/api')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    document.getElementById("textito").innerHTML = myJson.str
  });