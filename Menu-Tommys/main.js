var clic = 1;

function abrir() {

  if(clic==1){

    document.getElementById("desplegable").style.display = "block";
 
    clic = clic + 1;
 
    } else{
 
        document.getElementById("desplegable").style.display = "none";      
 
     clic = 1;
 
    } 
   
}

