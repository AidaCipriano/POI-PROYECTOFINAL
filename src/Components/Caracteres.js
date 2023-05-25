//Creamos la Funcion
function kotoba() {
  $("#result").val($("#write").val().length + " Caracteres"); 
  $("#result").addClass('mui--is-not-empty'); 
} 


const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
    });
  };

    getLocation()
    
     function showPosition(position) {
          
        //var str="Longitude: "+ position.coords.longitude+"Latitude:"+ position.coords.latitude
        //var str="Longitude: "+ position.coords.longitude+"Latitude:"+ position.coords.latitude
          
          var str="https://www.google.com/maps/place/" + position.coords.latitude + "," +
           position.coords.longitude

          document.getElementById("mensaje").value=str
      
        }

      function showError( error ) {
        console.log( 'getCurrentPosition returned error', error);
      
    }

