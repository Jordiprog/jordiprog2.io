function boton() {

   let a = document.getElementById("activo");
   let b = document.getElementById("inactivo");
  

   if (a.style.display == "none") {
    a.style.display = "grid";
    b.style.display = "none";
   }else {
    a.style.display = "none";
    b.style.display = "grid";
   }
}
function boton2() {
   let a = document.getElementById("activo");
   let b = document.getElementById("inactivo2");

        
   if (b.style.display == "none") {
      b.style.display = "grid";
      
     }else {
      b.style.display = "none";
    
     } 
}